import { Helmet } from "react-helmet-async";

/**
 * Full-bleed night-Earth hero.
 * Photo: NASA Earth Observatory, "Black Marble" Americas, Suomi NPP VIIRS,
 * April and October 2012. Public domain.
 * https://commons.wikimedia.org/wiki/File:Black_Marble_Americas.jpg
 * The mark is the real logo file. BREAK ORBIT is set in type on the home hero.
 */

const AVIF =
  "/earth-night-800.avif 800w, /earth-night-1280.avif 1280w, /earth-night-1920.avif 1920w, /earth-night-2560.avif 2560w";
const WEBP =
  "/earth-night-800.webp 800w, /earth-night-1280.webp 1280w, /earth-night-1920.webp 1920w, /earth-night-2560.webp 2560w";

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
      <picture className="banner-earth" aria-hidden="true">
        <source type="image/avif" srcSet={AVIF} sizes="100vw" />
        <img
          src="/earth-night-2560.webp"
          srcSet={WEBP}
          sizes="100vw"
          width={2560}
          height={1440}
          alt=""
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
        />
      </picture>
      <div className="banner-rim" aria-hidden="true" />
      <div className="banner-scrim" aria-hidden="true" />
      {mark && (
        <div className="banner-orbit">
          <p className="break-orbit">BREAK ORBIT</p>
          <img
            className="banner-mark"
            src="/images/rebel-logo-break-orbit.webp"
            alt="Rebel Talent"
            width={1856}
            height={888}
          />
        </div>
      )}
      <div className="band-wrap banner-copy">
        <div className="band-hero-copy">{children}</div>
      </div>
    </div>
  );
}
