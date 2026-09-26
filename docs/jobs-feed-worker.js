// Cloudflare Worker for https://rebeltalentsystems.com/feeds/jobs.xml
// Same generator as the static file written by scripts/prerender.mjs.
// After this route is attached, the feed follows the public jobs API
// on each request. A marketing-site rebuild is not required.
//
// Deploy from docs/:
//   npx wrangler deploy --config jobs-feed-wrangler.toml

import { JOBS_FEED_PATH, buildJobsFeedXmlFromApi } from "../shared/jobFeed.mjs";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname.length > 1 && url.pathname.endsWith("/")
      ? url.pathname.slice(0, -1)
      : url.pathname;
    if (path !== JOBS_FEED_PATH) {
      return fetch(request);
    }
    try {
      const xml = await buildJobsFeedXmlFromApi();
      return new Response(xml, {
        status: 200,
        headers: {
          "content-type": "application/xml; charset=utf-8",
          "cache-control": "public, max-age=300",
        },
      });
    } catch (err) {
      console.error("Job feed failed", err);
      return new Response("Job feed unavailable", {
        status: 502,
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "no-store",
        },
      });
    }
  },
};
