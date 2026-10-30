import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Fade up 16px over 400ms when the block enters the viewport.
 * Already-visible blocks play once on load. Off-screen blocks wait.
 * prefers-reduced-motion leaves content in place.
 */
export default function Rise({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const play = () => el.classList.add("is-in");
    const rect = el.getBoundingClientRect();
    const visible = rect.top < window.innerHeight * 0.92 && rect.bottom > 24;

    if (visible) {
      el.classList.add("rise-played");
      return;
    }

    el.classList.add("rise-wait");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        play();
        io.disconnect();
      },
      { threshold: 0.18 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties = {
    animationDelay: `${delay}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div ref={ref} className={`rise ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
