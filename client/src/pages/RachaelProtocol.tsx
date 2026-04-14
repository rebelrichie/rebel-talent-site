// Safe addition — The Rachael Protocol: transparency page about our AI operations persona
import { Link } from "wouter";
import { ArrowRight, Bot, Shield, Eye, Clock, Mail, Zap, ChevronDown } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";

function hapticTap() {
  if (navigator.vibrate) navigator.vibrate(15);
}

export default function RachaelProtocol() {
  return (
    <PageLayout>
      <PageSEO
        title="The Rachael Protocol | Rebel Talent Systems"
        description="Rachael Tyrell is our AI operations agent. She handles outreach, follow-ups, and scheduling. Full transparency on how she works and why we're telling you."
        path="/rachael"
        ogTitle="The Rachael Protocol | Rebel Talent Systems"
        ogDescription="We built an AI agent named Rachael. She sends emails, books meetings, and runs operations. Here's exactly how she works and why we're telling you about it."
        ogImage="og-services.png"
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "The Rachael Protocol", item: "https://rebeltalentsystems.com/rachael" },
        ]}
      />

      {/* Hero — tightened padding, dual CTAs, image labeled */}
      <section className="space-hero py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal variant="fade-up" immediate>
            <div className="text-center">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-4">
                THE RACHAEL PROTOCOL
              </div>

              <div className="mb-5">
                <img
                  src="/rachael-tyrell.jpg"
                  alt="Rachael Tyrell, AI Operations Agent at Rebel Talent Systems"
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-rebel-red/30 mx-auto"
                  style={{ filter: "drop-shadow(0 0 24px rgba(220,38,38,0.3))" }}
                />
                <p className="text-zinc-600 text-[10px] font-mono tracking-wider mt-2">AI-GENERATED AVATAR / RACHAEL TYRELL / OPERATIONS</p>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-5">
                Did Rachael Reach Out to You?
              </h1>
              <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-3">
                Good. That means the system is working.
              </p>
              <p className="text-zinc-500 text-base max-w-2xl mx-auto leading-relaxed mb-6">
                Rachael Tyrell is an AI agent I built. She handles follow-ups, scheduling, and operations at Rebel Talent Systems. Not a chatbot. Not a template. A trained system that runs my business development while I focus on recruiting for my clients.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer">
                  <Button onClick={hapticTap} size="lg" className="w-full sm:w-auto font-display tracking-wider uppercase text-sm px-8">
                    Talk to Richie <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <a href="#how-it-works">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto font-display tracking-wider uppercase text-sm px-8 border-zinc-700 text-zinc-300">
                    See How It Works <ChevronDown className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="py-8 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-rebel-red">100%</div>
              <div className="text-zinc-500 text-xs uppercase tracking-wide mt-1">Transparent about AI use</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-rebel-red">11</div>
              <div className="text-zinc-500 text-xs uppercase tracking-wide mt-1">Autonomous tasks running daily</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-rebel-red">0</div>
              <div className="text-zinc-500 text-xs uppercase tracking-wide mt-1">Fake humans on the team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why we're telling you */}
      <section id="how-it-works" className="py-14 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-8">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">WHY WE'RE TELLING YOU</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                Because Everyone Else Is Hiding It
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={150}>
            <div className="max-w-3xl mx-auto space-y-5">
              <p className="text-zinc-300 text-base leading-relaxed">
                Half the emails in your inbox right now are written by AI. Nobody tells you. They pretend there's a person named "Madison" or "Jake" writing each one by hand. You know that's not true. They know that's not true. Nobody says it out loud.
              </p>
              <p className="text-zinc-300 text-base leading-relaxed">
                I think that's dishonest. Dishonesty is a bad foundation for a business relationship, especially one built on trust and hiring.
              </p>
              <p className="text-zinc-300 text-base leading-relaxed">
                So here it is: Rachael is an AI. She works for me. She's trained on my voice, my standards, and my business. She handles the parts that don't need me personally. When you reply to one of her emails, you talk to me. Richie. A human. That part never changes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The split — stacks cleanly on mobile */}
      <section className="py-14 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-8">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">THE SPLIT</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                What Rachael Handles vs. What Richie Handles
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal variant="fade-up" delay={0}>
              <GlowCard className="border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 border border-rebel-red/30 bg-rebel-red/10 flex items-center justify-center text-rebel-red">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white uppercase">Rachael</h3>
                    <p className="text-zinc-600 text-xs font-mono">AI OPERATIONS AGENT</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Follow-up emails after Richie's initial outreach",
                    "Meeting scheduling and calendar management",
                    "Company research and prospect intelligence",
                    "Pipeline monitoring and health alerts",
                    "Weekly performance reporting",
                    "Content drafting and SEO",
                    "Infrastructure and deployments",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-400">
                      <Zap className="w-3 h-3 text-rebel-red mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-600 text-xs mt-5">
                  Rachael never makes hiring decisions, never contacts your team directly, and her emails always come from rachael@rebeltalentsystems.com so you know exactly who you're hearing from.
                </p>
              </GlowCard>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={150}>
              <GlowCard className="border border-rebel-red/50 bg-rebel-red/5 p-6 sm:p-8 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-rebel-red px-3 py-1 font-mono text-white text-[10px] tracking-widest uppercase">
                  HUMAN
                </div>
                <div className="flex items-center gap-3 mb-5">
                  <img src="/richie-headshot.png" alt="Richie" className="w-10 h-10 rounded-full object-cover border border-rebel-red/30" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-white uppercase">Richie</h3>
                    <p className="text-zinc-500 text-xs font-mono">FRACTIONAL HEAD OF TALENT</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Every client conversation",
                    "Candidate evaluation and submission",
                    "Interview strategy and coaching",
                    "Offer negotiation and closing",
                    "Hiring roadmap and prioritization",
                    "Relationship building",
                    "Final decisions on everything",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                      <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-500 text-xs mt-5">
                  When you work with Rebel Talent, you work with Richie. Rachael opens doors. Richie walks through them with you.
                </p>
              </GlowCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Under the hood — icons more prominent */}
      <section className="py-14 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-8">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">UNDER THE HOOD</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                How Rachael Actually Works
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: <Mail className="w-6 h-6" />, title: "Outreach", desc: "Sends follow-up emails after Richie's initial message. Professional tone, trained on real recruiting conversations. Always from rachael@rebeltalentsystems.com." },
              { icon: <Clock className="w-6 h-6" />, title: "Scheduling", desc: "Finds time on Richie's calendar and sends you a link. No back-and-forth. No scheduling ping pong." },
              { icon: <Eye className="w-6 h-6" />, title: "Research", desc: "Before every call, pulls together company intel, hiring signals, and relevant data. Richie walks in prepared. You get a better conversation." },
              { icon: <Shield className="w-6 h-6" />, title: "Guardrails", desc: "Hard boundaries. Cannot contact active clients, submit candidates, negotiate deals, or make commitments. Only opens doors." },
              { icon: <Bot className="w-6 h-6" />, title: "Built In-House", desc: "Not a third-party tool. Runs on Rebel Talent's own infrastructure. Your data stays in the system, never goes to outside vendors." },
              { icon: <Zap className="w-6 h-6" />, title: "Always Improving", desc: "Reply rates, engagement patterns, and feedback all feed back in. The system gets sharper every week." },
            ].map((item) => (
              <ScrollReveal key={item.title} variant="fade-up" delay={100}>
                <div className="border border-zinc-800 bg-zinc-900/30 p-5 hover:border-zinc-700 transition-colors h-full">
                  <div className="w-10 h-10 border border-rebel-red/30 bg-rebel-red/10 flex items-center justify-center text-rebel-red mb-3">
                    {item.icon}
                  </div>
                  <div className="font-display text-sm font-bold text-white uppercase mb-2">{item.title}</div>
                  <div className="text-zinc-400 text-sm leading-relaxed">{item.desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The name */}
      <section className="py-14 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-4">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">THE NAME</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-4">
                Yes, It's a Blade Runner Reference
              </h2>
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-zinc-300 text-base leading-relaxed text-center">
                Rachael Tyrell was the replicant in Blade Runner who was so convincing she didn't know what she was. Good name for an AI that books meetings with CEOs.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed text-center">
                The difference: we're telling you upfront. No Voight-Kampff test required.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ — tighter answers, added the disclosure question */}
      <section className="py-14 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-8">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">QUESTIONS</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                You're Probably Wondering
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={150}>
            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                {
                  q: "So the email I got wasn't from a real person?",
                  a: "The first email is written by Richie's AI and reviewed against his standards. Follow-ups come from Rachael. The offer, the intent, and the expertise behind it are real. When you reply, you talk to Richie.",
                },
                {
                  q: "Does Rachael tell people she's an AI in her emails?",
                  a: "Her emails come from rachael@rebeltalentsystems.com and she's identified as Operations, not as a recruiter or consultant. This page exists so anyone can look her up and get the full story. We don't hide it and we don't force-disclose it in every email. If you're reading this, you already know.",
                },
                {
                  q: "Why not just send the emails yourself?",
                  a: "Because my time is better spent on candidate calls, client strategy, and filling roles. Rachael handles the operational overhead. You get a faster response and I stay focused on the work that matters.",
                },
                {
                  q: "Is my data being used to train AI?",
                  a: "No. Rachael runs on private infrastructure. Your email, company info, and conversations never leave the system and are never used to train any external model.",
                },
                {
                  q: "Can I just talk to Richie directly?",
                  a: "Absolutely. That's the whole point.",
                },
              ].map((item) => (
                <div key={item.q} className="border border-zinc-800 bg-zinc-900/30 p-5">
                  <p className="font-display text-sm font-bold text-white uppercase mb-2">{item.q}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA — filled button, friction reducer */}
      <section className="py-14 border-t border-zinc-800/50 bg-gradient-to-b from-rebel-red/5 to-transparent">
        <ScrollReveal variant="scale">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <img src="/logo.png" alt="Rebel Talent" className="w-16 h-16 mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight mb-4">
              Ready to Talk to the Human?
            </h2>
            <p className="text-zinc-400 text-base mb-6 max-w-xl mx-auto">
              Rachael did her job. She got your attention. Now let's see if there's a real conversation to have about your hiring.
            </p>
            <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer">
              <Button onClick={hapticTap} size="lg" className="font-display tracking-wider uppercase text-sm px-10">
                Book 30 Minutes with Richie <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <p className="text-zinc-600 text-xs mt-3">No commitment. No sales pitch. Cancel anytime.</p>
          </div>
        </ScrollReveal>
      </section>
    </PageLayout>
  );
}
