import { Helmet } from "react-helmet-async";

/**
 * Full-bleed night-Earth hero.
 * Photo: NASA Earth Observatory, "Black Marble" Americas, Suomi NPP VIIRS,
 * April and October 2012. Public domain.
 * https://commons.wikimedia.org/wiki/File:Black_Marble_Americas.jpg
 * Flight paths, nodes, and brackets are SVG. The mark is the existing logo.
 */

const AVIF = "/earth-night-800.avif 800w, /earth-night-1280.avif 1280w, /earth-night-1920.avif 1920w, /earth-night-2400.avif 2400w";
const WEBP = "/earth-night-800.webp 800w, /earth-night-1280.webp 1280w, /earth-night-1920.webp 1920w, /earth-night-2400.webp 2400w";

/** Earth center in the 1600×900 hero frame. Matches the cropped Black Marble disk. */
const EARTH = { cx: 352, cy: 1062 };
const ORBITS = [1168, 1292];

function onOrbit(radius: number, deg: number) {
  const t = (deg * Math.PI) / 180;
  return {
    x: EARTH.cx + radius * Math.cos(t),
    y: EARTH.cy + radius * Math.sin(t),
  };
}

const NODES = [
  onOrbit(1168, -58),
  onOrbit(1168, -14),
  onOrbit(1292, -48),
  onOrbit(1292, -30),
];

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

function RebelMark() {
  return (
    <svg className="banner-mark" viewBox="0 0 400 470" role="img" aria-label="Rebel Talent">
      <defs>
        <linearGradient id="rebel-orbit" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#C8102E" />
          <stop offset="0.55" stopColor="#E23B4A" />
          <stop offset="1" stopColor="#F08A2A" />
        </linearGradient>
      </defs>
      <g transform="translate(200 168)">
        <polygon
          fill="#F7F9FC"
          points="0,-132 14,-16 132,0 14,16 0,132 -14,16 -132,0 -14,-16"
        />
        <ellipse
          rx="158"
          ry="54"
          fill="none"
          stroke="url(#rebel-orbit)"
          strokeWidth="7"
          transform="rotate(-16)"
        />
        <circle cx="149" cy="-25" r="7" fill="#E23B4A" />
      </g>
      <text
        x="200"
        y="360"
        textAnchor="middle"
        fill="#F7F9FC"
        fontFamily="Inter, sans-serif"
        fontSize="64"
        fontWeight="800"
        letterSpacing="-1.5"
      >
        REBEL
      </text>
      <text
        x="200"
        y="412"
        textAnchor="middle"
        fill="#F7F9FC"
        fontFamily="Inter, sans-serif"
        fontSize="26"
        fontWeight="600"
        letterSpacing="12"
      >
        TALENT
      </text>
    </svg>
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
      <svg
        className="banner-flight"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMin slice"
        aria-hidden="true"
        focusable="false"
      >
        {ORBITS.map((radius) => (
          <circle
            key={radius}
            cx={EARTH.cx}
            cy={EARTH.cy}
            r={radius}
            fill="none"
            stroke="#E23B4A"
            strokeWidth="1.5"
            strokeDasharray="11 9"
          />
        ))}
        {NODES.map((node) => (
          <g key={`${node.x}-${node.y}`}>
            <circle cx={node.x} cy={node.y} r="8" fill="rgba(226,59,74,0.32)" />
            <circle cx={node.x} cy={node.y} r="3.1" fill="#FF4B5A" />
            <Bracket x={node.x} y={node.y} />
          </g>
        ))}
      </svg>
      <div className="banner-scrim" aria-hidden="true" />
      <div className="band-wrap banner-copy">
        <div className="band-hero-copy">{children}</div>
        {mark && <RebelMark />}
      </div>
    </div>
  );
}
