import { Link } from "wouter";
import { ArrowRight, CheckCircle, Shield, Target, Zap, TrendingUp, Users, Clock } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";
import CapacityBadge from "@/components/CapacityBadge";
import CurrentEngagements from "@/components/CurrentEngagements";

// Safe addition — haptic feedback for PWA CTA taps
function hapticTap() {
  if (navigator.vibrate) navigator.vibrate(15);
}

// Safe addition — SEO landing page schema
const fractionalSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Fractional Head of Talent",
  "provider": {
    "@type": "Person",
    "name": "Richie Lampani",
    "jobTitle": "Fractional Head of Talent",
    "url": "https://rebeltalentsystems.com/about",
    "worksFor": {
      "@type": "Organization",
      "name": "Rebel Talent Systems",
      "url": "https://rebeltalentsystems.com"
    }
  },
  "description": "Fractional Head of Talent services for startups and defense contractors. Embedded recruiting leadership that owns your entire talent function — strategy, execution, ATS, and systems that survive after the engagement ends.",
  "url": "https://rebeltalentsystems.com/fractional-head-of-talent",
  "areaServed": ["United States", "Remote"],
  "serviceType": "Fractional Recruiting Leadership"
};

export default function FractionalHeadOfTalent() {
  return (
    <PageLayout>
      <PageSEO
        title="Fractional Head of Talent — Embedded Recruiting Leadership | Richie Lampani"
        description="Hire a Fractional Head of Talent who embeds into your company, owns the recruiting function, and builds infrastructure that survives after I leave. 14+ years experience. Startups & defense contractors."
        path="/fractional-head-of-talent"
        ogImage="og-fractional.png"
        schemas={[fractionalSchema]}
      />

      {/* Hero */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rebel-red/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1 text-center md:text-left">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-4">
                FRACTIONAL HEAD OF TALENT
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight mb-5">
                Stop Paying Agencies.<br />
                <span className="text-rebel-red">Own Your Hiring.</span>
              </h1>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6">
                I'm Richie Lampani — 53K LinkedIn followers, 8K newsletter subscribers, and I built my own ATS/CRM from scratch. I embed into your company as your Fractional Head of Talent — owning strategy, execution, process design, and hiring manager coaching. You get a full recruiting function at a fraction of the cost of an agency or full-time VP.
              </p>
              <div className="mb-4">
                <CapacityBadge />
              </div>
              {/* Safe addition — Current engagements */}
              <div className="mb-6">
                <CurrentEngagements />
              </div>
              <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer">
                <Button onClick={hapticTap} size="lg" className="font-display tracking-wider uppercase text-sm px-8">
                  Book Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
            <div className="shrink-0 text-center">
              <a href="https://linkedin.com/in/richielampani" target="_blank" rel="noopener noreferrer" className="inline-block group">
                <img
                  src="/richie-headshot.png"
                  alt="Richie Lampani — Fractional Head of Talent"
                  className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-2 border-rebel-red/30 group-hover:border-rebel-red/60 transition-colors"
                  style={{ filter: "drop-shadow(0 0 30px rgba(220,38,38,0.3))" }}
                />
              </a>
              <a href="https://linkedin.com/in/richielampani" target="_blank" rel="noopener noreferrer" className="block mt-3 text-zinc-500 text-xs font-mono tracking-wider hover:text-white transition-colors no-underline">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Fractional Head of Talent */}
      <section className="py-12 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-4">
              What Is a Fractional Head of Talent?
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed max-w-3xl mx-auto">
              A Fractional Head of Talent is a senior recruiting leader who embeds into your company part-time or full-time on a retainer basis. Unlike agencies that throw resumes over the wall, a fractional leader owns the entire talent function — from strategy and process design to hands-on execution and hiring manager coaching.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: <Target className="w-5 h-5 text-rebel-red" />, title: "Strategic Ownership", desc: "Hiring roadmap, prioritization, and workforce planning aligned to your business goals." },
              { icon: <Zap className="w-5 h-5 text-rebel-red" />, title: "Hands-On Execution", desc: "Sourcing, screening, interviewing, and closing — not just strategy decks." },
              { icon: <Shield className="w-5 h-5 text-rebel-red" />, title: "Systems You Keep", desc: "ATS setup, interview scorecards, offer frameworks, and playbooks that outlast the engagement." },
              { icon: <Users className="w-5 h-5 text-rebel-red" />, title: "Team Coaching", desc: "Hiring manager training, interview calibration, and recruiting culture that sticks." },
            ].map((item) => (
              <div key={item.title} className="border border-zinc-800 bg-zinc-900/30 p-5 flex gap-4 items-start hover:border-zinc-700 transition-colors">
                <div className="shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <div className="font-display text-sm font-bold text-white uppercase mb-1">{item.title}</div>
                  <div className="text-zinc-400 text-sm leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Agency vs Fractional comparison */}
      <section className="py-12 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-8">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">THE MATH</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
              Why Fractional Beats Agency
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 text-zinc-500 font-mono text-xs tracking-wider uppercase border-b border-zinc-800" />
                  <th className="text-center py-3 px-4 text-zinc-500 font-mono text-xs tracking-wider uppercase border-b border-zinc-800">Contingent Agency</th>
                  <th className="text-center py-3 px-4 text-rebel-red font-mono text-xs tracking-wider uppercase border-b border-rebel-red/30 bg-rebel-red/5">Fractional (Rebel)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: "Cost per Hire", agency: "$25K–$40K", fractional: "~$5K–$8K" },
                  { metric: "You Own the Process", agency: "No", fractional: "Yes — everything" },
                  { metric: "Alignment", agency: "Fee-motivated", fractional: "Embedded in your team" },
                  { metric: "Time to Fill", agency: "60–90 days", fractional: "<30 days" },
                  { metric: "Infrastructure Left Behind", agency: "Nothing", fractional: "ATS, playbooks, systems" },
                  { metric: "Candidate Quality", agency: "Resume spray", fractional: "Proof-first vetting" },
                  { metric: "Hiring Manager Coaching", agency: "None", fractional: "Built into every engagement" },
                  { metric: "Long-Term ROI", agency: "Zero — pay again next hire", fractional: "350%+ — systems compound" },
                ].map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? "bg-zinc-900/20" : ""}>
                    <td className="py-3 px-4 text-zinc-300 font-semibold border-b border-zinc-800/50">{row.metric}</td>
                    <td className="py-3 px-4 text-center text-zinc-500 border-b border-zinc-800/50">{row.agency}</td>
                    <td className="py-3 px-4 text-center text-white font-semibold border-b border-zinc-800/50 bg-rebel-red/5">{row.fractional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-8">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">RESULTS</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
              What Happens When You Bring Me In
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { value: "53K+", label: "LinkedIn Followers" },
              { value: "8K", label: "Newsletter Subs" },
              { value: "$178K", label: "Agency Fees Saved" },
              { value: "<30", label: "Days to Hire" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter value={stat.value} className="font-display text-3xl sm:text-4xl font-bold text-rebel-red mb-1" />
                <div className="text-zinc-500 text-xs tracking-widest uppercase font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/5 to-transparent p-6 sm:p-8">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">CASE STUDY</div>
            <h3 className="font-display text-xl font-bold text-white uppercase mb-2">EarthDaily Federal</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Defense-sector geospatial intelligence firm. Built their entire hiring infrastructure from scratch and eliminated agency dependency in under 90 days.
            </p>
            <Link href="/case-studies">
              <Button variant="outline" size="sm" className="font-display tracking-wider uppercase text-xs border-zinc-700 text-zinc-300">
                See Full Case Study <ArrowRight className="ml-2 w-3 h-3" />
              </Button>
            </Link>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal variant="fade-up">
          <blockquote className="relative mb-10">
            <span className="absolute -top-4 -left-2 text-rebel-red/20 text-6xl font-serif leading-none select-none">&ldquo;</span>
            <p className="text-zinc-200 text-lg sm:text-xl leading-relaxed italic mb-6">
              In a review, I was told I had an amazing team, cohesive and indistinguishable from full time employees.
            </p>
            <footer className="text-zinc-500 text-sm">
              <span className="text-zinc-300 font-semibold">Arin, VP of Operations</span> — EarthDaily Federal
            </footer>
          </blockquote>
          <blockquote className="relative">
            <span className="absolute -top-4 -left-2 text-rebel-red/20 text-6xl font-serif leading-none select-none">&ldquo;</span>
            <p className="text-zinc-200 text-2xl sm:text-3xl leading-relaxed italic mb-6 font-display">
              You Da Bomb.
            </p>
            <footer className="text-zinc-500 text-sm">
              <span className="text-zinc-300 font-semibold">Arin, VP of Operations</span> — EarthDaily Federal
            </footer>
          </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-12 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
              Who This Is For
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: <Zap className="w-5 h-5" />, title: "Series A–C Startups", desc: "Scaling fast, no recruiting function, bleeding agency fees." },
              { icon: <Shield className="w-5 h-5" />, title: "Defense Contractors", desc: "Need cleared talent (TS/SCI), CMMC compliance, federal deadlines." },
              { icon: <TrendingUp className="w-5 h-5" />, title: "Growth Companies", desc: "Hiring is a bottleneck, tired of bad fits, need accountability." },
            ].map((item) => (
              <div key={item.title} className="border border-zinc-800 bg-zinc-900/30 p-6 text-center">
                <div className="w-10 h-10 mx-auto border border-rebel-red/30 bg-rebel-red/10 flex items-center justify-center text-rebel-red mb-4">
                  {item.icon}
                </div>
                <h3 className="font-display text-sm font-bold text-white uppercase mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 border-t border-zinc-800/50 bg-gradient-to-b from-rebel-red/5 to-transparent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal variant="scale">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight mb-4">
            Ready to Own Your Hiring?
          </h2>
          <p className="text-zinc-400 text-base mb-6 max-w-xl mx-auto">
            30-minute strategy call. No sales pitch — just a real diagnosis of your recruiting gaps and a plan to fix them.
          </p>
          <div className="mb-6">
            <CapacityBadge />
          </div>
          <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer">
            <Button onClick={hapticTap} size="lg" className="font-display tracking-wider uppercase text-sm px-10">
              Book Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
