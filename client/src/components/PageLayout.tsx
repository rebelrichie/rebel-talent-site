import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import PageTransition from "./PageTransition";


interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const [location] = useLocation();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (observerRef.current) observerRef.current.disconnect();

      // Safe addition — skip the first section (hero/above-fold) so it renders
      // immediately without waiting for scroll. Prevents the black-screen-on-load
      // issue where IntersectionObserver hasn't fired yet.
      const allSections = Array.from(document.querySelectorAll("section"));
      const sections = allSections.filter((s, i) => {
        const testId = s.getAttribute("data-testid") || "";
        // Never hide the hero or the first section on any page
        return testId !== "section-hero" && i !== 0;
      });

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
      {/* Safe addition — skip to main content link for keyboard/screen reader users */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[999] focus:px-4 focus:py-2 focus:bg-rebel-red focus:text-white focus:rounded-md focus:text-sm">
        Skip to main content
      </a>
      <Navbar />
      <ScrollProgress />
      <main id="main-content" className="pt-16 relative" style={{ zIndex: 1 }}>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}
