import { Helmet } from "react-helmet-async";

/**
 * Full-bleed night-Earth hero.
 * Photo: NASA Earth Observatory, "Black Marble" Americas, Suomi NPP VIIRS,
 * April and October 2012. Public domain.
 * https://commons.wikimedia.org/wiki/File:Black_Marble_Americas.jpg
 * The mark is the real logo file.
 */

const AVIF = "/earth-night-800.avif 800w, /earth-night-1280.avif 1280w, /earth-night-1920.avif 1920w, /earth-night-2400.avif 2400w";
const WEBP = "/earth-night-800.webp 800w, /earth-night-1280.webp 1280w, /earth-night-1920.webp 1920w, /earth-night-2400.webp 2400w";

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
