import OrbitPanel, { type OrbitVariant } from "@/components/OrbitPanel";

/** Interior Orbit Split. Copy sits on the same 1140 grid as the bands below. */
export default function InteriorHero({
  children,
  testId = "section-hero",
  orbit = "default",
}: {
  children: React.ReactNode;
  testId?: string;
  orbit?: OrbitVariant;
}) {
  return (
    <section data-testid={testId} className="band-hero">
      <div className="hero-split">
        <div className="band-wrap relative z-10 flex items-center py-12 lg:min-h-[420px] lg:py-16">
          <div className="band-hero-copy w-full lg:w-1/2 lg:pr-10">
            {children}
          </div>
        </div>
        <OrbitPanel compact variant={orbit} className="hero-orbit" />
      </div>
    </section>
  );
}
