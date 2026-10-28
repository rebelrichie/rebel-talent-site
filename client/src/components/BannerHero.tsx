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

function Bracket({ x, y, s = 18 }: { x: number; y: number; s?: number }) {
  const a = Math.round(s * 0.32);
  return (
    <g stroke="rgba(247,249,252,0.72)" strokeWidth="1.25" fill="none">
      <path d={`M${x} ${y + a}V${y}H${x + a}`} />
      <path d={`M${x + s - a} ${y}H${x + s}V${y + a}`} />
      <path d={`M${x} ${y + s - a}V${y + s}H${x + a}`} />
      <path d={`M${x + s - a} ${y + s}H${x + s}V${y + s - a}`} />
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
      <svg
        className="banner-flight"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        <g className="flight-tall" fill="none" stroke="#E23B4A" strokeWidth="1.6" strokeDasharray="8 7" strokeLinecap="round">
          <path d="M1040 760C1200 690 1380 840 1580 680" />
          <path d="M980 860C1180 790 1420 900 1590 750" />
        </g>
        <g className="flight-short" fill="none" stroke="#E23B4A" strokeWidth="1.6" strokeDasharray="8 7" strokeLinecap="round">
          <path d="M1080 300C1260 230 1440 380 1580 250" />
          <path d="M1020 460C1240 390 1460 520 1590 400" />
        </g>
        <g className="flight-tall">
          {[
            [1180, 730],
            [1420, 740],
            [1080, 830],
            [1520, 700],
          ].map(([cx, cy]) => (
            <g key={`t${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r="8" fill="rgba(226,59,74,0.35)" />
              <circle cx={cx} cy={cy} r="3.1" fill="#FF4B5A" />
            </g>
          ))}
        </g>
        <g className="flight-short">
          {[
            [1240, 270],
            [1480, 300],
            [1160, 430],
            [1500, 430],
          ].map(([cx, cy]) => (
            <g key={`s${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r="8" fill="rgba(226,59,74,0.35)" />
              <circle cx={cx} cy={cy} r="3.1" fill="#FF4B5A" />
            </g>
          ))}
        </g>
        <Bracket x={1088} y={168} />
        <Bracket x={1268} y={300} s={16} />
      </svg>
      <div className="banner-scrim" aria-hidden="true" />
      <div className="band-wrap banner-copy">
        <div className="band-hero-copy">{children}</div>
        {mark && (
          <img
            className="banner-mark"
            src="/logo.png"
            alt="Rebel Talent"
            width={200}
            height={200}
          />
        )}
      </div>
    </div>
  );
}
