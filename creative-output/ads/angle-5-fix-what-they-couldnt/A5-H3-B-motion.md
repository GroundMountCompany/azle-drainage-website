# A5-H3-B — Motion Prompt (Veo 3.1 Fast)

## Animation Concept
Beat 1 — THE ENEMY (0-1s): Camera starts on the flooded yard — standing water across bermuda grass, wind rippling the surface. "BEFORE" label visible. Depressing, stagnant.
Beat 2 — THE SOLUTION (1-3s): Hard cut to the trench — gloved hands pulling crushed corrugated pipe from red clay. Clay chunks falling. "DURING" label visible. Camera tracks along the trench revealing the extent of the damage.
Beat 3 — THE PROOF (3-5s): Hard cut to the finished install — clean white PVC pipe in gravel bed, cleanout cap gleaming. Camera slowly dollies along the completed trench. Text "$2K Job After One Year" appears.

## Veo 3.1 Fast — Image-to-Video

**Prompt:**
Camera starts on a flooded North Texas bermuda grass yard with standing brown water, wind rippling the surface, small "BEFORE" label in corner. At 1 second hard cut to a trench in red-brown clay — gloved hands pulling a crushed black corrugated pipe from the earth, clay chunks falling as the pipe comes free, camera tracking along the trench revealing more damage, "DURING" label visible. At 3 seconds hard cut to the finished repair — clean white PVC pipe laid in a compacted gravel bed with a visible cleanout cap and proper downward slope, camera slowly dollying along the completed trench. "AFTER" label visible. Bold white text "$2K Job After One Year" appears across top. Audio transitions from water lapping to digging sounds to satisfied silence with wind.

**Payload:**
```json
{
  "input": {
    "prompt": "Camera starts on a flooded North Texas bermuda grass yard with standing brown water, wind rippling the surface, small \"BEFORE\" label in corner. At 1 second hard cut to a trench in red-brown clay — gloved hands pulling a crushed black corrugated pipe from the earth, clay chunks falling as the pipe comes free, camera tracking along the trench revealing more damage, \"DURING\" label visible. At 3 seconds hard cut to the finished repair — clean white PVC pipe laid in a compacted gravel bed with a visible cleanout cap and proper downward slope, camera slowly dollying along the completed trench. \"AFTER\" label visible. Bold white text \"$2K Job After One Year\" appears across top. Audio transitions from water lapping to digging sounds to satisfied silence with wind.",
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
*Cell: A5-H3-B | Angle: We Fix What They Couldn't | Hook: Proof — "$2K Drain Job After One Year" | Format: Motion*
