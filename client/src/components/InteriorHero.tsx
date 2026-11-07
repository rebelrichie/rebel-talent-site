import { useLocation } from "wouter";
import BannerHero from "@/components/BannerHero";

type Film = { src: string; alt: string };

function filmFor(path: string): Film | null {
  if (
    path.startsWith("/jobs") ||
    path.startsWith("/strategy-call") ||
    path === "/privacy-policy" ||
    path === "/hiring-readiness"
  ) {
    return null;
  }
  if (path === "/cleared" || path === "/case-studies" || path === "/results" || path.startsWith("/blog") || path === "/podcast") {
    return {
      src: "/earth-night-1920.webp",
      alt: "A broad night view of Earth, its illuminated cities and curved horizon",
    };
  }
  if (path === "/about" || path.startsWith("/about/") || path === "/testimonials" || path === "/advisors" || path === "/startups") {
    return {
      src: "/earth-limb.webp",
      alt: "Earth's limb and cloud deck from orbit",
    };
  }
  if (
    path === "/services" ||
    path === "/contingent" ||
    path === "/contingent-tech-recruiting" ||
    path === "/fractional" ||
    path === "/fractional-recruiter-for-series-a" ||
    path === "/hire-a-tpm" ||
    path === "/advisory" ||
    path === "/certification" ||
    path === "/free-tools"
  ) {
    return {
      src: "/earth-limb-arc.webp",
      alt: "The curve of Earth's atmosphere against space",
    };
  }
  return null;
}

/** Shorter full-bleed night-Earth hero, with a large photographic band on marketing pages. */
export default function InteriorHero({
  children,
  testId = "section-hero",
}: {
  children: React.ReactNode;
  testId?: string;
  orbit?: string;
}) {
  const [location] = useLocation();
  const film = filmFor(location.split("?")[0]);

  return (
    <>
      <section data-testid={testId} className="band-hero">
        <BannerHero>{children}</BannerHero>
      </section>
      {film && (
        <section className="v4-film" aria-label={film.alt}>
          <img src={film.src} alt={film.alt} width={1920} height={1080} />
        </section>
      )}
    </>
  );
}
