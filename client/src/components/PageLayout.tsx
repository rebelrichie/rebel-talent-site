import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import Navbar from "./Navbar";
import Footer from "./Footer";


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
      <Navbar />
      <main className="pt-16 relative" style={{ zIndex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}
