// Safe addition — The Rachael Protocol: transparency page about our AI operations persona
import { ArrowRight, Bot, Shield, Eye, Clock, Mail, Zap } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";

// Safe addition — haptic feedback for PWA CTA taps
function hapticTap() {
  if (navigator.vibrate) navigator.vibrate(15);
}

export default function RachaelProtocol() {
  return (
    <PageLayout>
      <PageSEO
        title="The Rachael Protocol | Rebel Talent Systems"
        description="Rachael Tyrell is our AI operations agent. She handles outreach, follow-ups, and scheduling so Richie can focus on what matters: your hiring. Full transparency on how she works."
        path="/rachael"
        ogTitle="The Rachael Protocol | Rebel Talent Systems"
        ogDescription="We built an AI agent named Rachael. She sends emails, books meetings, and runs operations. Here's exactly how she works and why we're telling you about it."
        ogImage="og-services.png"
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "The Rachael Protocol", item: "https://rebeltalentsystems.com/rachael" },
        ]}
      />

      {/* Hero */}
      <section className="space-hero py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal variant="fade-up" immediate>
            <div className="text-center mb-10">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-4">
                THE RACHAEL PROTOCOL
              </div>

              {/* Rachael portrait */}
              <div className="mb-6">
                <img
                  src="/rachael-tyrell.jpg"
                  alt="Rachael Tyrell, AI Operations Agent at Rebel Talent Systems"
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-2 border-rebel-red/30 mx-auto"
                  style={{ filter: "drop-shadow(0 0 24px rgba(220,38,38,0.3))" }}
                />
                <p className="text-zinc-600 text-xs font-mono tracking-wider mt-2">RACHAEL TYRELL / OPERATIONS</p>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-6">
                Did Rachael Reach Out to You?
              </h1>
              <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-4">
                Good. That means the system is working.
              </p>
              <p className="text-zinc-500 text-base max-w-2xl mx-auto leading-relaxed">
                Rachael Tyrell is an AI agent I built. She handles operations, follow-ups, and scheduling at Rebel Talent Systems. She's not a chatbot. She's not a template. She's a trained system that runs my business development while I focus on actually recruiting for my clients.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200}>
            <div className="flex justify-center mb-8">
              <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer">
                <Button onClick={hapticTap} size="lg" className="font-display tracking-wider uppercase text-sm px-8">
                  Skip Rachael, Talk to Richie <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why we're telling you this */}
      <section className="py-16 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-10">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">WHY WE'RE TELLING YOU</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-4">
                Because Everyone Else Is Hiding It
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={150}>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-zinc-300 text-base leading-relaxed">
                Half the emails you get from companies right now are written by AI. Nobody tells you. They pretend there's a person named "Madison" or "Jake" sitting at a desk writing each one by hand. You know that's not true. They know that's not true. But nobody says it out loud.
              </p>
              <p className="text-zinc-300 text-base leading-relaxed">
                I think that's dishonest. And dishonesty is a bad foundation for a business relationship, especially one built on trust and hiring.
              </p>
              <p className="text-zinc-300 text-base leading-relaxed">
                So here it is: Rachael is an AI. She works for me. She's trained on my voice, my standards, and my business. She handles the parts of my operation that don't need me personally. When you're ready to talk about your hiring, you talk to me. Richie. A human. That part never changes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What Rachael does vs what Richie does */}
      <section className="py-16 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-10">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">THE SPLIT</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                What Rachael Handles vs. What Richie Handles
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal variant="fade-up" delay={0}>
              <GlowCard className="border border-zinc-800 bg-zinc-900/50 p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 border border-rebel-red/30 bg-rebel-red/10 flex items-center justify-center text-rebel-red">
                    <Bot className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white uppercase">Rachael</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Initial outreach follow-ups",
                    "Meeting scheduling and calendar management",
                    "Market research and company intelligence",
                    "Pipeline monitoring and health alerts",
                    "Weekly performance reporting",
                    "Content drafting and SEO",
                    "Site deployments and infrastructure",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-400">
                      <Zap className="w-3 h-3 text-rebel-red mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-600 text-xs mt-5">
                  Rachael never makes hiring decisions, never contacts your team directly, and never pretends to be human in conversation.
                </p>
              </GlowCard>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={150}>
              <GlowCard className="border border-rebel-red/50 bg-rebel-red/5 p-8 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-rebel-red px-3 py-1 font-mono text-white text-[10px] tracking-widest uppercase">
                  HUMAN
                </div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 border border-rebel-red/30 bg-rebel-red/10 flex items-center justify-center">
                    <img src="/richie-headshot.png" alt="Richie" className="w-10 h-10 rounded object-cover" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white uppercase">Richie</h3>
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
                  When you work with Rebel Talent, you work with Richie. Period. Rachael opens doors. Richie walks through them with you.
                </p>
              </GlowCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How Rachael works */}
      <section className="py-16 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-10">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">UNDER THE HOOD</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                How Rachael Actually Works
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: <Mail className="w-5 h-5 text-rebel-red" />, title: "Outreach", desc: "Rachael sends follow-up emails after Richie's initial outreach. She writes in a natural, professional tone trained on thousands of real recruiting conversations." },
              { icon: <Clock className="w-5 h-5 text-rebel-red" />, title: "Scheduling", desc: "When you're ready to talk, Rachael finds time on Richie's calendar and sends you a link. No back-and-forth, no scheduling ping pong." },
              { icon: <Eye className="w-5 h-5 text-rebel-red" />, title: "Research", desc: "Before every call, Rachael pulls together company intel, hiring signals, and relevant data so Richie walks in prepared. You get a better conversation." },
              { icon: <Shield className="w-5 h-5 text-rebel-red" />, title: "Guardrails", desc: "Rachael has hard boundaries. She cannot contact active clients, submit candidates, negotiate deals, or make commitments on Richie's behalf." },
              { icon: <Bot className="w-5 h-5 text-rebel-red" />, title: "Built In-House", desc: "Rachael isn't a third-party tool. She runs on Rebel Talent's own infrastructure, built by Richie. Your data stays in the system, never sent to outside vendors." },
              { icon: <Zap className="w-5 h-5 text-rebel-red" />, title: "Always Improving", desc: "Every interaction makes Rachael better. Reply rates, engagement patterns, and feedback all feed back into the system. She gets sharper every week." },
            ].map((item) => (
              <ScrollReveal key={item.title} variant="fade-up" delay={100}>
                <div className="border border-zinc-800 bg-zinc-900/30 p-5 flex gap-4 items-start hover:border-zinc-700 transition-colors h-full">
                  <div className="shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <div className="font-display text-sm font-bold text-white uppercase mb-1">{item.title}</div>
                    <div className="text-zinc-400 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The name */}
      <section className="py-16 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-6">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">THE NAME</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-4">
                Yes, It's a Blade Runner Reference
              </h2>
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-zinc-300 text-base leading-relaxed text-center">
                Rachael Tyrell was the replicant in Blade Runner who was so convincing, she didn't even know what she was. We thought that was a good name for an AI agent that writes emails good enough to get CEOs to reply.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed text-center">
                The difference is we're telling you upfront. No Voight-Kampff test required.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-zinc-800/50">
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
            <div className="space-y-6 max-w-2xl mx-auto">
              {[
                {
                  q: "So the email I got wasn't from a real person?",
                  a: "If it was the first email, it was written by Richie's AI system and reviewed against his standards. If it was a follow-up, it came from Rachael directly. Either way, the words, the offer, and the intent are real. When you reply, you talk to Richie.",
                },
                {
                  q: "Why not just send the emails yourself?",
                  a: "Because Richie's time is better spent on candidate calls, client strategy, and actually filling roles. Rachael handles the operational overhead so Richie can focus on the work that moves the needle for clients.",
                },
                {
                  q: "Is my data being used to train AI?",
                  a: "No. Rachael runs on Rebel Talent's private infrastructure. Your email, your company info, and your conversations never leave the system and are never used to train any external AI model.",
                },
                {
                  q: "Can I just talk to Richie directly?",
                  a: "Absolutely. That's the whole point. Rachael opens the door. Richie is the one you work with.",
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

      {/* CTA */}
      <section className="py-16 border-t border-zinc-800/50 bg-gradient-to-b from-rebel-red/5 to-transparent">
        <ScrollReveal variant="scale">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <img src="/logo.png" alt="Rebel Talent" className="w-16 h-16 mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight mb-4">
              Ready to Talk to the Human?
            </h2>
            <p className="text-zinc-400 text-base mb-8 max-w-xl mx-auto">
              Rachael did her job. She got your attention. Now let's see if there's a real conversation to have about your hiring. 30 minutes with Richie. No pitch, just straight answers.
            </p>
            <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer">
              <Button onClick={hapticTap} size="lg" className="font-display tracking-wider uppercase text-sm px-10">
                Book a Call with Richie <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </section>
    </PageLayout>
  );
}
