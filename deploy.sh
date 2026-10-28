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

# Opt in only. Default deploys do not touch nginx.
# INSTALL_NGINX_CONF=1 ./deploy.sh
# Copies deploy/nginx-site.conf, points unknown routes at /404.html with
# status 404, runs nginx -t, and reloads only when the test passes.
if [[ "${INSTALL_NGINX_CONF:-}" == "1" ]]; then
  echo "==> Installing nginx route config…"
  scp deploy/nginx-site.conf root@64.225.2.41:/etc/nginx/snippets/rebel-talent-routes.conf
  ssh root@64.225.2.41 'bash -s' << 'REMOTE'
set -euo pipefail
shopt -s nullglob
site=""
for f in /etc/nginx/sites-enabled/* /etc/nginx/conf.d/*.conf /etc/nginx/sites-available/*; do
  [[ -f "$f" ]] || continue
  if grep -Eq "opt/fcc/static/rts|rebeltalentsystems.com" "$f"; then
    site="$f"
    break
  fi
done
if [[ -z "$site" ]]; then
  echo "No nginx site file mentions the Rebel docroot. Snippet saved at /etc/nginx/snippets/rebel-talent-routes.conf. Not reloading." >&2
  exit 1
fi
site_real=$(readlink -f "$site")
mkdir -p /etc/nginx/backups
backup="/etc/nginx/backups/$(basename "$site_real").bak-rts-$(date +%Y%m%d%H%M%S)"
cp -a "$site_real" "$backup"
restore_nginx() {
  echo "Restoring ${backup} and reloading the previous config." >&2
  cp -a "$backup" "$site_real"
  if nginx -t; then
    if command -v systemctl >/dev/null 2>&1; then
      systemctl reload nginx
    else
      nginx -s reload
    fi
  fi
}
python3 - "$site_real" << 'PY'
import re, sys
path = sys.argv[1]
text = open(path).read()
include = "include /etc/nginx/snippets/rebel-talent-routes.conf;"
# Drop the old SPA location so it does not fight the snippet's location /.
text2, n = re.subn(
    r"[ \t]*location\s+/\s*\{[^{}]*try_files\s+\$uri\s+\$uri/\s+/index\.html\s*;[^{}]*\}\s*",
    "    " + include + "\n",
    text,
    count=1,
)
if include not in text2:
    if "server {" in text2:
        text2 = text2.replace("server {", "server {\n    " + include, 1)
    else:
        sys.stderr.write("Could not find a server block in %s. Not editing.\n" % path)
        sys.exit(2)
open(path, "w").write(text2)
print("nginx site includes rebel-talent-routes.conf:", path, "replaced_location" if n else "inserted_include")
PY
if ! nginx -t; then
  echo "nginx -t failed. Restoring ${backup}. Not reloading." >&2
  cp -a "$backup" "$site_real"
  exit 1
fi
reloaded=0
if command -v systemctl >/dev/null 2>&1; then
  systemctl reload nginx && reloaded=1
else
  nginx -s reload && reloaded=1
fi
if [[ "$reloaded" -ne 1 ]]; then
  restore_nginx
  exit 1
fi
code_home=$(curl -sk -o /dev/null -w "%{http_code}" https://rebeltalentsystems.com/ || true)
code_missing=$(curl -sk -o /dev/null -w "%{http_code}" https://rebeltalentsystems.com/nonexistent-xyz || true)
code_results=$(curl -sk -o /dev/null -w "%{http_code}" https://rebeltalentsystems.com/results || true)
echo "smoke /:${code_home} /nonexistent-xyz:${code_missing} /results:${code_results}"
if [[ "$code_home" != "200" || "$code_missing" != "404" || "$code_results" != "301" ]]; then
  echo "Smoke test failed. Restoring the previous nginx config." >&2
  restore_nginx
  exit 1
fi
echo "nginx reloaded and smoke test passed"
REMOTE
fi

echo "==> Committing + pushing…"
if [[ -n "$(git status --porcelain)" ]]; then
  git add -A
  git commit -m "${1:-Update marketing site}"
fi
git push origin main

echo "==> Live: https://rebeltalentsystems.com"
