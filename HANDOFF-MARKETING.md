# Rebel Talent Systems — Marketing Site Handoff

Paste this into a fresh session before working on the marketing site (`rebeltalentsystems.com`). It's everything worth knowing up front.

## What this is
The static marketing SPA at `apps/rebel-talent-ios/rebel-talent-site/`. Separate from the two Next.js apps (Rebel Command, Rebel Apply). Own git repo, own build, own deploy. Vite 7 / React 18 / TypeScript / Tailwind / wouter router / react-helmet-async.

## Repo layout (important: nested git repos)
- Outer repo: `FractionalCommandCenter`, branch `master`.
- This site is an EMBEDDED git repo: `rebel-talent-site/.git`, remote `github.com/rebelrichie/rebel-talent-site`, branch `main`. Commit and push from INSIDE `rebel-talent-site/`, not the outer repo. Ignore the "embedded repo" warning from the outer repo.
- Pages: `client/src/pages/*.tsx`. Shared components: `client/src/components/*.tsx`. Routes wired in `client/src/App.tsx`. Public assets: `client/public/`. Global CSS + design tokens: `client/src/index.css`.

## Build + deploy (do it exactly this way)
```
cd apps/rebel-talent-ios/rebel-talent-site
PATH="/opt/homebrew/bin:$PATH" npm run build          # = vite build && node scripts/prerender.mjs
ls dist/public/services/index.html dist/public/sitemap.xml   # verify prerender ran
rsync -az --delete dist/public/ root@64.225.2.41:/opt/fcc/static/rts/
git add -A && git commit -m "..." && git push origin main
```
- `npm run build` MUST be used, never bare `npx vite build`. Bare vite skips `scripts/prerender.mjs` (Puppeteer), which ships a bare SPA shell for every route with no per-route HTML and no sitemap.xml — that triggers Google's "Duplicate, Google chose different canonical" indexing failure. Prerender writes ~35 per-route HTML files + sitemap.
- New routes must be added in THREE places: `App.tsx` (route), the relevant nav/footer, AND `scripts/prerender.mjs` (so it prerenders + hits the sitemap).
- The build has NO tsc type-check (esbuild only), so loose/untyped props won't fail the build. Don't rely on the build to catch type errors.

## Sandbox limitations (this agent environment)
- The mounted folder BLOCKS file deletion and blocks deleting `.DS_Store`. So `rm` fails with "Operation not permitted," and a real `npm run build` fails at vite's prepare-out-dir step (it tries to delete `dist/public/.DS_Store`). To verify code compiles from the sandbox, build to a temp dir: `npx vite build --outDir /tmp/rtsbuildN --emptyOutDir` (compiles fine, ~1700 modules, confirms validity). The user runs the REAL `npm run build` + deploy on their Mac. Deletions also must be run by the user on their Mac.
- Sandbox can't push to GitHub (no creds). User runs all git/build/deploy/rm.
- Path mapping: `/Users/richielampani/Projects/FractionalCommandCenter/...` ↔ `/sessions/<id>/mnt/FractionalCommandCenter/...`.

## Voice rules (ALL copy)
Direct and plain. Short sentences. No corporate filler, no buzzwords, no hype. No em dashes. No exclamation points. Nothing that reads like AI wrote it. Specifics over adjectives. First person as Richie where the page speaks as him.

## Design rules
Keep the existing dark theme, typography, spacing, components. No new fonts, no new accent colors. `rebel-red` is the accent. Alternate section backgrounds `bg-rebel-space` / `bg-zinc-950` with `border-t border-zinc-900`, sections `py-16 sm:py-24`. Headings `font-display uppercase tracking-tight`. Eyebrows `font-mono tracking-[0.3em] uppercase`. Cards use `GlowCard`. CTAs call `hapticTap()`. When adding a section, preserve the alternating bg rhythm (check neighbors).

## Single sources of truth (change once, propagates)
- `CapacityBadge.tsx` — the "capacity open" offerings line. No longer uses a count number; text lists the four offerings (Embedded/Fractional, Retained Search, Contingent, Advisory) under Richie.
- `CurrentEngagements.tsx` — active client list + logos (EarthDaily Federal, Kalibri Labs).
- `PageSEO.tsx` — per-page SEO via react-helmet-async. Props: title, description, path, ogTitle, ogDescription, ogImage, schemas, breadcrumbs, noindex. The base `index.html` intentionally omits meta description / og:title / og:description so helmet can own them per page without duplicates.

## Four offerings (positioning)
Embedded/Fractional (1 seat open), Retained Search, Contingent, Advisory (fixed-scope work on hiring plan / AI / recruiting infra before you spend). Everything runs under Richie's direction. Public agent count is 27 (site is internally consistent at 27; only internal CLAUDE.md still says 23 — don't "fix" the site to 23).

## State as of this handoff
Just finished a performance + consistency pass:
- Recompressed the 8 referenced photos + hero banner (q82–85 progressive, same dimensions). hero-banner is now a JPEG (32K, was 449K PNG); CSS `.space-hero` in `index.css` points at `/hero-banner.jpg`. ~1.6MB off images that actually load.
- Fixed `geo.placename` in `index.html` (was Alpharetta, now Roswell, to match the JSON-LD postal address). CONFIRM Roswell is the correct city with Richie.
- User is deleting 11 unused images from `client/public/` (~4MB dead deploy weight): richie.png, icons-all.png, richie-workstation.jpg, richie-nyc.jpg, richie-operator.jpg, richie-headshot.png, rachael-tyrell.jpg, richie-young.jpg, hero-banner.png (orphaned after the JPEG swap), og-fractional.png, og-how-it-works.png. All confirmed unreferenced.
- Earlier in the arc: added Advisory as the 4th offering across Home/Services/Navbar/Footer/CapacityBadge/StrategyCall; built the Vision page (`/about/vision`) incl. an "invitation" section; consolidated services into `/services`; removed the old `/command` demo; added apply-form file-size guards (10MB) + accessibility fixes on JobApply/GeneralApply.

## Open / unresolved
- "The today screen is broken" — reported earlier, NEVER diagnosed. Unknown what "today screen" refers to (possibly a page in the Command Center app under `src/app/(app)/`, the morning brief, or a marketing route). Ask Richie to point at it.
- OG share images: several pages lack unique OG images or reuse another page's (FreeTools, StrategyCall, HiringReadiness, Certification, Podcast, Blog; Advisory reuses Services'; Vision reuses About's). Needs image assets to fix — design work, don't fabricate.
- Advisory.tsx STATS block ("#1 Nationally", "15 TS/SCI roles concurrently", "90%+ offer acceptance") — none tie to a named case study. Confirm with Richie which are backed before keeping/softening/swapping.
- Render-blocking Google Fonts stylesheet in `index.html` is the one remaining perf item; left as-is because `display=swap` is already set and a preload/onload swap risks FOUT. Only touch if perf demands it.

## Gotchas
- Git lock: `rm -f .git/index.lock`.
- Server: DigitalOcean droplet `root@64.225.2.41`, static served from `/opt/fcc/static/rts/`.
- After ANY image format change, update every reference (CSS + components) — the build won't warn you about a broken `url()` or `src`.
