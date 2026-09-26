import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { buildJobsFeedXmlFromApi } from "@shared/jobFeed.mjs";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Live job feed. Same generator as dist/public/feeds/jobs.xml.
  // Nginx serves the built file. This route covers dev and the Express server.
  app.get("/feeds/jobs.xml", async (_req, res) => {
    try {
      const xml = await buildJobsFeedXmlFromApi();
      res.setHeader("Cache-Control", "public, max-age=300");
      res.status(200).type("application/xml; charset=utf-8").send(xml);
    } catch (err) {
      console.error("Job feed failed:", err);
      res.setHeader("Cache-Control", "no-store");
      res.status(502).type("text/plain; charset=utf-8").send("Job feed unavailable");
    }
  });

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  return httpServer;
}
