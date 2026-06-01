import { ArrowRight, FileText, Linkedin, Video, BarChart3 } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";
import headAndHeartCover from "@assets/Head_And_Heart_1773068092478.PNG";
import unfinishedRoomsCover from "@assets/UR-BookCover_1773068071585.png";

export default function FreeTools() {
  return (
    <PageLayout>
      <PageSEO
        title="Free Recruiting Tools & Resources | Rebel Talent"
        description="Free hiring tools and recruiting resources for startup founders and operators, from Rebel Talent's fractional recruiting team."
        path="/free-tools"
        ogTitle="Free Recruiting Tools & Resources | Rebel Talent"
        ogDescription="Tools, templates, and resources to help startups hire better, cut agency dependency, and build recruiting infrastructure that lasts."
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Free Tools", item: "https://rebeltalentsystems.com/free-tools" },
        ]}
      />
      {/* HERO, Hunt Club / Riviera register */}
      <section data-testid="section-hero" className="relative overflow-hidden bg-rebel-space">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 0% 0%, rgba(220,38,38,0.08) 0%, transparent 55%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 z-10">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-zinc-500 mb-6 sm:mb-10">
            Resources
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white leading-[1.02] max-w-4xl" data-testid="heading-free-tools">
            Tools that<br />
            <span className="text-rebel-red">actually work.</span>
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-zinc-400 max-w-2xl leading-[1.55]">
            Built by someone who actually does the work. Diagnostic tools for hiring teams. Frameworks for jobseekers. All free, none gated by a marketing sequence.
          </p>
        </div>
      </section>

      <section className="bg-rebel-space pt-4 pb-16 sm:pb-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">

          {/* Safe addition, buyer-side tool surfaced FIRST since clients are the paying customer */}
          <div className="mb-16">
            <ScrollReveal variant="fade-up">
            <h2 className="font-display text-xl font-bold text-white uppercase tracking-tight text-center mb-8" data-testid="heading-hiring-teams">
              For Hiring Teams
            </h2>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={0}>
              <GlowCard className="border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8">
                <div data-testid="card-hiring-readiness" className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="shrink-0 w-14 h-14 border border-rebel-red/30 bg-rebel-red/10 flex items-center justify-center text-rebel-red">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">FREE DIAGNOSTIC</div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase mb-3 leading-tight">
                      Hiring Readiness Scorecard
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                      Ten yes/no questions across the same dimensions I assess on every engagement. Get a score out of 100, your weakest categories, and a specific fix for every gap. ~5 minutes, no sales follow-up.
                    </p>
                    <Link href="/hiring-readiness">
                      <Button className="font-display tracking-wider uppercase text-sm">
                        Take the Scorecard <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </GlowCard>
            </ScrollReveal>
          </div>

          <div className="mb-16">
            <ScrollReveal variant="fade-up">
            <h2 className="font-display text-xl font-bold text-white uppercase tracking-tight text-center mb-8" data-testid="heading-jobseeker">
              For Jobseekers
            </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-6">
              <ScrollReveal variant="fade-up" delay={0}>
              <GlowCard className="border border-zinc-800 bg-zinc-900/30 p-6 text-center">
                <div data-testid="card-resume-tool">
                <div className="w-12 h-12 border border-rebel-red/30 bg-rebel-red/10 flex items-center justify-center text-rebel-red mx-auto mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">FREE TOOL</div>
                <h3 className="font-display text-lg font-bold text-white uppercase mb-3">
                  The Richie Lampani Resume Breakthrough
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  The resume framework that actually gets callbacks. Built from 14+ years of knowing what recruiters look for.
                </p>
                <a href="https://docs.google.com/document/d/1j9cd_68Q51xRU_tnTMo6FBVtAqPU9wwT9FhtZWX5ExE/edit?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full font-display tracking-wider uppercase text-sm">
                    Get It Free <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                </div>
              </GlowCard>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={150}>
              <GlowCard className="border border-zinc-800 bg-zinc-900/30 p-6 text-center">
                <div data-testid="card-linkedin-tool">
                <div className="w-12 h-12 border border-rebel-red/30 bg-rebel-red/10 flex items-center justify-center text-rebel-red mx-auto mb-4">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">FREE TOOL</div>
                <h3 className="font-display text-lg font-bold text-white uppercase mb-3">
                  Fix My LinkedIn Cheat Sheet
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  Quick-hit guide to making your LinkedIn profile work for you. What to fix, what to cut, and what actually matters.
                </p>
                <a href="https://docs.google.com/document/d/1xL7B0Zo96RUAdccDR9dgoqjSIgXrZHQsMTEPxr3BjoA/edit?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full font-display tracking-wider uppercase text-sm">
                    Get It Free <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                </div>
              </GlowCard>
              </ScrollReveal>
            </div>
          </div>

          <div className="mb-16">
            <ScrollReveal variant="fade-up">
            <h2 className="font-display text-xl font-bold text-white uppercase tracking-tight text-center mb-8" data-testid="heading-books">
              Books
            </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-6">
              <ScrollReveal variant="fade-up" delay={0}>
              <GlowCard className="border border-zinc-800 bg-zinc-900/30 p-6 text-center">
                <div data-testid="card-book-head-heart">
                <img src={headAndHeartCover} alt="Head and Heart book cover" className="w-36 mx-auto mb-4 border border-zinc-700" loading="lazy" />
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">BOOK</div>
                <h3 className="font-display text-lg font-bold text-white uppercase mb-1">Head and Heart</h3>
                <p className="text-zinc-500 text-sm mb-3">Winning the AI Recruiting War</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  My framework for combining strategic thinking with authentic human connection in recruiting. Available on Amazon.
                </p>
                <a href="https://a.co/d/0hQXqHMm" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full font-display tracking-wider uppercase text-sm">
                    Buy on Amazon <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                </div>
              </GlowCard>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={150}>
              <GlowCard className="border border-zinc-800 bg-zinc-900/30 p-6 text-center">
                <div data-testid="card-book-unfinished">
                <img src={unfinishedRoomsCover} alt="Unfinished Rooms book cover" className="w-36 mx-auto mb-4 border border-zinc-700" loading="lazy" />
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">BOOK</div>
                <h3 className="font-display text-lg font-bold text-white uppercase mb-1">Unfinished Rooms</h3>
                <p className="text-zinc-500 text-sm mb-3">Why Great Employees Keep One Foot Out the Door</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  A psychological framework for understanding employee turnover and disengagement. Available now on Amazon.
                </p>
                <a href="https://a.co/d/00XELail" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full font-display tracking-wider uppercase text-sm">
                    Buy on Amazon <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                </div>
              </GlowCard>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal variant="scale">
          <div className="mb-16" data-testid="section-coaching">
            <div className="border border-rebel-red/30 bg-gradient-to-b from-rebel-red/10 to-zinc-900/30 p-8 text-center">
              <div className="w-12 h-12 border border-rebel-red/30 bg-rebel-red/10 flex items-center justify-center text-rebel-red mx-auto mb-4">
                <Video className="w-5 h-5" />
              </div>
              <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">COACHING</div>
              <h3 className="font-display text-2xl font-bold text-white uppercase mb-2">
                Resume Review & Strategy Session
              </h3>
              <p className="text-rebel-red font-mono text-lg mb-4">$149</p>
              <ul className="space-y-2 max-w-md mx-auto mb-6 text-left">
                {[
                  "30-minute video call with Richie",
                  "Line-by-line resume feedback",
                  "LinkedIn profile optimization tips",
                  "Job search strategy tailored to your goals",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                    <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/strategy-call" target="_blank" rel="noopener noreferrer">
                <Button className="font-display tracking-wider uppercase text-sm px-8">
                  Book Your Session <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up">
          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7412825035092045824"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-newsletter-freetools"
              className="group border border-rebel-red/30 bg-gradient-to-b from-rebel-red/10 to-zinc-900/30 p-8 text-center no-underline hover:border-rebel-red/50 transition-colors"
            >
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">NEWSLETTER</div>
              <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-3">
                Rebel Built
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Get recruiting strategies, hiring frameworks, and unfiltered takes delivered to your LinkedIn feed.
              </p>
              <span className="inline-flex items-center font-display text-sm tracking-wider uppercase text-rebel-red group-hover:text-white transition-colors">
                Subscribe on LinkedIn <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </a>

            <a
              href="https://rebel-talent-shop.fourthwall.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-shop-freetools"
              className="group border border-zinc-800 bg-zinc-900/30 p-8 text-center no-underline hover:border-rebel-red/50 transition-colors"
            >
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">MERCH</div>
              <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-3">
                Rebel Talent Shop
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Gear for people who build right, hire right, and rebel forever.
              </p>
              <span className="inline-flex items-center font-display text-sm tracking-wider uppercase text-rebel-red group-hover:text-white transition-colors">
                Shop Now <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </a>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
