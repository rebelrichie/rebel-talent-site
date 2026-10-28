/**
 * Deep-navy hero. Flight paths are smooth ellipses in open sky.
 * The mark is the real logo file.
 */

type Orbit = { cx: number; cy: number; rx: number; ry: number };

const SKY: Orbit[] = [
  { cx: 1500, cy: -40, rx: 520, ry: 150 },
  { cx: 1580, cy: -80, rx: 640, ry: 190 },
];

const BASE: Orbit[] = [
  { cx: 800, cy: 340, rx: 760, ry: 200 },
  { cx: 800, cy: 390, rx: 980, ry: 250 },
];

function onEllipse(orbit: Orbit, deg: number) {
  const t = (deg * Math.PI) / 180;
  return {
    x: orbit.cx + orbit.rx * Math.cos(t),
    y: orbit.cy + orbit.ry * Math.sin(t),
  };
}

const SKY_NODES = [
  onEllipse(SKY[1], 148),
  onEllipse(SKY[0], 122),
  onEllipse(SKY[1], 108),
];

const BASE_NODES = [
  onEllipse(BASE[1], -130),
  onEllipse(BASE[1], -90),
  onEllipse(BASE[1], -50),
];

function Flight({
  className,
  viewBox,
  orbits,
  nodes,
}: {
  className: string;
  viewBox: string;
  orbits: Orbit[];
  nodes: { x: number; y: number }[];
}) {
  return (
    <svg className={className} viewBox={viewBox} preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
      {orbits.map((orbit) => (
        <ellipse
          key={orbit.rx}
          cx={orbit.cx}
          cy={orbit.cy}
          rx={orbit.rx}
          ry={orbit.ry}
          fill="none"
          stroke="#E23B4A"
          strokeWidth="1.5"
          strokeDasharray="12 9"
        />
      ))}
      {nodes.map((node) => (
        <g key={`${node.x}-${node.y}`}>
          <circle cx={node.x} cy={node.y} r="8" fill="rgba(226,59,74,0.32)" />
          <circle cx={node.x} cy={node.y} r="3.1" fill="#FF4B5A" />
          <Bracket x={node.x} y={node.y} />
        </g>
      ))}
    </svg>
  );
}

function Bracket({ x, y, s = 28 }: { x: number; y: number; s?: number }) {
  const a = s * 0.28;
  const x0 = x - s / 2;
  const y0 = y - s / 2;
  return (
    <g stroke="rgba(247,249,252,0.82)" strokeWidth="1.15" fill="none">
      <path d={`M${x0} ${y0 + a}V${y0}H${x0 + a}`} />
      <path d={`M${x0 + s - a} ${y0}H${x0 + s}V${y0 + a}`} />
      <path d={`M${x0} ${y0 + s - a}V${y0 + s}H${x0 + a}`} />
      <path d={`M${x0 + s - a} ${y0 + s}H${x0 + s}V${y0 + s - a}`} />
    </g>
  );
}

export default function BannerHero({
  children,
  tall = false,
  mark = false,
}: {
  children: React.ReactNode;
  tall?: boolean;
  mark?: boolean;
  priority?: boolean;
}) {
  return (
    <div className={`banner-stage ${tall ? "banner-stage-tall" : "banner-stage-short"}`}>
      <Flight className="banner-flight banner-flight-sky" viewBox="0 0 1600 900" orbits={SKY} nodes={SKY_NODES} />
      <Flight className="banner-flight banner-flight-base" viewBox="0 0 1600 220" orbits={BASE} nodes={BASE_NODES} />
      {mark && (
        <img
          className="banner-mark"
          src="/images/rebel-logo-break-orbit.webp"
          alt="Rebel Talent. Break orbit."
          width={1856}
          height={1056}
        />
      )}
      <div className="band-wrap banner-copy">
        <div className="band-hero-copy">{children}</div>
      </div>
    </div>
  );
}
