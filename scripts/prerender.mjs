#!/usr/bin/env node
// Safe addition — Pre-render all static routes after Vite build
// Spins up a local server, visits each route with Puppeteer, saves rendered HTML
// Run: node scripts/prerender.mjs (after vite build)

import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, join, extname } from "path";
import { launch } from "puppeteer";

const DIST_DIR = resolve(import.meta.dirname, "../dist/public");
const PORT = 4173;

const ROUTES = [
  "/",
  "/about",
  "/about/vision",
  "/services",
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
  const parts = [job.title, job.companyName, job.location]
    .filter((p) => p && String(p).trim().length > 0)
    .map(slugify)
    .filter((p) => p.length > 0);
  const slug = parts.join("-");
  return slug ? `/jobs/${slug}-${job.id}` : `/jobs/${job.id}`;
}

// Safe addition — fetch all open jobs so we can pre-render a detail page for
// each one. Every job gets TWO routes: the new slug URL (canonical, goes in
// the sitemap first) and the old plain-UUID URL (kept so existing links and
// indexed pages keep resolving to real HTML). Each page bakes JobPosting
// JSON-LD into the HTML for Google Jobs indexing.
async function fetchJobRoutes() {
  try {
    const res = await fetch("https://rebelcommand.dev/api/public/jobs");
    if (!res.ok) {
      console.warn(`[prerender] jobs fetch failed (${res.status}) — skipping detail pages`);
      return { slugRoutes: [], uuidRoutes: [] };
    }
    const data = await res.json();
    const jobs = (data.jobs || []).filter((j) => j && j.id);
    console.log(`[prerender] Fetched ${jobs.length} open roles for detail pre-render`);
    return {
      slugRoutes: jobs.map((j) => jobSlugPath(j)),
      uuidRoutes: jobs.map((j) => `/jobs/${j.id}`),
    };
  } catch (err) {
    console.warn(`[prerender] jobs fetch errored — skipping detail pages: ${err.message}`);
    return { slugRoutes: [], uuidRoutes: [] };
  }
}

// Safe addition — blog posts are baked into the site as static data
// (client/src/data/blog-posts.json, consumed by lib/blogData.ts). The old
// rebelcommand.dev/api/blog endpoint is gone, so the sitemap reads the same
// JSON file the pages render from. Single source of truth, no network call.
function fetchBlogRoutes() {
  try {
    const jsonPath = resolve(import.meta.dirname, "../client/src/data/blog-posts.json");
    const posts = JSON.parse(readFileSync(jsonPath, "utf-8"))
      .filter((p) => p && p.slug)
      .map((p) => ({ slug: p.slug, publishedAt: p.publishedAt || null }));
    console.log(`[prerender] Loaded ${posts.length} blog post slugs from static data`);
    return { routes: posts.map((p) => `/blog/${p.slug}`), posts };
  } catch (err) {
    console.warn(`[prerender] blog data read errored — skipping blog posts: ${err.message}`);
    return { routes: [], posts: [] };
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
  // jobRoutes carries slug URLs first, then the old UUID URLs. Both are
  // listed so every live job URL in the wild resolves and is crawlable;
  // canonicals on the pages point Google at the slug form.
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

async function prerender() {
  const { slugRoutes, uuidRoutes } = await fetchJobRoutes();
  // Slug URLs are canonical; UUID URLs are kept alive for old links.
  const jobRoutes = [...slugRoutes, ...uuidRoutes];
  const { routes: blogRoutes, posts: blogPosts } = await fetchBlogRoutes();
  const allRoutes = [...ROUTES, ...jobRoutes, ...blogRoutes];
  console.log(`[prerender] Starting pre-render of ${allRoutes.length} routes (${ROUTES.length} static + ${slugRoutes.length} slug + ${uuidRoutes.length} uuid role detail + ${blogRoutes.length} blog)...`);

  const server = await startServer();
  const browser = await launch({ headless: true, args: ["--no-sandbox"] });

  let success = 0;
  let failed = 0;

  for (const route of allRoutes) {
    try {
      const page = await browser.newPage();
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "networkidle0",
        timeout: 15000,
      });

      // Wait for React to render + ScrollReveal animations to settle
      await page.waitForSelector("main", { timeout: 5000 }).catch(() => {});
      await new Promise((r) => setTimeout(r, 1000));

      // Get the fully rendered HTML
      const html = await page.content();

      // Write to the correct file path
      const dir = route === "/" ? DIST_DIR : join(DIST_DIR, route);
      mkdirSync(dir, { recursive: true });
      const filePath = join(dir, "index.html");
      writeFileSync(filePath, html, "utf-8");

      console.log(`  ✅ ${route} → ${filePath.replace(DIST_DIR, "dist/public")} (${Math.round(html.length / 1024)}KB)`);
      success++;
      await page.close();
    } catch (err) {
      console.error(`  ❌ ${route} — ${err.message}`);
      failed++;
    }
  }

  await browser.close();
  server.close();

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
