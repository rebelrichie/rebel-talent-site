import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";

const advisorsSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "name": "Advisors",
  "url": "https://rebeltalentsystems.com/advisors",
  "about": {
    "@type": "Organization",
    "name": "Rebel Talent Systems",
    "url": "https://rebeltalentsystems.com",
  },
  "mainEntity": {
    "@type": "Person",
    "name": "J. Arin Frye",
    "jobTitle": "Strategic Advisor, Rebel Talent Systems",
    "affiliation": [
      { "@type": "Organization", "name": "ScaleByrd" },
      { "@type": "Organization", "name": "Waveguide" },
    ],
    "url": "https://rebeltalentsystems.com/advisors",
  },
};

export default function Advisors() {
  return (
    <PageLayout>
      <PageSEO
        title="Advisors | Rebel Talent Systems"
        description="Rebel Talent advisors add judgment, network, and depth across cleared and commercial work. J. Arin Frye is Strategic Advisor, with ScaleByrd and Waveguide."
        path="/advisors"
        ogTitle="Advisors | Rebel Talent Systems"
        ogDescription="Judgment, network, and depth across cleared and commercial work. J. Arin Frye, Strategic Advisor. ScaleByrd and Waveguide."
        ogImage="og-services.png"
        schemas={[advisorsSchema]}
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Advisors", item: "https://rebeltalentsystems.com/advisors" },
        ]}
      />

      <section data-testid="section-hero" className="space-hero space-hero--home relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 3,
            background:
              "radial-gradient(ellipse 70% 50% at 0% 0%, rgba(247,26,41,0.08) 0%, transparent 55%)",
          }}
        />
        <div className="space-hero__command" aria-hidden="true" />
        <div className="space-hero__grid" aria-hidden="true" />
        <svg
          className="space-hero__nodes"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMaxYMid slice"
          aria-hidden="true"
        >
          <g fill="none" stroke="rgba(150, 198, 255, 0.72)" strokeWidth="1.15">
            <line x1="790" y1="118" x2="918" y2="84" />
            <line x1="918" y1="84" x2="1034" y2="156" />
            <line x1="790" y1="118" x2="1034" y2="156" />
            <line x1="1034" y1="156" x2="948" y2="236" />
            <line x1="1034" y1="156" x2="1132" y2="204" />
            <line x1="948" y1="236" x2="868" y2="318" />
            <line x1="1034" y1="156" x2="1052" y2="348" />
            <line x1="1132" y1="204" x2="1168" y2="308" />
            <line x1="1052" y1="348" x2="1168" y2="308" />
            <line x1="868" y1="318" x2="768" y2="428" />
            <line x1="868" y1="318" x2="992" y2="478" />
            <line x1="1052" y1="348" x2="992" y2="478" />
            <line x1="992" y1="478" x2="1136" y2="436" />
            <line x1="1168" y1="308" x2="1136" y2="436" />
          </g>
          <g>
            <circle cx="1034" cy="156" r="2.5" fill="rgba(210, 230, 255, 0.95)" />
            <circle cx="790" cy="118" r="2.1" fill="rgba(198, 220, 255, 0.85)" />
            <circle cx="918" cy="84" r="1.5" fill="rgba(186, 164, 255, 0.75)" />
            <circle cx="948" cy="236" r="1.7" fill="rgba(186, 164, 255, 0.8)" />
            <circle cx="1132" cy="204" r="1.5" fill="rgba(198, 220, 255, 0.75)" />
            <circle cx="868" cy="318" r="2" fill="rgba(198, 220, 255, 0.85)" />
            <circle cx="1052" cy="348" r="1.6" fill="rgba(186, 164, 255, 0.78)" />
            <circle cx="1168" cy="308" r="2.2" fill="rgba(210, 230, 255, 0.9)" />
            <circle cx="992" cy="478" r="2.4" fill="rgba(210, 230, 255, 0.92)" />
            <circle cx="1136" cy="436" r="1.6" fill="rgba(198, 220, 255, 0.78)" />
          </g>
        </svg>
        <div className="space-hero__scan" aria-hidden="true" />
        <div className="space-hero__scrim" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 pt-16 sm:pt-24 lg:pt-28 pb-14 sm:pb-20">
          <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-[11px] font-mono tracking-[0.18em] uppercase">
              <li>
                <Link
                  href="/"
                  className="text-zinc-400 hover:text-white no-underline"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-zinc-600">
                /
              </li>
              <li className="text-zinc-200" aria-current="page">
                Advisors
              </li>
            </ol>
          </nav>
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.28em] uppercase text-zinc-400 mb-6 sm:mb-8">
            Advisors
          </p>
          <h1
            className="font-display font-black text-white leading-[1.05] tracking-tight max-w-3xl"
            style={{ fontSize: "clamp(2.2rem, 4.6vw, 4rem)" }}
            data-testid="heading-advisors"
          >
            Judgment beside the search.
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
            Advisors exist so the firm is not guessing alone. They add judgment, a working network, and depth across cleared programs and commercial teams.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 border-t border-zinc-900" style={{ background: "#0E0D11" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <p className="font-mono text-rebel-red text-[11px] tracking-[0.22em] uppercase mb-3">
            The bench
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 max-w-xl">
            Named with a written yes.
          </h2>
          <p className="text-zinc-300 text-base leading-relaxed max-w-2xl mb-10">
            One advisor is public. We add the next name only after that person agrees in writing.
          </p>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
            <article
              data-testid="card-advisor-arin"
              className="flex flex-col h-full border border-zinc-800 border-t-2 border-t-rebel-red bg-zinc-900/40 p-6 sm:p-8"
            >
              <div className="flex items-start gap-5">
                <div
                  className="shrink-0 w-16 h-16 border border-zinc-700 bg-zinc-950 flex items-center justify-center font-display text-sm font-bold tracking-[0.14em] text-white"
                  aria-hidden="true"
                >
                  JAF
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                    J. Arin Frye
                  </h3>
                  <p className="mt-1 text-sm text-zinc-200">Strategic Advisor</p>
                  <p className="mt-1 text-sm text-zinc-400">ScaleByrd / Waveguide</p>
                </div>
              </div>
              <p className="mt-6 text-zinc-300 text-sm sm:text-base leading-relaxed">
                An operator with ScaleByrd and Waveguide. She advises Rebel.
              </p>
            </article>

            <aside
              data-testid="slot-advisors-open"
              className="flex flex-col justify-center h-full border border-dashed border-zinc-800 bg-zinc-950/40 p-6 sm:p-8"
            >
              <p className="font-mono text-zinc-500 text-[11px] tracking-[0.22em] uppercase mb-3">
                Open
              </p>
              <h3 className="font-display text-2xl font-bold text-zinc-300 tracking-tight mb-3">
                More advisors joining.
              </h3>
              <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
                The next name appears here after a written yes.
              </p>
            </aside>
          </div>

          <p className="mt-10 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-3xl">
            Cleared hiring stays on its{" "}
            <Link
              href="/cleared"
              className="text-zinc-200 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red"
            >
              own page
            </Link>
            . Contingent and embedded recruiting stay on{" "}
            <Link
              href="/services"
              className="text-zinc-200 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red"
            >
              How we engage
            </Link>
            .
          </p>
        </div>
      </section>

      <section data-testid="section-cta" className="py-16 sm:py-24 border-t border-zinc-900 bg-rebel-space">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-12">
          <p className="font-mono text-rebel-red text-[11px] tracking-[0.22em] uppercase mb-3">
            Contact
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Ask the firm.
          </h2>
          <p className="text-zinc-300 text-base leading-relaxed mb-8">
            A strategy call is thirty minutes. Bring a role or a question. If we are not the right fit, we will say so.
          </p>
          <Link
            href="/strategy-call"
            data-testid="button-advisors-strategy"
            className="inline-flex items-center justify-center gap-2 bg-rebel-red hover:bg-red-700 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full transition-colors no-underline"
          >
            Book a strategy call <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
