// Safe addition — Client Portal marketing page
import { ArrowRight, BarChart3, Brain, MessageSquare, FileText, Activity, Unlock, Rocket, Users, ThumbsUp, Gift } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";
import CapacityBadge from "@/components/CapacityBadge";

const features = [
  { icon: <BarChart3 className="w-5 h-5" />, title: "Real-Time Pipeline", desc: "See every candidate's status as it changes. No more weekly email updates or status meetings. Your search, live." },
  { icon: <Brain className="w-5 h-5" />, title: "AI Candidate Briefs", desc: "Every candidate comes with an AI-generated intelligence brief: career narrative, strengths analysis, market positioning, and suggested interview questions." },
  { icon: <ThumbsUp className="w-5 h-5" />, title: "One-Click Feedback", desc: "Rate candidates directly in your dashboard. Strong Interest, Interested, or Pass — your feedback syncs to our team instantly." },
  { icon: <FileText className="w-5 h-5" />, title: "Self-Service Job Intake", desc: "Submit new roles anytime. Our AI starts generating role briefs the moment you hit submit." },
  { icon: <Activity className="w-5 h-5" />, title: "Activity Feed", desc: "Chronological timeline of everything happening on your search. New submissions, status changes, team updates — all in one place." },
  { icon: <Unlock className="w-5 h-5" />, title: "No ATS Lock-In", desc: "Unlike agencies that disappear when the contract ends, your portal stays active. Your data, your candidates, your system." },
];

const steps = [
  { num: "01", icon: <Rocket className="w-5 h-5" />, title: "We Start Your Search", desc: "You engage Rebel Talent. We set up your portal and begin sourcing." },
  { num: "02", icon: <Users className="w-5 h-5" />, title: "Candidates Appear", desc: "AI-powered briefs land in your dashboard as candidates are vetted." },
  { num: "03", icon: <MessageSquare className="w-5 h-5" />, title: "You Give Feedback", desc: "One click. Your input shapes the search in real-time." },
  { num: "04", icon: <Gift className="w-5 h-5" />, title: "We Leave, You Keep It", desc: "When the engagement ends, the portal stays. Your pipeline, your data, forever." },
];

