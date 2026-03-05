# A3-H3-A — Motion Prompt (Veo 3.1 Fast)

## Animation Concept
Beat 1 — THE ENEMY (0-1s): Camera holds on the "before" scene — rain falling on standing brown water pooled against the foundation, red clay mud staining concrete, the water level visibly creeping up the foundation wall. Six years of this.
Beat 2 — THE SOLUTION (1-3s): A quick wipe transition reveals the "after" scene — same yard, same angle, same rain. But now a French drain trench with white gravel runs along the foundation. Water flows through the drain channel instead of pooling.
Beat 3 — THE PROOF (3-5s): Camera slowly pushes in on the foundation wall — dry, clean, no water line. Rain continues falling but the drain handles everything. The fix is permanent.

## Veo 3.1 Fast — Image-to-Video

**Prompt:**
Camera holds on a North Texas ranch-style backyard during rain — brown standing water pooled against a slab foundation, red clay mud staining the concrete wall, water level creeping upward, bermuda grass submerged. Rain splashes into the standing water creating ripples. Scene transitions with a lateral wipe to reveal the same yard, same camera angle, same rain — but now a French drain trench with white gravel runs along the foundation, water flows steadily through the channel away from the house, the yard is green and dry. Camera slowly pushes in toward the foundation wall — clean, dry, no waterline stain. Rain continues falling but the drain system handles every drop. Sound of rain on standing water, then the clean sound of water flowing through gravel.

**Payload:**
```json
{
  "input": {
    "prompt": "Camera holds on a North Texas ranch-style backyard during rain — brown standing water pooled against a slab foundation, red clay mud staining the concrete wall, water level creeping upward, bermuda grass submerged. Rain splashes into the standing water creating ripples. Scene transitions with a lateral wipe to reveal the same yard, same camera angle, same rain — but now a French drain trench with white gravel runs along the foundation, water flows steadily through the channel away from the house, the yard is green and dry. Camera slowly pushes in toward the foundation wall — clean, dry, no waterline stain. Rain continues falling but the drain system handles every drop. Sound of rain on standing water, then the clean sound of water flowing through gravel.",
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
*Cell: A3-H3-A | Angle: Storm Proof | Hook: Proof | Format: Static*
