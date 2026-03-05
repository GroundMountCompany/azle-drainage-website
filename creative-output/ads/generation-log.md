# Generation Log — Azle Drainage Ad Creative

## Workflow
- **Glif ID:** `cmf1b9s8r0000jy0475iyj2qs` (Nano Banana Pro — custom aspect ratios)
- **Model:** fal-ai/nano-banana/edit (Google Gemini via fal.ai)
- **Default Output:** 864x1184 PNG (3:4 for Meta feed)
- **Cost:** ~$4.29 Glif credits per image
- **API Method:** curl to `https://simple-api.glif.app` (NOT MCP — MCP can't pass aspect ratio)
- **Started:** 2026-02-20

### Style Modes
- **Mode A** (Angles 1, 2, 4): 3D rendered, dark cinematic background, dramatic studio lighting, Boring Ads style, bold graphic typography
- **Mode B** (Angles 3, 5): Cinematic documentary photography, heavy teal/orange color grading, dramatic natural lighting, gritty texture

---

## Wave 1 v1 — SUPERSEDED
- Used workflow `cmi7ne4p40000kz04yup2nxgh` (no aspect ratio control, 1:1 output)
- Output was flat/stock-photo looking
- Replaced by Wave 1 v2 below

---

## Wave 1 v2 — Top 5 (Style Overhaul)

| # | Cell ID | Score | Style | Aspect | Glif Output URL | Local File | Status | Notes |
|---|---------|-------|-------|--------|-----------------|------------|--------|-------|
| 1 | A3-H3-B | 62/70 | Mode B | 3:4 | [link](https://res.cloudinary.com/dzkwltgyd/image/upload/v1771589739/glif-run-outputs/bgba8io1l6bnhhpvs7vi.png) | `generated/angle-3/A3-H3-B.png` | Done | Storm scene, catch basin, excellent |
| 2 | A2-H3-B | 61/70 | Mode A | 3:4 | [link](https://res.cloudinary.com/dzkwltgyd/image/upload/v1771589738/glif-run-outputs/hcy40deqnqlavzvrjrca.png) | `generated/angle-2/A2-H3-B.png` | Done | Text says "DOLLAR-4K" — needs fix |
| 3 | A5-H3-B | 61/70 | Mode B | 3:4 | [link](https://res.cloudinary.com/dzkwltgyd/image/upload/v1771589739/glif-run-outputs/mwyodogpqwtm2owl6yos.png) | `generated/angle-5/A5-H3-B.png` | Done | Triptych, "$2K" rendered correctly |
| 4 | A4-H3-A | 59/70 | Mode A | 3:4 | [link](https://res.cloudinary.com/dzkwltgyd/image/upload/v1771589744/glif-run-outputs/cdwzhgpmpdvd825fq3fq.png) | `generated/angle-4/A4-H3-A.png` | Done | Phone + foundation split, clean |
| 5 | A1-H3-A | 57/70 | Mode A | 3:4 | [link](https://res.cloudinary.com/dzkwltgyd/image/upload/v1771589737/glif-run-outputs/e8pphkwjuqqgevwg7ltw.png) | `generated/angle-1/A1-H3-A.png` | Done | Text says "Landscæapers" — needs fix |

### Wave 1 v2 Quality Notes
- **Massive upgrade** from v1 — no longer flat/stock-photo looking
- Mode B cinematic style (A3, A5) is strongest — teal/orange grading, gritty documentary feel
- Mode A 3D style (A1, A2, A4) delivers dark dramatic ad-ready frames
- A5-H3-B triptych is the standout — BEFORE/DURING/AFTER with correct "$2K" text and orange accent
- A3-H3-B storm scene is highly realistic — downspout, catch basin, gravel drain, storm clouds
- A4-H3-A phone + foundation split reads well — "ANSWER IN 22 MINUTES" text clean

### Known Issues (Wave 1 v2)
1. **A2-H3-B**: Text renders "DOLLAR-4K DRAIN DESTROYED BY CLAY" — prompt used "DOLLAR-SIGN" escape which model rendered literally. Fix: use "$" directly or omit dollar reference.
2. **A1-H3-A**: Text renders "3 Landscæapers Failed" — ligature/character error. Needs re-generation with simpler text or post-production text overlay.
3. **A3-H3-B**: No text overlay visible in output (prompt included text but model didn't render it). May need post-production text add.

---

## Wave 2 — Ranks 6-15 (Pending review of Wave 1 v2)

| # | Cell ID | Score | Style | Glif Output URL | Local File | Status |
|---|---------|-------|-------|-----------------|------------|--------|
| 6 | A3-H3-C | 57/70 | Mode B | — | — | Pending |
| 7 | A5-H4-B | 57/70 | Mode B | — | — | Pending |
| 8 | A1-H4-B | 56/70 | Mode A | — | — | Pending |
| 9 | A2-H4-B | 56/70 | Mode A | — | — | Pending |
| 10 | A3-H4-B | 55/70 | Mode B | — | — | Pending |
| 11 | A4-H3-B | 55/70 | Mode A | — | — | Pending |
| 12 | A5-H3-A | 55/70 | Mode B | — | — | Pending |
| 13 | A2-H3-C | 54/70 | Mode A | — | — | Pending |
| 14 | A4-H4-A | 53/70 | Mode A | — | — | Pending |
| 15 | A1-H2-B | 49/70 | Mode A | — | — | Pending |

---

## Wave 3 — Remaining 45 (Pending review of Wave 2)
Pending.
