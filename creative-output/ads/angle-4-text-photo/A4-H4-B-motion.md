# A4-H4-B — Motion Prompt (Veo 3.1 Fast)

## Animation Concept
Beat 1 — THE ENEMY (0-1s): Over-the-shoulder shot of a worker on a job site — he stands idle, looking down at his phone. In the background, a freshly dug trench and red clay piles. The old assumption: you need someone to come out and look first.
Beat 2 — THE SOLUTION (1-3s): The worker lifts the phone slightly, the screen shows a customer-texted photo of pooling water. His thumb scrolls the image, examining it, then taps the reply field and starts typing. The job site sounds fill the background — machinery, gravel.
Beat 3 — THE PROOF (3-5s): The worker's thumb taps send, the green bubble animates up. He lowers the phone and turns back toward the trench where his crew is working. Problem diagnosed remotely, work continues.

## Veo 3.1 Fast — Image-to-Video

**Prompt:**
Over-the-shoulder shot from behind a worker in a dark green polo standing on a North Texas residential job site, he looks down at an iPhone in his hands, a freshly dug drainage trench with black pipe and red clay piles fills the background, the worker lifts the phone closer and the screen shows an iMessage thread with a customer photo of brown standing water near a foundation, his thumb scrolls the image examining it then taps the reply field and begins typing with audible keyboard taps, he taps the send button and a green reply bubble animates upward, the worker lowers the phone and turns back toward the trench where work boots and shovels are visible, warm golden late-afternoon Texas light creates long shadows across the disturbed red clay, ambient sounds of a job site with distant machinery and gravel crunching

**Payload:**
```json
{
  "input": {
    "prompt": "Over-the-shoulder shot from behind a worker in a dark green polo standing on a North Texas residential job site, he looks down at an iPhone in his hands, a freshly dug drainage trench with black pipe and red clay piles fills the background, the worker lifts the phone closer and the screen shows an iMessage thread with a customer photo of brown standing water near a foundation, his thumb scrolls the image examining it then taps the reply field and begins typing with audible keyboard taps, he taps the send button and a green reply bubble animates upward, the worker lowers the phone and turns back toward the trench where work boots and shovels are visible, warm golden late-afternoon Texas light creates long shadows across the disturbed red clay, ambient sounds of a job site with distant machinery and gravel crunching",
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
*Cell: A4-H4-B | Angle: Text Us a Photo | Hook: Contrarian | Format: Video*
