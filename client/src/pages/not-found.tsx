import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Crosshair, Radar, ShieldAlert } from "lucide-react";

const quickLinks = [
  { href: "/services", label: "Services", icon: "▸" },
  { href: "/about", label: "About Richie", icon: "▸" },
  { href: "/case-studies", label: "Case Studies", icon: "▸" },
  { href: "/blog", label: "Blog", icon: "▸" },
  { href: "/free-tools", label: "Free Tools", icon: "▸" },
  { href: "/platform", label: "Platform", icon: "▸" },
];

const scanLines = [
  "SCANNING SECTOR 404...",
  "TARGET ACQUISITION FAILED",
  "NO MATCH IN DATABASE",
  "RECALIBRATING...",
  "REDIRECTING TO SAFE ZONE",
];

function GlitchText({ text }: { text: string }) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 3000 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block">
      <span className={glitch ? "opacity-0" : ""}>{text}</span>
      {glitch && (
        <>
          <span className="absolute inset-0 text-cyan-400" style={{ transform: "translate(-2px, -1px)", clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}>{text}</span>
          <span className="absolute inset-0 text-rebel-red" style={{ transform: "translate(2px, 1px)", clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)" }}>{text}</span>
        </>
      )}
    </span>
  );
}

function ScanLog() {
  const [lines, setLines] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < scanLines.length) {
        setLines((prev) => [...prev, scanLines[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div
      ref={containerRef}
      className="font-mono text-[10px] sm:text-xs text-left max-w-xs mx-auto h-28 overflow-hidden border border-zinc-800/50 bg-black/40 p-3 mb-8"
    >
      {lines.map((line, idx) => (
        <div key={idx} className="flex items-center gap-2 mb-1">
          <span className="text-zinc-600">{`${String(idx + 1).padStart(2, "0")}>`}</span>
          <span className={idx === lines.length - 1 ? "text-rebel-red" : "text-zinc-500"}>
            {line}
            {idx === lines.length - 1 && <span className="animate-pulse ml-0.5">█</span>}
          </span>
        </div>
      ))}
    </div>
  );
}

function RadarPulse() {
  return (
    <div className="relative w-40 h-40 mx-auto mb-8">
      {/* Outer rings */}
      <div className="absolute inset-0 rounded-full border border-zinc-800/40" />
      <div className="absolute inset-4 rounded-full border border-zinc-800/30" />
      <div className="absolute inset-8 rounded-full border border-zinc-800/20" />
      {/* Crosshair lines */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-zinc-800/30" />
      <div className="absolute left-0 right-0 top-1/2 h-px bg-zinc-800/30" />
      {/* Sweep */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: "conic-gradient(from 0deg, transparent 0deg, rgba(255,69,0,0.15) 0deg, transparent 60deg)",
          animation: "spin 3s linear infinite",
        }}
      />
      {/* Center icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <ShieldAlert className="w-8 h-8 text-rebel-red/60 animate-pulse" />
      </div>
      {/* Fake blips */}
      <div className="absolute top-6 right-8 w-1.5 h-1.5 rounded-full bg-rebel-red/40 animate-ping" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-10 left-6 w-1 h-1 rounded-full bg-zinc-500/40 animate-ping" style={{ animationDelay: "2.5s" }} />
    </div>
  );
}

export default function NotFound() {
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLinks(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLayout>
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          92% { opacity: 1; }
          93% { opacity: 0.8; }
          94% { opacity: 1; }
          96% { opacity: 0.6; }
          97% { opacity: 1; }
        }
      `}</style>

      <section className="relative py-20 sm:py-28 text-center overflow-hidden" style={{ animation: "flicker 8s infinite" }}>
        {/* Scanline overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
          }}
        />
        <div
          className="absolute left-0 right-0 h-px bg-rebel-red/10 pointer-events-none"
          style={{ animation: "scanline 4s linear infinite" }}
        />

        <div className="max-w-xl mx-auto px-4 relative z-10">
          {/* Radar visual */}
          <RadarPulse />

          {/* 404 with glitch */}
          <div className="font-display text-[120px] sm:text-[160px] font-bold text-rebel-red leading-none mb-2 select-none" style={{ textShadow: "0 0 40px rgba(255,69,0,0.3), 0 0 80px rgba(255,69,0,0.1)" }}>
            <GlitchText text="404" />
          </div>

          <div className="flex items-center justify-center gap-2 mb-3">
            <Crosshair className="w-4 h-4 text-rebel-red/60" />
            <h1 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-[0.2em]" data-testid="text-not-found">
              Target Not Found
            </h1>
            <Crosshair className="w-4 h-4 text-rebel-red/60" />
          </div>

          <p className="text-zinc-500 text-sm font-mono tracking-wider mb-6">
            The page you're looking for has gone dark.
          </p>

          {/* Animated scan log */}
          <ScanLog />

          {/* Quick nav — fades in after scan completes */}
          <div
            className="transition-all duration-700"
            style={{ opacity: showLinks ? 1 : 0, transform: showLinks ? "translateY(0)" : "translateY(10px)" }}
          >
            <div className="font-mono text-zinc-600 text-[10px] tracking-[0.3em] uppercase mb-4">
              AVAILABLE TARGETS
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group border border-zinc-800/60 bg-zinc-900/20 p-3 text-sm text-zinc-400 no-underline hover:border-rebel-red/40 hover:text-white hover:bg-rebel-red/5 transition-all duration-200"
                >
                  <span className="font-mono text-rebel-red/40 group-hover:text-rebel-red mr-1.5 text-xs transition-colors">{link.icon}</span>
                  {link.label}
                </Link>
              ))}
            </div>

            <Link href="/" data-testid="link-go-home">
              <Button className="font-display tracking-wider uppercase text-sm group">
                <Radar className="mr-2 w-4 h-4 group-hover:animate-spin" />
                Return to Base <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
