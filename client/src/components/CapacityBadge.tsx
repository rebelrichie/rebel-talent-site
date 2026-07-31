// Safe addition, single source of truth for engagement capacity badge.
// Conveys: open capacity across three offerings (Embedded/Fractional,
// Retained Search, Contingent), all under Richie's direction.

export default function CapacityBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 rounded-full bg-zinc-900/50 ${className}`}>
      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      <span className="text-emerald-300 text-xs sm:text-sm font-mono tracking-wider uppercase">
        Capacity open · embedded, retained &amp; contingent under Richie
      </span>
    </div>
  );
}
