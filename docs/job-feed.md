# Job feed

Public URL: `https://rebeltalentsystems.com/feeds/jobs.xml`

The feed is Talent.com XML. One `<job>` per open role on the first-party board. It is not a second list of jobs.

## How it stays in sync

The board (`/jobs`) and this feed both read `https://rebelcommand.dev/api/public/jobs`. When a role is added or removed there, it is in or out of the feed. `/jobs/general` is not a role and is left out.

Two ways that file is served, from the same generator (`shared/jobFeed.mjs`):

1. **Site build.** `npm run build` runs `scripts/prerender.mjs`, which writes `dist/public/feeds/jobs.xml` in the same step as `sitemap.xml`. `./deploy.sh` rsyncs `dist/public/` to the nginx docroot. The URL is a real XML file, not the SPA HTML fallback. This snapshot matches the board at build time.
2. **Between builds.** The Cloudflare Worker in `docs/jobs-feed-worker.js` runs that same generator on each request and caches for 5 minutes. Attach it once:

```
cd docs
npx wrangler deploy --config jobs-feed-wrangler.toml
```

The route is `rebeltalentsystems.com/feeds/jobs.xml`. After that, adding or removing a role in Rebel Command updates the feed with no marketing rebuild and no hand edit of the XML.

Local dev serves the same XML from the Express route `GET /feeds/jobs.xml`.

The Technical Product Manager role (`5ab49383-7950-471b-b37a-558c26054eae`) is shown as `$100,000 - $140,000` while the API still stores the previous $85,000 to $115,000 band. Other roles keep the compensation the API sends. If that role's API band changes to something else, the site shows the API value.

## Register the feed

Give each partner the URL above. They crawl it. Approval is theirs, even when the crawl is free. Do not register `/jobs.xml` or `/feed.xml`. Those paths are the site HTML fallback.

### Talent.com

1. Open [Talent.com XML integrations](https://www.talent.com/integrations).
2. Choose crawl by XML URL (not FTP).
3. Submit `https://rebeltalentsystems.com/feeds/jobs.xml`.
4. Required fields already in the feed: `referencenumber`, `title`, `company`, `city`, `state`, `country`, `dateposted`, `url`, `description`.
5. Salary is included only when the role has a pay range (`salary_min`, `salary_max`, `salary_currency`, `period`, `type`). `isremote` is `yes` or `no` when the role says how the work is done.
6. The `<url>` is the canonical job page. Add `?source=talent` yourself only if you want click tracking. The feed leaves the URL canonical.

### Jooble

1. Jooble takes an employer account or an XML partnership. Start at [Jooble](https://jooble.org) or their partnership note: [why a Jooble partnership is useful](https://help.jooble.org/en/support/solutions/articles/60000037108-why-is-partnership-with-jooble-useful-and-what-are-the-cooperation-options).
2. Send them `https://rebeltalentsystems.com/feeds/jobs.xml`.
3. Tell them the file is Talent.com-shaped, with one job per open role, stable id in `referencenumber`, and the canonical URL in `url`. They map those fields on their side. You do not maintain a second file.

### Adzuna

1. Open [Adzuna hire products](https://www.adzuna.com/hire/products/).
2. Ask for organic XML ingestion and give them `https://rebeltalentsystems.com/feeds/jobs.xml`.
3. Same file as Talent.com and Jooble. If they ask for a field map, use `referencenumber` as the job id, `url` as the listing URL, `company` as the hiring organization shown on the site, and `description` as the HTML body.
