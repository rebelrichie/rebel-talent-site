// Safe addition, single source of truth for current client engagements
// Update this list when engagements start/end and it changes everywhere on the site
import { Briefcase } from "lucide-react";

interface Engagement {
  client: string;
  logo: string;
  role: string;
  focus: string;
  url: string;
  logoBg: string; // tailwind bg class — match to logo's background needs
}

const ENGAGEMENTS: Engagement[] = [
  {
    client: "EarthDaily Federal",
    logo: "/logo-earthdaily.png",
    role: "Fractional Head of Talent",
    focus: "AI/ML, GTM & Executive Roles",
    url: "https://earthdailyfederal.com",
    logoBg: "bg-zinc-800",
  },
  {
    client: "Waveguide",
    logo: "/logo-waveguide.png",
    role: "Fractional Head of Talent",
    focus: "TS/SCI FSP Technical & Engineering Recruiting",
    url: "https://waveguideincorporated.com",
    logoBg: "bg-white",
  },
  {
    client: "Kalibri Labs",
    logo: "/logo-kalibri.png",
    role: "Internal Recruiting Support",
    focus: "ML Engineer Search",
    url: "https://kalibrilabs.com",
    logoBg: "bg-white",
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
          <a
            key={e.client}
            href={e.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-5 py-3.5 border border-zinc-800/80 rounded-xl bg-zinc-900/40 hover:border-zinc-600/80 hover:bg-zinc-900/60 transition-colors no-underline"
          >
            <div className={`shrink-0 w-16 h-12 rounded-lg flex items-center justify-center overflow-hidden px-2 ${e.logoBg}`}>
              <img
                src={e.logo}
                alt={`${e.client} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-white font-semibold text-sm tracking-wide">
                {e.client}
              </div>
              <div className="text-zinc-400 text-xs mt-0.5">
                {e.role}, {e.focus}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
