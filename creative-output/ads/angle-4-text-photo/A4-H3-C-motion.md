# A4-H3-C — Motion Prompt (Veo 3.1 Fast)

## Animation Concept
Beat 1 — THE ENEMY (0-1s): A casually framed shot of standing water in a side yard — it looks exactly like a photo someone snapped on their phone. Water sits still, an AC unit hums in the background.
Beat 2 — THE SOLUTION (1-3s): Camera subtly zooms out as if pulling back from the phone screen, revealing the phone is being held by a hand. The iMessage send animation whooshes, then a typing indicator appears followed by a green reply bubble.
Beat 3 — THE PROOF (3-5s): Camera continues pulling back to show the phone resting on a porch railing, beyond it the same side yard is now dry with a fresh gravel drainage channel running along the fence line, warm golden light across the scene.

## Veo 3.1 Fast — Image-to-Video

**Prompt:**
Static shot of standing brown water in a narrow North Texas side yard between a brick home and wooden fence, an AC condenser unit hums in the background with water at its base, a downspout extension points into the puddle, the framing is casual like a phone snapshot, camera slowly zooms out revealing the image is on a phone screen held by a hand on a back porch, the iMessage interface becomes visible around the photo, a send animation whooshes and a typing indicator pulses then a green reply bubble slides up, the hand lowers the phone to rest on a wooden porch railing, camera continues pulling back to reveal the same side yard beyond the railing now dry with a fresh gravel drainage channel running along the fence, warm golden Texas afternoon light fills the scene, ambient sounds of suburban neighborhood and distant lawn equipment

**Payload:**
```json
{
  "input": {
    "prompt": "Static shot of standing brown water in a narrow North Texas side yard between a brick home and wooden fence, an AC condenser unit hums in the background with water at its base, a downspout extension points into the puddle, the framing is casual like a phone snapshot, camera slowly zooms out revealing the image is on a phone screen held by a hand on a back porch, the iMessage interface becomes visible around the photo, a send animation whooshes and a typing indicator pulses then a green reply bubble slides up, the hand lowers the phone to rest on a wooden porch railing, camera continues pulling back to reveal the same side yard beyond the railing now dry with a fresh gravel drainage channel running along the fence, warm golden Texas afternoon light fills the scene, ambient sounds of suburban neighborhood and distant lawn equipment",
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
*Cell: A4-H3-C | Angle: Text Us a Photo | Hook: Proof | Format: Carousel*
