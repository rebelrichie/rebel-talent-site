// Safe addition — Vision page at /about/vision. Standalone manifesto page,
// reached from the ABOUT nav dropdown and the footer NAVIGATE cluster, not
// primary nav. Prerenders to dist/public/about/vision/index.html.
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import ScrollReveal from "@/components/ScrollReveal";

const BREADCRUMBS = [
  { name: "Home", item: "https://rebeltalentsystems.com/" },
  { name: "About", item: "https://rebeltalentsystems.com/about" },
  { name: "Vision", item: "https://rebeltalentsystems.com/about/vision" },
];

export default function Vision() {
  return (
    <PageLayout>
      <PageSEO
        title="Our Vision | Rebel Talent Systems"
        description="Most recruiting firms sell hours or heads. We are building a firm that runs on judgment and honesty, fills your roles, and leaves you knowing how to hire."
        path="/about/vision"
        ogTitle="Our Vision | Rebel Talent Systems"
        ogDescription="Build right. Hire right. Give a shit. The thinking behind Rebel Talent Systems."
        ogImage="og-about.png"
        breadcrumbs={BREADCRUMBS}
      />

      {/* ───────────── HERO ───────────── */}
      <section data-testid="section-hero" className="relative overflow-hidden bg-rebel-space">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 0% 0%, rgba(220,38,38,0.08) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 pt-16 sm:pt-24 lg:pt-32 pb-14 sm:pb-20 z-10">
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.3em] uppercase text-zinc-400 mb-6 sm:mb-8">
            About / Vision
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-[-0.04em] text-white leading-[0.95] mb-6">
            BREAK
            <br />
            <span
              style={{
                background: "linear-gradient(95deg, #F71A29 0%, #F5841E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ORBIT.
            </span>
          </h1>
          <p className="text-lg sm:text-2xl text-zinc-300 max-w-2xl leading-[1.5]">
            Most recruiting firms sell hours or heads, and we are building something that compounds.
          </p>
        </div>
      </section>

      {/* ───────────── SECTION 1 — WHAT WE'RE DOING ───────────── */}
      <section className="bg-rebel-space py-16 sm:py-20 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-8 pb-3 border-b border-rebel-red/30">
              What we&rsquo;re doing
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up">
            <div className="text-zinc-300 text-base sm:text-lg leading-[1.7] space-y-6">
              <p>
                Companies that build hard things deserve hiring that works. A defense startup racing a contract award. A Series B team that has to double engineering before the next raise. The work is serious. The hiring under it usually is not.
              </p>
              <p>
                Option one is an agency. You hand over a role, you get a stack of resumes, and the day the invoice clears the relationship is over. The recruiter never met your team, never read the roadmap, and has no reason to care whether the hire is still there in six months. Volume is the product. Accountability ends at the placement fee.
              </p>
              <p>
                Option two is a full-time talent leader. That is the right capability at the wrong time. You need the person twelve months before you can fund the salary, and by the time the budget exists you have already made the hires that mattered most, badly.
              </p>
              <p>
                Both leave the same gap, and we fill it. Rebel fills the open roles and builds the system underneath them: the pipeline, the process, the scorecards, the way your managers run a loop. When we leave, the company still knows how to hire. That is the product.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───────────── SECTION 2 — WHERE THIS GOES ───────────── */}
      <section className="bg-zinc-950 py-16 sm:py-20 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-8 pb-3 border-b border-rebel-red/30">
              Where this goes
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up">
            <div className="text-zinc-300 text-base sm:text-lg leading-[1.7] space-y-6">
              <p>
                A small number of exceptional recruiters, each running a full desk, doing the work of four. Not a body shop. Not a hundred people billing hours against a spreadsheet.
              </p>
              <p>
                The leverage is internal. We built our own tooling because nothing off the shelf does what this work actually needs, and every search we run makes it sharper. Clients never touch it. They see the searches close faster than they should, and that is the point.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───────────── SECTION 3 — HOW BIG ───────────── */}
      <section className="bg-rebel-space py-16 sm:py-20 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-8 pb-3 border-b border-rebel-red/30">
              How big
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up">
            <div className="text-zinc-300 text-base sm:text-lg leading-[1.7] space-y-6">
              <p>
                Big enough to matter to the companies we serve. Small enough that every person here is someone I would work a desk beside. Growth is a byproduct of doing the work well. It is not the reason for doing it.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───────────── SECTION 4 — WHAT WE WILL NOT DO ───────────── */}
      <section className="bg-zinc-950 py-16 sm:py-20 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-8 pb-3 border-b border-rebel-red/30">
              What we will not do
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up">
            <div className="space-y-5 mb-10">
              {[
                {
                  head: "We will not compete on volume.",
                  body: "Sending more resumes is not the same as solving your hiring, and we refuse to confuse the two.",
                },
                {
                  head: "We will not work for free.",
                  body: "Contingent search carries a deposit.",
                },
                {
                  head: "We will not sell a client a search we do not believe is fillable.",
                  body: "If the comp, the location, or the timeline makes the role a fantasy, you hear that before you sign, not after.",
                },
                {
                  head: "We will not tell a candidate a role is something it is not.",
                  body: "The job we describe is the job you take.",
                },
              ].map((item) => (
                <div key={item.head} className="border-l-2 border-rebel-red/60 pl-5 py-1">
                  <p className="text-zinc-100 text-base sm:text-lg font-semibold leading-snug mb-1">
                    {item.head}
                  </p>
                  <p className="text-zinc-400 text-base leading-[1.6]">{item.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up">
            <p className="text-zinc-300 text-base sm:text-lg leading-[1.7] max-w-3xl">
              The through-line is transparency that runs in both directions. Clients hear the truth about their comp bands and their timelines, even when it is not what they hoped. Candidates hear the truth about the role and exactly where they stand. Our own recruiters see the invoices behind their numbers, because people who cannot see how the business works cannot be trusted to run part of it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ───────────── SECTION 5 — THE END GOAL ───────────── */}
      <section className="bg-rebel-space py-16 sm:py-20 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-8 pb-3 border-b border-rebel-red/30">
              The end goal
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up">
            <p className="text-zinc-300 text-base sm:text-lg leading-[1.7] mb-12">
              Prove that a recruiting business can run on judgment and honesty instead of volume and pressure, and come out the better business for it. If we are right, the model spreads because it works, not because anyone was talked into it.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="scale">
            <p
              className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight leading-tight"
              style={{
                background: "linear-gradient(95deg, #F71A29 0%, #F5841E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Build right. Hire right. Give a shit.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ───────────── SECTION 6 — THE INVITATION ───────────── */}
      <section className="bg-zinc-950 py-16 sm:py-20 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-8">
              If this is you
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up">
            <div className="border-l-2 border-rebel-red/60 pl-6 sm:pl-8">
              <p className="text-white text-xl sm:text-3xl font-semibold leading-[1.4] tracking-tight mb-6">
                If you know this is you. If it resonates. If it is something you want to help build and you already live in this world. Reach out.
              </p>
              <p className="text-zinc-300 text-base sm:text-lg leading-[1.7]">
                I want to work with people who think the way I do. We will talk, and we will decide together what happens next, instead of letting everyone else decide it for us.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───────────── CLOSING ACTION (two quiet links, no form) ───────────── */}
      <section className="bg-rebel-space py-16 sm:py-20 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="/strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-vision-strategy"
              className="group border border-zinc-800 bg-zinc-900/30 p-6 no-underline transition-colors hover:border-rebel-red/50"
            >
              <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">
                If you are building a team
              </div>
              <div className="flex items-center gap-2 text-zinc-100 text-lg font-semibold">
                Start a conversation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
            <a
              href="/jobs"
              data-testid="link-vision-jobs"
              className="group border border-zinc-800 bg-zinc-900/30 p-6 no-underline transition-colors hover:border-rebel-red/50"
            >
              <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">
                If you run a desk like this
              </div>
              <div className="flex items-center gap-2 text-zinc-100 text-lg font-semibold">
                See open roles
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
