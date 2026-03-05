# A3-H2-B — Motion Prompt (Veo 3.1 Fast)

## Animation Concept
Beat 1 — THE ENEMY (0-1s): Torrential rain hammers down on a North Texas neighborhood — camera shakes slightly like handheld phone footage, sheets of rain visible, dark sky, water pouring off rooftops and flooding the street gutter.
Beat 2 — THE SOLUTION (1-3s): Camera cuts to a backyard with a completed drainage system — a catch basin collects roof runoff, water flows through the French drain gravel trench, the yard stays dry despite the downpour. Camera follows the water path.
Beat 3 — THE PROOF (3-5s): Camera pulls back to reveal the full yard — completely dry foundation, green bermuda grass, the drain system handling every drop. Rain continues hammering. The system just works.

## Veo 3.1 Fast — Image-to-Video

**Prompt:**
Torrential rain hammers a North Texas residential street, handheld phone-camera feel with slight shake, sheets of rain visible in the air, water cascading off roof gutters and flooding the street. Camera cuts to a backyard — a green catch basin collects water pouring from a downspout, water flows into a French drain trench filled with white gravel running along the slab foundation. Camera tracks along the drain following the water flow. Camera pulls back to wide shot revealing the full yard — completely dry foundation, green bermuda grass untouched, the drain system handling the volume effortlessly. Rain continues hammering hard. Dark dramatic storm clouds overhead. Sound of intense rainfall, water rushing through gravel, roof runoff pouring.

**Payload:**
```json
{
  "input": {
    "prompt": "Torrential rain hammers a North Texas residential street, handheld phone-camera feel with slight shake, sheets of rain visible in the air, water cascading off roof gutters and flooding the street. Camera cuts to a backyard — a green catch basin collects water pouring from a downspout, water flows into a French drain trench filled with white gravel running along the slab foundation. Camera tracks along the drain following the water flow. Camera pulls back to wide shot revealing the full yard — completely dry foundation, green bermuda grass untouched, the drain system handling the volume effortlessly. Rain continues hammering hard. Dark dramatic storm clouds overhead. Sound of intense rainfall, water rushing through gravel, roof runoff pouring.",
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
*Cell: A3-H2-B | Angle: Storm Proof | Hook: Question | Format: Video*
