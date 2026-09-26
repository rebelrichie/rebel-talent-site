#!/usr/bin/env node
// Safe addition — Pre-render all static routes after Vite build
// Spins up a local server, visits each route with Puppeteer, saves rendered HTML
// Run: node scripts/prerender.mjs (after vite build)

import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, join, extname, dirname } from "path";
import { launch } from "puppeteer";
import { applyDocumentShell, toPublicJob } from "../shared/publicJob.mjs";

const DIST_DIR = resolve(import.meta.dirname, "../dist/public");
const PORT = 4173;

const ROUTES = [
  "/",
  "/about",
  "/about/vision",
  "/services",
  "/contingent",
  "/testimonials",
  "/case-studies",
  "/podcast",
  "/free-tools",
  "/blog",
  "/certification",
  "/strategy-call",
  "/hiring-readiness",
  "/privacy-policy",
  "/jobs",
  "/jobs/general",
  "/advisory",
  "/startups",
  "/fractional",
  "/cleared",
  "/advisors",
];

// Sitemap entries for the curated static routes. Kept here (not read from the
// hand-maintained XML) so the sitemap regenerates from a single source of truth
// on every build. /how-it-works, /pricing, /fractional-head-of-talent and
// /fractional-recruiting-services are intentionally EXCLUDED because they now 301
// to the consolidated /services page, and /greener-planet is excluded because it
// is noindex.
const SITEMAP_STATIC = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.9" },
  { path: "/about/vision", changefreq: "monthly", priority: "0.8" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/contingent", changefreq: "monthly", priority: "0.95" },
  { path: "/fractional", changefreq: "monthly", priority: "0.9" },
  { path: "/cleared", changefreq: "monthly", priority: "0.9" },
  { path: "/advisors", changefreq: "monthly", priority: "0.7" },
  { path: "/case-studies", changefreq: "monthly", priority: "0.9" },
  { path: "/testimonials", changefreq: "monthly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/podcast", changefreq: "weekly", priority: "0.7" },
  { path: "/free-tools", changefreq: "monthly", priority: "0.7" },
  { path: "/certification", changefreq: "monthly", priority: "0.7" },
  { path: "/advisory", changefreq: "monthly", priority: "0.8" },
  { path: "/startups", changefreq: "monthly", priority: "0.85" },
  { path: "/jobs", changefreq: "daily", priority: "0.95" },
  { path: "/jobs/general", changefreq: "monthly", priority: "0.7" },
  { path: "/strategy-call", changefreq: "monthly", priority: "0.85" },
  { path: "/hiring-readiness", changefreq: "monthly", priority: "0.85" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
];

const SITE_URL = "https://rebeltalentsystems.com";

// Simple static file server for the built dist
function startServer() {
  const MIME_TYPES = {
    ".html": "text/html",
    ".js": "application/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".woff2": "font/woff2",
    ".woff": "font/woff",
    ".xml": "application/xml",
    ".webmanifest": "application/manifest+json",
  };

  return new Promise((res) => {
    const server = createServer((req, res2) => {
      let filePath = join(DIST_DIR, req.url === "/" ? "/index.html" : req.url);

      // SPA fallback — if file doesn't exist, serve index.html
      if (!existsSync(filePath) || !extname(filePath)) {
        filePath = join(DIST_DIR, "index.html");
      }

      try {
        const data = readFileSync(filePath);
        const ext = extname(filePath);
        res2.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
        res2.end(data);
      } catch {
        res2.writeHead(404);
        res2.end("Not found");
      }
    });

    server.listen(PORT, () => {
      console.log(`[prerender] Static server on http://localhost:${PORT}`);
      res(server);
    });
  });
}

// Safe addition — mirror of client/src/lib/jobSlug.ts so build-time URLs
// match what the React pages generate. Keep the two in sync.
function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function jobSlugPath(job) {
  const pub = toPublicJob(job);
  const parts = [pub.title, pub.companyName, pub.location]
    .filter((p) => p && String(p).trim().length > 0)
    .map(slugify)
    .filter((p) => p.length > 0);
  const slug = parts.join("-");
  return slug ? `/jobs/${slug}-${pub.id}` : `/jobs/${job.id}`;
}

const BARE_JOB_UUID = /^\/jobs\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\/?$/i;

// Immediate HTML redirect for hosts that cannot emit an HTTP 301 (nginx
// try_files). Express serveStatic upgrades the same map to a real 301.
// Slug URLs are never redirected.
// Keep in sync with LEGACY_HTML_REDIRECTS in server/static.ts and App.tsx.
// These old files contradict the live pages on ROI, pricing, and voice.
const LEGACY_HTML_REDIRECTS = [
  ["/how-it-works.html", "/services"],
  ["/services.html", "/services"],
  ["/about.html", "/about"],
  ["/testimonials.html", "/testimonials"],
  ["/case-studies.html", "/case-studies"],
];

function writeRedirect(fromPath, toPath) {
  if (!fromPath.startsWith("/") || !toPath.startsWith("/") || fromPath === toPath) return;
  if (toPath.startsWith("//") || toPath.includes("://")) return;
  const canonical = `${SITE_URL}${toPath}`;
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Redirecting</title>
<link rel="canonical" href="${canonical}">
<meta http-equiv="refresh" content="0; url=${toPath}">
<script>location.replace(${JSON.stringify(toPath)}+(location.search||""));</script>
</head>
<body>
<p><a href="${toPath}">Continue</a></p>
</body>
</html>
`;
  // .html paths must be files so nginx try_files $uri serves them.
  // Extensionless paths stay as directory indexes, same as /defense.
  if (extname(fromPath)) {
    const filePath = join(DIST_DIR, fromPath);
    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, html, "utf-8");
    return;
  }
  const dir = join(DIST_DIR, fromPath);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html, "utf-8");
}

// Safe addition — fetch all open jobs so we can pre-render a detail page for
// each one. The sitemap lists the slug URL only. The plain UUID URL stays
// reachable as a redirect to that slug when a slug exists. Each slug page
// bakes JobPosting JSON-LD into the HTML for Google Jobs indexing.
async function fetchJobRoutes() {
  try {
    const res = await fetch("https://rebelcommand.dev/api/public/jobs");
    if (!res.ok) {
      console.warn(`[prerender] jobs fetch failed (${res.status}) — skipping detail pages`);
      return { slugRoutes: [], redirects: [], jobs: [] };
    }
    const data = await res.json();
    const jobs = (data.jobs || []).filter((j) => j && j.id);
    console.log(`[prerender] Fetched ${jobs.length} open roles for detail pre-render`);
    const slugRoutes = [];
    const redirects = [];
    for (const job of jobs) {
      const slugPath = jobSlugPath(job);
      const uuidPath = `/jobs/${job.id}`;
      slugRoutes.push(slugPath);
      if (slugPath !== uuidPath && BARE_JOB_UUID.test(uuidPath)) {
        redirects.push({ from: uuidPath, to: slugPath });
      }
    }
    return { slugRoutes, redirects, jobs };
  } catch (err) {
    console.warn(`[prerender] jobs fetch errored — skipping detail pages: ${err.message}`);
    return { slugRoutes: [], redirects: [], jobs: [] };
  }
}

// Safe addition — blog posts are baked into the site as static data
// (client/src/data/blog-posts.json, consumed by lib/blogData.ts). The old
// rebelcommand.dev/api/blog endpoint is gone, so the sitemap reads the same
// JSON file the pages render from. Single source of truth, no network call.
function fetchBlogRoutes() {
  try {
    const jsonPath = resolve(import.meta.dirname, "../client/src/data/blog-posts.json");
    const all = JSON.parse(readFileSync(jsonPath, "utf-8")).filter((p) => p && p.slug);
    const posts = all
      .filter((p) => p.published !== false)
      .map((p) => ({ slug: p.slug, publishedAt: p.publishedAt || null }));
    const redirects = all
      .filter((p) => p.published === false)
      .map((p) => {
        const to = typeof p.redirectTo === "string" && p.redirectTo.startsWith("/") && !p.redirectTo.startsWith("//")
          ? p.redirectTo
          : "/blog";
        return { from: `/blog/${p.slug}`, to };
      });
    console.log(`[prerender] Loaded ${posts.length} published blog slugs, ${redirects.length} unpublished redirects`);
    return { routes: posts.map((p) => `/blog/${p.slug}`), posts, redirects };
  } catch (err) {
    console.warn(`[prerender] blog data read errored — skipping blog posts: ${err.message}`);
    return { routes: [], posts: [], redirects: [] };
  }
}

// Generate sitemap.xml from the curated static routes plus live job + blog routes.
// Written after pre-render so it is the single source of truth each build.
function generateSitemap(jobRoutes, blogPosts) {
  const today = new Date().toISOString().slice(0, 10);
  const entries = [];

  for (const s of SITEMAP_STATIC) {
    entries.push({ loc: `${SITE_URL}${s.path}`, lastmod: today, changefreq: s.changefreq, priority: s.priority });
  }
  // Slug job URLs only. UUID twins are redirects, not sitemap entries.
  for (const route of jobRoutes) {
    entries.push({ loc: `${SITE_URL}${route}`, lastmod: today, changefreq: "weekly", priority: "0.8" });
  }
  for (const p of blogPosts) {
    const lastmod = p.publishedAt ? new Date(p.publishedAt).toISOString().slice(0, 10) : today;
    entries.push({ loc: `${SITE_URL}/blog/${p.slug}`, lastmod, changefreq: "monthly", priority: "0.7" });
  }

  const body = entries
    .map(
      (e) =>
        `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

  writeFileSync(join(DIST_DIR, "sitemap.xml"), xml, "utf-8");
  console.log(`[prerender] Wrote sitemap.xml (${entries.length} URLs: ${SITEMAP_STATIC.length} static + ${jobRoutes.length} jobs + ${blogPosts.length} blog)`);
}

// /jobs/:id/apply is not a document we want indexed. nginx falls through
// to the homepage shell, so write a real shell with noindex and the role title.
function writeApplyNoindexPages(shell, jobs) {
  let written = 0;
  for (const job of jobs) {
    const pub = toPublicJob(job);
    const title = `Apply: ${pub.title || "Role"} | Rebel Talent`;
    const html = applyDocumentShell(shell, title);
    const targets = new Set([`/jobs/${job.id}/apply`, `${jobSlugPath(pub)}/apply`]);
    for (const route of targets) {
      const dir = join(DIST_DIR, route);
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, "index.html"), html, "utf-8");
      written++;
    }
  }
  console.log(`[prerender] Wrote ${written} noindex apply shells`);
}