export default function ClientPortal() {
  return (
    <PageLayout>
      <PageSEO
        title="Client Portal | Rebel Talent Systems"
        description="Real-time pipeline visibility, AI-powered candidate intelligence, and self-service tools — included with every engagement. No ATS subscription required."
        path="/client-portal"
        ogTitle="Client Portal | Rebel Talent Systems"
        ogDescription="Your recruiting dashboard. Yours to keep. Real-time pipeline, AI briefs, one-click feedback — no extra charge."
        ogImage="og-client-portal.png"
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Client Portal", item: "https://rebeltalentsystems.com/client-portal" },
        ]}
      />

      {/* Hero */}
      <section className="space-hero py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal variant="blur" immediate>
            <div className="text-center mb-16">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
                INCLUDED WITH EVERY ENGAGEMENT
              </div>
              <h1 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-4">
                Your Recruiting Dashboard.<br />Yours to Keep.
              </h1>
              <p className="text-zinc-400 text-base max-w-2xl mx-auto leading-relaxed">
                Real-time pipeline visibility, AI-powered candidate intelligence, and self-service tools — no ATS subscription required. When we're done, the system stays with you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto font-display tracking-wider uppercase text-sm px-8">
                    Book Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <a href="#features">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto font-display tracking-wider uppercase text-sm px-8 border-zinc-700 text-zinc-300">
                    See How It Works
                  </Button>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-12">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">FEATURES</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                Everything You Need. Nothing You Don't.
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} variant="fade-up" delay={i * 100}>
                <GlowCard className="border border-zinc-800 bg-zinc-900/30 p-5">
                  <div className="text-rebel-red mb-3">{f.icon}</div>
                  <div className="font-display text-sm font-bold text-white uppercase mb-2">{f.title}</div>
                  <div className="text-zinc-400 text-base leading-relaxed">{f.desc}</div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What You See — Visual Mockup */}
      <section className="py-16 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-12">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">PREVIEW</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                What You See
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Dashboard KPI Card */}
            <ScrollReveal variant="fade-up" delay={0}>
              <div className="rounded-xl bg-white p-6 shadow-2xl shadow-blue-500/10">
                <div className="font-mono text-xs text-blue-600 tracking-wider uppercase mb-4">Dashboard Overview</div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Open Roles", value: "4", color: "text-blue-600" },
                    { label: "Candidates", value: "23", color: "text-zinc-900" },
                    { label: "Interviewing", value: "6", color: "text-amber-600" },
                    { label: "Placed", value: "2", color: "text-green-600" },
                  ].map((kpi) => (
                    <div key={kpi.label} className="text-center">
                      <div className={`font-display text-2xl font-bold ${kpi.color}`}>{kpi.value}</div>
                      <div className="text-zinc-500 text-xs font-mono uppercase tracking-wider mt-1">{kpi.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Candidate Card */}
            <ScrollReveal variant="fade-up" delay={150}>
              <div className="rounded-xl bg-white p-6 shadow-2xl shadow-blue-500/10">
                <div className="font-mono text-xs text-blue-600 tracking-wider uppercase mb-3">Candidate Brief</div>
                <div className="font-display text-sm font-bold text-zinc-900 uppercase mb-1">Candidate A</div>
                <div className="text-zinc-500 text-xs mb-4">Senior Infrastructure Leader</div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-600 text-xs font-mono">Cloud Architecture</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                        <div className="w-[90%] h-full bg-blue-500 rounded-full" />
                      </div>
                      <span className="text-zinc-900 text-xs font-bold font-mono">9/10</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-600 text-xs font-mono">Team Scaling</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                        <div className="w-[80%] h-full bg-blue-500 rounded-full" />
                      </div>
                      <span className="text-zinc-900 text-xs font-bold font-mono">8/10</span>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 border border-amber-200 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span className="text-amber-700 text-xs font-mono font-semibold uppercase tracking-wider">Interviewing</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-12">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">PROCESS</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                How It Works
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {steps.map((s, i) => (
              <ScrollReveal key={s.num} variant="fade-up" delay={i * 150}>
                <GlowCard className="border border-zinc-800 bg-zinc-900/30 p-6 text-center">
                  <div className="font-mono text-rebel-red text-2xl font-bold mb-3">{s.num}</div>
                  <div className="text-zinc-500 mb-3 flex justify-center">{s.icon}</div>
                  <div className="font-display text-sm font-bold text-white uppercase mb-2">{s.title}</div>
                  <div className="text-zinc-400 text-base leading-relaxed">{s.desc}</div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-6">CLIENT FEEDBACK</div>
              <blockquote className="text-xl sm:text-2xl font-display text-white leading-relaxed mb-6">
                "In a review, I was told I had an amazing team, cohesive and indistinguishable from full time employees."
              </blockquote>
              <div className="text-zinc-500 text-sm font-mono">
                — Arin, VP of Operations, EarthDaily Federal
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 border-t border-zinc-800/50 bg-gradient-to-b from-rebel-red/5 to-transparent">
        <ScrollReveal variant="scale">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <img src="/logo.png" alt="Rebel Talent" className="w-16 h-16 mx-auto mb-6" />
            <h2 className="font-display text-2xl font-bold text-white uppercase mb-3">
              Every Client Gets This. No Extra Charge.
            </h2>
            <p className="text-zinc-400 text-sm mb-8 max-w-lg mx-auto">
              The Client Portal is included with every Rebel Talent engagement. Your dashboard, your data, your system — forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto font-display tracking-wider uppercase text-sm px-8">
                  Book Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
            <CapacityBadge />
          </div>
        </ScrollReveal>
      </section>
    </PageLayout>
  );
}
