#!/bin/bash
# Watches ~/Downloads for new .md files and moves them to inc/narrate/
# Files prefixed with __foldername__ get placed in that subfolder
# Start: ./watch-downloads.sh
# Stop: Ctrl+C

WATCH_DIR="$HOME/Downloads"
TARGET_DIR="$(cd "$(dirname "$0")/../../inc/narrate" && pwd)"

echo "Watching $WATCH_DIR for .md files..."
echo "Moving to $TARGET_DIR"
echo "Press Ctrl+C to stop"
echo ""

fswatch -0 --event Created "$WATCH_DIR" | while IFS= read -r -d '' file; do
  if [[ "$file" == *.md ]]; then
    filename="$(basename "$file")"
    sleep 0.5
    if [ -f "$file" ]; then
      # Check for folder prefix: __foldername__filename.md
      if [[ "$filename" =~ ^__([^_]+)__(.+)$ ]]; then
        subfolder="${BASH_REMATCH[1]}"
        realname="${BASH_REMATCH[2]}"
        mkdir -p "$TARGET_DIR/$subfolder"
        mv "$file" "$TARGET_DIR/$subfolder/$realname"
        echo "Moved: $realname → inc/narrate/$subfolder/$realname"
      else
        mv "$file" "$TARGET_DIR/$filename"
        echo "Moved: $filename → inc/narrate/$filename"
      fi
    fi
  fi
done
