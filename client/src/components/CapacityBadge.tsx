// Safe addition, single source of truth for engagement capacity badge.
// Conveys: fractional hourly engagements at capacity (EDF + Waveguide),
// open to project searches and advisory only.

export default function CapacityBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 rounded-full bg-zinc-900/50 ${className}`}>
      <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
      <span className="text-amber-300 text-xs sm:text-sm font-mono tracking-wider uppercase">
        Fractional capacity full · taking project &amp; advisory
      </span>
    </div>
  );
}
