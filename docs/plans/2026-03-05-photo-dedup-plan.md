# Photo Dedup Skill Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a Claude Code skill that finds and removes duplicate/similar photos from a 44K image collection, doing Phases 1-2 automatically and presenting options for Phase 3 approval.

**Architecture:** A Claude Code skill (`photo-dedup`) with a Python script backend. Phase 1 uses SHA256 hashing for exact duplicates. Phase 2 uses perceptual hashing (pHash) for near-duplicates. Both phases move files to a review folder, never delete. Phase 3 (AI vision curation) is stubbed but not implemented until user approves.

**Tech Stack:** Python 3.9, Pillow (installed), imagehash (needs install), Claude Code skill (SKILL.md)

---

### Task 1: Create Skill Directory Structure

**Files:**
- Create: `~/.claude/skills/photo-dedup/SKILL.md`
- Create: `~/.claude/skills/photo-dedup/scripts/photo_dedup.py`
- Create: `~/.claude/skills/photo-dedup/scripts/install.sh`

**Step 1: Create directories**

```bash
mkdir -p ~/.claude/skills/photo-dedup/scripts
```

**Step 2: Commit**

```bash
# No commit yet - empty dirs. Continue to next task.
```

---

### Task 2: Create Install Script

**Files:**
- Create: `~/.claude/skills/photo-dedup/scripts/install.sh`

**Step 1: Write the install script**

```bash
#!/bin/bash
# Install dependencies for photo-dedup skill
set -e

echo "Checking Python dependencies for photo-dedup..."

# Check and install imagehash (also installs Pillow if missing)
python3 -c "import imagehash" 2>/dev/null && echo "imagehash: OK" || {
    echo "Installing imagehash..."
    pip3 install imagehash
}

# Check Pillow
python3 -c "from PIL import Image" 2>/dev/null && echo "Pillow: OK" || {
    echo "Installing Pillow..."
    pip3 install Pillow
}

# Check pillow-heif for HEIC support
python3 -c "import pillow_heif" 2>/dev/null && echo "pillow-heif: OK" || {
    echo "Installing pillow-heif (HEIC support)..."
    pip3 install pillow-heif
}

echo "All dependencies installed."
```

**Step 2: Make executable**

```bash
chmod +x ~/.claude/skills/photo-dedup/scripts/install.sh
```

**Step 3: Run install to verify**

```bash
bash ~/.claude/skills/photo-dedup/scripts/install.sh
```

Expected: imagehash installs successfully, Pillow already installed, pillow-heif installs.

**Step 4: Verify imports work**

```bash
python3 -c "import imagehash; from PIL import Image; import pillow_heif; print('All imports OK')"
```

Expected: `All imports OK`

---

### Task 3: Write the Python Script — Scanning & Hashing Engine

**Files:**
- Create: `~/.claude/skills/photo-dedup/scripts/photo_dedup.py`

This is the core script. It has three subcommands: `scan`, `dedup-exact`, `dedup-similar`.

**Step 1: Write the complete Python script**

