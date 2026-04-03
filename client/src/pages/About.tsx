import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import GlowCard from "@/components/GlowCard";

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
        schemas={[personSchema]}
        breadcrumbs={BREADCRUMBS}
      />
      <section className="space-hero py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal variant="fade-up">
          <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start mb-16">
            <div className="text-center md:text-left">
              <div className="w-48 h-48 mx-auto md:mx-0 mb-4 overflow-hidden border-2 border-rebel-red/30">
                <img src={richiePfp} alt="Richie Lampani" className="w-full h-full object-cover object-top" data-testid="img-profile" />
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-4">
                <a href="https://linkedin.com/in/richielampani" target="_blank" rel="noopener noreferrer" data-testid="link-linkedin">
                  <Button variant="outline" size="sm" className="font-mono text-xs tracking-wider border-zinc-700 text-zinc-300">
                    LinkedIn
                  </Button>
                </a>
                <a href="mailto:richie@rebeltalentsystems.com" data-testid="link-email">
                  <Button variant="outline" size="sm" className="font-mono text-xs tracking-wider border-zinc-700 text-zinc-300">
                    Email
                  </Button>
                </a>
              </div>
            </div>

            <div>
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
                ABOUT
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight mb-2" data-testid="text-name">
                Richie Lampani
              </h1>
              <h2 className="font-display text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                Fractional Head of Talent | Startup Recruiting & Defense Hiring Specialist
              </h2>
              <p className="text-rebel-red font-display text-lg uppercase tracking-wider mb-4" data-testid="text-tagline">
                Operator. Builder. Anti-Agency Force.
              </p>
              {/* Safe addition — Availability signal */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 border border-green-500/30 bg-green-500/10 px-4 py-1.5 rounded-full">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-xs font-mono tracking-wider uppercase">Currently accepting 2 new engagements</span>
                </span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4" data-testid="text-intro">
                Richie Lampani built his career in the trenches of high-stakes hiring, leading talent functions for defense contractors and growth-stage tech firms. With 14 years of experience, he's closed hundreds of roles (from cleared TS/SCI positions to executive searches) while navigating compliance, scaling bottlenecks, and agency pitfalls.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Frustrated by models that profit from repeated failures, he founded Rebel Talent Systems to deliver embedded leadership and systems that clients own forever. Operator grit. No jargon. Pure execution.
              </p>
            </div>
          </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200}>
          <div className="grid sm:grid-cols-4 gap-4 mb-16">
            {[
              { value: "14+", label: "Years Experience", numeric: true },
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

          {/* Safe addition — Client testimonial */}
          <ScrollReveal variant="fade-up">
          <div className="mb-16 max-w-3xl mx-auto text-center">
            <blockquote className="relative">
              <span className="absolute -top-4 -left-2 text-rebel-red/20 text-6xl font-serif leading-none select-none">&ldquo;</span>
              <p className="text-zinc-200 text-lg leading-relaxed italic mb-4">
                In a review, I was told I had an amazing team, cohesive and indistinguishable from full time employees.
              </p>
              <footer className="text-zinc-500 text-sm">
                <span className="text-zinc-300 font-semibold">Arin, VP of Operations</span> — EarthDaily Federal
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
              30 minutes. No pitch. Real answers for operators ready to stop the bleed and build something that lasts.
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
