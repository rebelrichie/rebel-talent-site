// Safe addition, single source of truth for engagement capacity badge.
// Conveys: open capacity across four offerings (Contingent, Retained,
// Embedded, Advisory), all under Richie's direction. Contingent leads.
// Do not claim Embedded is wide open.

export default function CapacityBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 rounded-full bg-zinc-900/50 ${className}`}>
      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      <span className="text-emerald-300 text-xs sm:text-sm font-mono tracking-wider uppercase">
        Capacity open · contingent, retained, embedded &amp; advisory under Richie
      </span>
    </div>
  );
}
