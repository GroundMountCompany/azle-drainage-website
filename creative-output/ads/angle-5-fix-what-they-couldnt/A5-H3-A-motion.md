# A5-H3-A — Motion Prompt (Veo 3.1 Fast)

## Animation Concept
Beat 1 — THE ENEMY (0-1s): Grid starts with only the top-left cell visible (crushed pipe), the other three cells are dark/black.
Beat 2 — THE SOLUTION (1-3s): Each remaining cell illuminates sequentially — top-right (flooded trench), bottom-left (collapsed French drain), bottom-right (completed PVC fix). Each appears with a subtle flash transition, one per second.
Beat 3 — THE PROOF (3-5s): All four grid cells now visible. Camera holds on the complete grid. Text "4 Failed Installs. One Month." appears boldly across top. The bottom-right cell (the fix) subtly pulses with a green #115740 border highlight.

## Veo 3.1 Fast — Image-to-Video

**Prompt:**
A 2x2 photo grid starts with only the top-left cell illuminated showing a crushed black corrugated pipe pulled from red Texas clay with roots, the other three cells dark. At 1 second the top-right cell lights up revealing a flooded trench with standing brown water. At 1.5 seconds bottom-left illuminates showing a collapsed French drain sitting in raw clay with no gravel. At 2.5 seconds bottom-right reveals a completed clean white PVC replacement install with proper gravel bed and slope — this cell gets a subtle green #115740 border glow. Camera holds steady on the full grid from 3 to 5 seconds. Bold white text "4 Failed Installs. One Month." appears across top. Audio of a camera shutter click with each cell reveal, ambient wind.

**Payload:**
```json
{
  "input": {
    "prompt": "A 2x2 photo grid starts with only the top-left cell illuminated showing a crushed black corrugated pipe pulled from red Texas clay with roots, the other three cells dark. At 1 second the top-right cell lights up revealing a flooded trench with standing brown water. At 1.5 seconds bottom-left illuminates showing a collapsed French drain sitting in raw clay with no gravel. At 2.5 seconds bottom-right reveals a completed clean white PVC replacement install with proper gravel bed and slope — this cell gets a subtle green #115740 border glow. Camera holds steady on the full grid from 3 to 5 seconds. Bold white text \"4 Failed Installs. One Month.\" appears across top. Audio of a camera shutter click with each cell reveal, ambient wind.",
    "image": "{{GENERATED_IMAGE_URL}}",
    "duration": 6,
    "aspect_ratio": "16:9",
    "resolution": "1080p",
    "generate_audio": true,
    "negative_prompt": "blurry, distorted, morphing text, warping, unnatural motion, AI artifacts"
  }
}
```

---
*Cell: A5-H3-A | Angle: We Fix What They Couldn't | Hook: Proof — "4 Failed Installs. One Month." | Format: Motion*
