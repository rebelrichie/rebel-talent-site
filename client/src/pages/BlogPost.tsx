// Safe addition - Individual blog post page. Posts come from the static data
// baked into the build (client/src/data/blog-posts.json via lib/blogData.ts),
// so the full article is in the prerendered HTML with no runtime API call.
import { Link, useParams } from "wouter";
import { ArrowLeft, Clock } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import InteriorHero from "@/components/InteriorHero";
import { getPostBySlug, getRelatedPosts, getUnpublishedRedirect } from "@/lib/blogData";

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

// Safe addition, Markdown → HTML renderer with code blocks, blockquotes, hr, inline code, and XSS protection
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
    const langLabel = lang ? `<div class="text-xs text-zinc-400 mb-2 font-mono uppercase">${escapeHtml(lang)}</div>` : "";
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
  let inTable = false;
  let tableHeaderDone = false;

  for (const line of lines) {
    const trimmed = line.trim();

    // Safe addition, Table support
    const isTableRow = trimmed.startsWith("|") && trimmed.endsWith("|") && trimmed.includes("|");
    const isSeparator = isTableRow && /^\|[\s\-:|]+\|$/.test(trimmed);

    if (isTableRow) {
      if (inList) { html.push("</ul>"); inList = false; }
      if (inOl) { html.push("</ol>"); inOl = false; }
      if (inBlockquote) { html.push("</blockquote>"); inBlockquote = false; }

      if (isSeparator) {
        tableHeaderDone = true;
        continue;
      }

      const cells = trimmed.split("|").filter((c, i, arr) => i > 0 && i < arr.length - 1).map(c => c.trim());

      if (!inTable) {
        html.push('<div class="overflow-x-auto my-6"><table class="w-full border-collapse text-sm">');
        inTable = true;
        // First row is header
        html.push("<thead><tr>");
        cells.forEach(cell => {
          html.push(`<th class="text-left py-3 px-4 text-zinc-400 font-semibold text-xs tracking-wider uppercase border-b border-zinc-700 bg-zinc-900/50">${inlineFormat(cell)}</th>`);
        });
        html.push("</tr></thead><tbody>");
        tableHeaderDone = false;
      } else {
        html.push("<tr>");
        cells.forEach((cell, i) => {
          const cls = i === 0
            ? "py-3 px-4 text-zinc-300 font-semibold border-b border-zinc-800/50"
            : "py-3 px-4 text-zinc-400 border-b border-zinc-800/50";
          html.push(`<td class="${cls}">${inlineFormat(cell)}</td>`);
        });
        html.push("</tr>");
      }
      continue;
    } else if (inTable) {
      html.push("</tbody></table></div>");
      inTable = false;
      tableHeaderDone = false;
    }

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
      html.push(`<h2 id="${headingId(trimmed.slice(3))}" class="text-2xl font-bold text-white mt-12 mb-5">${inlineFormat(trimmed.slice(3))}</h2>`);
    } else if (trimmed.startsWith("# ")) {
      if (inList) { html.push("</ul>"); inList = false; }
      if (inOl) { html.push("</ol>"); inOl = false; }
      if (inBlockquote) { html.push("</blockquote>"); inBlockquote = false; }
      html.push(`<h2 id="${headingId(trimmed.slice(2))}" class="text-2xl font-bold text-white mt-12 mb-5">${inlineFormat(trimmed.slice(2))}</h2>`);
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
  if (inTable) html.push("</tbody></table></div>");
  return html.join("\n");
}

