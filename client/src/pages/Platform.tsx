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
        description="Three apps, one ecosystem. Rebel Command, Rebel Apply, and Rebel Talent — AI-powered recruiting infrastructure that you own."
        path="/platform"
        ogTitle="The Rebel Platform | Rebel Talent Systems"
        ogDescription="Stop vibe-coding your own recruiting tools. The Rebel Platform gives you pipeline management, talent capture, and public branding in one integrated system."
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
              Three apps. One ecosystem.<br />Zero agency dependency.
            </h1>
            <p className="text-zinc-400 text-base max-w-2xl mx-auto leading-relaxed">
              Stop cobbling together Ashby, Lever, LinkedIn Recruiter, spreadsheets, and Notion.
              The Rebel Platform is a fully integrated recruiting infrastructure built for operators who refuse to settle for broken tools.
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
              <p className="text-zinc-400 text-base">The operator war room. Your single source of truth for pipeline, candidates, and revenue.</p>
              <a href="/command" className="inline-block mt-4">
                <Button variant="outline" size="sm" className="font-display tracking-wider uppercase text-xs border-zinc-700 text-zinc-300">
                  See Demo <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
              </a>
            </div>
            </ScrollReveal>
            <div className="sm:w-2/3 grid grid-cols-2 gap-3">
              {[
                { icon: <BarChart3 className="w-4 h-4" />, title: "Real-Time Pipeline", desc: "Kanban board with customizable stages, drag-and-drop, and instant status updates." },
                { icon: <Brain className="w-4 h-4" />, title: "23 AI Agents", desc: "Sourcing, interview prep, briefs, follow-ups, and onboarding — all automated." },
                { icon: <Send className="w-4 h-4" />, title: "One-Click Outreach", desc: "Send scheduling emails, follow-ups, and submission packets in a single click." },
                { icon: <Layers className="w-4 h-4" />, title: "Templates Engine", desc: "Manage and version prompt templates for every agent across your workflow." },
                { icon: <TrendingUp className="w-4 h-4" />, title: "Revenue Tracking", desc: "Contracts, invoices, time entries, and ROI — all in one dashboard." },
                { icon: <Eye className="w-4 h-4" />, title: "Activity Audit Trail", desc: "Every action logged. Full visibility into pipeline changes and agent runs." },
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
              <p className="text-zinc-400 text-base">The candidate portal. Proof-first profiles, video intros, and 1-click applications.</p>
              <a href="https://rebelapply.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
                <Button variant="outline" size="sm" className="font-display tracking-wider uppercase text-xs border-zinc-700 text-zinc-300">
                  Visit Rebel Apply <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
              </a>
            </div>
            </ScrollReveal>
            <div className="sm:w-2/3 grid grid-cols-2 gap-3">
              {[
                { icon: <Target className="w-4 h-4" />, title: "Portfolio-First Profiles", desc: "Candidates lead with work, not buzzwords. Portfolio projects, deliverables, and evidence." },
                { icon: <Eye className="w-4 h-4" />, title: "60-Second Video Intros", desc: "See personality and communication before the first call. AI-transcribed and summarized." },
                { icon: <Zap className="w-4 h-4" />, title: "AI Resume Parsing", desc: "Upload a resume, auto-populate the entire profile. Experience, education, skills — extracted." },
                { icon: <Shield className="w-4 h-4" />, title: "Evidence Boost", desc: "Optional section for key deliverables that prove impact — not just job titles." },
                { icon: <BarChart3 className="w-4 h-4" />, title: "Profile Studio", desc: "AI coaching that scores your profile, suggests improvements, and tracks discoverability." },
                { icon: <Lock className="w-4 h-4" />, title: "Privacy First", desc: "Anonymous Spotlight profiles. Names never shown publicly. Candidates control visibility." },
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
              <p className="text-zinc-400 text-base">The public layer. Employer branding, talent spotlight, and the front door to your network.</p>
            </div>
            </ScrollReveal>
            <div className="sm:w-2/3 grid grid-cols-2 gap-3">
              {[
                { icon: <Users className="w-4 h-4" />, title: "Talent Spotlight", desc: "Anonymous, categorized talent directory. Filtered by AI/ML, Executive, Cleared, and ALLSTAR tiers." },
                { icon: <Send className="w-4 h-4" />, title: "Request Introductions", desc: "Companies request intros to anonymous candidates. 4-step lead capture with fee acknowledgment." },
                { icon: <Zap className="w-4 h-4" />, title: "Job Syndication", desc: "Open roles from the Command Center auto-publish to the public job board." },
                { icon: <TrendingUp className="w-4 h-4" />, title: "Case Studies & Proof", desc: "Real results — 350% ROI, $178K in agency fees avoided, 30-day average time to hire." },
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

      {/* How It All Connects */}
      <section className="py-12 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-10">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">ARCHITECTURE</div>
            <h2 className="font-display text-2xl font-bold text-white uppercase">How It All Connects</h2>
          </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { step: "01", title: "Candidates apply through Rebel Apply", desc: "Portfolio, video intro, evidence. No cover letters. No fluff. The profile auto-syncs to Command." },
              { step: "02", title: "Operators manage everything in Command", desc: "Pipeline, outreach, AI agents, templates, scheduling — one war room. Drag a card, send an email, generate a brief." },
              { step: "03", title: "Companies discover talent on Rebel Talent", desc: "Anonymous Spotlight profiles, job listings, intro requests. The public layer that drives inbound." },
            ].map((s, i) => (
              <ScrollReveal key={s.step} variant="fade-up" delay={i * 150}>
              <GlowCard className="border border-zinc-800 bg-zinc-900/30 p-6 text-center">
                <div className="font-mono text-rebel-red text-2xl font-bold mb-3">{s.step}</div>
                <div className="font-display text-sm font-bold text-white uppercase mb-2">{s.title}</div>
                <div className="text-zinc-400 text-base leading-relaxed">{s.desc}</div>
              </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Not Just Build Your Own */}
      <section className="py-12 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-10">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">REAL TALK</div>
            <h2 className="font-display text-2xl font-bold text-white uppercase">Why not just vibe-code your own?</h2>
          </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {[
              "You'll spend 6 months building what we deployed last week",
              "Your Notion + Airtable + Zapier stack will collapse at 20 hires",
              "AI agents need prompt engineering, cost tracking, and failover — not just a ChatGPT wrapper",
              "Compliance, consent tracking, and audit trails aren't optional anymore",
              "Your engineers should be building your product, not your ATS",
              "We've already made every mistake so you don't have to",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 border border-zinc-800/50 bg-zinc-900/20 px-4 py-3">
                <span className="text-rebel-red font-mono font-bold text-xs mt-0.5 shrink-0">X</span>
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
          <h2 className="font-display text-2xl font-bold text-white uppercase mb-3">Ready to ditch the agency model?</h2>
          <p className="text-zinc-400 text-sm mb-8 max-w-lg mx-auto">
            Book a strategy call. We'll show you the platform live and map it to your hiring needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto font-display tracking-wider uppercase text-sm px-8">
                Book Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="https://rebelapply.com/spotlight" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto font-display tracking-wider uppercase text-sm px-8 border-zinc-700 text-zinc-300">
                Browse Spotlight Talent
              </Button>
            </a>
          </div>
        </div>
        </ScrollReveal>
      </section>
    </PageLayout>
  );
}
