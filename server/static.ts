import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { applyDocumentShell } from "../shared/publicJob.mjs";

const BARE_JOB_UUID = /^\/jobs\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\/?$/i;

// Old static pages still indexed next to the SPA. Keep in sync with
// scripts/prerender.mjs and the client routes in App.tsx.
const LEGACY_HTML_REDIRECTS: Record<string, string> = {
  "/how-it-works.html": "/services",
  "/services.html": "/services",
  "/about.html": "/about",
  "/testimonials.html": "/testimonials",
  "/case-studies.html": "/case-studies",
};

function loadJobRedirects(distPath: string): Record<string, string> {
  try {
    const raw = fs.readFileSync(path.resolve(distPath, "job-redirects.json"), "utf-8");
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const map: Record<string, string> = {};
    for (const [id, target] of Object.entries(parsed)) {
      if (typeof target === "string") map[id.toLowerCase()] = target;
    }
    return map;
  } catch {
    return {};
  }
}

function safeJobTarget(target: string, uuid: string): boolean {
  if (!target.startsWith("/jobs/") || target.startsWith("//") || target.includes("://")) return false;
  if (BARE_JOB_UUID.test(target)) return false;
  if (target === `/jobs/${uuid}` || target === `/jobs/${uuid}/`) return false;
  return true;
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  const jobRedirects = loadJobRedirects(distPath);

  // 301 UUID job twins to the slug URL, /defense to /cleared, and old
  // .html pages to the routes that replaced them.
  // Slug job URLs do not match the bare-UUID pattern.
  app.use((req, res, next) => {
    const pathOnly = req.path;
    const q = req.originalUrl.includes("?") ? req.originalUrl.slice(req.originalUrl.indexOf("?")) : "";
    if (pathOnly === "/defense" || pathOnly === "/defense/") {
      res.redirect(301, `/cleared${q}`);
      return;
    }
    const legacyKey = pathOnly.length > 1 && pathOnly.endsWith("/") ? pathOnly.slice(0, -1) : pathOnly;
    const legacyTarget = LEGACY_HTML_REDIRECTS[legacyKey];
    if (legacyTarget) {
      res.redirect(301, `${legacyTarget}${q}`);
      return;
    }
    const match = pathOnly.match(BARE_JOB_UUID);
    if (match) {
      const uuid = match[1].toLowerCase();
      const target = jobRedirects[uuid];
      if (target && safeJobTarget(target, uuid)) {
        res.redirect(301, `${target}${q}`);
        return;
      }
    }
    next();
  });

  app.use(express.static(distPath));

  // Missing files with an extension (og-*.png, .js, .css) are real 404s.
  // Extensionless paths stay on the SPA fallback so client routing still works.
  app.use("/{*path}", async (req, res) => {
    const last = (req.path.split("/").pop() || "");
    if (last.includes(".")) {
      const notFound = path.resolve(distPath, "404.html");
      if (fs.existsSync(notFound)) {
        res.status(404).sendFile(notFound);
        return;
      }
      res.status(404).type("text/plain").send("Not found");
      return;
    }
    const indexFile = path.resolve(distPath, "index.html");
    if (/\/apply\/?$/.test(req.path) && fs.existsSync(indexFile)) {
      let title = "Apply | Rebel Talent";
      const id = req.path.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i)?.[0];
      if (id) {
        try {
          const response = await fetch(`https://rebelcommand.dev/api/public/jobs/${id}`, {
            headers: { Accept: "application/json", "User-Agent": "RebelTalentSite" },
          });
          if (response.ok) {
            const data = await response.json() as { job?: { title?: string } };
            if (data?.job?.title) title = `Apply: ${data.job.title} | Rebel Talent`;
          }
        } catch {
          // Keep the generic apply title. The page is still noindex.
        }
      }
      res.status(200).type("html").send(applyDocumentShell(fs.readFileSync(indexFile, "utf-8"), title));
      return;
    }
    res.sendFile(indexFile);
  });
}
