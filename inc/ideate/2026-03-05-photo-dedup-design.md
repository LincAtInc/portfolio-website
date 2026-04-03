# Photo Dedup & Curation Skill Design

## Overview

Claude Code skill (`photo-dedup`) backed by a Python script to find and remove duplicate/similar photos from a large personal photo collection.

**Target directory:** `/Volumes/Macintosh HD — Data/Users/lincolnmitchell_mb/Documents/Photos and Videos`
**Collection size:** ~44,000 images, ~600 videos, 153GB total
**Structure:** Year folders, event folders, loose files, 4x .photoslibrary bundles

## Phased Approach

### Phase 1: Exact Duplicate Removal (Python only, zero AI tokens)

- Recursively scan all image files, skipping `.photoslibrary` / `.photolibrary` bundles
- SHA256 hash each file to find byte-for-byte identical duplicates
- For each duplicate group, keep the file with the shortest/cleanest path
- Move duplicates to `duplicates_review/exact/` preserving original folder structure
- Generate JSON manifest logging every group and every move

### Phase 2: Near-Duplicate Detection (Python only, zero AI tokens)

- Use perceptual hashing (pHash via `imagehash` + `Pillow`) to group visually similar images
- Within each group, compare resolution (keep highest) and file size
- Automatically resolve groups where one image is clearly superior (significantly higher resolution)
- Move inferior versions to `duplicates_review/near/` preserving folder structure
- Groups that can't be auto-resolved are flagged in the manifest for Phase 3

### Phase 3: AI-Assisted Curation (Claude vision, optional, requires approval)

- Read the Phase 2 manifest for unresolved similar-image groups
- Present groups to Claude's vision for subjective comparison (sharpness, composition, expressions)
- Claude picks the "keeper" and explains why
- Move non-keepers to `duplicates_review/similar/`
- This phase is opt-in and runs interactively

## Components

### `photo_dedup.py` - Python script

Handles all file operations and analysis:
- Recursive directory scanning with exclusion patterns
- SHA256 hashing for exact duplicates
- Perceptual hashing (pHash) for visual similarity
- Resolution/filesize comparison
- File move operations with logging
- JSON manifest generation and management

**Dependencies:** `Pillow`, `imagehash`

### `SKILL.md` - Claude Code skill

Orchestrates the workflow:
- Invokes Python script for each phase
- Presents summary statistics after scanning
- Handles Phase 3 interactive comparison (when approved)
- Provides undo capability via manifest

## Safety

- **Never deletes files** - only moves to `duplicates_review/` folder
- **Dry run by default** - first invocation generates report only
- **Preserves folder structure** - moved files retain their path under the review folder
- **.photoslibrary excluded** - won't touch Photos app databases
- **Full move log** - JSON manifest tracks every action for reversal
- **Undo support** - can reverse all moves using the manifest

## File Formats

Images: JPG, JPEG, PNG, HEIC, WEBP, GIF, TIFF, BMP
RAW: CR2, NEF, ARW
Videos: Excluded from dedup (different problem space)

## Outputs

- `duplicates_review/` folder with moved files
- `photo_dedup_manifest.json` with full group/move data
- Summary report printed to console

## Scope Decisions

- Skip .photoslibrary bundles (protect Photos app databases)
- Phase 1 & 2 fully automated, Phase 3 requires explicit approval
- Move to review folder, never delete
- Videos excluded from comparison
