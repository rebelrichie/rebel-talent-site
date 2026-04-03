// Safe addition — Page transition wrapper with crossfade effect
import { ReactNode, useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [location] = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitioning, setTransitioning] = useState(false);
  const prevLocation = useRef(location);

  useEffect(() => {
    if (location !== prevLocation.current) {
      prevLocation.current = location;
      setTransitioning(true);
      // Short fade out, then swap content
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setTransitioning(false);
        window.scrollTo(0, 0);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      setDisplayChildren(children);
    }
  }, [location, children]);

  return (
    <div
      style={{
        opacity: transitioning ? 0 : 1,
        transform: transitioning ? "translateY(8px)" : "translateY(0)",
        transition: "opacity 200ms ease-out, transform 200ms ease-out",
      }}
    >
      {displayChildren}
    </div>
  );
}
