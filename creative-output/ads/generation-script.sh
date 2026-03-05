#!/usr/bin/env bash
#
# Azle Drainage Solutions — Ad Creative Generation Script
# Generates images via Nano Banana Pro and animations via Veo 3.1 Fast
# on Replicate API. Processes in waves of 5 to respect rate limits.
#
# Usage:
#   ./generation-script.sh                    # Generate all 60 cells
#   ./generation-script.sh --priority         # Top 15 only (from scorecards)
#   ./generation-script.sh --cell A3-H3-B     # Single cell
#   ./generation-script.sh --angle 3          # All 12 cells in angle 3
#   ./generation-script.sh --images-only      # Skip Veo animations
#   ./generation-script.sh --motion-only      # Skip image generation
#
# Prerequisites:
#   - REPLICATE_API_TOKEN env var set
#   - curl, jq installed
#
# Cost estimates:
#   Per cell: ~$1.26 (2 images + 1 animation)
#   Top 15:   ~$18.90
#   All 60:   ~$75.60

set -euo pipefail

# ─── Config ──────────────────────────────────────────────────────────
API_BASE="https://api.replicate.com/v1"
IMAGE_MODEL="google/nano-banana-pro"
VIDEO_MODEL="google/veo-3.1-fast"
WAVE_SIZE=5
POLL_INTERVAL=10
MAX_POLL_ATTEMPTS=120  # 20 min max per prediction
OUTPUT_DIR="$(cd "$(dirname "$0")" && pwd)/generated"

# Priority queue (top 15 by scorecard)
PRIORITY_CELLS=(
  "A3-H3-B" "A2-H3-B" "A5-H3-B" "A4-H3-A" "A1-H3-A"
  "A3-H3-C" "A5-H4-B" "A1-H4-B" "A2-H4-B" "A3-H4-B"
  "A4-H3-B" "A5-H3-A" "A2-H3-C" "A4-H4-A" "A1-H2-B"
)

# All 60 cells
ALL_CELLS=(
  # Angle 1 — Local Specialist
  "A1-H1-A" "A1-H1-B" "A1-H1-C" "A1-H2-A" "A1-H2-B" "A1-H2-C"
  "A1-H3-A" "A1-H3-B" "A1-H3-C" "A1-H4-A" "A1-H4-B" "A1-H4-C"
  # Angle 2 — Clay Soil
  "A2-H1-A" "A2-H1-B" "A2-H1-C" "A2-H2-A" "A2-H2-B" "A2-H2-C"
  "A2-H3-A" "A2-H3-B" "A2-H3-C" "A2-H4-A" "A2-H4-B" "A2-H4-C"
  # Angle 3 — Storm Proof
  "A3-H1-A" "A3-H1-B" "A3-H1-C" "A3-H2-A" "A3-H2-B" "A3-H2-C"
  "A3-H3-A" "A3-H3-B" "A3-H3-C" "A3-H4-A" "A3-H4-B" "A3-H4-C"
  # Angle 4 — Text Photo
  "A4-H1-A" "A4-H1-B" "A4-H1-C" "A4-H2-A" "A4-H2-B" "A4-H2-C"
  "A4-H3-A" "A4-H3-B" "A4-H3-C" "A4-H4-A" "A4-H4-B" "A4-H4-C"
  # Angle 5 — Fix What They Couldn't
  "A5-H1-A" "A5-H1-B" "A5-H1-C" "A5-H2-A" "A5-H2-B" "A5-H2-C"
  "A5-H3-A" "A5-H3-B" "A5-H3-C" "A5-H4-A" "A5-H4-B" "A5-H4-C"
)

# Angle directory mapping
declare -A ANGLE_DIRS=(
  [1]="angle-1-local-specialist"
  [2]="angle-2-clay-soil"
  [3]="angle-3-storm-proof"
  [4]="angle-4-text-photo"
  [5]="angle-5-fix-what-they-couldnt"
)