```python
#!/usr/bin/env python3
"""
Photo Dedup - Find and manage duplicate/similar photos.

Usage:
    python3 photo_dedup.py scan <directory> [--output manifest.json]
    python3 photo_dedup.py dedup-exact <manifest.json> [--dry-run] [--review-dir path]
    python3 photo_dedup.py dedup-similar <manifest.json> [--dry-run] [--review-dir path] [--threshold 10]
    python3 photo_dedup.py summary <manifest.json>
    python3 photo_dedup.py undo <manifest.json>
"""

import argparse
import hashlib
import json
import os
import shutil
import sys
import time
from collections import defaultdict
from datetime import datetime
from pathlib import Path

try:
    from PIL import Image
    import imagehash
except ImportError:
    print("ERROR: Missing dependencies. Run: bash ~/.claude/skills/photo-dedup/scripts/install.sh")
    sys.exit(1)

try:
    import pillow_heif
    pillow_heif.register_heif_opener()
    HEIC_SUPPORT = True
except ImportError:
    HEIC_SUPPORT = False

IMAGE_EXTENSIONS = {
    '.jpg', '.jpeg', '.png', '.heic', '.webp', '.gif',
    '.tiff', '.tif', '.bmp', '.cr2', '.nef', '.arw'
}

SKIP_DIRS = {'.photoslibrary', '.photolibrary', '.photoslibrary/', '.photolibrary/'}


def should_skip_dir(dir_path):
    """Check if directory should be skipped (Photos libraries)."""
    parts = Path(dir_path).parts
    for part in parts:
        if part.endswith('.photoslibrary') or part.endswith('.photolibrary'):
            return True
    return False


def find_images(directory):
    """Recursively find all image files, skipping Photos libraries."""
    images = []
    directory = Path(directory)
    for root, dirs, files in os.walk(directory):
        # Skip Photos library directories
        if should_skip_dir(root):
            dirs.clear()
            continue
        # Filter out Photos library subdirs from further traversal
        dirs[:] = [d for d in dirs if not d.endswith('.photoslibrary') and not d.endswith('.photolibrary')]

        for f in files:
            if Path(f).suffix.lower() in IMAGE_EXTENSIONS:
                images.append(os.path.join(root, f))
    return sorted(images)


def sha256_hash(filepath):
    """Compute SHA256 hash of a file."""
    h = hashlib.sha256()
    try:
        with open(filepath, 'rb') as f:
            for chunk in iter(lambda: f.read(8192), b''):
                h.update(chunk)
        return h.hexdigest()
    except (OSError, PermissionError) as e:
        print(f"  WARNING: Cannot read {filepath}: {e}", file=sys.stderr)
        return None


def perceptual_hash(filepath):
    """Compute perceptual hash of an image."""
    try:
        img = Image.open(filepath)
        return str(imagehash.phash(img))
    except Exception as e:
        print(f"  WARNING: Cannot hash {filepath}: {e}", file=sys.stderr)
        return None


def get_image_info(filepath):
    """Get resolution and file size for an image."""
    info = {
        'path': filepath,
        'size_bytes': 0,
        'width': 0,
        'height': 0,
        'megapixels': 0.0,
    }
    try:
        info['size_bytes'] = os.path.getsize(filepath)
    except OSError:
        pass
    try:
        with Image.open(filepath) as img:
            info['width'], info['height'] = img.size
            info['megapixels'] = round((info['width'] * info['height']) / 1_000_000, 2)
    except Exception:
        pass
    return info


def cmd_scan(args):
    """Scan directory and build manifest with hashes."""
    directory = args.directory
    output = args.output or os.path.join(directory, 'photo_dedup_manifest.json')

    print(f"Scanning: {directory}")
    print(f"Skipping: .photoslibrary / .photolibrary bundles")
    print()

    # Find all images
    print("Finding images...")
    images = find_images(directory)
    print(f"Found {len(images)} images")
    print()

    if not images:
        print("No images found. Nothing to do.")
        return

    # Phase 1: SHA256 hashes
    print("Phase 1: Computing SHA256 hashes (exact duplicate detection)...")
    sha_hashes = {}
    exact_groups = defaultdict(list)
    for i, img in enumerate(images):
        if (i + 1) % 500 == 0 or i == 0:
            print(f"  Hashing {i + 1}/{len(images)}...")
        h = sha256_hash(img)
        if h:
            sha_hashes[img] = h
            exact_groups[h].append(img)

    # Filter to only groups with duplicates
    exact_dupes = {k: v for k, v in exact_groups.items() if len(v) > 1}
    exact_dupe_count = sum(len(v) - 1 for v in exact_dupes.values())
    print(f"  Found {len(exact_dupes)} groups of exact duplicates ({exact_dupe_count} files to review)")
    print()

    # Phase 2: Perceptual hashes
    print("Phase 2: Computing perceptual hashes (similar image detection)...")
    phashes = {}
    for i, img in enumerate(images):
        if (i + 1) % 500 == 0 or i == 0:
            print(f"  Perceptual hashing {i + 1}/{len(images)}...")
        h = perceptual_hash(img)
        if h:
            phashes[img] = h

    # Group by similar perceptual hash (within threshold)
    # For now, group by exact phash match (threshold=0)
    # The dedup-similar command handles threshold-based grouping
    phash_groups = defaultdict(list)
    for img, h in phashes.items():
        phash_groups[h].append(img)

    similar_groups = {k: v for k, v in phash_groups.items() if len(v) > 1}
    # Exclude groups that are already exact duplicates
    truly_similar = {}
    for phash_key, group in similar_groups.items():
        # Check if all files in group have the same SHA256
        sha_set = set(sha_hashes.get(f) for f in group if f in sha_hashes)
        if len(sha_set) > 1:
            truly_similar[phash_key] = group

    similar_count = sum(len(v) - 1 for v in truly_similar.values())
    print(f"  Found {len(truly_similar)} groups of similar (non-identical) images ({similar_count} files to review)")
    print()

    # Build manifest
    manifest = {
        'version': '1.0',
        'scan_date': datetime.now().isoformat(),
        'source_directory': directory,
        'total_images': len(images),
        'exact_duplicate_groups': len(exact_dupes),
        'exact_duplicate_files': exact_dupe_count,
        'similar_groups': len(truly_similar),
        'similar_files': similar_count,
        'exact_duplicates': {},
        'similar_images': {},
        'moves': [],
    }

    # Add exact duplicate details
    for i, (sha, files) in enumerate(exact_dupes.items()):
        group_info = []
        for f in files:
            group_info.append(get_image_info(f))
        manifest['exact_duplicates'][f'exact_{i}'] = {
            'sha256': sha,
            'files': group_info,
        }

    # Add similar image details
    for i, (phash_key, files) in enumerate(truly_similar.items()):
        group_info = []
        for f in files:
            info = get_image_info(f)
            info['sha256'] = sha_hashes.get(f, '')
            info['phash'] = phash_key
            group_info.append(info)
        manifest['similar_images'][f'similar_{i}'] = {
            'phash': phash_key,
            'files': group_info,
        }

    # Save manifest
    with open(output, 'w') as f:
        json.dump(manifest, f, indent=2)

    print(f"Manifest saved to: {output}")
    print()
    print("=== SCAN SUMMARY ===")
    print(f"Total images scanned:     {len(images)}")
    print(f"Exact duplicate groups:   {len(exact_dupes)} ({exact_dupe_count} files)")
    print(f"Similar image groups:     {len(truly_similar)} ({similar_count} files)")
    print()
    print("Next steps:")
    print(f"  1. Review exact dupes:  python3 {__file__} dedup-exact '{output}' --dry-run")
    print(f"  2. Remove exact dupes:  python3 {__file__} dedup-exact '{output}'")
    print(f"  3. Review similar:      python3 {__file__} dedup-similar '{output}' --dry-run")
    print(f"  4. Remove similar:      python3 {__file__} dedup-similar '{output}'")


def pick_keeper(files_info):
    """Pick the best file to keep from a group. Returns (keeper, others)."""
    # Sort by: highest resolution first, then largest file size, then shortest path
    ranked = sorted(
        files_info,
        key=lambda f: (
            -(f.get('megapixels', 0)),
            -(f.get('size_bytes', 0)),
            len(f.get('path', '')),
        )
    )
    return ranked[0], ranked[1:]


def move_to_review(filepath, source_dir, review_dir, subfolder):
    """Move a file to the review directory, preserving relative path."""
    rel_path = os.path.relpath(filepath, source_dir)
    dest = os.path.join(review_dir, subfolder, rel_path)
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    shutil.move(filepath, dest)
    return dest


def cmd_dedup_exact(args):
    """Move exact duplicates to review folder."""
    with open(args.manifest) as f:
        manifest = json.load(f)

    source_dir = manifest['source_directory']
    review_dir = args.review_dir or os.path.join(source_dir, 'duplicates_review')
    dry_run = args.dry_run

    exact = manifest.get('exact_duplicates', {})
    if not exact:
        print("No exact duplicates found in manifest.")
        return

    print(f"{'DRY RUN: ' if dry_run else ''}Processing {len(exact)} exact duplicate groups...")
    print(f"Review folder: {review_dir}")
    print()

    total_moved = 0
    total_saved_bytes = 0
    moves = []

    for group_id, group in exact.items():
        files = group['files']
        # Verify files still exist
        existing = [f for f in files if os.path.exists(f['path'])]
        if len(existing) < 2:
            continue

        keeper, others = pick_keeper(existing)
        print(f"  Group {group_id}: keeping {os.path.basename(keeper['path'])} ({keeper['megapixels']}MP, {keeper['size_bytes']//1024}KB)")

        for other in others:
            if dry_run:
                print(f"    Would move: {other['path']}")
            else:
                try:
                    dest = move_to_review(other['path'], source_dir, review_dir, 'exact')
                    moves.append({
                        'source': other['path'],
                        'destination': dest,
                        'group': group_id,
                        'reason': 'exact_duplicate',
                        'timestamp': datetime.now().isoformat(),
                    })
                    print(f"    Moved: {os.path.basename(other['path'])}")
                except Exception as e:
                    print(f"    ERROR moving {other['path']}: {e}", file=sys.stderr)
            total_moved += 1
            total_saved_bytes += other.get('size_bytes', 0)

    print()
    print(f"{'Would move' if dry_run else 'Moved'}: {total_moved} files")
    print(f"Space {'to be ' if dry_run else ''}recovered: {total_saved_bytes / (1024*1024*1024):.2f} GB")

    if not dry_run and moves:
        manifest.setdefault('moves', []).extend(moves)
        with open(args.manifest, 'w') as f:
            json.dump(manifest, f, indent=2)
        print(f"Manifest updated with {len(moves)} moves.")


def cmd_dedup_similar(args):
    """Move inferior similar images to review folder."""
    with open(args.manifest) as f:
        manifest = json.load(f)

    source_dir = manifest['source_directory']
    review_dir = args.review_dir or os.path.join(source_dir, 'duplicates_review')
    dry_run = args.dry_run
    threshold = args.threshold

    similar = manifest.get('similar_images', {})
    if not similar:
        print("No similar image groups found in manifest.")
        return

    print(f"{'DRY RUN: ' if dry_run else ''}Processing {len(similar)} similar image groups...")
    print(f"Review folder: {review_dir}")
    print(f"Resolution threshold: {threshold}% difference required to auto-decide")
    print()

    total_moved = 0
    total_saved_bytes = 0
    skipped_groups = 0
    moves = []
    needs_ai_review = []

    for group_id, group in similar.items():
        files = group['files']
        existing = [f for f in files if os.path.exists(f['path'])]
        if len(existing) < 2:
            continue

        keeper, others = pick_keeper(existing)

        # Check if the resolution difference is significant enough to auto-decide
        if keeper['megapixels'] > 0:
            for other in others:
                if other['megapixels'] > 0:
                    ratio = other['megapixels'] / keeper['megapixels']
                    if ratio > (1 - threshold / 100):
                        # Too close in resolution - needs manual/AI review
                        needs_ai_review.append({
                            'group_id': group_id,
                            'files': [f['path'] for f in existing],
                            'resolutions': [f'{f["width"]}x{f["height"]}' for f in existing],
                        })
                        skipped_groups += 1
                        break
            else:
                # All others are significantly lower resolution - auto-decide
                print(f"  Group {group_id}: keeping {os.path.basename(keeper['path'])} ({keeper['width']}x{keeper['height']})")
                for other in others:
                    if dry_run:
                        print(f"    Would move: {os.path.basename(other['path'])} ({other['width']}x{other['height']})")
                    else:
                        try:
                            dest = move_to_review(other['path'], source_dir, review_dir, 'similar')
                            moves.append({
                                'source': other['path'],
                                'destination': dest,
                                'group': group_id,
                                'reason': 'similar_lower_resolution',
                                'timestamp': datetime.now().isoformat(),
                            })
                            print(f"    Moved: {os.path.basename(other['path'])} ({other['width']}x{other['height']})")
                        except Exception as e:
                            print(f"    ERROR: {e}", file=sys.stderr)
                    total_moved += 1
                    total_saved_bytes += other.get('size_bytes', 0)
        else:
            needs_ai_review.append({
                'group_id': group_id,
                'files': [f['path'] for f in existing],
            })
            skipped_groups += 1

    print()
    print(f"{'Would move' if dry_run else 'Moved'}: {total_moved} files")
    print(f"Space {'to be ' if dry_run else ''}recovered: {total_saved_bytes / (1024*1024*1024):.2f} GB")
    print(f"Groups needing AI review: {skipped_groups}")

    if needs_ai_review:
        ai_review_path = args.manifest.replace('.json', '_ai_review.json')
        with open(ai_review_path, 'w') as f:
            json.dump(needs_ai_review, f, indent=2)
        print(f"AI review candidates saved to: {ai_review_path}")
        print()
        print("=== PHASE 3 OPTIONS ===")
        print("These groups have similar resolution and need subjective comparison.")
        print("Options:")
        print("  A) Use Claude vision to compare and pick the best (uses AI tokens)")
        print("  B) Review manually in Finder")
        print("  C) Keep all (skip these groups)")

    if not dry_run and moves:
        manifest.setdefault('moves', []).extend(moves)
        with open(args.manifest, 'w') as f:
            json.dump(manifest, f, indent=2)


def cmd_summary(args):
    """Print summary of manifest."""
    with open(args.manifest) as f:
        manifest = json.load(f)

    print("=== PHOTO DEDUP MANIFEST SUMMARY ===")
    print(f"Scan date:              {manifest.get('scan_date', 'unknown')}")
    print(f"Source directory:        {manifest.get('source_directory', 'unknown')}")
    print(f"Total images scanned:   {manifest.get('total_images', 0)}")
    print(f"Exact duplicate groups: {manifest.get('exact_duplicate_groups', 0)}")
    print(f"Exact duplicate files:  {manifest.get('exact_duplicate_files', 0)}")
    print(f"Similar image groups:   {manifest.get('similar_groups', 0)}")
    print(f"Similar image files:    {manifest.get('similar_files', 0)}")
    print(f"Total moves recorded:   {len(manifest.get('moves', []))}")


def cmd_undo(args):
    """Undo all moves recorded in manifest."""
    with open(args.manifest) as f:
        manifest = json.load(f)

    moves = manifest.get('moves', [])
    if not moves:
        print("No moves to undo.")
        return

    print(f"Undoing {len(moves)} file moves...")
    undone = 0
    for move in reversed(moves):
        src = move['destination']
        dst = move['source']
        if os.path.exists(src):
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            shutil.move(src, dst)
            print(f"  Restored: {os.path.basename(dst)}")
            undone += 1
        else:
            print(f"  SKIP (not found): {src}")

    manifest['moves'] = []
    with open(args.manifest, 'w') as f:
        json.dump(manifest, f, indent=2)

    print(f"Undone {undone} moves. Manifest updated.")


def main():
    parser = argparse.ArgumentParser(description='Photo Dedup - Find and manage duplicate photos')
    subparsers = parser.add_subparsers(dest='command', help='Command to run')

    # scan
    p_scan = subparsers.add_parser('scan', help='Scan directory for duplicates')
    p_scan.add_argument('directory', help='Directory to scan')
    p_scan.add_argument('--output', '-o', help='Output manifest path (default: <directory>/photo_dedup_manifest.json)')

    # dedup-exact
    p_exact = subparsers.add_parser('dedup-exact', help='Move exact duplicates to review folder')
    p_exact.add_argument('manifest', help='Path to manifest JSON')
    p_exact.add_argument('--dry-run', action='store_true', help='Show what would be moved without moving')
    p_exact.add_argument('--review-dir', help='Review directory (default: <source>/duplicates_review)')

    # dedup-similar
    p_similar = subparsers.add_parser('dedup-similar', help='Move similar images to review folder')
    p_similar.add_argument('manifest', help='Path to manifest JSON')
    p_similar.add_argument('--dry-run', action='store_true', help='Show what would be moved without moving')
    p_similar.add_argument('--review-dir', help='Review directory (default: <source>/duplicates_review)')
    p_similar.add_argument('--threshold', type=int, default=10,
                          help='Resolution difference threshold %% to auto-decide (default: 10)')

    # summary
    p_summary = subparsers.add_parser('summary', help='Show manifest summary')
    p_summary.add_argument('manifest', help='Path to manifest JSON')

    # undo
    p_undo = subparsers.add_parser('undo', help='Undo all recorded moves')
    p_undo.add_argument('manifest', help='Path to manifest JSON')

    args = parser.parse_args()

    if not args.command:
        parser.print_help()
        sys.exit(1)

    commands = {
        'scan': cmd_scan,
        'dedup-exact': cmd_dedup_exact,
        'dedup-similar': cmd_dedup_similar,
        'summary': cmd_summary,
        'undo': cmd_undo,
    }
    commands[args.command](args)


if __name__ == '__main__':
    main()
```

