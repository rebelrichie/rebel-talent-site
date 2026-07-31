#!/usr/bin/env bash
# One-command deploy for the marketing site (rebeltalentsystems.com).
# Usage:  ./deploy.sh "optional commit message"
set -euo pipefail
export PATH="/opt/homebrew/bin:$PATH"
cd "$(dirname "$0")"

echo "==> Building (vite + prerender)…"
npm run build

# Gate: never ship a bare SPA shell. Prerender must have written these.
if [[ ! -f dist/public/services/index.html || ! -f dist/public/sitemap.xml ]]; then
  echo "✗ Prerender did not run (missing services/index.html or sitemap.xml). Aborting, nothing deployed." >&2
  exit 1
fi
echo "==> Prerender verified."

echo "==> Syncing to server…"
rsync -az --delete dist/public/ root@64.225.2.41:/opt/fcc/static/rts/

echo "==> Committing + pushing…"
if [[ -n "$(git status --porcelain)" ]]; then
  git add -A
  git commit -m "${1:-Update marketing site}"
fi
git push origin main

echo "==> Live: https://rebeltalentsystems.com"