function headingId(text: string): string {
  return text
    .replace(/[*_`[\]]/g, "")
    .toLowerCase()
    .replace(/&[^;]+;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function articleHeadings(body: string): { id: string; text: string }[] {
  const found: { id: string; text: string }[] = [];
  for (const line of body.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("## ") && !trimmed.startsWith("# ")) continue;
    if (trimmed.startsWith("### ")) continue;
    const raw = trimmed.startsWith("## ") ? trimmed.slice(3) : trimmed.slice(2);
    const text = raw.replace(/\*\*/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
    const id = headingId(text);
    if (id) found.push({ id, text });
  }
  return found;
}

function inlineFormat(text: string): string {
  return text
    // Inline code (before bold/italic so backticks inside don't conflict)
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-zinc-800 text-rebel-red text-sm font-mono">$1</code>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Links. External http/https/mailto open in a new tab.
    // Root-relative paths stay on this site.
    .replace(/\[([^\]]+)\]\(((?:https?:\/\/|mailto:)[^)]+)\)/g, '<a href="$2" class="text-rebel-red font-medium underline hover:text-red-400" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\[([^\]]+)\]\((\/(?!\/)[A-Za-z0-9/_\-.?#=&%]+)\)/g, '<a href="$2" class="text-rebel-red font-medium underline hover:text-red-400">$1</a>');
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const unpublishedTo = getUnpublishedRedirect(params.slug);
  const post = getPostBySlug(params.slug);
  const related = getRelatedPosts(params.slug);

  if (unpublishedTo) {
    window.location.replace(unpublishedTo);
    return (
      <PageLayout>
        <PageSEO
          title="Article unpublished | Rebel Talent Systems"
          description="This article is unpublished. The link continues to the current page."
          path={unpublishedTo}
          noindex
        />
        <InteriorHero orbit="blog">
          <h1 className="text-[#0C1220]">This article is unpublished.</h1>
          <a href={unpublishedTo} className="mt-6 text-[#C8102E] no-underline">Continue</a>
        </InteriorHero>
      </PageLayout>
    );
  }

  if (!post) {
    return (
      <PageLayout>
        <InteriorHero orbit="blog">
          <h1 className="text-[#0C1220]">Post Not Found</h1>
          <Link href="/blog" className="mt-6 text-[#C8102E] no-underline">Back to Blog</Link>
        </InteriorHero>
      </PageLayout>
    );
  }

  const headings = articleHeadings(post.body || "");

  return (
    <PageLayout>
      <PageSEO
        title={`${post.title} | Rebel Talent Systems`}
        description={post.metaDescription || post.excerpt || ""}
        path={`/blog/${post.slug}`}
        ogTitle={post.title}
        ogDescription={post.metaDescription || post.excerpt || ""}
        ogImage={post.ogImage || "og-home.png"}
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Blog", item: "https://rebeltalentsystems.com/blog" },
          { name: post.title, item: `https://rebeltalentsystems.com/blog/${post.slug}` },
        ]}
      />

      <InteriorHero orbit="blog">
        <Link href="/blog" className="text-sm text-[#5C6570] no-underline flex items-center gap-2 mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Rebel Built
        </Link>
        {post.category && (
          <span className="text-sm font-semibold uppercase tracking-wider text-[#C8102E] block mb-4">{post.category}</span>
        )}
        <h1 className="text-[#0C1220] mb-5">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-base text-[#5C6570]">
          <span className="font-medium">{post.author || "Richie Lampani"}</span>
          <span>·</span>
          <time>{formatDate(post.publishedAt)}</time>
          <span>·</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {estimateReadTime(post.body)}</span>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-5">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 border border-[#E7E9EE] text-sm text-[#5C6570]">
                {tag}
              </span>
            ))}
          </div>
        )}
      </InteriorHero>
      <section>
        <div className="band-wrap blog-layout py-12">
        <article className="blog-article">
        <div className="prose-rebel max-w-[70ch]" dangerouslySetInnerHTML={{ __html: renderBody(post.body || "") }} />

        {/* Author */}
        <div className="mt-12 p-6 rounded-xl border border-zinc-800 bg-zinc-900/60">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-rebel-red flex items-center justify-center text-white font-bold text-lg shrink-0">
              RL
            </div>
            <div>
              <p className="font-bold text-white text-lg">Richie Lampani</p>
              <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                Founder of Rebel Talent Systems. Contingent search on a flat fee by salary band, plus retained search and embedded fractional recruiting.
              </p>
              <a href="/strategy-call"
                className="text-sm text-rebel-red font-semibold no-underline hover:text-red-400 transition-colors mt-3 inline-block"
              >
                Work with Richie →
              </a>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="blog-related-mobile mt-16">
            <h2 className="text-xl font-bold text-white mb-6">More from the blog</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="no-underline group">
                  <article className="border border-zinc-800 bg-zinc-900/40 rounded-xl p-5 h-full hover:border-zinc-600 transition-all">
                    <h3 className="font-bold text-white text-base mb-2 leading-snug group-hover:text-rebel-red transition-colors">
                      {r.title}
                    </h3>
                    <time className="text-xs text-zinc-400">{formatDate(r.publishedAt)}</time>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
        </article>
        <aside className="blog-rail">
          <div className="sticky top-28 space-y-10">
            {headings.length > 0 && (
              <nav aria-label="On this page">
                <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em]">On this page</p>
                <ul className="space-y-2">
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <a href={`#${heading.id}`} className="text-[15px] leading-snug underline-offset-4 hover:underline">
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
            <div>
              <p className="mb-4 text-[16px] leading-snug">Bring the open role, or the question.</p>
              <a href="/strategy-call" className="mi-btn">Book a strategy call</a>
            </div>
            {related.length > 0 && (
              <div>
                <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em]">More from the blog</p>
                <ul className="space-y-3">
                  {related.slice(0, 3).map((item) => (
                    <li key={item.slug}>
                      <Link href={`/blog/${item.slug}`} className="text-[15px] font-medium leading-snug underline underline-offset-4">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
        </div>
      </section>
    </PageLayout>
  );
}
