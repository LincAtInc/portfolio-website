#!/usr/bin/env python3
"""
Image Generation Script using NanoBanana Pro (Google Gemini 3.0 Pro Image)

Generates images using the WaveSpeed API with NanoBanana Pro model.
Supports 1K, 2K, and 4K resolutions with multiple aspect ratios.

Usage:
    python generate_image.py --prompt "A cat in space" --output image.png
    python generate_image.py --prompt "A sunset" --size 4k --aspect 16:9
"""

import argparse
import json
import os
import sys
import time
import urllib.request
import urllib.error
from pathlib import Path

# ============================================================
# API KEY IS EMBEDDED - No need to pass it as argument
# ============================================================
API_KEY = "a49e76b808e03681ef0a85c1e755bd9e17612c5751ac83b1c237e4f27a13e4a3"

# API Configuration
API_BASE = "https://api.wavespeed.ai/api/v3"
MODEL = "wavespeed-ai/flux-2-klein-9b/text-to-image"

# Resolution presets
RESOLUTIONS = {
    "1k": 1024,
    "2k": 2048,
    "4k": 4096,
}

# Aspect ratio calculations
ASPECT_RATIOS = {
    "1:1": (1, 1),
    "16:9": (16, 9),
    "9:16": (9, 16),
    "4:5": (4, 5),
    "5:4": (5, 4),
    "3:2": (3, 2),
    "2:3": (2, 3),
}


def calculate_dimensions(size: str, aspect: str) -> str:
    """Calculate pixel dimensions based on size and aspect ratio."""
    base_size = RESOLUTIONS.get(size.lower(), 1024)
    ratio = ASPECT_RATIOS.get(aspect, (1, 1))
    
    # Calculate dimensions maintaining aspect ratio
    if ratio[0] >= ratio[1]:
        width = base_size
        height = int(base_size * ratio[1] / ratio[0])
    else:
        height = base_size
        width = int(base_size * ratio[0] / ratio[1])
    
    # Round to nearest 8 (required by most models)
    width = (width // 8) * 8
    height = (height // 8) * 8
    
    return f"{width}*{height}"


def submit_task(prompt: str, size: str, output_format: str) -> dict:
    """Submit an image generation task and return the result."""
    url = f"{API_BASE}/{MODEL}"
    
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
    }
    
    params = {
        "prompt": prompt,
        "size": size,
        "output_format": output_format,
        "num_images": 1,
        "enable_safety_checker": True,
    }
    
    data = json.dumps(params).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers=headers, method="POST")
    
    try:
        with urllib.request.urlopen(req, timeout=60) as response:
            result = json.loads(response.read().decode("utf-8"))
            
            # Handle sync mode - result may be directly in response
            if "outputs" in result:
                return {"type": "sync", "data": result}
            
            # Async mode - get request ID for polling
            request_id = result.get("id") or result.get("request_id") or result.get("data", {}).get("id")
            if request_id:
                return {"type": "async", "id": request_id}
            
            raise ValueError(f"Could not find request ID in response: {result}")
            
    except urllib.error.HTTPError as e:
        error_body = e.read().decode("utf-8")
        raise RuntimeError(f"API error ({e.code}): {error_body}")


def poll_result(request_id: str, max_wait: int = 180, poll_interval: float = 2.0) -> dict:
    """Poll for task completion and return the result."""
    url = f"{API_BASE}/predictions/{request_id}/result"
    
    headers = {
        "Authorization": f"Bearer {API_KEY}",
    }
    
    req = urllib.request.Request(url, headers=headers, method="GET")
    
    start_time = time.time()
    while time.time() - start_time < max_wait:
        try:
            with urllib.request.urlopen(req, timeout=30) as response:
                result = json.loads(response.read().decode("utf-8"))
                
                status = result.get("status", "").lower()
                
                if status == "completed":
                    return result
                elif status == "failed":
                    error_msg = result.get("error") or result.get("message") or "Unknown error"
                    raise RuntimeError(f"Task failed: {error_msg}")
                elif status in ["pending", "processing", "running", "queued"]:
                    print(f"  Status: {status}...")
                    time.sleep(poll_interval)
                    continue
                else:
                    # Some APIs return outputs directly without status
                    if "outputs" in result or "output" in result:
                        return result
                    time.sleep(poll_interval)
                    
        except urllib.error.HTTPError as e:
            if e.code == 404:
                time.sleep(poll_interval)
                continue
            error_body = e.read().decode("utf-8")
            raise RuntimeError(f"Polling error ({e.code}): {error_body}")
    
    raise TimeoutError(f"Task did not complete within {max_wait} seconds")


