#!/bin/bash
set -e

GH_TOKEN="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"
GH_USER="rebelrichie"
REPO="rebel-talent-site"
REMOTE="https://${GH_USER}:${GH_TOKEN}@github.com/${GH_USER}/${REPO}.git"

echo "==> Cleaning up any git locks..."
rm -f .git/index.lock

echo "==> Staging all files..."
git add -A

echo "==> Committing..."
git commit -m "Initial commit — Rebel Talent Systems site" || echo "(nothing new to commit)"

echo "==> Setting remote..."
git remote remove origin 2>/dev/null || true
git remote add origin "$REMOTE"

echo "==> Pushing to GitHub..."
git push -u origin main --force

echo ""
echo "Done! Repo live at: https://github.com/${GH_USER}/${REPO}"
echo ""
echo "Cloudflare Pages build settings:"
echo "  Build command:       npm run build"
echo "  Build output dir:    dist/public"
echo "  Node version var:    NODE_VERSION = 18"