async function prerender() {
  const spaShell = existsSync(join(DIST_DIR, "index.html"))
    ? readFileSync(join(DIST_DIR, "index.html"), "utf-8")
    : "";
  const { slugRoutes, redirects, jobs } = await fetchJobRoutes();
  if (spaShell) writeApplyNoindexPages(spaShell, jobs || []);
  // Sitemap and full HTML are slug URLs only. UUID paths get a redirect stub.
  const jobRoutes = slugRoutes;
  const { routes: blogRoutes, posts: blogPosts, redirects: blogRedirects } = await fetchBlogRoutes();
  const allRoutes = [...ROUTES, ...jobRoutes, ...blogRoutes];
  console.log(`[prerender] Starting pre-render of ${allRoutes.length} routes (${ROUTES.length} static + ${slugRoutes.length} slug role detail + ${blogRoutes.length} blog, ${redirects.length} uuid redirects)...`);

  const server = await startServer();
  // Restart Chromium every few routes. A single long-lived browser gets
  // OOM-killed on this Mac when prerendering 50+ SPA routes.
  const chromeArgs = [
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--disable-gpu",
    "--disable-extensions",
    "--no-first-run",
    "--single-process",
  ];
  let browser = await launch({ headless: true, args: chromeArgs });

  let success = 0;
  let failed = 0;
  let sinceRestart = 0;

  for (const route of allRoutes) {
    try {
      if (sinceRestart >= 5) {
        await browser.close().catch(() => {});
        browser = await launch({ headless: true, args: chromeArgs });
        sinceRestart = 0;
      }
      const page = await browser.newPage();
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "domcontentloaded",
        timeout: 30000,
      });

      // Wait for React to render + ScrollReveal animations to settle
      await page.waitForSelector("main", { timeout: 10000 }).catch(() => {});
      await new Promise((r) => setTimeout(r, 800));

      // Get the fully rendered HTML
      const html = await page.content();

      // Write to the correct file path
      const dir = route === "/" ? DIST_DIR : join(DIST_DIR, route);
      mkdirSync(dir, { recursive: true });
      const filePath = join(dir, "index.html");
      writeFileSync(filePath, html, "utf-8");

      console.log(`  ✅ ${route} → ${filePath.replace(DIST_DIR, "dist/public")} (${Math.round(html.length / 1024)}KB)`);
      success++;
      await page.close().catch(() => {});
      sinceRestart++;
    } catch (err) {
      console.error(`  ❌ ${route} — ${err.message}`);
      failed++;
      await browser.close().catch(() => {});
      browser = await launch({ headless: true, args: chromeArgs });
      sinceRestart = 0;
    }
  }

  await browser.close().catch(() => {});
  server.close();

  // UUID job URLs and /defense redirect. They are not sitemap entries.
  try {
    const map = {};
    for (const redirect of redirects) {
      writeRedirect(redirect.from, redirect.to);
      map[redirect.from.replace(/^\/jobs\//, "").toLowerCase()] = redirect.to;
    }
    writeRedirect("/defense", "/cleared");
    for (const [from, to] of LEGACY_HTML_REDIRECTS) {
      writeRedirect(from, to);
    }
    for (const redirect of blogRedirects) {
      writeRedirect(redirect.from, redirect.to);
    }
    writeFileSync(join(DIST_DIR, "job-redirects.json"), JSON.stringify(map), "utf-8");
    console.log(`[prerender] Wrote ${redirects.length} job UUID redirects + /defense -> /cleared + ${LEGACY_HTML_REDIRECTS.length} legacy html redirects + ${blogRedirects.length} unpublished blog redirects`);
  } catch (err) {
    console.warn(`[prerender] redirect stubs failed: ${err.message}`);
  }

  // Regenerate sitemap.xml from the routes we just rendered.
  try {
    generateSitemap(jobRoutes, blogPosts);
  } catch (err) {
    console.warn(`[prerender] sitemap generation failed: ${err.message}`);
  }

  console.log(`\n[prerender] Done: ${success} rendered, ${failed} failed`);
  process.exit(failed > 0 ? 1 : 0);
}

prerender();
