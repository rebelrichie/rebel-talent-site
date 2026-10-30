import { useEffect, useState } from "react";

/** 2px reading progress, pinned to the sticky header's bottom edge. */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div style={{ width: `${progress}%` }} />
    </div>
  );
}
