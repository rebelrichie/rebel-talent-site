import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

function hapticTap() {
  if (navigator.vibrate) navigator.vibrate(15);
}

export default function Advisory() {
  return (
    <PageLayout>
      <PageSEO
        title="AI for Recruiting Teams | Advisory, Build & Training | Rebel Talent"
        description="Three ways to put AI to work in a recruiting operation: an audit and roadmap, an embedded build engagement, or a live ride-along where your team learns by working active reqs alongside me. Built on a 27-agent production system."
        path="/advisory"
        ogTitle="AI for Recruiting Teams | Rebel Talent"
        ogDescription="The tools exist. The strategy doesn't. I run a 27-agent recruiting system in production today, and I work with your team to figure out which parts of that you actually need."
        ogImage="og-services.png"
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "AI Advisory", item: "https://rebeltalentsystems.com/advisory" },
        ]}
      />

      <div className="bg-[#F5F0E8] min-h-screen font-sans">

        {/* ── HEADER ── */}
        <div className="max-w-[720px] mx-auto px-6 pt-20 pb-16 border-b border-[#1A1A1A]/10">
          <div className="font-mono text-[#C41E3A] text-[11px] tracking-[0.18em] uppercase mb-6 flex items-center gap-2">
            <span className="block w-5 h-[2px] bg-[#C41E3A] flex-shrink-0" />
            AI for Recruiting Teams
          </div>
          <h1 className="text-[#1A1A1A] font-display text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight mb-7">
            The tools exist.<br />
            <span className="text-[#C41E3A]">The strategy doesn't.</span>
          </h1>
          <p className="text-[#555] text-lg leading-relaxed max-w-[560px]">
            Three ways to put AI to work inside a recruiting operation, assess it, build it with you, or work alongside your team on live searches until they can run it without me.
          </p>
        </div>

        {/* ── OPENING ── */}
        <div className="max-w-[720px] mx-auto px-6 py-16 border-b border-[#1A1A1A]/10">
          <ScrollReveal variant="fade-up">
            <div className="space-y-5">
              <p className="text-[#3a3a3a] text-[17px] leading-[1.75]">
                You've been pitched from every direction. AI sourcing, AI screening, AI outreach. Your team has tried a handful of tools. Maybe you ran a pilot or two. And the open reqs still take just as long to fill.
              </p>
              <p className="text-[#3a3a3a] text-[17px] leading-[1.75]">
                That's because the people selling you software don't actually run searches. They've got a tool, an opinion about which problem it solves, and very little interest in how a real recruiting operation moves a candidate from outreach to offer. So they hand you a platform and you figure out the rest.
              </p>
              <p className="text-[#1A1A1A] text-[17px] leading-[1.75] font-semibold">
                That's not a strategy. That's a subscription.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* ── CREDIBILITY ── */}
        <div className="max-w-[720px] mx-auto px-6 py-16 border-b border-[#1A1A1A]/10">
          <ScrollReveal variant="fade-up">
            <div className="font-mono text-[#C41E3A] text-[11px] tracking-[0.18em] uppercase mb-5">Where This Comes From</div>
            <h2 className="text-[#1A1A1A] font-display text-2xl sm:text-3xl font-bold leading-[1.2] tracking-tight mb-6">
              I didn't read about this. I built it.
            </h2>
            <div className="space-y-5">
              <p className="text-[#3a3a3a] text-[17px] leading-[1.75]">
                Over the last two years I built a custom 27-agent stack from scratch, sourcing, candidate communication, pipeline management, interview prep, follow-up. It runs on my own client engagements every week. Real candidates. Real placements. Real consequences when something breaks.
              </p>
              <p className="text-[#3a3a3a] text-[17px] leading-[1.75]">
                I've broken the system in ways most people haven't thought of yet. I've fixed it. That's the only thing that makes any of this worth your team's time. Not theory, scar tissue. And in cleared environments where most public AI tools can't legally run, I've built workflows that hold up to that scrutiny.
              </p>
            </div>
          </ScrollReveal>

          {/* Signal bar */}
          <ScrollReveal variant="fade-up">
            <div className="mt-10 grid grid-cols-3 gap-[1px] bg-[#1A1A1A]">
              {[
                { value: "27", label: "Autonomous agents in production" },
                { value: "14+", label: "Years in high-stakes recruiting" },
                { value: "Live", label: "Real client work running daily" },
              ].map((s) => (
                <div key={s.label} className="bg-[#1A1A1A] px-5 py-6">
                  <div className="font-display text-2xl font-bold text-[#C41E3A] mb-2">{s.value}</div>
                  <div className="text-[rgba(245,240,232,0.6)] text-[12px] leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* ── THE FRAME ── */}
        <div className="max-w-[720px] mx-auto px-6 py-16 border-b border-[#1A1A1A]/10">
          <ScrollReveal variant="fade-up">
            <div className="font-mono text-[#C41E3A] text-[11px] tracking-[0.18em] uppercase mb-5">The Frame</div>
            <h2 className="text-[#1A1A1A] font-display text-2xl sm:text-3xl font-bold leading-[1.2] tracking-tight mb-6">
              Recruiting-only. Operator-led. Built around your active reqs, not a curriculum.
            </h2>
            <div className="space-y-5">
              <p className="text-[#3a3a3a] text-[17px] leading-[1.75]">
                Most recruiting operations have four or five workflows where AI saves real hours. They also have two or three places where automating the wrong step will cost you a candidate, a deal, or a judgment call that needed a human. I know which is which because I run them in production every week.
              </p>
              <p className="text-[#3a3a3a] text-[17px] leading-[1.75]">
                What I won't do: hand you a vendor shortlist, sell you my platform, build you a course, or pretend recruiting AI is a horizontal productivity problem. What I will do: look at your specific operation, your active reqs, your ATS, your sourcing motion, and tell you honestly what to automate, what to leave alone, and how to measure whether any of it moves time-to-fill, sourcing throughput, or the hours your recruiters spend per req.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* ── THREE ENGAGEMENTS ── */}
        <div className="max-w-[720px] mx-auto px-6 py-16 border-b border-[#1A1A1A]/10">
          <ScrollReveal variant="fade-up">
            <div className="font-mono text-[#C41E3A] text-[11px] tracking-[0.18em] uppercase mb-5">How We Work Together</div>
            <h2 className="text-[#1A1A1A] font-display text-2xl sm:text-3xl font-bold leading-[1.2] tracking-tight mb-4">
              Three ways in. All three are private.
            </h2>
            <p className="text-[#3a3a3a] text-[17px] leading-[1.75] mb-10">
              No multi-company programs. Every engagement is one team, one operation, one stack. Pick the entry point that matches where you are.
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-[2px]">
            {[
              {
                tag: "Start Here · 2-4 weeks",
                title: "The Audit",
                body: "An assessment of how your recruiting team works today. I sit in on pipeline reviews, walk your ATS, watch a sourcing pass, and shadow at least one interview cycle. You get back a written read-out of where AI saves real hours, where it would create new problems, and a prioritized roadmap your team can act on. No vendor shortlist. No platform pitch.",
                outcome: "Outcome: a written roadmap your team can act on with or without me.",
                fit: "Fit: VP Talent or Head of TA who needs an outside operator's read before committing budget.",
              },
              {
                tag: "Embedded · Monthly Retainer",
                title: "The Build",
                body: "I work alongside your team as the operator-architect: tool selection, workflow redesign, agent implementation, ATS integration, and the change management most consultants skip. Most AI initiatives die at adoption, that's where I spend most of my time.",
                outcome: "Outcome: production systems running in your stack, with your team operating them.",
                fit: "Fit: organizations ready to ship and willing to do the work.",
              },
              {
                tag: "Live Ride-Along · 6-8 weeks",
                title: "The Lab",
                body: "Not a workshop. Not a cohort. A six-to-eight-week ride-along where your team learns by working real searches with me. Weeks 1-2: I run two or three of your active reqs alongside the team using my agents, they watch the agents move outreach, screening, and prep. Weeks 3-5: each recruiter takes one of those agents and adapts it to a req they own, deployed in your actual ATS. Weeks 6-8: I step back. Your team runs their reqs with the agents they built, and I'm there for issue triage when something breaks. We close with a written handoff packet, what's running, what to keep, what to kill, and what comes next.",
                outcome: "Outcome: your team owns and runs working agents on real reqs, independently, in your stack.",
                fit: "Fit: recruiting and talent teams of 5-30 who need to move from \"we should be using AI\" to \"three of our recruiters are using it on this week's pipeline.\"",
              },
            ].map((tier, i) => (
              <ScrollReveal key={tier.title} variant="fade-up" delay={i * 100}>
                <div className="relative bg-white border border-[#1A1A1A]/8 pl-8 pr-8 py-7">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C41E3A]" />
                  <div className="font-mono text-[#C41E3A] text-[11px] tracking-[0.15em] uppercase mb-2">{tier.tag}</div>
                  <h3 className="text-[#1A1A1A] font-display text-xl font-bold mb-3">{tier.title}</h3>
                  <p className="text-[#555] text-[15px] leading-[1.7] mb-3">{tier.body}</p>
                  <p className="text-[#1A1A1A] text-[14px] font-semibold leading-[1.6]">{tier.outcome}</p>
                  <p className="text-[#888] text-[13px] italic leading-[1.6] mt-1">{tier.fit}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Cleared / FOCI footnote */}
          <ScrollReveal variant="fade-up" delay={300}>
            <div className="mt-8 bg-white border-l-[3px] border-[#1A1A1A]/40 pl-6 pr-6 py-5">
              <div className="font-mono text-[#1A1A1A] text-[11px] tracking-[0.15em] uppercase mb-2">+ Cleared / FOCI Engagements</div>
              <p className="text-[#555] text-[14px] leading-[1.65]">
                All three engagements are available for cleared and FOCI-sensitive environments where most public AI tools can't legally run. Defense primes, IC contractors, and TS/SCI-cleared programs, discreetly handled.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* ── HOW MEASUREMENT WORKS ── */}
        <div className="max-w-[720px] mx-auto px-6 py-16 border-b border-[#1A1A1A]/10">
          <ScrollReveal variant="fade-up">
            <div className="font-mono text-[#C41E3A] text-[11px] tracking-[0.18em] uppercase mb-5">How Measurement Works</div>
            <h2 className="text-[#1A1A1A] font-display text-2xl sm:text-3xl font-bold leading-[1.2] tracking-tight mb-6">
              Your existing recruiting metrics. The reqs we worked. The reqs we didn't.
            </h2>
            <p className="text-[#3a3a3a] text-[17px] leading-[1.75] mb-5">
              I don't ask you to fill out a new survey instrument. You already track time-to-fill, sourcing volume, recruiter hours per req, candidate response rates, and offer-accept rates somewhere, your ATS, your weekly pipeline reports, your QBR deck. That's the scoreboard.
            </p>
            <p className="text-[#3a3a3a] text-[17px] leading-[1.75] mb-5">
              At the start of an engagement we agree on which two or three of those numbers we're trying to move. At the end we look at the reqs we worked on together against your historical baseline on the same numbers. If they moved, we know why. If they didn't, we know why faster, and you don't have to take my word for any of it.
            </p>
            <p className="text-[#888] text-[15px] leading-[1.7] italic">
              I won't try to convince you that "candidates contacted" is a metric. High-volume outreach that doesn't convert is just noise, burning candidate goodwill, your team's time, and your reputation in a tight market.
            </p>
          </ScrollReveal>
        </div>

        {/* ── WHAT YOUR STACK LOOKS LIKE ── */}
        <div className="max-w-[720px] mx-auto px-6 py-16 border-b border-[#1A1A1A]/10">
          <ScrollReveal variant="fade-up">
            <div className="font-mono text-[#C41E3A] text-[11px] tracking-[0.18em] uppercase mb-5">The Stack</div>
            <h2 className="text-[#1A1A1A] font-display text-2xl sm:text-3xl font-bold leading-[1.2] tracking-tight mb-6">
              Built around what you already run.
            </h2>
            <p className="text-[#3a3a3a] text-[17px] leading-[1.75] mb-5">
              No rip-and-replace. The integrations and agents we build assume the ATS your team already lives in (Greenhouse, Lever, Ashby, Workday, Paylocity, Bullhorn) and the AI assistants your team already has licenses for (Claude, ChatGPT, Gemini, most teams use a mix of two).
            </p>
            <p className="text-[#3a3a3a] text-[17px] leading-[1.75]">
              On top of that we build the agent layer, the patterns I run on my own client work, scoped to your team's searches. I don't hand you my system. I show your recruiters how to build a smaller version of it, on the reqs they own, so when I'm gone the agents keep running.
            </p>
          </ScrollReveal>
        </div>

        {/* ── THE SHIFT ── */}
        <div className="bg-[#1A1A1A]">
          <div className="max-w-[720px] mx-auto px-6 py-16 sm:py-20">
            <ScrollReveal variant="fade-up">
              <div className="font-mono text-[#C41E3A] text-[11px] tracking-[0.18em] uppercase mb-5">The Shift</div>
              <h2 className="text-[#F5F0E8] font-display text-2xl sm:text-3xl font-bold leading-[1.2] tracking-tight mb-6">
                This industry is splitting into two groups.
              </h2>
              <div className="space-y-5">
                <p className="text-[rgba(245,240,232,0.75)] text-[17px] leading-[1.75]">
                  Over the next 18 months, recruiting organizations are separating into the ones that figured out how to integrate AI into their work and the ones that didn't. That's not a prediction, it's already happening. The teams moving faster aren't smarter. They started earlier.
                </p>
                <p className="text-[rgba(245,240,232,0.75)] text-[17px] leading-[1.75]">
                  <strong className="text-[#F5F0E8] font-semibold">This isn't about being first.</strong> It's about not being last. The agencies and talent teams that wait for a clear answer before acting will find themselves explaining to clients why their process costs more and moves slower than it did two years ago.
                </p>
                <p className="text-[rgba(245,240,232,0.75)] text-[17px] leading-[1.75]">
                  You don't need to rebuild everything. You need to know where to start, and what to leave alone.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="max-w-[720px] mx-auto px-6 pt-16 pb-24 border-t border-[#1A1A1A]/10">
          <ScrollReveal variant="fade-up">
            <div className="font-mono text-[#888] text-[11px] tracking-[0.18em] uppercase mb-4">Next Step</div>
            <h2 className="text-[#1A1A1A] font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight">
              Bring me your hardest open req.
            </h2>
            <p className="text-[#555] text-[17px] leading-[1.7] max-w-[480px] mb-10">
              Thirty minutes on a call. Walk me through one of your slow searches and I'll tell you straight whether AI helps or hurts on it, where I'd start, and what I wouldn't touch. If we're a fit, we'll talk about which engagement makes sense. If we're not, you'll leave with a real read on the req either way.
            </p>
            <a href="/strategy-call" target="_blank" rel="noopener noreferrer">
              <button
                onClick={hapticTap}
                className="inline-flex items-center gap-2 bg-[#C41E3A] text-[#F5F0E8] font-semibold text-[14px] tracking-wider uppercase px-8 py-4 transition-colors hover:bg-[#a01830]"
              >
                Book a Strategy Call
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
            <p className="text-[#bbb] text-[13px] mt-5">All conversations are confidential. FOCI-sensitive engagements supported.</p>
          </ScrollReveal>
        </div>

      </div>
    </PageLayout>
  );
}
