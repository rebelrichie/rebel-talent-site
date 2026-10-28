import { Helmet } from "react-helmet-async";

/**
 * Full-bleed night-Earth hero.
 * Photo: NASA Earth Observatory, "Black Marble" Americas, Suomi NPP VIIRS,
 * April and October 2012. Public domain.
 * https://commons.wikimedia.org/wiki/File:Black_Marble_Americas.jpg
 * Flight paths are smooth elliptical arcs in open sky, clear of the top edge.
 * The mark is the real logo file.
 */

const AVIF = "/earth-night-800.avif 800w, /earth-night-1280.avif 1280w, /earth-night-1920.avif 1920w, /earth-night-2400.avif 2400w";
const WEBP = "/earth-night-800.webp 800w, /earth-night-1280.webp 1280w, /earth-night-1920.webp 1920w, /earth-night-2400.webp 2400w";

type Orbit = { cx: number; cy: number; rx: number; ry: number };

/**
 * Lower semicircles only. Each apex stays inside the 1600×900 frame so the
 * dash and brackets are not cut by the hero's top edge.
 */
const SKY: Orbit[] = [
  { cx: 1120, cy: 78, rx: 300, ry: 78 },
  { cx: 1200, cy: 56, rx: 360, ry: 92 },
];

/** Upper arcs that stay inside the short mobile strip, including brackets. */
const BASE: Orbit[] = [
  { cx: 800, cy: 168, rx: 460, ry: 58 },
  { cx: 800, cy: 150, rx: 580, ry: 72 },
];

function onEllipse(orbit: Orbit, deg: number) {
  const t = (deg * Math.PI) / 180;
  return {
    x: orbit.cx + orbit.rx * Math.cos(t),
    y: orbit.cy + orbit.ry * Math.sin(t),
  };
}

const SKY_NODES = [
  onEllipse(SKY[1], 155),
  onEllipse(SKY[0], 120),
  onEllipse(SKY[1], 75),
  onEllipse(SKY[0], 30),
];

const BASE_NODES = [
  onEllipse(BASE[1], 220),
  onEllipse(BASE[1], 270),
  onEllipse(BASE[1], 320),
];

/** Clockwise elliptical arc in SVG coordinates (y grows downward). */
function arcPath(orbit: Orbit, a0: number, a1: number) {
  const start = onEllipse(orbit, a0);
  const end = onEllipse(orbit, a1);
  const large = Math.abs(a1 - a0) > 180 ? 1 : 0;
  const sweep = a1 > a0 ? 1 : 0;
  return `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} A ${orbit.rx} ${orbit.ry} 0 ${large} ${sweep} ${end.x.toFixed(2)} ${end.y.toFixed(2)}`;
}

function Flight({
  className,
  viewBox,
  orbits,
  nodes,
  arc,
  preserveAspectRatio,
}: {
  className: string;
  viewBox: string;
  orbits: Orbit[];
  nodes: { x: number; y: number }[];
  arc?: [number, number];
  preserveAspectRatio: string;
}) {
  return (
    <svg className={className} viewBox={viewBox} preserveAspectRatio={preserveAspectRatio} aria-hidden="true" focusable="false">
      {orbits.map((orbit) => (
        <path
          key={`${orbit.cx}-${orbit.rx}`}
          d={arc ? arcPath(orbit, arc[0], arc[1]) : arcPath(orbit, 200, 340)}
          fill="none"
          stroke="#E23B4A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="12 9"
          shapeRendering="geometricPrecision"
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
  priority = false,
}: {
  children: React.ReactNode;
  tall?: boolean;
  mark?: boolean;
  priority?: boolean;
}) {
  return (
    <div className={`banner-stage ${tall ? "banner-stage-tall" : "banner-stage-short"}`}>
      {priority && (
        <Helmet>
          <link
            rel="preload"
            as="image"
            type="image/avif"
            imageSrcSet={AVIF}
            imageSizes="100vw"
            fetchPriority="high"
          />
        </Helmet>
      )}
      <picture className="banner-earth">
        <source type="image/avif" srcSet={AVIF} sizes="100vw" />
        <img
          src="/earth-night-1280.webp"
          srcSet={WEBP}
          sizes="100vw"
          width={2400}
          height={1350}
          alt=""
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
        />
      </picture>
      <div className="banner-scrim" aria-hidden="true" />
      <Flight
        className="banner-flight banner-flight-sky"
        viewBox="0 0 1600 900"
        orbits={SKY}
        nodes={SKY_NODES}
        arc={[2, 178]}
        preserveAspectRatio="xMidYMin slice"
      />
      <Flight
        className="banner-flight banner-flight-base"
        viewBox="0 0 1600 220"
        orbits={BASE}
        nodes={BASE_NODES}
        arc={[200, 340]}
        preserveAspectRatio="xMidYMax meet"
      />
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