def download_image(url: str, output_path: str) -> str:
    """Download an image from URL and save to file."""
    req = urllib.request.Request(url)
    
    with urllib.request.urlopen(req, timeout=60) as response:
        content = response.read()
        
        # Ensure output directory exists
        Path(output_path).parent.mkdir(parents=True, exist_ok=True)
        
        with open(output_path, "wb") as f:
            f.write(content)
    
    return output_path


def generate_image(
    prompt: str,
    output_path: str = None,
    size: str = "1k",
    aspect: str = "1:1",
    output_format: str = "png",
) -> str:
    """
    Generate an image using NanoBanana Pro via WaveSpeed API.
    
    Args:
        prompt: Text prompt describing the image
        output_path: Where to save the generated image
        size: Resolution - 1k, 2k, or 4k
        aspect: Aspect ratio - 1:1, 16:9, 9:16, 4:5, 5:4
        output_format: Output format (png or jpeg)
    
    Returns:
        Path to the saved image file
    """
    if not output_path:
        output_path = f"generated_image.{output_format}"
    
    # Calculate dimensions
    dimensions = calculate_dimensions(size, aspect)
    
    print(f"🎨 Generating image with NanoBanana Pro...")
    print(f"   Model: {MODEL}")
    print(f"   Size: {size} ({dimensions})")
    print(f"   Aspect: {aspect}")
    print(f"   Prompt: {prompt[:80]}{'...' if len(prompt) > 80 else ''}")
    print()
    
    # Submit the task
    submit_result = submit_task(prompt, dimensions, output_format)
    
    # Handle sync vs async response
    if submit_result["type"] == "sync":
        result = submit_result["data"]
    else:
        request_id = submit_result["id"]
        print(f"   Request ID: {request_id}")
        print("   Waiting for generation to complete...")
        result = poll_result(request_id)
    
    # Extract image URL from result
    outputs = result.get("outputs") or result.get("output", {}).get("images") or []
    if isinstance(outputs, dict):
        outputs = outputs.get("images", [])
    
    if not outputs:
        raise RuntimeError(f"No images in response: {result}")
    
    image_url = outputs[0]
    print(f"   ✅ Image generated! Downloading...")
    
    # Download and save
    saved_path = download_image(image_url, output_path)
    print(f"   📁 Saved to: {saved_path}")
    
    return saved_path


def main():
    parser = argparse.ArgumentParser(
        description="Generate images using NanoBanana Pro (Gemini 3.0 Pro Image)",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Basic usage
  python generate_image.py --prompt "A serene mountain landscape"
  
  # 4K high quality
  python generate_image.py --prompt "Portrait of a wizard" --size 4k
  
  # Widescreen format
  python generate_image.py --prompt "Cyberpunk city" --aspect 16:9 --size 2k
  
  # Custom output path
  python generate_image.py --prompt "Space cat" --output /path/to/image.png
        """
    )
    
    parser.add_argument("--prompt", required=True, help="Text prompt for image generation")
    parser.add_argument("--output", "-o", default=None, help="Output file path")
    parser.add_argument("--size", "-s", default="1k", choices=["1k", "2k", "4k"], 
                        help="Resolution: 1k, 2k, or 4k (default: 1k)")
    parser.add_argument("--aspect", "-a", default="1:1", 
                        choices=["1:1", "16:9", "9:16", "4:5", "5:4", "3:2", "2:3"],
                        help="Aspect ratio (default: 1:1)")
    parser.add_argument("--format", "-f", choices=["png", "jpeg"], default="png", 
                        help="Output format (default: png)")
    
    args = parser.parse_args()
    
    try:
        output_path = generate_image(
            prompt=args.prompt,
            output_path=args.output,
            size=args.size,
            aspect=args.aspect,
            output_format=args.format,
        )
        print(f"\n✅ Success! Image saved to: {output_path}")
        return 0
    except Exception as e:
        print(f"\n❌ Error: {e}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
