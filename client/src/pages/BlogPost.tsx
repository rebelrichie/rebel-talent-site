// Safe addition – Individual blog post page fetching from public API
import { useState, useEffect } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";

const API_BASE = "https://rebelcommand.dev/api/blog";

interface Post {
  id: string;
  title: string;
  slug: string;
  body: string | null;
  excerpt: string | null;
  metaDescription: string | null;
  category: string | null;
  tags: string[] | null;
  author: string | null;
  featured: boolean | null;
  publishedAt: string | null;
  ogImage: string | null;
}

interface RelatedPost {
  title: string;
  slug: string;
  publishedAt: string | null;
  category: string | null;
  excerpt: string | null;
}

function formatDate(date: string | null) {
  if (!date) return "";
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(new Date(date));
}

function estimateReadTime(body: string | null): string {
  if (!body) return "1 min read";
  const words = body.split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

// Safe addition — Markdown → HTML renderer with code blocks, blockquotes, hr, inline code, and XSS protection
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderBody(body: string): string {
  // First pass: extract fenced code blocks so they aren't processed as markdown
  const codeBlocks: string[] = [];
  const withPlaceholders = body.replace(/```(\w*)\n([\s\S]*?)```/g, (_match, lang, code) => {
    const idx = codeBlocks.length;
    const langLabel = lang ? `<div class="text-xs text-zinc-500 mb-2 font-mono uppercase">${escapeHtml(lang)}</div>` : "";
    codeBlocks.push(
      `<div class="my-6 rounded border border-zinc-800 bg-zinc-900/80 p-4 overflow-x-auto">${langLabel}<pre class="text-sm text-zinc-300 font-mono whitespace-pre-wrap"><code>${escapeHtml(code.trimEnd())}</code></pre></div>`
    );
    return `__CODE_BLOCK_${idx}__`;
  });

  const lines = withPlaceholders.split("\n");
  const html: string[] = [];
  let inList = false;
  let inOl = false;
  let inBlockquote = false;

  for (const line of lines) {
    const trimmed = line.trim();

    // Code block placeholder
    const codeMatch = trimmed.match(/^__CODE_BLOCK_(\d+)__$/);
    if (codeMatch) {
      if (inList) { html.push("</ul>"); inList = false; }
      if (inOl) { html.push("</ol>"); inOl = false; }
      if (inBlockquote) { html.push("</blockquote>"); inBlockquote = false; }
      html.push(codeBlocks[parseInt(codeMatch[1])]);
      continue;
    }

    // Horizontal rule
    if (/^(---|\*\*\*|___)$/.test(trimmed)) {
      if (inList) { html.push("</ul>"); inList = false; }
      if (inOl) { html.push("</ol>"); inOl = false; }
      if (inBlockquote) { html.push("</blockquote>"); inBlockquote = false; }
      html.push('<hr class="my-10 border-zinc-800" />');
      continue;
    }

    const olMatch = trimmed.match(/^(\d+)\.\s+(.*)/);

    // Blockquote
    if (trimmed.startsWith("> ")) {
      if (inList) { html.push("</ul>"); inList = false; }
      if (inOl) { html.push("</ol>"); inOl = false; }
      if (!inBlockquote) { html.push('<blockquote class="border-l-4 border-rebel-red/40 pl-5 my-6 italic">'); inBlockquote = true; }
      html.push(`<p class="text-base text-zinc-400 leading-relaxed mb-2">${inlineFormat(trimmed.slice(2))}</p>`);
    } else if (trimmed.startsWith("### ")) {
      if (inList) { html.push("</ul>"); inList = false; }
      if (inOl) { html.push("</ol>"); inOl = false; }
      if (inBlockquote) { html.push("</blockquote>"); inBlockquote = false; }
      html.push(`<h3 class="text-xl font-bold text-white mt-10 mb-4">${inlineFormat(trimmed.slice(4))}</h3>`);
    } else if (trimmed.startsWith("## ")) {
      if (inList) { html.push("</ul>"); inList = false; }
      if (inOl) { html.push("</ol>"); inOl = false; }
      if (inBlockquote) { html.push("</blockquote>"); inBlockquote = false; }
      html.push(`<h2 class="text-2xl font-bold text-white mt-12 mb-5">${inlineFormat(trimmed.slice(3))}</h2>`);
    } else if (trimmed.startsWith("# ")) {
      if (inList) { html.push("</ul>"); inList = false; }
      if (inOl) { html.push("</ol>"); inOl = false; }
      if (inBlockquote) { html.push("</blockquote>"); inBlockquote = false; }
      html.push(`<h2 class="text-2xl font-bold text-white mt-12 mb-5">${inlineFormat(trimmed.slice(2))}</h2>`);
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      if (inOl) { html.push("</ol>"); inOl = false; }
      if (inBlockquote) { html.push("</blockquote>"); inBlockquote = false; }
      if (!inList) { html.push('<ul class="list-disc pl-6 my-5 space-y-2">'); inList = true; }
      html.push(`<li class="text-base text-zinc-300 leading-relaxed">${inlineFormat(trimmed.slice(2))}</li>`);
    } else if (olMatch) {
      if (inList) { html.push("</ul>"); inList = false; }
      if (inBlockquote) { html.push("</blockquote>"); inBlockquote = false; }
      if (!inOl) { html.push('<ol class="list-decimal pl-6 my-5 space-y-2">'); inOl = true; }
      html.push(`<li class="text-base text-zinc-300 leading-relaxed">${inlineFormat(olMatch[2])}</li>`);
    } else if (trimmed === "") {
      if (inList) { html.push("</ul>"); inList = false; }
      if (inOl) { html.push("</ol>"); inOl = false; }
      if (inBlockquote) { html.push("</blockquote>"); inBlockquote = false; }
    } else {
      if (inList) { html.push("</ul>"); inList = false; }
      if (inOl) { html.push("</ol>"); inOl = false; }
      if (inBlockquote) { html.push("</blockquote>"); inBlockquote = false; }
      html.push(`<p class="text-base text-zinc-300 leading-relaxed mb-5">${inlineFormat(trimmed)}</p>`);
    }
  }
  if (inList) html.push("</ul>");
  if (inOl) html.push("</ol>");
  if (inBlockquote) html.push("</blockquote>");
  return html.join("\n");
}

function inlineFormat(text: string): string {
  return text
    // Inline code (before bold/italic so backticks inside don't conflict)
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-zinc-800 text-rebel-red text-sm font-mono">$1</code>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Links — only allow http/https/mailto protocols (XSS protection)
    .replace(/\[([^\]]+)\]\(((?:https?:\/\/|mailto:)[^)]+)\)/g, '<a href="$2" class="text-rebel-red font-medium underline hover:text-red-400" target="_blank" rel="noopener noreferrer">$1</a>');
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [related, setRelated] = useState<RelatedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!params.slug) return;
    fetch(`${API_BASE}?slug=${params.slug}`)
      .then((r) => { if (!r.ok) throw new Error("Not found"); return r.json(); })
      .then((data) => { setPost(data.post); setRelated(data.related || []); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, [params.slug]);

  if (loading) {
    return (
      <PageLayout>
        <div className="text-center py-32">
          <div className="w-8 h-8 border-2 border-rebel-red border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-zinc-500">Loading...</p>
        </div>
      </PageLayout>
    );
  }

  if (error || !post) {
    return (
      <PageLayout>
        <div className="text-center py-32">
          <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-rebel-red hover:text-red-400 no-underline">← Back to Blog</Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <PageSEO
        title={`${post.title} | Rebel Talent Systems`}
        description={post.metaDescription || post.excerpt || ""}
        path={`/blog/${post.slug}`}
        ogTitle={post.title}
        ogDescription={post.metaDescription || post.excerpt || ""}
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Blog", item: "https://rebeltalentsystems.com/blog" },
          { name: post.title, item: `https://rebeltalentsystems.com/blog/${post.slug}` },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/blog" className="text-sm text-zinc-500 hover:text-white no-underline flex items-center gap-2 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Rebel Built
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-10">
          {post.category && (
            <span className="text-sm font-bold uppercase tracking-wider text-rebel-red block mb-4">{post.category}</span>
          )}
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight tracking-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-base text-zinc-500">
            <span className="font-medium">{post.author || "Richie Lampani"}</span>
            <span>·</span>
            <time>{formatDate(post.publishedAt)}</time>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {estimateReadTime(post.body)}</span>
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-5">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-400 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Body */}
        <div className="prose-rebel" dangerouslySetInnerHTML={{ __html: renderBody(post.body || "") }} />

        {/* Author */}
        <div className="mt-12 p-6 rounded-xl border border-zinc-800 bg-zinc-900/60">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-rebel-red flex items-center justify-center text-white font-bold text-lg shrink-0">
              RL
            </div>
            <div>
              <p className="font-bold text-white text-lg">Richie Lampani</p>
              <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                Founder of Rebel Talent Systems. Full-time, fractional, and contract recruiting powered by AI.
              </p>
              <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer"
                className="text-sm text-rebel-red font-semibold no-underline hover:text-red-400 transition-colors mt-3 inline-block"
              >
                Work with Richie →
              </a>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-bold text-white mb-6">More from the blog</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="no-underline group">
                  <article className="border border-zinc-800 bg-zinc-900/40 rounded-xl p-5 h-full hover:border-zinc-600 transition-all">
                    <h3 className="font-bold text-white text-base mb-2 leading-snug group-hover:text-rebel-red transition-colors">
                      {r.title}
                    </h3>
                    <time className="text-xs text-zinc-600">{formatDate(r.publishedAt)}</time>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </PageLayout>
  );
}
