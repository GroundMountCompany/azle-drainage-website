# A5-H2-B — Motion Prompt (Veo 3.1 Fast)

## Animation Concept
Beat 1 — THE ENEMY (0-1s): Camera holds tight on the clogged corrugated pipe sitting in raw clay, no fabric, no gravel. A gloved hand taps the pipe and packed clay dust crumbles from it.
Beat 2 — THE SOLUTION (1-3s): Camera tracks along the trench as a shovel scrapes clay away from the pipe, revealing more and more of the clogged mess. The full extent of the failure becomes visible.
Beat 3 — THE PROOF (3-5s): Camera lifts up from the trench to a wider angle showing the excavation across the yard. Text "Drain Stop Working?" appears in bold white with orange accent.

## Veo 3.1 Fast — Image-to-Video

**Prompt:**
Camera holds tight on a black corrugated French drain pipe sitting in raw red-brown Texas clay with no filter fabric or gravel visible — the pipe is completely clogged with packed clay sediment. A gloved hand reaches in and taps the pipe, crumbling clay dust falling away. At 1 second camera begins tracking along the trench as a shovel blade scrapes clay from around the pipe, revealing more of the clogged corrugated pipe running through the trench. At 3 seconds camera lifts upward from the trench to a wider shot showing the full excavation across a flat bermuda grass yard with ranch-style home in background. Bold white text "Drain Stop Working?" with orange accent appears on screen. Audio of metal shovel scraping clay, dirt crumbling, wind across open yard.

**Payload:**
```json
{
  "input": {
    "prompt": "Camera holds tight on a black corrugated French drain pipe sitting in raw red-brown Texas clay with no filter fabric or gravel visible — the pipe is completely clogged with packed clay sediment. A gloved hand reaches in and taps the pipe, crumbling clay dust falling away. At 1 second camera begins tracking along the trench as a shovel blade scrapes clay from around the pipe, revealing more of the clogged corrugated pipe running through the trench. At 3 seconds camera lifts upward from the trench to a wider shot showing the full excavation across a flat bermuda grass yard with ranch-style home in background. Bold white text \"Drain Stop Working?\" with orange accent appears on screen. Audio of metal shovel scraping clay, dirt crumbling, wind across open yard.",
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
*Cell: A5-H2-B | Angle: We Fix What They Couldn't | Hook: Question — "Why'd Your Drain Stop Working?" | Format: Motion*