# ─── Validation ──────────────────────────────────────────────────────

if [[ -z "${REPLICATE_API_TOKEN:-}" ]]; then
  echo "ERROR: REPLICATE_API_TOKEN not set."
  echo "  export REPLICATE_API_TOKEN='r8_your_token_here'"
  exit 1
fi

command -v jq >/dev/null 2>&1 || { echo "ERROR: jq required. brew install jq"; exit 1; }
command -v curl >/dev/null 2>&1 || { echo "ERROR: curl required."; exit 1; }

# ─── Parse Arguments ─────────────────────────────────────────────────

MODE="all"
TARGET_CELL=""
TARGET_ANGLE=""
SKIP_IMAGES=false
SKIP_MOTION=false

while [[ $# -gt 0 ]]; do
  case "$1" in
    --priority)   MODE="priority"; shift ;;
    --cell)       MODE="cell"; TARGET_CELL="$2"; shift 2 ;;
    --angle)      MODE="angle"; TARGET_ANGLE="$2"; shift 2 ;;
    --images-only) SKIP_MOTION=true; shift ;;
    --motion-only) SKIP_IMAGES=true; shift ;;
    -h|--help)
      echo "Usage: $0 [--priority|--cell CELL_ID|--angle NUM] [--images-only|--motion-only]"
      exit 0 ;;
    *) echo "Unknown option: $1"; exit 1 ;;
  esac
done

# ─── Build Cell List ─────────────────────────────────────────────────

CELLS=()
case "$MODE" in
  priority) CELLS=("${PRIORITY_CELLS[@]}") ;;
  cell)     CELLS=("$TARGET_CELL") ;;
  angle)
    for c in "${ALL_CELLS[@]}"; do
      if [[ "$c" == "A${TARGET_ANGLE}-"* ]]; then
        CELLS+=("$c")
      fi
    done ;;
  all)      CELLS=("${ALL_CELLS[@]}") ;;
esac

echo "╔══════════════════════════════════════════════╗"
echo "║  Azle Drainage — Ad Creative Generator       ║"
echo "║  Mode: ${MODE}                               ║"
echo "║  Cells: ${#CELLS[@]}                         ║"
echo "║  Est cost: \$$(echo "${#CELLS[@]} * 1.26" | bc) ║"
echo "╚══════════════════════════════════════════════╝"
echo ""

mkdir -p "$OUTPUT_DIR"

# ─── Helper Functions ────────────────────────────────────────────────

get_angle_num() {
  local cell="$1"
  echo "${cell:1:1}"
}

get_prompt_dir() {
  local cell="$1"
  local angle_num
  angle_num=$(get_angle_num "$cell")
  local script_dir
  script_dir="$(cd "$(dirname "$0")" && pwd)"
  echo "${script_dir}/${ANGLE_DIRS[$angle_num]}"
}

extract_prompt() {
  # Extract the prompt string from a static.md or motion.md file
  local file="$1"
  local section="$2"  # "16:9" or "4:5" or "motion"

  if [[ "$section" == "motion" ]]; then
    # Extract prompt from motion file between **Prompt:** and **Payload:**
    sed -n '/^## Veo 3.1 Fast/,/^---/{/^\*\*Prompt:\*\*/,/^\*\*Payload:\*\*/{//!p}}' "$file" | head -1
  elif [[ "$section" == "16:9" ]]; then
    sed -n '/^## Nano Banana Pro — 16:9/,/^## /{/^\*\*Prompt:\*\*/,/^\*\*Payload:\*\*/{//!p}}' "$file" | head -1
  elif [[ "$section" == "4:5" ]]; then
    sed -n '/^## Nano Banana Pro — 4:5/,/^---/{/^\*\*Prompt:\*\*/,/^\*\*Payload:\*\*/{//!p}}' "$file" | head -1
  fi
}

create_prediction() {
  local model="$1"
  local payload="$2"

  curl -s -X POST "${API_BASE}/models/${model}/predictions" \
    -H "Authorization: Bearer ${REPLICATE_API_TOKEN}" \
    -H "Content-Type: application/json" \
    -H "Prefer: respond-async" \
    -d "$payload"
}

poll_prediction() {
  local prediction_url="$1"
  local attempts=0

  while [[ $attempts -lt $MAX_POLL_ATTEMPTS ]]; do
    local response
    response=$(curl -s -H "Authorization: Bearer ${REPLICATE_API_TOKEN}" "$prediction_url")
    local status
    status=$(echo "$response" | jq -r '.status')

    case "$status" in
      succeeded)
        echo "$response" | jq -r '.output'
        return 0 ;;
      failed|canceled)
        echo "FAILED: $(echo "$response" | jq -r '.error')" >&2
        return 1 ;;
      *)
        sleep "$POLL_INTERVAL"
        ((attempts++)) ;;
    esac
  done

  echo "TIMEOUT after $((MAX_POLL_ATTEMPTS * POLL_INTERVAL))s" >&2
  return 1
}

