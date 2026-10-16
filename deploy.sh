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

# The job feed must be real XML. A missing file falls through to the SPA shell.
if [[ ! -f dist/public/feeds/jobs.xml ]] || ! head -c 80 dist/public/feeds/jobs.xml | grep -q '<?xml'; then
  echo "✗ Job feed missing or not XML (dist/public/feeds/jobs.xml). Aborting, nothing deployed." >&2
  exit 1
fi

# Vite copies client/public into dist/public. The rsync below sends that whole
# directory, so this file lands at /Rebel-Talent-Systems-Capability-Statement.pdf.
CAPABILITY_PDF="dist/public/Rebel-Talent-Systems-Capability-Statement.pdf"
if [[ ! -f "$CAPABILITY_PDF" ]] || ! head -c 5 "$CAPABILITY_PDF" | grep -q '%PDF'; then
  echo "✗ Capability statement PDF missing or not a PDF ($CAPABILITY_PDF). Aborting, nothing deployed." >&2
  exit 1
fi

# Gate 2: prove the prerender captured REAL rendered content, not a Suspense/SPA
# shell. The copyright line is footer text that only exists once React has rendered,
# so its presence on both an eager route (/) and a lazy route (/services, /advisory)
# confirms code-split routes prerendered correctly. Guards against lazy-load regressions.
for f in dist/public/index.html dist/public/services/index.html dist/public/advisory/index.html; do
  if ! grep -qi "all rights reserved" "$f"; then
    echo "✗ $f looks like an unrendered shell (no rendered footer content). Aborting, nothing deployed." >&2
    exit 1
  fi
done
if ! grep -q 'download="Rebel-Talent-Systems-Capability-Statement.pdf"' dist/public/index.html; then
  echo "✗ Homepage prerender is missing the capability statement download. Aborting, nothing deployed." >&2
  exit 1
fi
echo "==> Prerender verified (files present + real content rendered)."

echo "==> Syncing to server…"
# Whole dist/public tree, including the capability statement PDF. No exclude filter.
rsync -az --delete dist/public/ root@64.225.2.41:/opt/fcc/static/rts/

echo "==> Committing + pushing…"
if [[ -n "$(git status --porcelain)" ]]; then
  git add -A
  git commit -m "${1:-Update marketing site}"
fi
git push origin main

echo "==> Live: https://rebeltalentsystems.com"