**Step 2: Make executable**

```bash
chmod +x ~/.claude/skills/photo-dedup/scripts/photo_dedup.py
```

**Step 3: Verify script loads without errors**

```bash
python3 ~/.claude/skills/photo-dedup/scripts/photo_dedup.py --help
```

Expected: Help text with scan/dedup-exact/dedup-similar/summary/undo commands.

---

### Task 4: Write the SKILL.md

**Files:**
- Create: `~/.claude/skills/photo-dedup/SKILL.md`

**Step 1: Write the skill definition**

```markdown
---
name: photo-dedup
description: Find and remove duplicate and similar photos. Use when the user asks to deduplicate photos, find duplicate images, clean up photo library, compare similar photos, or remove duplicate pictures. Triggers include "dedup photos", "duplicate photos", "find duplicates", "clean up photos", "photo duplicates", "similar photos", "remove duplicates".
allowed-tools: Bash(python3:*), Bash(pip3:*), Bash(pip:*), Bash(ls:*), Bash(mkdir:*), Bash(chmod:*), Bash(du:*), Bash(find:*), Bash(wc:*)
---

# Photo Dedup Skill

Find and remove duplicate/similar photos from a directory. Works in phases:

- **Phase 1:** Exact duplicates (SHA256 hash) — fully automated, zero AI tokens
- **Phase 2:** Near-duplicates (perceptual hash + resolution comparison) — fully automated, zero AI tokens
- **Phase 3:** AI-assisted curation (Claude vision) — optional, requires explicit approval

## Prerequisites

```bash
bash ~/.claude/skills/photo-dedup/scripts/install.sh
```

## Default Photo Directory

```
/Volumes/Macintosh HD — Data/Users/lincolnmitchell_mb/Documents/Photos and Videos
```

## Workflow

### Step 1: Install Dependencies

```bash
bash ~/.claude/skills/photo-dedup/scripts/install.sh
```

### Step 2: Scan the Directory

Scans all images, computes SHA256 and perceptual hashes, builds a manifest.
Skips `.photoslibrary` and `.photolibrary` bundles automatically.

```bash
python3 ~/.claude/skills/photo-dedup/scripts/photo_dedup.py scan "$PHOTO_DIR"
```

This creates `photo_dedup_manifest.json` in the scanned directory.

### Step 3: Review Exact Duplicates (Dry Run)

```bash
python3 ~/.claude/skills/photo-dedup/scripts/photo_dedup.py dedup-exact "$PHOTO_DIR/photo_dedup_manifest.json" --dry-run
```

Show the user the summary and ask for confirmation before proceeding.

### Step 4: Remove Exact Duplicates

After user confirms:

```bash
python3 ~/.claude/skills/photo-dedup/scripts/photo_dedup.py dedup-exact "$PHOTO_DIR/photo_dedup_manifest.json"
```

Moves duplicates to `$PHOTO_DIR/duplicates_review/exact/` preserving folder structure.

### Step 5: Review Similar Images (Dry Run)

```bash
python3 ~/.claude/skills/photo-dedup/scripts/photo_dedup.py dedup-similar "$PHOTO_DIR/photo_dedup_manifest.json" --dry-run
```

Show the user the summary. This auto-resolves groups where one image has significantly higher resolution (>10% difference). Groups with similar resolution are flagged for Phase 3.

### Step 6: Remove Similar Images (Auto-Resolvable Only)

After user confirms:

```bash
python3 ~/.claude/skills/photo-dedup/scripts/photo_dedup.py dedup-similar "$PHOTO_DIR/photo_dedup_manifest.json"
```

Moves inferior versions to `$PHOTO_DIR/duplicates_review/similar/`.

### Step 7: Present Phase 3 Options

After Phase 2 completes, present the user with options for any remaining unresolved groups:

**Option A:** Use Claude's vision to compare the images and pick the best one (uses AI tokens, ~1500 tokens per image)

**Option B:** Open the groups in Finder for manual review

**Option C:** Keep all remaining similar images (skip Phase 3)

Do NOT proceed with Phase 3 without explicit user approval.

## Undo

To reverse all file moves:

```bash
python3 ~/.claude/skills/photo-dedup/scripts/photo_dedup.py undo "$PHOTO_DIR/photo_dedup_manifest.json"
```

## Summary

View current manifest stats:

```bash
python3 ~/.claude/skills/photo-dedup/scripts/photo_dedup.py summary "$PHOTO_DIR/photo_dedup_manifest.json"
```

## Safety

- **Never deletes files** — only moves to `duplicates_review/` folder
- **Dry run first** — always show dry run before actual moves
- **Preserves folder structure** — moved files retain their path
- **Photos libraries excluded** — won't touch `.photoslibrary` bundles
- **Full move log** — manifest tracks every action for undo
- **Undo support** — can reverse all moves from manifest
```

