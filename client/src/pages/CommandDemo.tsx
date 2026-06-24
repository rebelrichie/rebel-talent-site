import { useState, useEffect, useRef } from "react";
import { ArrowRight, Zap, BarChart3, Brain, Send, Users, TrendingUp, GripVertical, Mail, Phone, Calendar, CheckCircle2, Clock, AlertTriangle, X, ChevronRight, Sparkles, Play, Eye, Shield, Layers, Target } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";

// ── Typewriter Hook ──────────────────────────────────
function useTypewriter(text: string, speed = 20, trigger = true) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!trigger) { setDisplayed(""); setDone(false); return; }
    let i = 0;
    setDisplayed("");
    setDone(false);
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) { clearInterval(interval); setDone(true); }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, trigger]);
  return { displayed, done };
}

// ── Animated Counter ─────────────────────────────────
function AnimCounter({ target, prefix = "", suffix = "", duration = 1500 }: { target: number; prefix?: string; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const start = Date.now();
        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setVal(Math.round(target * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        tick();
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>;
}

// ── Fake Data ────────────────────────────────────────
const PIPELINE = {
  "Identified": [
    { name: "Jordan Rivera", title: "Sr. Platform Engineer", company: "Palantir", score: 87, time: "2h", avatar: "JR" },
    { name: "Priya Sharma", title: "ML Infrastructure Lead", company: "Scale AI", score: 92, time: "5h", avatar: "PS" },
    { name: "Tom Beckett", title: "Staff SRE", company: "Cloudflare", score: 78, time: "1d", avatar: "TB" },
  ],
  "Screening": [
    { name: "Marcus Chen", title: "Director of Engineering", company: "Anduril", score: 94, time: "3d", avatar: "MC" },
    { name: "Elena Vasquez", title: "VP of Product", company: "Figma", score: 88, time: "2d", avatar: "EV" },
  ],
  "Submitted": [
    { name: "Sarah Kim", title: "Staff Backend Engineer", company: "Stripe", score: 91, time: "4d", avatar: "SK" },
    { name: "Alex Volkov", title: "Principal Engineer", company: "Datadog", score: 85, time: "3d", avatar: "AV" },
  ],
  "Interviewing": [
    { name: "Daria Okonkwo", title: "Head of Growth", company: "Notion", score: 96, time: "5d", avatar: "DO" },
    { name: "James Park", title: "Forward Deployed Engineer", company: "Palantir", score: 89, time: "6d", avatar: "JP" },
    { name: "Lena Torres", title: "AI/ML Lead", company: "Anthropic", score: 95, time: "7d", avatar: "LT" },
  ],
  "Offer": [
    { name: "Ryan Mitchell", title: "Engineering Manager", company: "Stripe", score: 93, time: "8d", avatar: "RM" },
  ],
  "Placed": [
    { name: "Nina Patel", title: "Staff Engineer", company: "Cloudflare", score: 97, time: "14d", avatar: "NP" },
  ],
};

const STAGE_COLORS: Record<string, string> = {
  "Identified": "#6b7280", "Screening": "#3b82f6", "Submitted": "#eab308",
  "Interviewing": "#a855f7", "Offer": "#22c55e", "Placed": "#FF4500",
};

const AI_BRIEF = `Good morning. Here's your pipeline snapshot for today.

URGENT: Ryan Mitchell's offer for Engineering Manager at Stripe needs final approval. The candidate has a competing offer expiring Friday — this is your #1 priority.

PIPELINE HEALTH: 12 active roles, 47 candidates in motion. 3 candidates moved to interviewing stage yesterday. Conversion from screening → submitted is 72% this week, up from 61% last week.

STALE ALERT: Marcus Chen has been in screening for 5 days with zero movement. Anduril's hiring manager hasn't responded to the submission brief. Recommended action: direct call to hiring manager today.

REVENUE: Nina Patel placed at Cloudflare — $24K placement fee invoice ready. Weekly pipeline value: $142K across active placements. Monthly projected close: $67K.

SOURCING: The AI/ML Lead role at Anthropic has 3 strong candidates but needs 2 more. I've pre-matched 4 passive candidates from the network — review their profiles in the Sourcing tab.

Generated 6 tasks from this brief. 2 marked high priority.`;

const AI_EMAIL = `Hi Daria,

Thanks for the great conversation yesterday about the Head of Growth opportunity at Notion. The team was impressed with your PLG experience at Scale and your approach to developer community building.

We'd love to move forward with a final round. I've set up a few time slots that work for the team — pick whichever works best for you:

[Schedule Final Interview →]

Looking forward to it.

Best,
Richie Lampani
Rebel Talent Systems`;

const AGENT_LOG = [
  { name: "Daily Brief", status: "completed", time: "8:02 AM", tokens: "4,218", cost: "$0.02", duration: "3.2s" },
  { name: "Sourcing: AI/ML Lead — Anthropic", status: "completed", time: "9:15 AM", tokens: "6,441", cost: "$0.03", duration: "4.8s" },
  { name: "Interview Prep: Daria Okonkwo", status: "completed", time: "10:30 AM", tokens: "3,872", cost: "$0.02", duration: "2.9s" },
  { name: "Candidate Brief: Alex Volkov → Datadog", status: "completed", time: "11:45 AM", tokens: "5,103", cost: "$0.02", duration: "3.7s" },
  { name: "Follow-Up: Marcus Chen scheduling", status: "running", time: "Now", tokens: "—", cost: "—", duration: "—" },
  { name: "Onboarding Plan: Nina Patel → Cloudflare", status: "queued", time: "Queued", tokens: "—", cost: "—", duration: "—" },
];

// ── Components ───────────────────────────────────────

function ScoreRing({ score, size = 32 }: { score: number; size?: number }) {
  const r = (size - 4) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  const color = score >= 90 ? "#22c55e" : score >= 80 ? "#3b82f6" : score >= 70 ? "#eab308" : "#ef4444";
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={3} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={3} strokeLinecap="round"
        strokeDasharray={circ} strokeDashoffset={offset} style={{ transition: "stroke-dashoffset 1s ease" }} />
      <text x={size/2} y={size/2} textAnchor="middle" dominantBaseline="central" fill="white" fontSize={size * 0.3} fontWeight="bold"
        style={{ transform: "rotate(90deg)", transformOrigin: "center" }}>{score}</text>
    </svg>
  );
}

function KanbanDemo() {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2" style={{ minHeight: "380px" }}>
      {Object.entries(PIPELINE).map(([stage, cards]) => (
        <div key={stage} className="min-w-[220px] flex-1 shrink-0 flex flex-col">
          <div className="flex items-center gap-2 px-3 py-3 mb-2 rounded-t-md" style={{ borderTop: `3px solid ${STAGE_COLORS[stage]}` }}>
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: STAGE_COLORS[stage] }} />
            <span className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">{stage}</span>
            <span className="text-sm text-zinc-600 ml-auto bg-zinc-800/50 px-2 py-0.5 rounded">{cards.length}</span>
          </div>
          <div className="space-y-2.5 flex-1">
            {cards.map((card) => (
              <div key={card.name} className="border border-zinc-800 bg-zinc-900/80 rounded-lg p-4 cursor-pointer hover:border-zinc-600 hover:bg-zinc-800/50 transition-all group">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400 shrink-0">
                    {card.avatar}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-base font-medium text-white truncate">{card.name}</div>
                    <div className="text-sm text-zinc-500 truncate">{card.title}</div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">{card.company}</span>
                      <span className="text-xs text-zinc-600">{card.time}</span>
                    </div>
                  </div>
                  <ScoreRing score={card.score} size={36} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Sections ─────────────────────────────────────────

function DashboardSection() {
  const [briefVisible, setBriefVisible] = useState(false);
  const { displayed, done } = useTypewriter(AI_BRIEF, 12, briefVisible);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-3">
        <h3 className="font-display text-2xl font-bold text-white uppercase">Dashboard</h3>
        <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/30 px-2.5 py-1 rounded-full">
          <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-1.5 animate-pulse" />Live
        </span>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {[
          { label: "ACTIVE ROLES", value: 12, suffix: "", accent: false },
          { label: "IN PIPELINE", value: 47, suffix: " candidates", accent: false },
          { label: "INTERVIEWING", value: 8, suffix: " this week", accent: true },
          { label: "WEEKLY REVENUE", value: 18400, suffix: "", accent: false, prefix: "$", format: true },
          { label: "AGENT SUCCESS", value: 99, suffix: "%", accent: false },
        ].map((kpi) => (
          <div key={kpi.label} className={`rounded-xl px-5 py-4 ${kpi.accent ? "border border-purple-500/30 bg-purple-500/5" : "border border-zinc-800 bg-zinc-900/60"}`}>
            <div className="text-xs uppercase tracking-[0.12em] text-zinc-500 font-medium">{kpi.label}</div>
            <div className="text-3xl font-bold text-white mt-1.5" style={{ fontVariantNumeric: "tabular-nums" }}>
              <AnimCounter target={kpi.value} prefix={kpi.prefix || ""} suffix={kpi.suffix ? "" : ""} />
              {kpi.suffix && <span className="text-sm text-zinc-500 font-normal ml-1.5">{kpi.suffix}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* AI Brief */}
      <div className="border border-zinc-800 bg-zinc-900/60 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800/50">
          <div className="flex items-center gap-2.5">
            <Brain className="w-5 h-5 text-rebel-red" />
            <span className="text-base font-semibold text-white">AI Daily Brief</span>
            <span className="text-xs text-zinc-600">Powered by Claude</span>
          </div>
          {!briefVisible && (
            <button
              onClick={() => setBriefVisible(true)}
              className="flex items-center gap-2 text-sm bg-rebel-red/10 text-rebel-red border border-rebel-red/30 px-4 py-2 rounded-md hover:bg-rebel-red/20 transition-colors"
            >
              <Play className="w-4 h-4" /> Generate Brief
            </button>
          )}
          {briefVisible && done && (
            <span className="text-xs text-green-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> 4,218 tokens · $0.02 · 3.2s
            </span>
          )}
        </div>
        <div className="p-5" style={{ minHeight: briefVisible ? "auto" : "60px" }}>
          {!briefVisible ? (
            <p className="text-base text-zinc-600 italic">Click "Generate Brief" to see the AI in action...</p>
          ) : (
            <pre className="text-base text-zinc-300 whitespace-pre-wrap leading-relaxed font-sans">
              {displayed}
              {!done && <span className="inline-block w-2 h-5 bg-rebel-red ml-0.5 animate-pulse" />}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}

function PipelineSection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="font-display text-2xl font-bold text-white uppercase">Pipeline</h3>
          <select className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-base rounded-lg px-4 py-2">
            <option>All Roles (12)</option>
            <option>AI/ML Lead — Anthropic</option>
            <option>Sr. Platform Engineer — Palantir</option>
            <option>Engineering Manager — Stripe</option>
            <option>Head of Growth — Notion</option>
            <option>Forward Deployed Engineer — Palantir</option>
          </select>
          <span className="text-sm bg-zinc-800 text-zinc-400 px-3 py-1 rounded-lg">47 candidates</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-sm text-zinc-500 border border-zinc-800 px-4 py-2 rounded-lg hover:text-zinc-300 transition-colors">Edit Stages</button>
        </div>
      </div>
      <KanbanDemo />
    </div>
  );
}

function EmailSection() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const { displayed, done } = useTypewriter(AI_EMAIL, 15, sending);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <h3 className="font-display text-2xl font-bold text-white uppercase">One-Click Outreach</h3>
      </div>
      <div className="border border-zinc-800 bg-zinc-900/60 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800/50">
          <div className="flex items-center gap-2.5">
            <Mail className="w-5 h-5 text-blue-400" />
            <span className="text-base font-semibold text-white">Scheduling Email → Daria Okonkwo</span>
          </div>
          {!sending && !sent && (
            <button
              onClick={() => setSending(true)}
              className="flex items-center gap-2 text-sm bg-blue-500/10 text-blue-400 border border-blue-500/30 px-4 py-2 rounded-md hover:bg-blue-500/20 transition-colors"
            >
              <Send className="w-4 h-4" /> Generate & Send
            </button>
          )}
          {sending && done && !sent && (
            <button
              onClick={() => setSent(true)}
              className="flex items-center gap-2 text-sm bg-green-500/10 text-green-400 border border-green-500/30 px-4 py-2 rounded-md hover:bg-green-500/20 transition-colors animate-pulse"
            >
              <Send className="w-4 h-4" /> Send Now
            </button>
          )}
          {sent && (
            <span className="text-sm text-green-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Sent · Logged to activity
            </span>
          )}
        </div>
        <div className="p-5">
          {!sending ? (
            <p className="text-base text-zinc-600 italic">AI drafts a personalized scheduling email in seconds...</p>
          ) : (
            <div className="text-base text-zinc-300 whitespace-pre-wrap leading-relaxed">
              <div className="text-sm text-zinc-600 mb-3">To: daria.okonkwo@gmail.com · Subject: Next Steps — Head of Growth at Notion</div>
              {displayed}
              {!done && <span className="inline-block w-2 h-4 bg-blue-400 ml-0.5 animate-pulse" />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function AgentSection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <h3 className="font-display text-2xl font-bold text-white uppercase">Agent Operations</h3>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Runs Today", value: "23", color: "text-white" },
          { label: "Success Rate", value: "99.2%", color: "text-green-400" },
          { label: "Total Tokens", value: "41.2K", color: "text-white" },
          { label: "Total Cost", value: "$0.18", color: "text-white" },
        ].map((s) => (
          <div key={s.label} className="border border-zinc-800 bg-zinc-900/60 rounded-xl px-5 py-4">
            <div className="text-xs uppercase tracking-wider text-zinc-500">{s.label}</div>
            <div className={`text-2xl font-bold mt-1.5 ${s.color}`}>{s.value}</div>
          </div>
        ))}
      </div>
      <div className="border border-zinc-800 bg-zinc-900/60 rounded-xl overflow-hidden">
        <div className="px-5 py-3 border-b border-zinc-800/50 flex items-center justify-between">
          <span className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Agent Run Log — Today</span>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-800/30">
              <th className="text-left text-xs text-zinc-600 uppercase tracking-wider px-5 py-3">Status</th>
              <th className="text-left text-xs text-zinc-600 uppercase tracking-wider px-5 py-3">Agent</th>
              <th className="text-right text-xs text-zinc-600 uppercase tracking-wider px-5 py-3">Tokens</th>
              <th className="text-right text-xs text-zinc-600 uppercase tracking-wider px-5 py-3">Cost</th>
              <th className="text-right text-xs text-zinc-600 uppercase tracking-wider px-5 py-3">Duration</th>
              <th className="text-right text-xs text-zinc-600 uppercase tracking-wider px-5 py-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {AGENT_LOG.map((agent) => (
              <tr key={agent.name} className="border-b border-zinc-800/20 last:border-0 hover:bg-zinc-800/20 transition-colors">
                <td className="px-5 py-3.5">
                  <div className={`w-2.5 h-2.5 rounded-full ${
                    agent.status === "completed" ? "bg-green-500" :
                    agent.status === "running" ? "bg-amber-400 animate-pulse" : "bg-zinc-600"
                  }`} />
                </td>
                <td className="px-5 py-3.5 text-base text-zinc-300">{agent.name}</td>
                <td className="px-5 py-3.5 text-sm text-zinc-500 text-right font-mono">{agent.tokens}</td>
                <td className="px-5 py-3.5 text-sm text-zinc-500 text-right font-mono">{agent.cost}</td>
                <td className="px-5 py-3.5 text-sm text-zinc-500 text-right font-mono">{agent.duration}</td>
                <td className="px-5 py-3.5 text-sm text-zinc-500 text-right">{agent.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          "Daily Brief", "Sourcing", "Interview Prep", "Candidate Brief",
          "Follow-Up Draft", "Onboarding Plan", "Role Brief", "Web Sourcing",
          "Transcript → Action", "Content Drafter", "Pipeline Engine", "ROI Calculator",
          "Weekly Report", "Contract Progress", "Retention Tracker", "SOW Analyzer",
          "Outbound Prospector", "Employer Branding", "Vendor Management", "Application Enricher",
        ].map((a) => (
          <div key={a} className="flex items-center gap-2 text-sm text-zinc-400 bg-zinc-800/30 border border-zinc-800/50 rounded-lg px-4 py-3">
            <Zap className="w-4 h-4 text-rebel-red shrink-0" />
            {a}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Page ────────────────────────────────────────

export default function CommandDemo() {
  const [activeView, setActiveView] = useState<"dashboard" | "pipeline" | "outreach" | "agents">("dashboard");

  return (
    <PageLayout>
      <PageSEO
        title="Rebel Command — Live Product Demo | Rebel Talent Systems"
        description="See inside Rebel Command: AI-powered recruiting command center with real-time pipeline, 23 agents, and full audit trails."
        path="/command"
        ogTitle="Rebel Command — Live Product Demo"
        ogDescription="The operator war room. See it in action."
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Platform", item: "https://rebeltalentsystems.com/platform" },
          { name: "Command Demo", item: "https://rebeltalentsystems.com/command" },
        ]}
      />

      {/* Header */}
      <section className="py-8 border-b border-zinc-800/50" style={{ background: "linear-gradient(180deg, rgba(255,69,0,0.03) 0%, transparent 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/icon-command.png?v=6" alt="Rebel Command" style={{ width: "52px", height: "52px", borderRadius: "14px", boxShadow: "0 0 20px 4px rgba(255,69,0,0.25)" }} />
              <div>
                <h1 className="font-display text-2xl font-bold text-white uppercase tracking-tight">Rebel Command</h1>
                <p className="text-zinc-500 text-sm">Interactive product demo · All data is fictional</p>
              </div>
            </div>
            <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer">
              <Button size="default" className="font-display tracking-wider uppercase text-sm px-6">
                Book Live Demo <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* App Shell */}
      <section className="py-0" style={{ background: "#0a0a0f" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Nav */}
          <div className="flex gap-0 border-b border-zinc-800 sticky top-16 z-20" style={{ background: "#0a0a0f" }}>
            {(["dashboard", "pipeline", "outreach", "agents"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveView(tab)}
                className={`px-6 py-4 text-base font-semibold uppercase tracking-wider border-b-2 transition-colors ${
                  activeView === tab
                    ? "border-[#FF4500] text-white"
                    : "border-transparent text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="py-6 min-h-[600px]">
            {activeView === "dashboard" && <DashboardSection />}
            {activeView === "pipeline" && <PipelineSection />}
            {activeView === "outreach" && <EmailSection />}
            {activeView === "agents" && <AgentSection />}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 border-t border-zinc-800/50 bg-gradient-to-b from-rebel-red/5 to-transparent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-white uppercase mb-4">This Is What Control Looks Like.</h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            Book a 15-minute demo. We'll walk you through the real dashboard with your data and show you how it maps to your hiring needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto font-display tracking-wider uppercase text-sm px-8">
                Book a Live Demo <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="/platform">
              <Button variant="outline" size="lg" className="w-full sm:w-auto font-display tracking-wider uppercase text-sm px-8 border-zinc-700 text-zinc-300">
                Back to Platform
              </Button>
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