download_output() {
  local url="$1"
  local dest="$2"

  if [[ "$url" == "["* ]]; then
    # Array output (Veo returns array)
    url=$(echo "$url" | jq -r '.[0]')
  fi

  curl -sL -o "$dest" "$url"
  echo "  Downloaded: $dest"
}

# ─── Generation Pipeline ────────────────────────────────────────────

generate_images_for_cell() {
  local cell="$1"
  local prompt_dir
  prompt_dir=$(get_prompt_dir "$cell")
  local static_file="${prompt_dir}/${cell}-static.md"

  if [[ ! -f "$static_file" ]]; then
    echo "  WARN: ${cell}-static.md not found. Skipping images."
    return 1
  fi

  echo "  Generating images for ${cell}..."

  # Extract prompts from the static.md file
  local prompt_16_9
  prompt_16_9=$(extract_prompt "$static_file" "16:9")
  local prompt_4_5
  prompt_4_5=$(extract_prompt "$static_file" "4:5")

  # Generate 16:9 (primary — used as Veo input)
  local payload_16_9
  payload_16_9=$(jq -n \
    --arg prompt "$prompt_16_9" \
    '{input: {prompt: $prompt, aspect_ratio: "16:9", output_format: "jpg", resolution: "2K"}}')

  local response_16_9
  response_16_9=$(create_prediction "$IMAGE_MODEL" "$payload_16_9")
  local pred_url_16_9
  pred_url_16_9=$(echo "$response_16_9" | jq -r '.urls.get')

  # Generate 4:5 (Meta feed)
  local payload_4_5
  payload_4_5=$(jq -n \
    --arg prompt "$prompt_4_5" \
    '{input: {prompt: $prompt, aspect_ratio: "4:5", output_format: "jpg", resolution: "2K"}}')

  local response_4_5
  response_4_5=$(create_prediction "$IMAGE_MODEL" "$payload_4_5")
  local pred_url_4_5
  pred_url_4_5=$(echo "$response_4_5" | jq -r '.urls.get')

  # Poll both
  echo "  Polling 16:9..."
  local output_16_9
  output_16_9=$(poll_prediction "$pred_url_16_9") || return 1
  download_output "$output_16_9" "${OUTPUT_DIR}/${cell}-16x9.jpg"

  echo "  Polling 4:5..."
  local output_4_5
  output_4_5=$(poll_prediction "$pred_url_4_5") || return 1
  download_output "$output_4_5" "${OUTPUT_DIR}/${cell}-4x5.jpg"

  return 0
}