**Step 2: Verify skill file is well-formed**

```bash
head -5 ~/.claude/skills/photo-dedup/SKILL.md
```

Expected: YAML frontmatter with name, description, allowed-tools.

---

### Task 5: Test on a Small Sample

**Step 1: Create a test directory with known duplicates**

```bash
TEST_DIR="/tmp/photo_dedup_test"
mkdir -p "$TEST_DIR/folder_a" "$TEST_DIR/folder_b"

# Create a test image
python3 -c "
from PIL import Image
img = Image.new('RGB', (800, 600), color='red')
img.save('$TEST_DIR/folder_a/photo1.jpg')
# Exact duplicate
img.save('$TEST_DIR/folder_b/photo1_copy.jpg')
# Similar but different size
img_small = img.resize((400, 300))
img_small.save('$TEST_DIR/folder_b/photo1_small.jpg')
# Different image
img2 = Image.new('RGB', (800, 600), color='blue')
img2.save('$TEST_DIR/folder_a/photo2.jpg')
print('Test images created')
"
```

**Step 2: Run scan**

```bash
python3 ~/.claude/skills/photo-dedup/scripts/photo_dedup.py scan "$TEST_DIR"
```

Expected: Finds 4 images, 1 exact duplicate group, 1 similar group.

**Step 3: Dry run exact dedup**

