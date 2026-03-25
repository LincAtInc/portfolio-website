---
name: imagegen
description: Generate AI images using NanoBanana Pro (Google Gemini 3.0 Pro Image) via WaveSpeed API. Use this skill when the user asks to create, generate, or make an AI image, picture, or artwork. Triggers include requests like "create an image of...", "generate a picture...", "make me an AI image...", or any image generation request.
---

# Image Generation Skill

The **imagegen** skill includes:

- **NanoBanana Pro** (Google Gemini 3.0 Pro Image) via WaveSpeed API
- Your API key is embedded in the script
- Supports **1K, 2K, and 4K** resolutions
- Multiple aspect ratios (1:1, 16:9, 9:16, 4:5, etc.)
- PNG and JPEG output formats

## Quick Start

Run the generation script with your prompt:

```bash
python /mnt/skills/user/imagegen/scripts/generate_image.py \
  --prompt "A serene mountain landscape at sunset" \
  --output /mnt/user-data/outputs/generated_image.png
```

## Workflow

1. Extract the prompt from user's request
2. Run `scripts/generate_image.py` with appropriate parameters
3. Save output to `/mnt/user-data/outputs/`
4. Present the generated image to user

## Script Parameters

| Flag | Required | Description |
|------|----------|-------------|
| `--prompt` | Yes | Image description |
| `--output` | No | Output path (default: generated_image.png) |
| `--size` | No | Resolution: 1k, 2k, or 4k (default: 1k) |
| `--aspect` | No | Aspect ratio: 1:1, 16:9, 9:16, 4:5, 5:4 (default: 1:1) |
| `--format` | No | png or jpeg (default: png) |

## Resolution Options

- **1k**: 1024px (fast, good for drafts)
- **2k**: 2048px (balanced quality/speed)
- **4k**: 4096px (highest quality, production use)

## Aspect Ratios

- **1:1**: Square (1024x1024, 2048x2048, 4096x4096)
- **16:9**: Landscape/widescreen
- **9:16**: Portrait/vertical (mobile, stories)
- **4:5**: Portrait (Instagram)
- **5:4**: Landscape

## Examples

Basic generation:
```bash
python /mnt/skills/user/imagegen/scripts/generate_image.py --prompt "A cat astronaut floating in space" --output /mnt/user-data/outputs/cat.png
```

4K high quality:
```bash
python /mnt/skills/user/imagegen/scripts/generate_image.py --prompt "Portrait photo of a wise old wizard" --size 4k --output /mnt/user-data/outputs/wizard.png
```

Widescreen landscape:
```bash
python /mnt/skills/user/imagegen/scripts/generate_image.py --prompt "Cyberpunk city skyline at night" --aspect 16:9 --size 2k --output /mnt/user-data/outputs/city.png
```

## Prompt Tips

For better results with NanoBanana Pro:
- Be specific and detailed in descriptions
- Include style references: "oil painting", "photorealistic", "anime style"
- Mention lighting: "golden hour", "dramatic lighting", "soft natural light"
- Add quality tags: "highly detailed", "professional photography", "8k"
- NanoBanana Pro excels at text rendering in images
