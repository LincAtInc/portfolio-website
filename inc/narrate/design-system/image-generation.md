# Image Generation Style Guide

## Provider
NanoBanana Pro (Google Gemini 3.0 Pro Image) via WaveSpeed API

## Model
`google/nano-banana-pro/text-to-image`

## Default Parameters
- **Aspect Ratio:** 16:9
- **Resolution:** 2k (production), 1k (drafts)
- **Output Format:** PNG

## Visual Style: "Dark Editorial Infographic"

### Background
- Solid dark navy (#0f172a) — matches site `--color-bg-dark`
- No gradients on background — keep it flat and deep
- The content is the light source, not the background

### Color Palette
Map directly to INC framework semantic roles:
- **Blue (#2563eb)** — I/Ideate, primary actions, active intelligence
- **Purple (#8b5cf6)** — N/Narrate, the narrative thread, amplification
- **Cyan (#06b6d4)** — C/Create, data pulse, execution
- **Warm gold/white** — L/Love/Vision, subtle, ethereal, human foundation

### Glow & Energy
- Each element has a soft colour-matched glow/aura
- Energy beams and radiating lines connect elements
- Purple radiates outward in both directions (amplifier metaphor)
- Glow intensity increases near the centre (N)
- Particle effects along connection lines

### Typography in Images
- Sans-serif only — clean, geometric
- Large bold letters for framework nodes (I, N, C)
- Smaller labels beneath each node
- Subtitle text at bottom in lighter weight
- Angle brackets < > rendered around N

### Composition
- Horizontal layout, centred
- Three to four elements evenly spaced
- Central element (N) is largest
- Connection lines flow between elements
- Generous negative space above and below

### Aesthetic Keywords
Always include in prompts:
- "Clean minimal professional"
- "Modern vector infographic style"
- "Dark editorial aesthetic"
- "Sans-serif typography"
- "Highly detailed"
- "No clutter"

### What to Avoid
- Photorealistic elements
- 3D renders or isometric styles
- Busy backgrounds or textures
- Serif fonts
- Pure black (#000000) — use navy (#0f172a)
- Pure white text — use warm white or muted tones

## Prompt Template

```
[Subject description] on dark navy background (#0f172a).
[Layout and element descriptions using blue #2563eb, purple #8b5cf6, cyan #06b6d4].
[Glow and energy descriptions — radiating, amplifying].
[Text/notation to render].
Clean minimal professional design systems aesthetic,
modern vector infographic style, dark editorial aesthetic,
sans-serif typography, highly detailed, no clutter.
```

## Example Prompt (INC Framework)

```
A conceptual infographic diagram on dark navy background (#0f172a)
showing the INC Framework. Three elements horizontally:
Left is a glowing blue (#2563eb) circle with large letter I
labeled Ideate with subtitle Discovery and NorthStar Prototyping.
Center is a larger glowing purple (#8b5cf6) element with angle
brackets < N > labeled Narrate with subtitle The Agentic Design
System Layer, radiating purple energy waves outward in both
directions like an amplifier or prism. Right is a glowing cyan
(#06b6d4) circle with large letter C labeled Create with subtitle
Production Code and Shipping. Flowing gradient energy lines connect
N to both I and C, purple-to-blue on left and purple-to-cyan on
right, showing amplification. The notation I < N > C appears
prominently at top in large sans-serif text. Bottom text reads:
N is not a step between I and C it is the amplifier that radiates
into both directions. Clean minimal professional design systems
aesthetic, modern vector infographic style, highly detailed,
no clutter.
```

## API Call Reference

```bash
curl -s -X POST "https://api.wavespeed.ai/api/v3/google/nano-banana-pro/text-to-image" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $WAVESPEED_API_KEY" \
  -d '{
    "prompt": "...",
    "aspect_ratio": "16:9",
    "resolution": "2k",
    "output_format": "png"
  }'
```

Poll for results:
```bash
curl -s "$RESULT_URL" -H "Authorization: Bearer $WAVESPEED_API_KEY"
```
