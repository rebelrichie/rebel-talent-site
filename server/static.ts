import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // Missing files with an extension (og-*.png, .js, .css) are real 404s.
  // Extensionless paths stay on the SPA fallback so client routing still works.
  app.use("/{*path}", (req, res) => {
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
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
