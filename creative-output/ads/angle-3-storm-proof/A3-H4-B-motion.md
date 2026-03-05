# A3-H4-B — Motion Prompt (Veo 3.1 Fast)

## Animation Concept
Beat 1 — THE ENEMY (0-1s): Camera pans across a newer-build subdivision backyard — dead flat, no drainage, standing water pooled against the slab. A string level line between stakes shows zero slope. The builder left this homeowner exposed.
Beat 2 — THE SOLUTION (1-3s): Camera tilts down to show work boots stepping through the puddle, then tracks alongside a string line as gloved hands point to where a French drain needs to go. The diagnosis is clear — the grade is wrong, drainage was never installed.
Beat 3 — THE PROOF (3-5s): Quick cut to a similar subdivision yard with a completed French drain system — gravel trench, catch basin, proper grading. Same style home, but this one drains. Rain falls on the finished system and water moves away from the foundation as designed.

## Veo 3.1 Fast — Image-to-Video

**Prompt:**
Camera pans across a newer-build North Texas subdivision backyard — dead flat bermuda grass, beige brick home, standing brown water pooled in multiple low spots against the slab foundation. A string level line between two stakes shows zero slope away from the house. No gutters visible on the roofline. Camera tilts down to show work boots stepping through the standing water, then tracks alongside the string line as a gloved hand enters frame pointing to where drainage should be installed. Quick cut to a similar subdivision yard with a completed drainage system — French drain trench with white gravel running along the foundation, a green catch basin at the downspout, proper grading visible. Rain falls on this finished yard and water channels cleanly through the drain away from the foundation. Sound of boots splashing in water, wind, then rain on gravel.

**Payload:**
```json
{
  "input": {
    "prompt": "Camera pans across a newer-build North Texas subdivision backyard — dead flat bermuda grass, beige brick home, standing brown water pooled in multiple low spots against the slab foundation. A string level line between two stakes shows zero slope away from the house. No gutters visible on the roofline. Camera tilts down to show work boots stepping through the standing water, then tracks alongside the string line as a gloved hand enters frame pointing to where drainage should be installed. Quick cut to a similar subdivision yard with a completed drainage system — French drain trench with white gravel running along the foundation, a green catch basin at the downspout, proper grading visible. Rain falls on this finished yard and water channels cleanly through the drain away from the foundation. Sound of boots splashing in water, wind, then rain on gravel.",
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
*Cell: A3-H4-B | Angle: Storm Proof | Hook: Contrarian | Format: Video*
