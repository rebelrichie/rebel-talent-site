import OrbitPanel from "@/components/OrbitPanel";

/** Interior Orbit Split. Copy sits on the same 1140 grid as the bands below. */
export default function InteriorHero({
  children,
  testId = "section-hero",
}: {
  children: React.ReactNode;
  testId?: string;
}) {
  return (
    <section data-testid={testId} className="band-hero">
      <div className="hero-split">
        <div className="band-wrap relative z-10 flex items-center py-12 lg:min-h-[420px] lg:py-16">
          <div className="band-hero-copy w-full lg:w-1/2 lg:pr-10">
            {children}
          </div>
        </div>
        <OrbitPanel compact className="hero-orbit" />
      </div>
    </section>
  );
}
