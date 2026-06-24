// Safe addition — single source of truth for current client engagements
// Update this list when engagements start/end and it changes everywhere on the site
import { Briefcase, Clock } from "lucide-react";

interface Engagement {
  client: string;
  logo: string;
  role: string;
  focus: string;
  hours: string;
}

const ENGAGEMENTS: Engagement[] = [
  {
    client: "EarthDaily Federal",
    logo: "/logo-earthdaily.png",
    role: "Fractional Head of Talent",
    focus: "AI/ML, GTM & Executive Roles",
    hours: "20 hrs/week",
  },
  {
    client: "Kalibri Labs",
    logo: "/logo-kalibri.png",
    role: "Internal Recruiting Support",
    focus: "ML Engineer Search",
    hours: "5 hrs/week",
  },
];

export default function CurrentEngagements({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full max-w-2xl ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        <Briefcase className="w-4 h-4 text-zinc-500" />
        <span className="text-zinc-500 text-xs font-mono tracking-[0.2em] uppercase">
          Current Engagements
        </span>
      </div>
      <div className="grid gap-3">
        {ENGAGEMENTS.map((e) => (
          <div
            key={e.client}
            className="flex items-center gap-4 px-5 py-3.5 border border-zinc-800/80 rounded-xl bg-zinc-900/40"
          >
            <div className="shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden">
              <img
                src={e.logo}
                alt={`${e.client} logo`}
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-white font-semibold text-sm tracking-wide">
                {e.client}
              </div>
              <div className="text-zinc-400 text-xs mt-0.5">
                {e.role} — {e.focus}
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-1.5 text-zinc-500 text-xs font-mono">
              <Clock className="w-3 h-3" />
              {e.hours}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
