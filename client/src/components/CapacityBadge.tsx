// Safe addition, single source of truth for engagement capacity badge.
// Conveys: open capacity across four offerings (Contingent, Retained,
// Embedded, Advisory), all under Richie's direction. Contingent leads.
// Do not claim Embedded is wide open.

export default function CapacityBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div className="capacity-dot" />
      <span className="capacity-label text-xs sm:text-sm font-mono tracking-wider uppercase">
        Capacity open · contingent, retained, embedded &amp; advisory under Richie
      </span>
    </div>
  );
}
