// Safe addition — static blog data baked into the site build.
// The blog used to fetch posts from rebelcommand.dev/api/blog at runtime,
// but that app no longer serves the blog API, which left the live blog page
// empty. The posts now live in client/src/data/blog-posts.json (exported once
// from the old database) and ship inside the bundle, so nothing on the server
// can break the blog again. To publish a new post, add an entry to that JSON
// file and redeploy the site. scripts/prerender.mjs reads the same JSON file
// for the sitemap, so the two always stay in sync.
import postsJson from "@/data/blog-posts.json";

export interface StaticBlogPost {
  id: string;
  title: string;
  slug: string;
  body: string | null;
  excerpt: string | null;
  metaDescription: string | null;
  ogImage: string | null;
  author: string | null;
  category: string | null;
  tags: string[];
  featured: boolean;
  publishedAt: string | null;
  published?: boolean;
  redirectTo?: string | null;
}

type BlogRecord = StaticBlogPost;

const ALL_POSTS = postsJson as BlogRecord[];

function safeRedirect(to: string | null | undefined): string {
  if (typeof to === "string" && to.startsWith("/") && !to.startsWith("//") && !to.includes("://")) {
    return to;
  }
  return "/blog";
}

// Public index only. Unpublished posts stay in the JSON for a later rewrite
// and resolve to a 301 (see getUnpublishedRedirect).
export const BLOG_POSTS: StaticBlogPost[] = ALL_POSTS.filter((p) => p.published !== false);

export function getPostBySlug(slug: string | undefined): StaticBlogPost | null {
  if (!slug) return null;
  return BLOG_POSTS.find((p) => p.slug === slug) ?? null;
}

export function getUnpublishedRedirect(slug: string | undefined): string | null {
  if (!slug) return null;
  const post = ALL_POSTS.find((p) => p.slug === slug && p.published === false);
  if (!post) return null;
  return safeRedirect(post.redirectTo);
}

// The three most recent posts other than the one being read.
export function getRelatedPosts(slug: string | undefined, count = 3): StaticBlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, count);
}
