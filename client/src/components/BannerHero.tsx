import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

/**
 * Full-bleed night-Earth hero.
 * Photo: NASA Earth Observatory, "Black Marble" Americas, Suomi NPP VIIRS,
 * April and October 2012. Public domain.
 * https://commons.wikimedia.org/wiki/File:Black_Marble_Americas.jpg
 */

const AVIF =
  "/earth-night-800.avif 800w, /earth-night-1280.avif 1280w, /earth-night-1920.avif 1920w, /earth-night-2560.avif 2560w";
const WEBP =
  "/earth-night-800.webp 800w, /earth-night-1280.webp 1280w, /earth-night-1920.webp 1920w, /earth-night-2560.webp 2560w";

export default function BannerHero({
  children,
  tall = false,
  priority = false,
  parallax = false,
}: {
  children: React.ReactNode;
  tall?: boolean;
  priority?: boolean;
  parallax?: boolean;
}) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!parallax) return;
    const img = imgRef.current;
    const stage = img?.closest(".banner-stage");
    if (!img || !stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      const rect = stage.getBoundingClientRect();
      const traveled = Math.min(Math.max(-rect.top, 0), rect.height);
      img.style.transform = `translate3d(0, ${traveled * 0.3}px, 0)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      img.style.transform = "";
    };
  }, [parallax]);

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
          ref={imgRef}
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
      <div className="band-wrap banner-copy">
        <div className="band-hero-copy">{children}</div>
      </div>
    </div>
  );
}
