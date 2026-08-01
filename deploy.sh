#!/usr/bin/env bash
# One-command deploy for the marketing site (rebeltalentsystems.com).
# Usage:  ./deploy.sh "optional commit message"
set -euo pipefail
export PATH="/opt/homebrew/bin:$PATH"
cd "$(dirname "$0")"

echo "==> Building (vite + prerender)…"
npm run build

# Gate 1: never ship a bare SPA shell. Prerender must have written these.
if [[ ! -f dist/public/services/index.html || ! -f dist/public/sitemap.xml ]]; then
  echo "✗ Prerender did not run (missing services/index.html or sitemap.xml). Aborting, nothing deployed." >&2
  exit 1
fi

# Gate 2: prove the prerender captured REAL rendered content, not a Suspense/SPA
# shell. "Break Orbit" is footer text that only exists once React has rendered,
# so its presence on both an eager route (/) and a lazy route (/services, /pricing)
# confirms code-split routes prerendered correctly. Guards against lazy-load regressions.
for f in dist/public/index.html dist/public/services/index.html dist/public/pricing/index.html; do
  if ! grep -qi "break orbit" "$f"; then
    echo "✗ $f looks like an unrendered shell (no rendered footer content). Aborting, nothing deployed." >&2
    exit 1
  fi
done
echo "==> Prerender verified (files present + real content rendered)."

echo "==> Syncing to server…"
rsync -az --delete dist/public/ root@64.225.2.41:/opt/fcc/static/rts/

echo "==> Committing + pushing…"
if [[ -n "$(git status --porcelain)" ]]; then
  git add -A
  git commit -m "${1:-Update marketing site}"
fi
git push origin main

echo "==> Live: https://rebeltalentsystems.com"
