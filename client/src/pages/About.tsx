import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <PageLayout>
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start mb-16">
            <div className="text-center md:text-left">
              <div className="w-48 h-48 mx-auto md:mx-0 border-2 border-rebel-red/30 bg-zinc-900 flex items-center justify-center mb-4">
                <img src="/logo.png" alt="Richie Lampani" className="w-40 h-40" data-testid="img-profile" />
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
              <p className="text-rebel-red font-display text-lg uppercase tracking-wider mb-6" data-testid="text-tagline">
                Fractional Head of Talent
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4" data-testid="text-intro">
                14+ years of recruiting experience. PMP certified. Author. I've built talent acquisition functions from zero for defense tech companies, legal managed services firms, and high-growth startups. I don't do surface-level recruiting -- I build the infrastructure that makes great hiring repeatable.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                I specialize in cleared hiring (Secret, TS, TS/SCI), defense contractor talent, geospatial intelligence recruiting, and startup scaling. If your hiring is broken, I fix the system -- not just the symptoms.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 mb-16">
            {[
              { value: "14+", label: "Years Experience" },
              { value: "PMP", label: "Certified" },
              { value: "TS/SCI", label: "Cleared Hiring" },
              { value: "50K+", label: "LinkedIn Network" },
            ].map((stat) => (
              <div key={stat.label} className="border border-zinc-800 bg-zinc-900/30 p-5 text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="font-display text-2xl font-bold text-rebel-red mb-1">{stat.value}</div>
                <div className="text-zinc-500 text-xs tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-6 pb-3 border-b border-rebel-red/30" data-testid="heading-specializations">
              Specializations
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
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

          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-6 pb-3 border-b border-rebel-red/30" data-testid="heading-books">
              Published Work
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border border-zinc-800 bg-zinc-900/30 p-6">
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">BOOK</div>
                <h3 className="font-display text-lg font-bold text-white uppercase mb-2">Head and Heart</h3>
                <p className="text-zinc-500 text-sm mb-2">Winning the AI Recruiting War</p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  My framework for combining strategic thinking with authentic human connection in recruiting. In an industry increasingly automated and transactional, you need both the head and the heart to win.
                </p>
              </div>
              <div className="border border-zinc-800 bg-zinc-900/30 p-6">
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">BOOK</div>
                <h3 className="font-display text-lg font-bold text-white uppercase mb-2">Unfinished Rooms</h3>
                <p className="text-zinc-500 text-sm mb-2">Why Great Employees Keep One Foot Out the Door</p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  A psychological framework for understanding employee turnover and disengagement. Unresolved interactions, unclear expectations, and abandoned projects create "unfinished rooms" in employees' minds.
                </p>
              </div>
            </div>
          </div>

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

          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/10 to-transparent p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-4">
              Ready to Talk?
            </h2>
            <p className="text-zinc-400 text-sm mb-6 max-w-lg mx-auto">
              Book a strategy call and let's figure out how to fix your hiring.
            </p>
            <a href="https://calendar.app.google/TqhGeNMKZPcRmb4o8" target="_blank" rel="noopener noreferrer" data-testid="button-about-cta">
              <Button className="font-display tracking-wider uppercase text-sm">
                Book Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