generate_motion_for_cell() {
  local cell="$1"
  local prompt_dir
  prompt_dir=$(get_prompt_dir "$cell")
  local motion_file="${prompt_dir}/${cell}-motion.md"
  local source_image="${OUTPUT_DIR}/${cell}-16x9.jpg"

  if [[ ! -f "$motion_file" ]]; then
    echo "  WARN: ${cell}-motion.md not found. Skipping motion."
    return 1
  fi

  # Check that source image exists (need to upload or use URL)
  # For Replicate, we need a URL. If local, upload first.
  if [[ ! -f "$source_image" ]]; then
    echo "  WARN: Source image ${cell}-16x9.jpg not found. Run images first."
    return 1
  fi

  echo "  Uploading source image for ${cell}..."

  # Upload image to Replicate file hosting
  local upload_response
  upload_response=$(curl -s -X POST "${API_BASE}/files" \
    -H "Authorization: Bearer ${REPLICATE_API_TOKEN}" \
    -F "content=@${source_image}" \
    -F "content_type=image/jpeg")
  local image_url
  image_url=$(echo "$upload_response" | jq -r '.urls.get // .url // empty')

  if [[ -z "$image_url" ]]; then
    echo "  ERROR: Failed to upload image for ${cell}"
    return 1
  fi

  echo "  Generating motion for ${cell}..."

  local motion_prompt
  motion_prompt=$(extract_prompt "$motion_file" "motion")

  local payload
  payload=$(jq -n \
    --arg prompt "$motion_prompt" \
    --arg image "$image_url" \
    '{input: {
      prompt: $prompt,
      image: $image,
      duration: 6,
      aspect_ratio: "16:9",
      resolution: "1080p",
      generate_audio: true,
      negative_prompt: "blurry, distorted, morphing text, warping, unnatural motion, AI artifacts"
    }}')

  local response
  response=$(create_prediction "$VIDEO_MODEL" "$payload")
  local pred_url
  pred_url=$(echo "$response" | jq -r '.urls.get')

  echo "  Polling motion..."
  local output
  output=$(poll_prediction "$pred_url") || return 1
  download_output "$output" "${OUTPUT_DIR}/${cell}-motion.mp4"

  return 0
}

# ─── Main Loop (Waves of 5) ─────────────────────────────────────────

total=${#CELLS[@]}
completed=0
failed=0

echo "Starting generation: ${total} cells"
echo "Output: ${OUTPUT_DIR}"
echo ""

# Process in waves
for ((i=0; i<total; i+=WAVE_SIZE)); do
  wave_end=$((i + WAVE_SIZE))
  if [[ $wave_end -gt $total ]]; then wave_end=$total; fi

  echo "━━━ Wave $((i/WAVE_SIZE + 1)) ━━━ Cells $((i+1))-${wave_end} of ${total}"

  for ((j=i; j<wave_end; j++)); do
    cell="${CELLS[$j]}"
    echo ""
    echo "[$((j+1))/${total}] Processing: ${cell}"

    # Step 1: Generate images
    if [[ "$SKIP_IMAGES" != true ]]; then
      if generate_images_for_cell "$cell"; then
        echo "  Images: OK"
      else
        echo "  Images: FAILED"
        ((failed++))
        continue
      fi
    fi

    # Step 2: Generate motion (requires images)
    if [[ "$SKIP_MOTION" != true ]]; then
      if generate_motion_for_cell "$cell"; then
        echo "  Motion: OK"
      else
        echo "  Motion: FAILED (images may still be usable)"
        ((failed++))
      fi
    fi

    ((completed++))
  done

  # Brief pause between waves to respect rate limits
  if [[ $wave_end -lt $total ]]; then
    echo ""
    echo "Wave complete. Pausing 5s before next wave..."
    sleep 5
  fi
done

# ─── Summary ─────────────────────────────────────────────────────────

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  GENERATION COMPLETE"
echo "  Processed: ${completed}/${total}"
echo "  Failed: ${failed}"
echo "  Output: ${OUTPUT_DIR}/"
echo ""
echo "  Files generated:"
ls -la "$OUTPUT_DIR"/ 2>/dev/null | grep -c "\.jpg\|\.mp4" || echo "  0"
echo " images + videos"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
