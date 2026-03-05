# Glif Workflow Schema — Nano Banana Pro with Custom Aspect Ratios

## Workflow ID
`cmf1b9s8r0000jy0475iyj2qs`

## Creator
fab1an (Glif)

## Model
fal-ai/nano-banana/edit (Nano Banana Pro via fal.ai)

## Input Blocks

| Block Name | Type | Label | Default | Options |
|------------|------|-------|---------|---------|
| `input1` | TextInputBlock | "Prompt:" | (empty) | Free text |
| `image` | MultipickBlock | "Aspect Ratio:" | "Long" | `16:9`, `3:4`, `1:1`, `4:3`, `Wide`, `Long`, `Superlong`, `Superwide` |

## Output
| Block | Type | Description |
|-------|------|-------------|
| `image1` | ImageGeneratorBlock | Generated PNG image on Cloudinary |

## Verified Aspect Ratio Outputs

| Setting | Output Dimensions | Actual Ratio |
|---------|-------------------|--------------|
| `"16:9"` | 1344x768 | 1.75:1 (16:9) |
| `"3:4"` | 864x1184 | ~3:4 |
| `"1:1"` | 1024x1024 | 1:1 |
| `"Long"` (default) | 608x1696 | ~1:2.79 |

## API Call Format (curl — supports named inputs)

```bash
curl -s -X POST "https://simple-api.glif.app" \
  -H "Authorization: Bearer $GLIF_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "cmf1b9s8r0000jy0475iyj2qs",
    "inputs": {
      "input1": "<prompt text>",
      "image": "<aspect ratio: 16:9 | 3:4 | 1:1 | 4:3 | Wide | Long>"
    }
  }'
```

## MCP Call Format (array — DOES NOT support aspect ratio)

The MCP `run_glif` tool only takes array inputs. The second positional input maps to the `image` block (MultipickBlock), but the MCP tool tries to download it as a URL and fails. **Use curl API for all generation.**

## Notes
- Output format is PNG
- Cost per run: ~$4.29 Glif credits
- Generation time: ~10-16 seconds
- No 4:5 option available; use 3:4 as closest for Meta feed
- For Veo 3.1 input: use 16:9
- Internal prompt template: "Replace the provided image entirely with a new image, wipe it clean: {input1}. Keep only the aspect ratio of the provided image."

## Discovered: 2026-02-20
