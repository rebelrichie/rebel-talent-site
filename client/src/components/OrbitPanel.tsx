/**
 * Orbital diagram for the split hero.
 * Earth limb is NASA public-domain astronaut photo ISS064-E-005209
 * (Johnson Space Center), 20 Nov 2020, Western Australia.
 * Diagram lines are SVG. No stock illustration, no glow.
 *
 * Variants change rotation, ring count, and crop so pages are distinguishable.
 * Labels render only on the home panel, spaced in a column so they cannot stack.
 */

export type OrbitVariant = "home" | "services" | "cleared" | "jobs" | "blog" | "about" | "default";

type Label = { kicker: string; line: string };

// viewBox frames the rotated outer ellipse (center 418,292, rx 268, ry 102)
// with padding, so `meet` never slices a ring off the edge.
const VARIANTS: Record<OrbitVariant, { rotate: number; viewBox: string; rings: 1 | 2 | 3; dashOuter: boolean }> = {
  home: { rotate: -18, viewBox: "133 136 570 312", rings: 2, dashOuter: false },
  services: { rotate: 22, viewBox: "110 100 620 380", rings: 2, dashOuter: true },
  cleared: { rotate: -40, viewBox: "174 74 488 435", rings: 3, dashOuter: false },
  jobs: { rotate: 8, viewBox: "100 60 640 440", rings: 1, dashOuter: true },
  blog: { rotate: 46, viewBox: "189 58 457 467", rings: 1, dashOuter: true },
  about: { rotate: -6, viewBox: "100 60 640 440", rings: 2, dashOuter: true },
  default: { rotate: -18, viewBox: "133 136 570 312", rings: 2, dashOuter: false },
};

const HOME_LABELS: Label[] = [
  { kicker: "Contingent", line: "One role" },
  { kicker: "Embedded", line: "The desk" },
  { kicker: "Cleared", line: "Secret, TS, TS/SCI" },
];

export default function OrbitPanel({
  className = "",
  compact = false,
  variant = "default",
}: {
  className?: string;
  compact?: boolean;
  variant?: OrbitVariant;
}) {
  const spec = VARIANTS[variant] ?? VARIANTS.default;
  const marks = [
    { rx: 268, ry: 102, deg: -28 },
    { rx: 268, ry: 102, deg: 36 },
    { rx: 268, ry: 102, deg: 158 },
    { rx: 168, ry: 62, deg: 12 },
    { rx: 168, ry: 62, deg: 198 },
  ].filter((mark) => spec.rings > 1 || mark.rx === 268);
  const showLabels = !compact && variant === "home";

  return (
    <div className={`orbit-panel mi-band relative overflow-hidden bg-[#001028] ${className}`} data-orbit={variant}>
      <img src="/earth-limb.jpg" alt="" className="orbit-earth" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={spec.viewBox}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        focusable="false"
      >
        <g stroke="#8FDBEF" strokeWidth="1" fill="none">
          <line x1="418" y1="36" x2="418" y2="620" strokeDasharray="1.5 7" />
          <line x1="48" y1="292" x2="760" y2="292" strokeDasharray="1.5 7" />
          {Array.from({ length: 13 }, (_, i) => {
            const y = 80 + i * 40;
            const long = i % 2 === 0;
            return <line key={`vx${y}`} x1={long ? 408 : 412} y1={y} x2={long ? 428 : 424} y2={y} />;
          })}
          {Array.from({ length: 15 }, (_, i) => {
            const x = 80 + i * 44;
            const long = i % 2 === 0;
            return <line key={`hx${x}`} x1={x} y1={long ? 282 : 286} x2={x} y2={long ? 302 : 298} />;
          })}
          <circle cx="418" cy="292" r="3.2" fill="#8FDBEF" stroke="none" />
          <circle cx="418" cy="292" r="11" />
        </g>

        <g transform={`translate(418 292) rotate(${spec.rotate})`}>
          <ellipse
            rx="268"
            ry="102"
            fill="none"
            stroke="rgba(255,255,255,0.95)"
            strokeWidth="1.6"
            strokeDasharray={spec.dashOuter ? "7 9" : undefined}
          />
          {spec.rings >= 2 && (
            <ellipse rx="168" ry="62" fill="none" stroke="rgba(255,255,255,0.82)" strokeWidth="1.25" />
          )}
          {spec.rings >= 3 && (
            <ellipse rx="96" ry="36" fill="none" stroke="rgba(143,219,239,0.9)" strokeWidth="1.1" />
          )}
          {marks.map((mark) => {
            const rad = (mark.deg * Math.PI) / 180;
            const cx = Math.cos(rad) * mark.rx;
            const cy = Math.sin(rad) * mark.ry;
            return (
              <g key={`${mark.rx}-${mark.deg}`}>
                <circle cx={cx} cy={cy} r="8" fill="none" stroke="#C8102E" strokeWidth="1.1" />
                <circle cx={cx} cy={cy} r="4.2" fill="#C8102E" />
              </g>
            );
          })}
        </g>

        <g stroke="rgba(255,255,255,0.55)" strokeWidth="1" fill="none">
          <line x1="168" y1="168" x2="250" y2="230" />
          <line x1="640" y1="150" x2="560" y2="220" />
          <line x1="630" y1="470" x2="548" y2="390" />
        </g>
      </svg>

      {showLabels && (
        <>
          <div className="orbit-label orbit-label-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em]">{HOME_LABELS[0].kicker}</p>
            <p className="mt-1 text-[13px]">{HOME_LABELS[0].line}</p>
          </div>
          <div className="orbit-labels-right">
            {HOME_LABELS.slice(1).map((label) => (
              <div key={label.kicker} className="orbit-label">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em]">{label.kicker}</p>
                <p className="mt-1 text-[13px]">{label.line}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
