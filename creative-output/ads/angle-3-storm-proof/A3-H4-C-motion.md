# A3-H4-C — Motion Prompt (Veo 3.1 Fast)

## Animation Concept
Beat 1 — THE ENEMY (0-1s): Camera holds on the failed DIY French drain — standing water pooling above a collapsed trench, kinked corrugated pipe visible, pea gravel displaced. Rain falls on the failed drain and the water has nowhere to go. A homeowner's weekend project that made things worse.
Beat 2 — THE SOLUTION (1-3s): Camera slowly tracks along the failed trench, revealing more problems — red clay clogging the pipe, grass growing over the gravel, sections where the trench has completely collapsed. Water sits on top instead of draining through. The whole system has failed.
Beat 3 — THE PROOF (3-5s): Camera tilts up from the failed drain to reveal the flooded yard beyond — standing water everywhere despite the attempted fix. A shovel stuck in the mud nearby. The DIY solution did not work and the homeowner is worse off than before. The yard needs professional intervention.

## Veo 3.1 Fast — Image-to-Video

**Prompt:**
Camera holds on a failed DIY French drain in a North Texas backyard during rain — brown standing water pools above a collapsed shallow trench, kinked corrugated black pipe visible poking through displaced pea gravel. Rain falls and the water has nowhere to go, just sits on top of the failed drain. Camera slowly tracks along the length of the trench revealing cascading failures — red clay soil clogging pipe openings, bermuda grass growing over the gravel blocking flow, sections where the trench walls have caved in entirely. Camera tilts up from the failed drain to reveal the full flooded backyard — standing water across the bermuda grass despite the attempted fix, a shovel stuck in the mud nearby. The DIY drainage attempt made things worse. Sound of rain on standing water, squelching mud, wind.

**Payload:**
```json
{
  "input": {
    "prompt": "Camera holds on a failed DIY French drain in a North Texas backyard during rain — brown standing water pools above a collapsed shallow trench, kinked corrugated black pipe visible poking through displaced pea gravel. Rain falls and the water has nowhere to go, just sits on top of the failed drain. Camera slowly tracks along the length of the trench revealing cascading failures — red clay soil clogging pipe openings, bermuda grass growing over the gravel blocking flow, sections where the trench walls have caved in entirely. Camera tilts up from the failed drain to reveal the full flooded backyard — standing water across the bermuda grass despite the attempted fix, a shovel stuck in the mud nearby. The DIY drainage attempt made things worse. Sound of rain on standing water, squelching mud, wind.",
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
*Cell: A3-H4-C | Angle: Storm Proof | Hook: Contrarian | Format: Carousel*
