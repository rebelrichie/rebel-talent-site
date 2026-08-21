// Safe addition — human-readable job URLs.
//
// Live job pages get URLs like:
//   /jobs/network-engineer-sme-waveguide-las-vegas-nv-b41a4664-....
// The slug is cosmetic and for SEO; the trailing UUID is the source of truth.
// Old plain-UUID URLs keep working because extractJobId finds the UUID no
// matter what sits in front of it.

const UUID_RX =
  /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;

// Turn free text into a url-safe fragment: lowercase, alphanumerics and
// hyphens only, no repeats, no leading/trailing hyphens.
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

// Build the slug portion from whatever job fields exist. Works with the
// public API shape (title, companyName, location all optional-ish).
export function jobSlug(job: {
  title?: string | null;
  companyName?: string | null;
  location?: string | null;
}): string {
  const parts = [job.title, job.companyName, job.location]
    .filter((p): p is string => !!p && p.trim().length > 0)
    .map(slugify)
    .filter((p) => p.length > 0);
  return parts.join("-");
}

// Full path for a job: slug + UUID when we can build a slug, plain UUID
// otherwise. This is the one function pages should use for links.
export function jobPath(job: {
  id: string;
  title?: string | null;
  companyName?: string | null;
  location?: string | null;
}): string {
  const slug = jobSlug(job);
  return slug ? `/jobs/${slug}-${job.id}` : `/jobs/${job.id}`;
}

// Pull the UUID out of a route param that may be "slug-uuid" or plain "uuid".
// Returns null when there is no UUID at all (bad URL).
export function extractJobId(param: string | null | undefined): string | null {
  if (!param) return null;
  const m = param.match(UUID_RX);
  return m ? m[0].toLowerCase() : null;
}
