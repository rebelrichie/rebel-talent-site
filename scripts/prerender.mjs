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
  "/services",
  "/pricing",
  "/how-it-works",
  "/testimonials",
  "/case-studies",
  "/podcast",
  "/platform",
  "/client-portal",
  "/command",
  "/free-tools",
  "/blog",
  "/certification",
  "/fractional-head-of-talent",
  "/fractional-recruiting-services",
  "/privacy-policy",
];

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

async function prerender() {
  console.log(`[prerender] Starting pre-render of ${ROUTES.length} routes...`);

  const server = await startServer();
  const browser = await launch({ headless: true, args: ["--no-sandbox"] });

  let success = 0;
  let failed = 0;

  for (const route of ROUTES) {
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

  console.log(`\n[prerender] Done: ${success} rendered, ${failed} failed`);
  process.exit(failed > 0 ? 1 : 0);
}

prerender();
