import { useEffect, useMemo, useRef } from "react";
import { useLocation } from "wouter";
import Navbar from "./Navbar";
import Footer from "./Footer";

function StarField() {
  const stars = useMemo(() =>
    Array.from({ length: 130 }, (_, i) => {
      const size = Math.random() * 1.8 + 0.4;
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size,
        duration: Math.random() * 5 + 2.5,
        delay: Math.random() * 6,
        baseOpacity: Math.random() * 0.45 + 0.15,
        glow: size > 1.6,
      };
    }), []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {stars.map(s => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            borderRadius: "50%",
            background: `rgba(255, 255, 255, ${s.baseOpacity})`,
            animation: `twinkle ${s.duration}s ${s.delay}s ease-in-out infinite`,
            boxShadow: s.glow
              ? `0 0 ${s.size * 3}px rgba(180, 210, 255, 0.9), 0 0 ${s.size * 6}px rgba(180, 210, 255, 0.4)`
              : "none",
          }}
        />
      ))}
    </div>
  );
}

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const [location] = useLocation();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (observerRef.current) observerRef.current.disconnect();

      const sections = Array.from(document.querySelectorAll("section")).filter(
        s => s.getAttribute("data-testid") !== "section-hero"
      );

      sections.forEach(s => {
        s.classList.remove("in-view");
        s.classList.add("reveal-ready");
      });

      observerRef.current = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observerRef.current?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.07 }
      );

      sections.forEach(s => observerRef.current?.observe(s));
    }, 80);

    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, [location]);

  return (
    <div className="min-h-screen bg-rebel-space text-white relative">
      <StarField />
      <Navbar />
      <main className="pt-16 relative" style={{ zIndex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}
