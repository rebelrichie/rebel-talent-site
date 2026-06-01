import { ArrowRight, Zap, Target, Shield, TrendingUp, Users, Eye, Brain, Layers, Lock, BarChart3, Send } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";

export default function Platform() {
  return (
    <PageLayout>
      <PageSEO
        title="The Rebel Platform | Rebel Talent Systems"
        description="I built this. Three integrated apps running my recruiting operation in production. It's not for sale, but when you work with me, it's what I work with."
        path="/platform"
        ogTitle="The Rebel Platform | Rebel Talent Systems"
        ogDescription="This isn't a SaaS product. It's the recruiting infrastructure I built from scratch and run on real client work daily. When you engage Rebel Talent, this is what's behind it."
        ogImage="og-platform.png"
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Platform", item: "https://rebeltalentsystems.com/platform" },
        ]}
      />

      {/* Hero */}
      <section className="space-hero py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal variant="blur" immediate>
          <div className="text-center mb-16">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
              THE REBEL PLATFORM
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-4">
              I built this.<br />It's not for sale.
            </h1>
            <p className="text-zinc-400 text-base max-w-2xl mx-auto leading-relaxed">
              Three integrated applications running my entire recruiting operation in production.
              No off-the-shelf ATS. No bolted-together tool stack. I built what I needed because
              nothing that existed was good enough. When you work with me, this is what you're working with.
            </p>
          </div>
          </ScrollReveal>

          {/* App Icons */}
          <div className="flex justify-center gap-8 sm:gap-12 mb-16">
            {[
              { name: "Command", desc: "The operator war room", href: "/command", icon: "/icon-command.png?v=6", glow: "0 0 30px 8px rgba(255,69,0,0.35)" },
              { name: "Apply", desc: "The candidate portal", href: "https://rebelapply.com", icon: "/icon-apply.png?v=6", glow: "0 0 30px 8px rgba(56,189,248,0.35)" },
              { name: "Talent", desc: "The public layer", href: "https://rebeltalentsystems.com", icon: "/icon-talent.png?v=6", glow: "0 0 30px 8px rgba(59,130,246,0.4)" },
            ].map((app) => (
              <a key={app.name} href={app.href} {...(app.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-105">
                <img
                  src={app.icon}
                  alt={`Rebel ${app.name}`}
                  style={{
                    width: "clamp(6rem, 12vw, 8rem)",
                    height: "clamp(6rem, 12vw, 8rem)",
                    borderRadius: "22px",
                    objectFit: "cover",
                    display: "block",
                    border: "none",
                    outline: "none",
                    boxShadow: app.glow,
                    transition: "box-shadow 0.3s ease",
                    padding: 0,
                    margin: 0,
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = app.glow.replace("0.35)", "0.6)").replace("0.4)", "0.65)"); }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = app.glow; }}
                />
                <div className="text-center">
                  <div className="font-display text-sm font-bold text-white uppercase tracking-wide group-hover:text-rebel-red transition-colors">{app.name}</div>
                  <div className="text-zinc-500 text-xs mt-0.5">{app.desc}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Ownership statement */}
          <ScrollReveal variant="fade-up">
          <div className="max-w-2xl mx-auto border border-zinc-800 bg-zinc-900/30 px-8 py-6 text-center">
            <p className="text-zinc-300 text-sm leading-relaxed">
              This system runs on real client work. It is not a demo environment, not a prototype,
              and not a pitch deck. It processes real candidates, real pipelines, and real placements
              every day. I built it, I maintain it, and I own it completely.
              <span className="text-rebel-red font-semibold"> It is not available as a standalone product.</span>
            </p>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Rebel Command */}
      <section className="py-12 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start">
            <ScrollReveal variant="fade-up">
            <div className="sm:w-1/3">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">APP 01</div>
              <h2 className="font-display text-2xl font-bold text-white uppercase mb-2">Rebel Command</h2>
              <p className="text-zinc-400 text-base leading-relaxed">
                My operating system. Pipeline management, AI agents, outreach, revenue tracking,
                and the daily brief, all in one place. Clients get visibility. I get control.
              </p>
              <a href="/command" className="inline-block mt-4">
                <Button variant="outline" size="sm" className="font-display tracking-wider uppercase text-xs border-zinc-700 text-zinc-300">
                  See It Live <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
              </a>
            </div>
            </ScrollReveal>
            <div className="sm:w-2/3 grid grid-cols-2 gap-3">
              {[
                { icon: <BarChart3 className="w-4 h-4" />, title: "Real-Time Pipeline", desc: "Kanban board with customizable stages, drag-and-drop, and instant status updates across every active role." },
                { icon: <Brain className="w-4 h-4" />, title: "27 AI Agents", desc: "Sourcing, interview prep, daily briefs, follow-ups, and outreach, all automated and running in production." },
                { icon: <Send className="w-4 h-4" />, title: "One-Click Outreach", desc: "Scheduling emails, follow-ups, and submission packets sent in a single click. No copy-paste, no manual formatting." },
                { icon: <Layers className="w-4 h-4" />, title: "Templates Engine", desc: "Every agent prompt versioned and managed. Consistent output across every role and every client." },
                { icon: <TrendingUp className="w-4 h-4" />, title: "Revenue Tracking", desc: "Contracts, invoices, time entries, and ROI, one dashboard, not four spreadsheets." },
                { icon: <Eye className="w-4 h-4" />, title: "Full Audit Trail", desc: "Every action logged. Every pipeline change recorded. Nothing falls through the cracks." },
              ].map((f, i) => (
                <ScrollReveal key={f.title} variant="fade-up" delay={i * 100}>
                <GlowCard className="border border-zinc-800 bg-zinc-900/30 p-4">
                  <div className="text-rebel-red mb-2">{f.icon}</div>
                  <div className="font-display text-sm font-bold text-white uppercase mb-1">{f.title}</div>
                  <div className="text-zinc-400 text-base leading-relaxed">{f.desc}</div>
                </GlowCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rebel Apply */}
      <section className="py-12 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start">
            <ScrollReveal variant="fade-up">
            <div className="sm:w-1/3">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">APP 02</div>
              <h2 className="font-display text-2xl font-bold text-white uppercase mb-2">Rebel Apply</h2>
              <p className="text-zinc-400 text-base leading-relaxed">
                The candidate-facing portal. Built because resume-only applications don't tell me what I need to know.
                Candidates prove it before I pick up the phone.
              </p>
              <a href="https://rebelapply.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
                <Button variant="outline" size="sm" className="font-display tracking-wider uppercase text-xs border-zinc-700 text-zinc-300">
                  Visit Rebel Apply <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
              </a>
            </div>
            </ScrollReveal>
            <div className="sm:w-2/3 grid grid-cols-2 gap-3">
              {[
                { icon: <Target className="w-4 h-4" />, title: "Portfolio-First Profiles", desc: "Work samples, deliverables, and proof, not buzzwords. I see what candidates have actually built." },
                { icon: <Eye className="w-4 h-4" />, title: "60-Second Video Intros", desc: "Communication and personality before the first call. AI-transcribed, searchable, and linked to the pipeline." },
                { icon: <Zap className="w-4 h-4" />, title: "AI Resume Parsing", desc: "Resume uploads auto-populate the entire profile. No manual entry, no reformatting." },
                { icon: <Shield className="w-4 h-4" />, title: "Evidence Boost", desc: "Optional section for key deliverables that prove impact, not just job titles and dates." },
                { icon: <BarChart3 className="w-4 h-4" />, title: "Profile Studio", desc: "AI coaching that scores profiles and surfaces gaps before candidates hit the pipeline." },
                { icon: <Lock className="w-4 h-4" />, title: "Privacy First", desc: "Anonymous Spotlight listings. Names never shown publicly. Candidates control their own visibility." },
              ].map((f, i) => (
                <ScrollReveal key={f.title} variant="fade-up" delay={i * 100}>
                <GlowCard className="border border-zinc-800 bg-zinc-900/30 p-4">
                  <div className="text-rebel-red mb-2">{f.icon}</div>
                  <div className="font-display text-sm font-bold text-white uppercase mb-1">{f.title}</div>
                  <div className="text-zinc-400 text-base leading-relaxed">{f.desc}</div>
                </GlowCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rebel Talent */}
      <section className="py-12 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start">
            <ScrollReveal variant="fade-up">
            <div className="sm:w-1/3">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">APP 03</div>
              <h2 className="font-display text-2xl font-bold text-white uppercase mb-2">Rebel Talent</h2>
              <p className="text-zinc-400 text-base leading-relaxed">
                The public layer. Employer branding, talent spotlight, and the front door to the network.
                Everything Command manages privately shows up here on my terms.
              </p>
            </div>
            </ScrollReveal>
            <div className="sm:w-2/3 grid grid-cols-2 gap-3">
              {[
                { icon: <Users className="w-4 h-4" />, title: "Talent Spotlight", desc: "Anonymous, categorized talent directory. AI/ML, Executive, Cleared, and ALLSTAR tiers, filtered and surfaced for hiring companies." },
                { icon: <Send className="w-4 h-4" />, title: "Intro Requests", desc: "Companies request intros to anonymous candidates. 4-step lead capture with full fee acknowledgment." },
                { icon: <Zap className="w-4 h-4" />, title: "Job Syndication", desc: "Open roles from Command auto-publish to the public job board. One system of record, one source of truth." },
                { icon: <TrendingUp className="w-4 h-4" />, title: "Proof in Public", desc: "Case studies, ROI numbers, and results, all live. $240K+ in agency fees avoided. 470%+ projected ROI." },
              ].map((f, i) => (
                <ScrollReveal key={f.title} variant="fade-up" delay={i * 100}>
                <GlowCard className="border border-zinc-800 bg-zinc-900/30 p-4">
                  <div className="text-rebel-red mb-2">{f.icon}</div>
                  <div className="font-display text-sm font-bold text-white uppercase mb-1">{f.title}</div>
                  <div className="text-zinc-400 text-base leading-relaxed">{f.desc}</div>
                </GlowCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-12 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-10">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">WHY THIS MATTERS TO YOU</div>
            <h2 className="font-display text-2xl font-bold text-white uppercase">What you actually get</h2>
          </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {[
              "You're not a beta user. This system runs on active client work, today.",
              "Every agent, workflow, and integration was built for a real recruiting problem, not a demo.",
              "You don't pay for the platform separately. It's part of how I work.",
              "The infrastructure your engagement runs on took years and every mistake I made to build.",
              "No vendor dependency. No platform lock-in. No 'we're deprecating this feature.'",
              "When the engagement ends, you know exactly what was done and how. It's documented.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 border border-zinc-800/50 bg-zinc-900/20 px-4 py-3">
                <span className="text-rebel-red font-mono font-bold text-xs mt-0.5 shrink-0">&gt;</span>
                <span className="text-zinc-400 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-zinc-800/50 bg-gradient-to-b from-rebel-red/5 to-transparent">
        <ScrollReveal variant="scale">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <img src="/logo.png" alt="Rebel Talent" className="w-16 h-16 mx-auto mb-6" />
          <h2 className="font-display text-2xl font-bold text-white uppercase mb-3">Work with me. Use the system.</h2>
          <p className="text-zinc-400 text-sm mb-8 max-w-lg mx-auto">
            The platform isn't something you buy. It's what you get when you bring me in.
            Book a call and let's talk about what your hiring actually needs.
          </p>
          <a href="/strategy-call" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="font-display tracking-wider uppercase text-sm px-8">
              Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
        </ScrollReveal>
      </section>
    </PageLayout>
  );
}
