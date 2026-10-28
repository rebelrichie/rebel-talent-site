import BannerHero from "@/components/BannerHero";
import type { OrbitVariant } from "@/components/OrbitPanel";

/** Shorter full-bleed night-Earth hero. Copy sits on the same grid as the bands. */
export default function InteriorHero({
  children,
  testId = "section-hero",
  orbit: _orbit = "default",
}: {
  children: React.ReactNode;
  testId?: string;
  orbit?: OrbitVariant;
}) {
  return (
    <section data-testid={testId} className="band-hero">
      <BannerHero>{children}</BannerHero>
    </section>
  );
}
