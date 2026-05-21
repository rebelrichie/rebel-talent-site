import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import GlowCard from "@/components/GlowCard";
import CapacityBadge from "@/components/CapacityBadge";

import headAndHeartCover from "@assets/Head_And_Heart_1773068092478.PNG";
import unfinishedRoomsCover from "@assets/UR-BookCover_1773068071585.png";
import richiePfp from "@assets/RichiePFP4_(4)_1773228453685.png";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Richie Lampani",
  "jobTitle": "Fractional Head of Talent",
  "url": "https://rebeltalentsystems.com/about",
  "worksFor": {
    "@type": "Organization",
    "name": "Rebel Talent",
    "url": "https://rebeltalentsystems.com"
  },
  "description": "Fractional recruiter with 14+ years specializing in Forward Deployed Engineers, AI/ML talent, cleared TS/SCI hiring, and GTM roles for Series A-C startups and defense contractors.",
  "knowsAbout": [
    "Fractional Recruiting",
    "Embedded Recruiting",
    "Startup Recruiting",
    "Defense Recruiting",
    "Cleared Hiring",
    "Forward Deployed Engineers",
    "AI/ML Recruiting",
    "GTM Hiring",
    "Talent Infrastructure",
    "ATS Implementation"
  ],
  "sameAs": ["https://linkedin.com/in/richielampani"],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Fractional Head of Talent",
    "occupationLocation": {
      "@type": "Country",
      "name": "United States"
    }
  }
};

const BREADCRUMBS = [
  { name: "Home", item: "https://rebeltalentsystems.com/" },
  { name: "About", item: "https://rebeltalentsystems.com/about" },
];

