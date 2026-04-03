// Safe addition — Scroll progress bar that sits at top of page
import { useState, useEffect } from "react";

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
    <div className="fixed top-16 left-0 w-full h-[2px] z-50 pointer-events-none" style={{ background: "transparent" }}>
      <div
        className="h-full"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #FF4500, #DC2626, #FF4500)",
          boxShadow: "0 0 8px rgba(255,69,0,0.5), 0 0 20px rgba(255,69,0,0.2)",
          transition: "width 50ms linear",
        }}
      />
    </div>
  );
}
