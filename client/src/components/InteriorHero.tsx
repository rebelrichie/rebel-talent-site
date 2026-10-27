import OrbitPanel from "@/components/OrbitPanel";

/** Smaller Orbit Split hero for interior routes. Copy stays in the left column. */
export default function InteriorHero({
  children,
  testId = "section-hero",
}: {
  children: React.ReactNode;
  testId?: string;
}) {
  return (
    <section data-testid={testId} className="band-hero">
      <div className="grid lg:min-h-[400px] lg:grid-cols-2">
        <div className="band-hero-copy relative z-10 flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 lg:py-14">
          {children}
        </div>
        <OrbitPanel compact className="min-h-[240px] lg:min-h-full" />
      </div>
    </section>
  );
}
