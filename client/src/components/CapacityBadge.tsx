// Safe addition — single source of truth for engagement capacity badge
// Update CAPACITY_COUNT here and it changes everywhere on the site

const CAPACITY_COUNT = 2;
const ACCEPTING = CAPACITY_COUNT > 0;

export default function CapacityBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 rounded-full bg-zinc-900/50 ${className}`}>
      <div className={`w-2 h-2 rounded-full ${ACCEPTING ? "bg-green-400 animate-pulse" : "bg-amber-400"}`} />
      <span className="text-green-400 text-xs sm:text-sm font-mono tracking-wider uppercase">
        {ACCEPTING
          ? `Currently accepting ${CAPACITY_COUNT} new engagement${CAPACITY_COUNT !== 1 ? "s" : ""}`
          : "Currently at capacity — join the waitlist"}
      </span>
    </div>
  );
}
