# A3-H2-C — Motion Prompt (Veo 3.1 Fast)

## Animation Concept
Beat 1 — THE ENEMY (0-1s): Camera holds on the flooded near yard — rain pelts standing brown water, ripples spread, red clay mud washes toward the foundation. The scene is ugly and wet.
Beat 2 — THE SOLUTION (1-3s): Camera slowly racks focus through the cedar fence slats to the neighboring yard — the dry side comes into sharp focus, French drain trench visible with white gravel, catch basin at the corner actively collecting water.
Beat 3 — THE PROOF (3-5s): Camera pushes through the fence gap to the dry yard side, rain still falling equally hard, but the ground is completely dry, the drain system channeling everything away. The contrast is undeniable.

## Veo 3.1 Fast — Image-to-Video

**Prompt:**
Camera holds on a flooded North Texas backyard during steady rain — brown standing water covering bermuda grass, raindrops creating ripples, red clay mud washing against the slab foundation. Camera slowly racks focus through cedar fence slats to the neighboring yard — the dry side comes into sharp focus, French drain trench with white gravel visible along the foundation, a green catch basin at the corner actively collecting roof runoff. Camera pushes through the fence gap into the dry yard, rain falling equally hard on both sides, but this ground is completely dry, water channeling through the gravel drain away from the house. Sound of rain on standing water transitioning to rain on dry ground and gravel, water flowing through drain pipe.

**Payload:**
```json
{
  "input": {
    "prompt": "Camera holds on a flooded North Texas backyard during steady rain — brown standing water covering bermuda grass, raindrops creating ripples, red clay mud washing against the slab foundation. Camera slowly racks focus through cedar fence slats to the neighboring yard — the dry side comes into sharp focus, French drain trench with white gravel visible along the foundation, a green catch basin at the corner actively collecting roof runoff. Camera pushes through the fence gap into the dry yard, rain falling equally hard on both sides, but this ground is completely dry, water channeling through the gravel drain away from the house. Sound of rain on standing water transitioning to rain on dry ground and gravel, water flowing through drain pipe.",
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
*Cell: A3-H2-C | Angle: Storm Proof | Hook: Question | Format: Carousel*
