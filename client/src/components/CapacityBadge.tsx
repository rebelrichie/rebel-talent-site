// Safe addition, single source of truth for engagement capacity badge
// Update CAPACITY_COUNT here and it changes everywhere on the site

export default function CapacityBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 rounded-full bg-zinc-900/50 ${className}`}>
      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      <span className="text-green-400 text-xs sm:text-sm font-mono tracking-wider uppercase">
        Open to advisory and consulting projects
      </span>
    </div>
  );
}