export default function About() {
  return (
    <PageLayout>
      <PageSEO
        title="Richie Lampani | Fractional Head of Talent | Rebel Talent"
        description="Richie Lampani is a fractional recruiter with 14+ years placing Forward Deployed Engineers, AI/ML talent, and cleared TS/SCI roles for startups and defense contractors."
        path="/about"
        ogTitle="Richie Lampani | Fractional Head of Talent | Rebel Talent"
        ogDescription="Operator. Builder. Anti-Agency force. Richie Lampani founded Rebel Talent Systems to deliver embedded recruiting leadership and systems that clients own forever."
        ogImage="og-about.png"
        schemas={[personSchema]}
        breadcrumbs={BREADCRUMBS}
      />
      {/* HERO — Hunt Club / Riviera register */}
      <section data-testid="section-hero" className="relative overflow-hidden bg-rebel-space">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 0% 0%, rgba(220,38,38,0.08) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 z-10">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-zinc-500 mb-6 sm:mb-10">
            About
          </p>
          <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-end">
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white leading-[1.02] mb-4 sm:mb-6" data-testid="text-name">
                Richie Lampani.<br />
                <span className="text-rebel-red">14 years in the trenches.</span>
              </h1>
              <p className="text-base sm:text-xl text-zinc-400 max-w-2xl leading-[1.55] mb-3" data-testid="text-intro">
                Built recruiting functions for defense contractors and growth-stage tech firms. Closed hundreds of roles from cleared TS/SCI positions to executive searches, while navigating compliance, scaling bottlenecks, and agency pitfalls.
              </p>
              <p className="text-base sm:text-lg text-zinc-500 max-w-2xl leading-[1.55] mb-6">
                Frustrated by models that profit from repeated failures, I founded Rebel Talent Systems to deliver embedded leadership and systems clients own forever. No jargon. Pure execution.
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mb-6">
                <CapacityBadge />
                <a href="https://linkedin.com/in/richielampani" target="_blank" rel="noopener noreferrer" data-testid="link-linkedin" className="text-zinc-400 hover:text-white text-sm transition-colors no-underline">
                  LinkedIn ↗
                </a>
                <a href="mailto:richie@rebeltalentsystems.com" data-testid="link-email" className="text-zinc-400 hover:text-white text-sm transition-colors no-underline">
                  Email ↗
                </a>
              </div>
            </div>
            <div className="shrink-0">
              <div className="w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 overflow-hidden border border-zinc-800 rounded-sm">
                <img src="/richie-portrait.jpg" alt="Richie Lampani, Fractional Head of Talent" className="w-full h-full object-cover object-top" data-testid="img-profile" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-rebel-space pt-4 pb-16 sm:pb-20 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
          <ScrollReveal variant="fade-up" delay={200}>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-16">
            {[
              { value: "14+", label: "Years Experience", numeric: true },
              { value: "PMP", label: "Certified", numeric: false },
              { value: "53K+", label: "LinkedIn Followers", numeric: true },
              { value: "8K", label: "Newsletter Subs", numeric: true },
              { value: "TS/SCI", label: "Cleared Hiring", numeric: false },
            ].map((stat) => (
              <div key={stat.label} className="border border-zinc-800 bg-zinc-900/30 p-5 text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                {stat.numeric ? (
                  <AnimatedCounter value={stat.value} className="font-display text-2xl font-bold text-rebel-red mb-1" />
                ) : (
                  <div className="font-display text-2xl font-bold text-rebel-red mb-1">{stat.value}</div>
                )}
                <div className="text-zinc-500 text-xs tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up">
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-6 pb-3 border-b border-rebel-red/30" data-testid="heading-specializations">
              Specializations
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Forward Deployed Engineers (FDEs)",
                "AI/ML Engineers & Research Scientists",
                "GTM: AEs, SEs, Solutions Engineers, RevOps, CSMs",
                "Cleared positions (Secret, TS, TS/SCI)",
                "Geospatial scientists & intelligence analysts",
                "Backend engineers & technical talent",
                "Defense contractor workforce buildouts",
                "Startup scaling (Series A-C)",
                "ATS implementation & optimization",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="text-rebel-red font-mono text-xs mt-0.5">&gt;</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up">
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-6 pb-3 border-b border-rebel-red/30" data-testid="heading-books">
              Published Work
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <GlowCard>
              <div className="border border-zinc-800 bg-zinc-900/30 p-6 flex flex-col sm:flex-row gap-5 items-start">
                <img src={headAndHeartCover} alt="Head and Heart book cover" className="w-28 shrink-0 border border-zinc-700" loading="lazy" />
                <div>
                  <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">BOOK</div>
                  <h3 className="font-display text-lg font-bold text-white uppercase mb-2">Head and Heart</h3>
                  <p className="text-zinc-500 text-sm mb-2">Winning the AI Recruiting War</p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                    My framework for combining strategic thinking with authentic human connection in recruiting. In an industry increasingly automated and transactional, you need both the head and the heart to win.
                  </p>
                  <a href="https://a.co/d/0hQXqHMm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-rebel-red text-sm font-semibold no-underline hover:text-white transition-colors">
                    Buy on Amazon <span className="text-xs">&#8594;</span>
                  </a>
                </div>
              </div>
              </GlowCard>
              <GlowCard>
              <div className="border border-zinc-800 bg-zinc-900/30 p-6 flex flex-col sm:flex-row gap-5 items-start">
                <img src={unfinishedRoomsCover} alt="Unfinished Rooms book cover" className="w-28 shrink-0 border border-zinc-700" loading="lazy" />
                <div>
                  <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">BOOK</div>
                  <h3 className="font-display text-lg font-bold text-white uppercase mb-2">Unfinished Rooms</h3>
                  <p className="text-zinc-500 text-sm mb-2">Why Great Employees Keep One Foot Out the Door</p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                    A psychological framework for understanding employee turnover and disengagement. Unresolved interactions, unclear expectations, and abandoned projects create "unfinished rooms" in employees' minds.
                  </p>
                  <a href="https://a.co/d/00XELail" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-rebel-red text-sm font-semibold no-underline hover:text-white transition-colors">
                    Buy on Amazon <span className="text-xs">&#8594;</span>
                  </a>
                </div>
              </div>
              </GlowCard>
            </div>
          </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up">
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-6 pb-3 border-b border-rebel-red/30">
              Engagement Models
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-zinc-800 bg-zinc-900/30 p-6">
                <h3 className="font-display text-base font-bold text-white uppercase mb-2">Fractional Head of Talent</h3>
                <p className="text-rebel-red font-mono text-sm mb-2">$12K - $30K/month</p>
                <p className="text-zinc-400 text-sm leading-relaxed">Embedded leadership owning your recruiting function.</p>
              </div>
              <div className="border border-zinc-800 bg-zinc-900/30 p-6">
                <h3 className="font-display text-base font-bold text-white uppercase mb-2">Team Assessments</h3>
                <p className="text-rebel-red font-mono text-sm mb-2">$8K - $20K</p>
                <p className="text-zinc-400 text-sm leading-relaxed">Full talent function audit and strategic recommendations.</p>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* Safe addition, Client testimonial */}
          <ScrollReveal variant="fade-up">
          <div className="mb-16 max-w-3xl mx-auto text-center">
            <blockquote className="relative">
              <span className="absolute -top-4 -left-2 text-rebel-red/20 text-6xl font-serif leading-none select-none">&ldquo;</span>
              <p className="text-zinc-200 text-lg leading-relaxed italic mb-4">
                In a review, I was told I had an amazing team, cohesive and indistinguishable from full time employees.
              </p>
              <footer className="text-zinc-500 text-sm">
                <span className="text-zinc-300 font-semibold">Arin, VP of Operations</span>, EarthDaily Federal
              </footer>
            </blockquote>
          </div>
          </ScrollReveal>

          <ScrollReveal variant="scale">
          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/10 to-transparent p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-4">
              Connect Now
            </h2>
            <p className="text-zinc-400 text-sm mb-6 max-w-lg mx-auto">
              30 minutes of straight answers for operators ready to stop the bleed and build something that lasts.
            </p>
            <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer" data-testid="button-about-cta">
              <Button className="font-display tracking-wider uppercase text-sm">
                Book Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
