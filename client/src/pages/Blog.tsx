// Safe addition – Blog index page fetching from public API
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock, Tag } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";

const API_BASE = "https://rebelcommand.dev/api/blog";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  metaDescription: string | null;
  category: string | null;
  tags: string[] | null;
  author: string | null;
  featured: boolean | null;
  publishedAt: string | null;
}

function formatDate(date: string | null) {
  if (!date) return "";
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(new Date(date));
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(API_BASE)
      .then((r) => r.json())
      .then((data) => { setPosts(data.posts || []); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => p.id !== featured?.id);

  return (
    <PageLayout>
      <PageSEO
        title="Rebel Built — Insights on Talent, Tech & Defense | Rebel Talent Systems"
        description="Insights on recruiting, talent strategy, defense tech, and AI-powered operations from Richie Lampani."
        path="/blog"
        ogTitle="Rebel Built Blog"
        ogDescription="Recruiting, AI, and talent strategy insights."
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Blog", item: "https://rebeltalentsystems.com/blog" },
        ]}
      />

      {/* Hero */}
      <section className="py-16 text-center" style={{ background: "linear-gradient(180deg, rgba(255,69,0,0.04) 0%, transparent 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            Rebel Built
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Insights on full-time, fractional, and contract recruiting — plus defense tech, engineering, and building teams that win.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {loading && (
            <div className="text-center py-20">
              <div className="w-8 h-8 border-2 border-rebel-red border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-zinc-500">Loading posts...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <p className="text-zinc-500 text-lg">Unable to load blog posts right now. Check back soon.</p>
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-zinc-500 text-lg">No posts yet — check back soon.</p>
            </div>
          )}

          {/* Featured */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="block mb-10 no-underline group">
              <article className="border border-zinc-800 bg-zinc-900/60 rounded-xl p-8 hover:border-rebel-red/40 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  {featured.category && (
                    <span className="text-sm font-bold uppercase tracking-wider text-rebel-red">{featured.category}</span>
                  )}
                  <span className="text-xs bg-rebel-red text-white px-2.5 py-1 rounded-full font-semibold">FEATURED</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight group-hover:text-rebel-red transition-colors">
                  {featured.title}
                </h2>
                <p className="text-zinc-400 text-base leading-relaxed mb-4 max-w-3xl">
                  {featured.excerpt || featured.metaDescription}
                </p>
                <div className="flex items-center gap-3 text-sm text-zinc-500">
                  <span className="font-medium">{featured.author || "Richie Lampani"}</span>
                  <span>·</span>
                  <time>{formatDate(featured.publishedAt)}</time>
                </div>
              </article>
            </Link>
          )}

          {/* Grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="no-underline group">
                  <article className="border border-zinc-800 bg-zinc-900/40 rounded-xl p-6 h-full hover:border-zinc-600 hover:bg-zinc-900/60 transition-all">
                    {post.category && (
                      <span className="text-xs font-bold uppercase tracking-wider text-rebel-red block mb-3">{post.category}</span>
                    )}
                    <h2 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-rebel-red transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-zinc-500 leading-relaxed mb-3 line-clamp-2">
                      {post.excerpt || post.metaDescription}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-zinc-600">
                      <time>{formatDate(post.publishedAt)}</time>
                      {post.tags && post.tags.length > 0 && (
                        <>
                          <span>·</span>
                          <span>{post.tags.slice(0, 2).join(", ")}</span>
                        </>
                      )}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 border-t border-zinc-800/50 bg-gradient-to-b from-rebel-red/5 to-transparent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-white uppercase mb-3">Need Recruiting Help?</h2>
          <p className="text-zinc-400 text-base mb-8 max-w-lg mx-auto leading-relaxed">
            We place senior operators, build recruiting engines, and run talent strategy — so you can focus on growth.
          </p>
          <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-rebel-red text-white font-display text-sm font-semibold uppercase tracking-wider rounded-md hover:bg-red-600 transition-colors no-underline"
          >
            Book a Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