```bash
python3 ~/.claude/skills/photo-dedup/scripts/photo_dedup.py dedup-exact "$TEST_DIR/photo_dedup_manifest.json" --dry-run
```

Expected: Shows photo1_copy.jpg would be moved.

**Step 4: Run exact dedup**

```bash
python3 ~/.claude/skills/photo-dedup/scripts/photo_dedup.py dedup-exact "$TEST_DIR/photo_dedup_manifest.json"
```

Expected: photo1_copy.jpg moved to duplicates_review/exact/.

**Step 5: Test undo**

```bash
python3 ~/.claude/skills/photo-dedup/scripts/photo_dedup.py undo "$TEST_DIR/photo_dedup_manifest.json"
ls "$TEST_DIR/folder_b/"
```

Expected: photo1_copy.jpg restored to folder_b.

**Step 6: Clean up test dir**

```bash
rm -rf "$TEST_DIR"
```

**Step 7: Commit the skill**

```bash
cd ~/.claude/skills
git add photo-dedup/
git commit -m "feat: add photo-dedup skill for duplicate photo detection"
```

---

### Task 6: Run on Real Photo Collection

**Step 1: Run scan on actual directory**

```bash
python3 ~/.claude/skills/photo-dedup/scripts/photo_dedup.py scan '/Volumes/Macintosh HD — Data/Users/lincolnmitchell_mb/Documents/Photos and Videos'
```

This will take several minutes for 44K images. Show progress updates to user.

**Step 2: Show summary**

```bash
python3 ~/.claude/skills/photo-dedup/scripts/photo_dedup.py summary '/Volumes/Macintosh HD — Data/Users/lincolnmitchell_mb/Documents/Photos and Videos/photo_dedup_manifest.json'
```

**Step 3: Present results and ask user to confirm Phase 1 (exact dedup)**

Run dry-run first, show results, get user confirmation, then execute.

**Step 4: Present results and ask user to confirm Phase 2 (similar dedup)**

Run dry-run first, show results, get user confirmation, then execute.

**Step 5: Present Phase 3 options for unresolved groups**

Show the user the three options (AI comparison, manual review, skip) and wait for their decision.
