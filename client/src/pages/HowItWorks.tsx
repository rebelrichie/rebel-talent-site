import { ArrowRight, FileText, Workflow, BookOpen, Users } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function HowItWorks() {
  return (
    <PageLayout>
      <section className="space-hero py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
              HOW WE BUILD
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-4" data-testid="heading-how">
              How We Build
            </h1>
            <p className="text-zinc-400 text-lg mb-2">
              Systems That Last. <span className="text-white font-semibold">Ownership That Delivers.</span>
            </p>
            <p className="text-zinc-500 text-sm italic">
              Hiring as engineering, not art. Assess, embed, execute, handover. You own it all.
            </p>
          </div>

          <div className="border border-zinc-800 bg-rebel-red/5 p-6 mb-16" data-testid="section-problem">
            <h2 className="font-display text-xl font-bold text-rebel-red uppercase mb-4">
              Sound Familiar?
            </h2>
            <ul className="space-y-3">
              {[
                "You're paying agencies $30K+ per hire and still getting bad fits",
                "Your ATS is a graveyard of unreviewed resumes",
                "Hiring managers are winging interviews with zero structure",
                "Your 'recruiting process' is basically LinkedIn InMails and prayers",
                "You've been 'about to hire a recruiter' for six months",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="text-rebel-red font-mono font-bold text-xs mt-0.5">X</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight text-center mb-10" data-testid="heading-timeline">
              The Timeline
            </h2>

            <div className="space-y-4">
              {[
                {
                  phase: "WEEK 1",
                  title: "See What You're Actually Up Against",
                  intro: "I audit everything. Then I tell you the truth.",
                  items: [
                    "Fix your ATS (or set one up that doesn't suck)",
                    "Rewire your sourcing strategy",
                    "Train your hiring managers on what 'good' actually looks like",
                  ],
                },
                {
                  phase: "MONTH 1",
                  title: "The Machine Goes Live",
                  intro: "Infrastructure first. Candidates second.",
                  items: [
                    "Job architecture and leveling frameworks",
                    "Sourcing playbooks for every role type",
                    "Interview scorecards and structured processes",
                    "Pipeline dashboards and reporting",
                  ],
                },
                {
                  phase: "MONTHS 2-3",
                  title: "Results + Refinement",
                  intro: "This is where the hires start stacking up.",
                  items: [
                    "2-5 roles filled per month",
                    "Weekly pipeline reviews with leadership",
                    "Battle-tested systems that don't break under pressure",
                  ],
                },
                {
                  phase: "MONTH 4+",
                  title: "You Own It",
                  intro: "I'm building myself out of a job. That's the point.",
                  items: [
                    "Reduced scope as your team takes over",
                    "Help you find your internal TA person",
                    "Clean exit with full documentation",
                  ],
                },
              ].map((step) => (
                <div key={step.phase} className="border border-zinc-800 bg-zinc-900/30 p-6 relative border-l-2 border-l-rebel-red" data-testid={`card-phase-${step.phase.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="inline-block bg-rebel-red px-3 py-1 mb-3">
                    <span className="font-mono text-white text-xs font-bold tracking-widest">{step.phase}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white uppercase mb-2">{step.title}</h3>
                  <p className="text-zinc-500 text-sm italic mb-4">{step.intro}</p>
                  <ul className="space-y-2">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                        <span className="text-rebel-red font-mono text-xs mt-0.5">&gt;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-16" data-testid="section-handoff">
            <div className="inline-block w-16 h-0.5 bg-rebel-red mb-6" />
            <h2 className="font-display text-2xl font-bold text-rebel-red uppercase mb-2">What You Get When I Leave</h2>
            <p className="text-zinc-500 text-sm italic mb-8">Everything. No vendor lock-in. You own it all.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <FileText className="w-5 h-5" />, label: "All Documentation" },
                { icon: <Workflow className="w-5 h-5" />, label: "Custom Workflows" },
                { icon: <BookOpen className="w-5 h-5" />, label: "Sourcing Guides" },
                { icon: <Users className="w-5 h-5" />, label: "Active Pipelines" },
              ].map((item) => (
                <div key={item.label} className="border border-zinc-800 bg-zinc-900/30 p-6 text-center">
                  <div className="w-10 h-10 border border-rebel-red/30 bg-rebel-red/10 flex items-center justify-center text-rebel-red mx-auto mb-3">
                    {item.icon}
                  </div>
                  <span className="text-white text-sm font-semibold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16" data-testid="section-faq">
            <h2 className="font-display text-2xl font-bold text-rebel-red uppercase text-center mb-2">
              FAQ
            </h2>
            <p className="text-zinc-500 text-sm text-center mb-10">No fluff. Real answers.</p>

            <Accordion type="multiple" className="border border-zinc-800 divide-y divide-zinc-800">
              {[
                {
                  q: '"Fractional Head of Talent" = ?',
                  a: "Strategic leadership without the full-time salary. I embed into your company, own the recruiting function, build infrastructure, and execute hires.",
                },
                {
                  q: "Agency vs. You?",
                  a: "Agency is transactional -- paid per hire, gone after placement. I'm embedded, focused on infrastructure + execution, measured by retention and pipeline velocity.",
                },
                {
                  q: "Contingency?",
                  a: "No. I build systems. Contingency is for order-takers.",
                },
                {
                  q: "How long does an engagement last?",
                  a: "3-6 months to build + fill. Month-to-month after that. Walk anytime.",
                },
                {
                  q: "What company size?",
                  a: "Series A-C startups, defense contractors. 20-200 people scaling fast but not ready for full-time TA leadership.",
                },
                {
                  q: "What roles do you fill?",
                  a: "Technical, GTM, ops, leadership. Cleared/DoD specialist. No high-volume hourly.",
                },
                {
                  q: "Already have a recruiter?",
                  a: "Perfect. I build systems for them to execute within, or handle the overflow.",
                },
                {
                  q: "What happens after you leave?",
                  a: "You own everything: systems, docs, pipelines, trained team. No vendor lock-in.",
                },
              ].map((faq, i) => (
                <AccordionItem key={faq.q} value={`faq-${i}`} className="border-b-0 bg-zinc-900/30 px-5">
                  <AccordionTrigger className="font-display text-sm font-bold text-white uppercase tracking-wide hover:no-underline hover:text-rebel-red py-5 [&[data-state=open]]:text-rebel-red">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400 text-sm leading-relaxed pb-5 pt-0">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/10 to-transparent p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-4">
              Start Building
            </h2>
            <p className="text-zinc-400 text-sm mb-6 max-w-lg mx-auto">
              Precision over volume. Embedded ownership beats outsourced noise. Let's fix the machine.
            </p>
            <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer" data-testid="button-hiw-cta">
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
