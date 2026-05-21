import { useState, useEffect, useMemo, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Shield, Target, Zap, Users, Clock, TrendingUp } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";
import ParallaxSection from "@/components/ParallaxSection";
import CapacityBadge from "@/components/CapacityBadge";
import CurrentEngagements from "@/components/CurrentEngagements";
import EmailCapture from "@/components/EmailCapture";

// Safe addition, haptic feedback for PWA CTA taps
function hapticTap() {
  if (navigator.vibrate) navigator.vibrate(15);
}

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Rebel Talent",
  "description": "Fractional recruiting leadership and embedded talent infrastructure for startups and defense contractors. Specializing in Forward Deployed Engineers, AI/ML, GTM, and cleared TS/SCI hiring.",
  "url": "https://rebeltalentsystems.com",
  "logo": "https://rebeltalentsystems.com/logo.png",
  "telephone": "+1-770-233-7548",
  "email": "richie@rebeltalentsystems.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Alpharetta",
    "addressRegion": "GA",
    "addressCountry": "US"
  },
  "founder": {
    "@type": "Person",
    "name": "Richie Lampani",
    "jobTitle": "Fractional Head of Talent",
    "url": "https://rebeltalentsystems.com/about",
    "sameAs": ["https://linkedin.com/in/richielampani"]
  },
  "sameAs": [
    "https://linkedin.com/in/richielampani",
    "https://rebeltalentsystems.com"
  ],
  "areaServed": ["United States", "Remote"],
  "serviceType": [
    "Fractional Recruiting",
    "Fractional Head of Talent",
    "Embedded Recruiting",
    "Startup Recruiting",
    "Defense Recruiting",
    "Cleared Hiring (Secret, TS, TS/SCI)",
    "Forward Deployed Engineer Recruiting",
    "AI/ML Engineer Recruiting",
    "GTM Hiring",
    "Contract Recruiting",
    "ATS Implementation"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Rebel Talent Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fractional Head of Talent",
          "description": "Embedded fractional recruiting leadership that owns your entire talent function. Strategy, execution, ATS, process design, and hiring manager coaching.",
          "url": "https://rebeltalentsystems.com/services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Critical Hire Execution",
          "description": "Surgical execution for must-fill roles. Executive searches, cleared roles (TS/SCI), and specialized technical talent closed in weeks.",
          "url": "https://rebeltalentsystems.com/services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Team Capacity Extension",
          "description": "Vetted recruiter teams deployed under Richie's direction to extend either the Fractional Head of Talent or Critical Hire Execution engagements. Same standards, same playbooks, monthly or hourly as pipeline demands shift.",
          "url": "https://rebeltalentsystems.com/services"
        }
      }
    ]
  }
};

interface Sparkle {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  size: number; color: string;
  rot: number; rotV: number;
  shape: "star4" | "dot";
}

interface MeteorState {
  x: number; y: number;
  dx: number; dy: number;
  active: boolean;
  done: boolean;
}

const SPARKLE_COLORS = ["#FFE87C","#FFD700","#FFFBE8","#FFB347","#FFFFFF","#FFF4C2","#FFE4A0"];

function draw4Star(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, rot: number) {
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4 + rot;
    const len = i % 2 === 0 ? r : r * 0.38;
    i === 0 ? ctx.moveTo(cx + Math.cos(a) * len, cy + Math.sin(a) * len)
             : ctx.lineTo(cx + Math.cos(a) * len, cy + Math.sin(a) * len);
  }
  ctx.closePath();
  ctx.fill();
}

const METEORS_CFG = [
  { delay: 300,  angle: -28, sy: 0.30, speed: 900  },
  { delay: 1400, angle: -20, sy: 0.52, speed: 800  },
  { delay: 2700, angle: -34, sy: 0.22, speed: 1000 },
];

function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const sparkles: Sparkle[] = [];
    const meteors: MeteorState[] = METEORS_CFG.map(() => ({
      x: 0, y: 0, dx: 0, dy: 0, active: false, done: false,
    }));

    const spawn = (x: number, y: number, speed: number) => {
      const count = Math.floor(Math.random() * 4) + 3;
      for (let i = 0; i < count; i++) {
        const spd = Math.random() * 1.8 + 0.4;
        const a   = Math.random() * Math.PI * 2;
        sparkles.push({
          x, y,
          vx: Math.cos(a) * spd * 0.6,
          vy: Math.sin(a) * spd - 0.5,
          life: 0, maxLife: Math.random() * 55 + 35,
          size: Math.random() * 4.5 + 1.5,
          color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
          rot: Math.random() * Math.PI * 2,
          rotV: (Math.random() - 0.5) * 0.18,
          shape: Math.random() > 0.35 ? "star4" : "dot",
        });
      }
    };

    const drawStar = (m: MeteorState, trailLen: number) => {
      const tx = m.x - m.dx * trailLen;
      const ty = m.y - m.dy * trailLen;
      const grad = ctx.createLinearGradient(tx, ty, m.x, m.y);
      grad.addColorStop(0, "rgba(255,235,100,0)");
      grad.addColorStop(0.6, "rgba(255,245,180,0.5)");
      grad.addColorStop(1, "rgba(255,255,255,0.95)");
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(m.x, m.y);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = "#FFD700";
      ctx.shadowBlur = 12;
      ctx.stroke();
      ctx.shadowBlur = 0;

      const gr = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, 14);
      gr.addColorStop(0, "rgba(255,255,255,1)");
      gr.addColorStop(0.35, "rgba(255,245,160,0.9)");
      gr.addColorStop(1, "rgba(255,200,80,0)");
      ctx.fillStyle = gr;
      ctx.beginPath();
      ctx.arc(m.x, m.y, 14, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#FFFFFF";
      ctx.shadowColor = "#FFE87C";
      ctx.shadowBlur = 20;
      draw4Star(ctx, m.x, m.y, 7, performance.now() * 0.003);
      ctx.shadowBlur = 0;
    };

    const timers = METEORS_CFG.map((cfg, i) =>
      setTimeout(() => {
        const w = canvas.width, h = canvas.height;
        const rad = (cfg.angle * Math.PI) / 180;
        const spd = cfg.speed / 60;
        meteors[i].x  = w * -0.05;
        meteors[i].y  = h * cfg.sy;
        meteors[i].dx = Math.cos(rad) * spd;
        meteors[i].dy = Math.sin(rad) * spd;
        meteors[i].active = true;
      }, cfg.delay)
    );

    let raf: number;
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      meteors.forEach((m, i) => {
        if (!m.active || m.done) return;
        m.x += m.dx;
        m.y += m.dy;
        const trailLen = Math.sqrt(m.dx ** 2 + m.dy ** 2) * 28;
        drawStar(m, trailLen);
        if (Math.random() > 0.25) spawn(
          m.x + (Math.random() - 0.5) * 6,
          m.y + (Math.random() - 0.5) * 6,
          METEORS_CFG[i].speed,
        );
        if (m.x > canvas.width * 1.1 || m.y > canvas.height * 1.2) m.done = true;
      });

      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.x  += s.vx;
        s.y  += s.vy;
        s.vy += 0.055;
        s.vx *= 0.97;
        s.rot += s.rotV;
        s.life++;
        if (s.life >= s.maxLife) { sparkles.splice(i, 1); continue; }
        const alpha = 1 - s.life / s.maxLife;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = s.size * 3;
        if (s.shape === "star4") {
          draw4Star(ctx, s.x, s.y, s.size, s.rot);
        } else {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 5 }}
    />
  );
}

function GraffitiHero() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 200);
    const t2 = setTimeout(() => setPhase(2), 850);
    const t3 = setTimeout(() => setPhase(3), 1600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const particles = useMemo(() =>
    Array.from({ length: 32 }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 420,
      y: (Math.random() - 0.5) * 110,
      size: Math.random() * 6 + 2,
      delay: Math.floor(Math.random() * 350),
      dur: Math.floor(Math.random() * 350 + 450),
    })), []
  );

  return (
    <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-none mb-6">
      <span
        className="block"
        style={{
          opacity: 0,
          animation: phase >= 1 ? "heroLineIn 0.55s ease-out 0s forwards" : "none",
        }}
      >
        BUILD RIGHT.
      </span>
      <span
        className="block"
        style={{
          opacity: 0,
          animation: phase >= 2 ? "heroLineIn 0.55s ease-out 0s forwards" : "none",
        }}
      >
        HIRE RIGHT.
      </span>
      <span className="block relative" style={{ minHeight: "1.2em" }}>
        {phase >= 3 && (
          <>
            {particles.map((p) => (
              <span
                key={p.id}
                className="absolute rounded-full pointer-events-none"
                style={{
                  left: `calc(50% + ${p.x}px)`,
                  top: `calc(50% + ${p.y}px)`,
                  width: p.size,
                  height: p.size,
                  background: Math.random() > 0.3 ? "#DC2626" : "#b91c1c",
                  opacity: 0,
                  animation: `sprayDot ${p.dur}ms ${p.delay}ms ease-out forwards`,
                }}
              />
            ))}
            <span
              style={{
                display: "inline-block",
                fontFamily: '"Permanent Marker", cursive',
                color: "#DC2626",
                fontSize: "0.9em",
                lineHeight: "inherit",
                textTransform: "uppercase",
                opacity: 0,
                animation: "sprayReveal 0.75s ease-out 0s forwards",
                textShadow: "0 0 30px rgba(220,38,38,0.5), 2px 2px 0px rgba(0,0,0,0.8)",
                whiteSpace: "nowrap",
              }}
            >
              REBEL FOREVER.
            </span>
          </>
        )}
      </span>
    </h1>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  // Parallax scroll handler removed — the hero no longer has a background
  // image to shift, and the per-scroll style mutation was causing repaint
  // jiggle on iOS Safari.

  return (
    <PageLayout>
      <PageSEO
        title="Fractional Recruiting for Startups & Defense | Rebel Talent"
        description="Rebel Talent provides fractional recruiting and embedded talent leadership for Series A-C startups and defense contractors. 275% ROI delivered on flagship engagement. 14+ years experience."
        path="/"
        ogTitle="Fractional Recruiting for Startups & Defense | Rebel Talent"
        ogDescription="Agencies profit from your chaos. Rebel Talent embeds fractional recruiting leadership to build the hiring infrastructure startups and defense firms need, without the agency fees, bad fits, or delays."
        ogImage="og-home.png"
        schemas={[homepageSchema]}
      />
      {/* ========== HERO — Hunt Club / Riviera Partners register ========== */}
      <section
        ref={heroRef}
        data-testid="section-hero"
        className="relative overflow-hidden bg-rebel-space"
        style={{ minHeight: "82vh" }}
      >
        {/* Subtle ambient glow — restrained, not starfield */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 0% 0%, rgba(220,38,38,0.10) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(234,88,12,0.06) 0%, transparent 55%)",
          }}
        />

        <h1 className="sr-only">Fractional Head of Talent for Startups &amp; Defense Contractors, Richie Lampani</h1>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 pt-14 sm:pt-24 lg:pt-36 pb-12 sm:pb-20 z-10">
          {/* Eyebrow */}
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-zinc-500 mb-8 sm:mb-12">
            Fractional Head of Talent · Startups &amp; Defense
          </p>

          {/* MASSIVE bold headline — left-aligned, mixed-case */}
          <h2 className="text-[2.25rem] xs:text-4xl sm:text-6xl lg:text-7xl xl:text-[7.5rem] font-extrabold tracking-[-0.035em] text-white leading-[1.02] sm:leading-[0.98] max-w-5xl">
            <span className="block">Your talent problem</span>
            <span className="block text-rebel-red">isn&rsquo;t talent.</span>
            <span className="block">It&rsquo;s infrastructure.</span>
          </h2>

          {/* Subhead — restrained, max 2 lines */}
          <p className="mt-7 sm:mt-10 text-base sm:text-xl text-zinc-400 max-w-2xl leading-[1.55]">
            I embed with your team, build the recruiting system from scratch, close your critical hires, and hand it all back when I leave. Not a coordinator. Not a pitch deck.
          </p>

          {/* Single primary CTA + understated secondary link */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-y-3 sm:gap-y-4 gap-x-8">
            <a
              href="https://calendly.com/richielam"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-book-call"
              onClick={hapticTap}
              className="inline-flex items-center justify-center gap-2 bg-rebel-red hover:bg-red-700 text-white font-semibold text-base px-7 py-3.5 rounded-full transition-colors no-underline w-full sm:w-auto"
            >
              Book a strategy call <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/services"
              data-testid="link-view-services"
              className="text-zinc-300 hover:text-white text-base font-medium underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red transition-colors no-underline text-center sm:text-left"
            >
              See how I work →
            </Link>
          </div>
        </div>

        {/* Trust strip — bottom of hero, restrained */}
        <div className="relative z-10 border-t border-zinc-900 bg-black/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-7">
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
              <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-zinc-600 shrink-0">
                Trusted by teams at
              </p>
              {["EarthDaily Federal", "Waveguide", "Kalibri Labs", "Wells Fargo", "Tiffany & Co", "Travelers", "WK Kellogg Foundation", "Roadrunner", "Enveil"].map((name) => (
                <span key={name} className="text-zinc-400 text-sm tracking-wide font-medium">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== HI-I'M-RICHIE INTRO ==========
          Placeholder for a future video intro. To swap: replace the <img> with a
          <video src="/richie-intro.mp4" /> (or embedded player). Keep the rest. */}
      <section data-testid="section-richie-intro" className="border-b border-zinc-900 bg-rebel-space">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
            <Link href="/about" className="inline-block group shrink-0 relative">
              <img
                src="/richie-portrait.jpg"
                alt="Richie Lampani — Fractional Head of Talent"
                className="w-40 h-40 sm:w-52 sm:h-52 rounded-2xl object-cover border border-zinc-800 group-hover:border-rebel-red/60 transition-colors"
              />
              {/* Soft play-button hint — will become a real video control later */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="w-0 h-0 border-y-[8px] border-y-transparent border-l-[12px] border-l-white ml-1" />
                </div>
              </div>
            </Link>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-rebel-red mb-3">
                Hi, I&rsquo;m Richie
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                You don&rsquo;t hire an agency.<br />
                <span className="text-rebel-red">You hire me.</span>
              </h3>
              <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-[1.55] mb-5">
                Fractional Head of Talent. 14 years closing critical hires across defense, AI/ML, and growth-stage tech. Embedded into your team — not a recruiter farm.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-rebel-red hover:text-white text-sm font-semibold tracking-wide transition-colors no-underline group"
              >
                More about me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CURRENT ENGAGEMENTS BAND ========== */}
      <section data-testid="section-engagements-band" className="border-b border-zinc-900 bg-rebel-space">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 sm:py-20">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-rebel-red mb-3">
            Current engagements
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8 max-w-2xl">
            Real teams, currently hiring.
          </h3>
          <CurrentEngagements />
        </div>
      </section>

      <section data-testid="section-stats" className="py-10 border-y border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "53K+", label: "LinkedIn Followers" },
              { value: "8K", label: "Newsletter Subs" },
              { value: "14+", label: "Years Experience" },
              { value: "<30", label: "Days to Hire" },
            ].map((stat) => (
              <div key={stat.label} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <AnimatedCounter value={stat.value} className="font-display text-3xl sm:text-4xl font-bold text-rebel-red mb-1" />
                <div className="text-zinc-500 text-xs tracking-widest uppercase font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safe addition, Testimonials above the fold */}
      <section className="py-8 border-b border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <blockquote className="relative mb-6">
            <span className="absolute -top-4 -left-2 text-rebel-red/20 text-6xl font-serif leading-none select-none">&ldquo;</span>
            <p className="text-zinc-200 text-lg sm:text-xl leading-relaxed italic mb-4">
              In a review, I was told I had an amazing team, cohesive and indistinguishable from full time employees.
            </p>
            <footer className="text-zinc-500 text-sm">
              <span className="text-zinc-300 font-semibold">Arin, VP of Operations</span>, EarthDaily Federal
            </footer>
          </blockquote>
          {/* Safe addition, Colleen Garrett short testimonial */}
          <blockquote className="relative">
            <span className="absolute -top-4 -left-2 text-rebel-red/20 text-6xl font-serif leading-none select-none">&ldquo;</span>
            <p className="text-zinc-300 text-base leading-relaxed italic mb-4">
              My company is exceptionally picky at a maddening level. Richie kept giving us amazing candidates, reflecting on our feedback and adjusting on the go. I plan to work with him wherever I go.
            </p>
            <footer className="text-zinc-500 text-sm">
              <span className="text-zinc-300 font-semibold">Colleen Garrett</span>, Fractional HR Leader
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Safe addition, Pain points moved up to hook visitors */}
      <section data-testid="section-pain" className="py-10 border-b border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-6">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">SOUND FAMILIAR?</div>
            <h2 className="font-display text-2xl font-bold text-white uppercase">If Any of These Hit, We Need to Talk</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {[
              "Agencies charge 25% and disappear after the hire. You get a placement, not a system.",
              "Your ATS is a graveyard of unreviewed resumes",
              "Hiring managers winging interviews with zero structure",
              "A full-time VP of TA costs $175K+ before you fill a single role.",
              "Your 'recruiting process' is LinkedIn InMails and prayers",
              "Cleared hiring takes time nobody warned you about. What you can control is the pipeline, if you've built one.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 border border-zinc-800/50 bg-zinc-900/20 px-4 py-3" data-testid={`item-pain-${item.slice(0, 20).toLowerCase().replace(/\s+/g, "-")}`}>
                <span className="text-rebel-red font-mono font-bold text-xs mt-0.5 shrink-0">X</span>
                <span className="text-zinc-400 text-sm">{item}</span>
              </div>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Safe addition, differentiators (replaces vs-agency table per Richie's no-comparison framing) */}
      <section data-testid="section-difference" className="py-12 border-b border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-8">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">THE DIFFERENCE</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
              What every engagement delivers
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: <Users className="w-5 h-5 text-rebel-red" />, title: "Embedded execution", desc: "In your Slack, your ATS, your hiring manager 1:1s, your candidate calls. Not consulting from the sidelines. You get me on every call." },
              { icon: <TrendingUp className="w-5 h-5 text-rebel-red" />, title: "~$5K–$8K cost per hire", desc: "Hourly or fixed-fee billing, logged in your dashboard. No success fees. No invoice surprises when the hire closes." },
              { icon: <Clock className="w-5 h-5 text-rebel-red" />, title: "~30 days median time to hire", desc: "Across embedded engagements. Under 30 on EDF's 8 placements. 34 days on Kalibri against a 360-application flooded funnel." },
              { icon: <Shield className="w-5 h-5 text-rebel-red" />, title: "You own everything we build", desc: "ATS, candidate pipeline, interview scorecards, sourcing playbooks, hiring manager training. Exportable, transferable, yours forever." },
              { icon: <Target className="w-5 h-5 text-rebel-red" />, title: "Proof-first vetting", desc: "Every candidate ships with portfolio evidence, structured technical screens, and AI-scored match signals. Resume polish isn't a pipeline." },
              { icon: <Zap className="w-5 h-5 text-rebel-red" />, title: "Infrastructure that compounds", desc: "470%+ projected ROI on the EDF flagship — $240K+ in fees avoided on ~$88K invested. Every system built carries to your next 50 hires." },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm p-5 flex gap-4 items-start hover:border-zinc-700 transition-colors"
              >
                <div className="shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <div className="font-display text-sm font-bold text-white uppercase mb-1">{item.title}</div>
                  <div className="text-zinc-400 text-sm leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>

      <section data-testid="section-services" className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-8">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
              TWO ENGAGEMENTS. ONE OPERATOR.
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
              Two Ways to Engage
            </h2>
            <p className="text-zinc-500 text-sm mt-3 max-w-xl mx-auto">
              No tiers. No packages. Two engagement shapes built around how you actually buy — embed me as your Head of Talent, or scope a specific search. Either way, you get me on every call.
            </p>
          </div>
          </ScrollReveal>

          <div className="flex md:grid md:grid-cols-2 gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-x-visible">
            <GlowCard className="border border-rebel-red/50 bg-rebel-red/5 p-8 group transition-colors hover:border-rebel-red snap-start shrink-0 w-[82vw] md:w-auto" data-testid="card-fractional">
              <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">
                EMBEDDED
              </div>
              <h3 className="font-display text-xl font-bold text-white uppercase mb-2">
                Fractional Head of Talent
              </h3>
              <p className="text-rebel-red font-mono text-sm mb-1">Monthly Retainer · 3-month minimum</p>
              <p className="text-zinc-500 font-mono text-xs mb-4">50%+ less than contingent agency fees</p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                I run your entire recruiting function as an embedded executive. Strategy, execution, systems, and hiring manager coaching — scoped to your stage.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Strategic hiring roadmap & prioritization",
                  "End-to-end recruiting execution",
                  "ATS setup, optimization & migration",
                  "Interview process design & training",
                  "Hiring manager coaching",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                    <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlowCard>

            <GlowCard className="border border-zinc-800 bg-zinc-900/50 p-8 group transition-colors hover:border-rebel-red/30 snap-start shrink-0 w-[82vw] md:w-auto" data-testid="card-critical-hire">
              <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">
                PROJECT
              </div>
              <h3 className="font-display text-xl font-bold text-white uppercase mb-2">
                Critical Hire Execution
              </h3>
              <p className="text-rebel-red font-mono text-sm mb-1">Scoped per search · fixed fee</p>
              <p className="text-zinc-500 font-mono text-xs mb-4">50%+ less than contingent search fees</p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Surgical execution for must-fill roles. Executive, cleared, or specialized technical talent — closed in weeks, with the process documented and left with you.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Executive & leadership searches",
                  "Cleared roles (Secret, TS, TS/SCI)",
                  "Specialized technical talent",
                  "Embedded into your workflows",
                  "Documented repeatable process left with you",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                    <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </div>

          {/* Team capacity band — applies to either engagement */}
          <ScrollReveal variant="fade-up" delay={150}>
          <div className="mt-6 border border-zinc-800/70 bg-zinc-900/30 p-6 sm:p-8" data-testid="band-team-capacity">
            <div className="flex flex-col md:flex-row md:items-start md:gap-8">
              <div className="md:shrink-0 mb-4 md:mb-0 md:w-56">
                <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">
                  + TEAM CAPACITY
                </div>
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight leading-tight">
                  Need more horsepower?
                </h3>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Either engagement can scale with a vetted recruiter team deployed under my direction — same standards, same playbooks, monthly or hourly as the pipeline demands. You still get me on every call. The team extends my reach; it doesn't replace me.
              </p>
            </div>
          </div>
          </ScrollReveal>

          <div className="text-center mt-10">
            <p className="text-zinc-500 text-sm mb-4">You don't get an agency. You get me, every engagement, every call, every hire. Not sure which fits? Most engagements start with a scoping conversation, not a quote.</p>
            <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer" data-testid="button-book-call-2">
              <Button onClick={hapticTap} className="font-display tracking-wider uppercase text-sm">
                Book Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Safe addition, Proof/Case Study moved after pricing */}
      <section data-testid="section-proof" className="py-10 border-b border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-5">
          {/* EARTHDAILY FEDERAL */}
          <ScrollReveal variant="fade-left">
          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/5 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
            <div className="flex-1">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">CASE STUDY 01 · FRACTIONAL</div>
              <h2 className="font-display text-xl font-bold text-white uppercase mb-2">EarthDaily Federal</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                Defense-sector geospatial intelligence firm. 5 FTE + 3 contractors placed over 8 months: VP of Growth, Backend Engineer, AI Engineer, Controller, IT Manager, and 3 contractors. 5 more in active pipeline. 20 hrs/week at $120/hr.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-5">
                {[
                  { value: "$240K+", label: "Agency Fees Avoided" },
                  { value: "470%+", label: "Projected ROI" },
                  { value: "<30 days", label: "Avg. Time to Hire" },
                ].map((s) => (
                  <div key={s.label}>
                    <AnimatedCounter value={s.value} className="font-display text-xl sm:text-2xl font-bold text-rebel-red" />
                    <div className="text-zinc-500 text-xs uppercase tracking-wide leading-tight mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/case-studies" data-testid="link-case-study-edf">
                <Button variant="outline" size="sm" className="font-display tracking-wider uppercase text-xs border-zinc-700 text-zinc-300">
                  See Full Case Study <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
              </Link>
            </div>
            <div className="hidden sm:flex flex-col justify-center items-center border-l border-zinc-800 pl-8 shrink-0">
              <div className="font-mono text-zinc-600 text-xs tracking-widest uppercase mb-1">Sector</div>
              <div className="font-display text-sm font-bold text-zinc-300 uppercase text-center">Defense / Geo-Intel</div>
              <div className="font-mono text-zinc-600 text-xs tracking-widest uppercase mt-4 mb-1">Clearances</div>
              <div className="font-display text-sm font-bold text-zinc-300 uppercase text-center">TS / TS-SCI</div>
            </div>
          </div>
          </ScrollReveal>

          {/* KALIBRI LABS */}
          <ScrollReveal variant="fade-left" delay={100}>
          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/5 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-10 items-start" data-testid="proof-card-kalibri">
            <div className="flex-1">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">CASE STUDY 02 · RETAINED SEARCH</div>
              <h2 className="font-display text-xl font-bold text-white uppercase mb-2">Kalibri Labs</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                ML Engineer search run as an embedded 50/50 retained project — half down, half on placement, operating inside their email, Slack, and ATS. Signed offer in 34 days against a flooded inbound funnel of 360+ AI-polished applications. Saved ~$20K against the agency quote.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-5">
                {[
                  { value: "34 days", label: "To Signed Offer" },
                  { value: "$20K", label: "Saved vs. Agency" },
                  { value: "1 hire", label: "ML Engineer Placed" },
                ].map((s) => (
                  <div key={s.label}>
                    <AnimatedCounter value={s.value} className="font-display text-xl sm:text-2xl font-bold text-rebel-red" />
                    <div className="text-zinc-500 text-xs uppercase tracking-wide leading-tight mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Inline pull quote from the engineering director */}
              <blockquote className="border-l-2 border-rebel-red/60 pl-4 mb-5">
                <p className="text-zinc-200 text-sm leading-relaxed italic mb-2">
                  &ldquo;I just want to thank you for all your assistance moving this pipeline to completion. It means a lot to me, and the tech org.&rdquo;
                </p>
                <footer className="text-zinc-500 text-xs">
                  <span className="text-zinc-300 font-semibold">Michael Tracey</span>, Director of Engineering, Kalibri Labs
                </footer>
              </blockquote>

              <Link href="/case-studies" data-testid="link-case-study-kalibri">
                <Button variant="outline" size="sm" className="font-display tracking-wider uppercase text-xs border-zinc-700 text-zinc-300">
                  See Full Case Study <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
              </Link>
            </div>
            <div className="hidden sm:flex flex-col justify-center items-center border-l border-zinc-800 pl-8 shrink-0">
              <div className="font-mono text-zinc-600 text-xs tracking-widest uppercase mb-1">Sector</div>
              <div className="font-display text-sm font-bold text-zinc-300 uppercase text-center">Hospitality / AI</div>
              <div className="font-mono text-zinc-600 text-xs tracking-widest uppercase mt-4 mb-1">Engagement</div>
              <div className="font-display text-sm font-bold text-zinc-300 uppercase text-center">50 / 50 Retained</div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Safe addition, Client testimonial */}
      <section data-testid="section-testimonial" className="py-12 border-b border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal variant="fade-up">
          <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-6">WHAT CLIENTS SAY</div>
          <blockquote className="relative mb-10">
            <span className="absolute -top-4 -left-2 text-rebel-red/20 text-6xl font-serif leading-none select-none">&ldquo;</span>
            <p className="text-zinc-200 text-lg sm:text-xl leading-relaxed italic mb-6">
              In a review, I was told I had an amazing team, cohesive and indistinguishable from full time employees.
            </p>
            <footer className="text-zinc-500 text-sm">
              <span className="text-zinc-300 font-semibold">Arin, VP of Operations</span>, EarthDaily Federal
            </footer>
          </blockquote>
          {/* Safe addition, replaced with higher-credibility testimonial */}
          <blockquote className="relative">
            <span className="absolute -top-4 -left-2 text-rebel-red/20 text-6xl font-serif leading-none select-none">&ldquo;</span>
            <p className="text-zinc-200 text-base sm:text-lg leading-relaxed italic mb-6">
              My company isn't easy to please and it is exceptionally picky at a maddening level. Richie kept giving us amazing candidates and moving forward, reflecting on our feedback and adjusting on the go. I plan to work with him wherever I go with whatever vacancy I need to fill, he guarantees my success in hiring.
            </p>
            <footer className="text-zinc-500 text-sm">
              <span className="text-zinc-300 font-semibold">Colleen Garrett</span>, Fractional HR Leader, Leadership Coach, MBA
            </footer>
          </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Safe addition – Toolkit section (reframed from Platform) */}
      <section data-testid="section-platform" className="py-12 border-b border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">WHAT YOU GET</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase leading-tight max-w-3xl mx-auto">
              The Toolkit That Comes With Every Engagement
            </h2>
            <p className="text-zinc-500 text-sm mt-3 max-w-2xl mx-auto">Built from scratch by Richie, not licensed from a vendor. A proprietary ATS, CRM, and talent portal that you get access to as part of every engagement.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: <Zap className="w-5 h-5 text-rebel-red" />, title: "Ship in days, not quarters", desc: "Full recruiting infrastructure deployed and running before your next board meeting. No six-month implementation cycles." },
              { icon: <Target className="w-5 h-5 text-rebel-red" />, title: "Proof-first signals", desc: "Every candidate surfaces with portfolio evidence, video intros, and AI-scored match signals, not just a resume and a prayer." },
              { icon: <Shield className="w-5 h-5 text-rebel-red" />, title: "Ownable infrastructure", desc: "Your ATS, your pipeline, your data. Not locked into some vendor's ecosystem that disappears when you cancel." },
              { icon: <TrendingUp className="w-5 h-5 text-rebel-red" />, title: "AI that works for you", desc: "23 specialized agents handle sourcing, briefs, interview prep, and follow-ups, while you focus on closing." },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm p-5 flex gap-4 items-start hover:border-zinc-700 transition-colors"
              >
                <div className="shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <div className="font-display text-sm font-bold text-white uppercase mb-1">{item.title}</div>
                  <div className="text-zinc-400 text-sm leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/jobs">
              <Button variant="outline" size="sm" className="font-display tracking-wider uppercase text-xs border-zinc-700 text-zinc-300">
                Browse Open Roles <ArrowRight className="ml-2 w-3 h-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section data-testid="section-who" className="py-12 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-8">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
              IDEAL CLIENTS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
              Who This Is For
            </h2>
          </div>
          </ScrollReveal>

          <ParallaxSection speed={0.08}>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Series A-C Startups",
                intro: "Every week without the right hire is a week your roadmap slips.",
                items: [
                  "Scaling fast but can't hire fast enough",
                  "No internal recruiting function yet",
                  "Bleeding money on agency fees",
                ],
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: "Defense Contractors",
                intro: "Most recruiters have never seen a DD-254.",
                items: [
                  "Need cleared talent (Secret, TS, TS/SCI)",
                  "CMMC compliance requirements",
                  "Pipeline built on community knowledge, not guesswork",
                ],
              },
              {
                icon: <TrendingUp className="w-5 h-5" />,
                title: "Growth Companies",
                intro: "You don't get an agency. You get me, every engagement, every call, every hire.",
                items: [
                  "Hiring has become a bottleneck",
                  "Tired of agency fees and bad fits",
                  "Need ownership and accountability",
                ],
              },
            ].map((cat, i) => (
              <ScrollReveal key={cat.title} variant="fade-up" delay={i * 150}>
              <div className="border border-zinc-800 bg-zinc-900/30 p-6" data-testid={`card-who-${cat.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="w-10 h-10 border border-rebel-red/30 bg-rebel-red/10 flex items-center justify-center text-rebel-red mb-4">
                  {cat.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white uppercase mb-2">
                  {cat.title}
                </h3>
                <p className="text-zinc-400 text-sm italic mb-4 leading-snug">{cat.intro}</p>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="text-rebel-red font-mono text-xs mt-0.5">&gt;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              </ScrollReveal>
            ))}
          </div>
          </ParallaxSection>

          <div className="text-center mt-10">
            <p className="text-zinc-500 text-sm mb-4">Scale without the bleed. Build the machine agencies can't.</p>
            <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer" data-testid="button-book-call-3">
              <Button onClick={hapticTap} className="font-display tracking-wider uppercase text-sm">
                Start a Confidential Conversation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── AI FOR RECRUITING TEAMS ── */}
      <section data-testid="section-advisory" className="py-0 border-t border-zinc-800/50">
        <div className="bg-[#F5F0E8]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
            <div className="grid md:grid-cols-[1fr_280px] gap-12 md:gap-16 items-start">
              <div>
                <div className="font-mono text-[#C41E3A] text-[11px] tracking-[0.18em] uppercase mb-5 flex items-center gap-2">
                  <span className="block w-5 h-[2px] bg-[#C41E3A] flex-shrink-0" />
                  AI for Recruiting Teams
                </div>
                <h2 className="font-display text-[#1A1A1A] text-2xl sm:text-3xl font-bold tracking-tight leading-snug mb-6">
                  The tools exist.<br />
                  <span className="text-[#C41E3A]">The strategy doesn't.</span>
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-[#3a3a3a] text-[15px] leading-relaxed">
                    The people pitching AI to your team don't run searches. I do. Twenty-seven autonomous agents handling sourcing, screening, communication, and pipeline management — on my own client work, every week, with real candidates and real consequences when something breaks.
                  </p>
                  <p className="text-[#3a3a3a] text-[15px] leading-relaxed">
                    Three ways to put that to work for your team. Pick the one that matches where you are.
                  </p>
                </div>

                {/* Three engagement teasers */}
                <div className="grid sm:grid-cols-3 gap-[1px] bg-[#1A1A1A]/10 mb-8">
                  {[
                    { tag: "Start Here", title: "The Audit", sub: "2–4 wk roadmap" },
                    { tag: "Embedded", title: "The Build", sub: "Monthly retainer" },
                    { tag: "Ride-Along", title: "The Lab", sub: "6–8 wks on live reqs" },
                  ].map((e) => (
                    <div key={e.title} className="bg-[#F5F0E8] px-4 py-4">
                      <div className="font-mono text-[#C41E3A] text-[11px] tracking-[0.15em] uppercase mb-1">{e.tag}</div>
                      <div className="font-display text-[#1A1A1A] text-[15px] font-bold leading-tight">{e.title}</div>
                      <div className="text-[#888] text-[12px] mt-0.5">{e.sub}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 py-4 border-t border-b border-[#1A1A1A]/10 mb-8">
                  <span className="w-2 h-2 rounded-full bg-[#C41E3A] flex-shrink-0" />
                  <span className="text-[#1A1A1A] text-[13px] font-medium">All three are private. One team, one operation, one stack. Cleared / FOCI engagements supported.</span>
                </div>
                <Link href="/advisory" className="no-underline">
                  <button
                    className="inline-flex items-center gap-3 bg-[#C41E3A] text-[#F5F0E8] font-bold text-[16px] tracking-wider uppercase px-10 py-5 transition-colors hover:bg-[#a01830]"
                    onClick={hapticTap}
                  >
                    See the Three Engagements
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
              <div className="hidden md:grid grid-cols-1 gap-[1px] bg-[#1A1A1A]/10">
                {[
                  { value: "27", label: "AI Agents in Production" },
                  { value: "14+", label: "Years Recruiting" },
                  { value: "Live", label: "Real Client Work Daily" },
                ].map((s) => (
                  <div key={s.label} className="bg-[#F5F0E8] px-6 py-5">
                    <div className="font-display text-2xl font-bold text-[#C41E3A] mb-1">{s.value}</div>
                    <div className="text-[#888] text-[11px] font-medium tracking-widest uppercase">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMAND DEMO PREVIEW ── */}
      <section className="py-0 border-t border-zinc-800/50 bg-[#0E0E0E]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <div className="text-center mb-10">
            <div className="font-mono text-[#C41E3A] text-[11px] tracking-[0.18em] uppercase mb-3">The System, Live</div>
            <h2 className="font-display text-white text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              This is what 27 agents look like in production.
            </h2>
            <p className="text-zinc-500 text-sm">Interactive demo. All candidate data is fictional.</p>
          </div>

          {/* Browser chrome mockup */}
          <div className="border border-zinc-700 overflow-hidden rounded-sm">
            {/* Browser bar */}
            <div className="bg-zinc-800 px-4 py-3 flex items-center gap-3 border-b border-zinc-700">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 bg-zinc-700/60 rounded px-3 py-1 text-zinc-400 text-[11px] font-mono">
                rebeltalentsystems.com/command
              </div>
              <div className="text-zinc-600 text-[11px] font-mono">LIVE</div>
            </div>

            {/* Dashboard preview */}
            <div className="bg-[#0a0a0a] p-0">
              {/* Tab bar */}
              <div className="flex gap-0 border-b border-zinc-800 bg-zinc-900/50">
                {["Dashboard", "Pipeline", "Outreach", "Agents"].map((tab, i) => (
                  <div key={tab} className={`px-5 py-3 text-[12px] font-mono tracking-wider ${i === 1 ? "text-[#C41E3A] border-b-2 border-[#C41E3A] bg-zinc-900" : "text-zinc-500 hover:text-zinc-300"}`}>
                    {tab.toUpperCase()}
                  </div>
                ))}
              </div>

              {/* Pipeline board */}
              <div className="p-4 overflow-x-auto">
                <div className="flex gap-3 min-w-[700px]">
                  {[
                    { stage: "Identified", color: "#6b7280", candidates: [
                      { name: "Jordan Rivera", title: "Sr. Platform Engineer", co: "Palantir", score: 87 },
                      { name: "Priya Sharma", title: "ML Infrastructure Lead", co: "Scale AI", score: 92 },
                    ]},
                    { stage: "Screening", color: "#3b82f6", candidates: [
                      { name: "Marcus Chen", title: "Director of Engineering", co: "Anduril", score: 94 },
                      { name: "Elena Vasquez", title: "VP of Product", co: "Figma", score: 88 },
                    ]},
                    { stage: "Submitted", color: "#eab308", candidates: [
                      { name: "Sarah Kim", title: "Staff Backend Engineer", co: "Stripe", score: 91 },
                    ]},
                    { stage: "Interviewing", color: "#8b5cf6", candidates: [
                      { name: "Daria Okonkwo", title: "Head of Growth", co: "Notion", score: 96 },
                      { name: "James Park", title: "Forward Deployed Eng", co: "Palantir", score: 89 },
                    ]},
                    { stage: "Placed", color: "#22c55e", candidates: [
                      { name: "Nina Patel", title: "Staff Engineer", co: "Cloudflare", score: 97 },
                    ]},
                  ].map(({ stage, color, candidates }) => (
                    <div key={stage} className="flex-1 min-w-[130px]">
                      <div className="flex items-center gap-2 mb-2 px-1">
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
                        <span className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase">{stage}</span>
                        <span className="ml-auto text-[11px] text-zinc-600">{candidates.length}</span>
                      </div>
                      <div className="space-y-2">
                        {candidates.map((c) => (
                          <div key={c.name} className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-sm">
                            <div className="flex items-center justify-between mb-1">
                              <div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-[9px] font-bold text-zinc-300">
                                {c.name.split(" ").map((n: string) => n[0]).join("")}
                              </div>
                              <div className="text-[11px] font-mono font-bold" style={{ color }}>{c.score}</div>
                            </div>
                            <div className="text-[11px] font-semibold text-white leading-tight">{c.name}</div>
                            <div className="text-[11px] text-zinc-500 leading-tight">{c.title}</div>
                            <div className="text-[11px] text-zinc-600 mt-1">{c.co}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Agent activity bar */}
              <div className="border-t border-zinc-800 px-4 py-3 flex items-center gap-4 bg-zinc-900/30">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-green-400">27 AGENTS ACTIVE</span>
                </div>
                <div className="text-zinc-700 text-[11px] font-mono">|</div>
                <span className="text-[11px] font-mono text-zinc-500">Sourcing agent ran 14 min ago</span>
                <div className="text-zinc-700 text-[11px] font-mono">|</div>
                <span className="text-[11px] font-mono text-zinc-500">3 outreach sequences active</span>
                <div className="ml-auto text-[11px] font-mono text-zinc-600">AI Daily Brief: ready</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/command" className="no-underline">
              <button
                className="inline-flex items-center gap-2 border border-zinc-600 text-zinc-300 font-semibold text-[13px] tracking-wider uppercase px-7 py-3 hover:border-zinc-400 hover:text-white transition-colors"
                onClick={hapticTap}
              >
                Launch Interactive Demo
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section data-testid="section-newsletter-shop" className="py-10 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
          <div className="border border-zinc-800 bg-zinc-900/30 p-8 text-center max-w-2xl mx-auto" data-testid="newsletter-capture">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">NEWSLETTER</div>
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-3">
              Rebel Built
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5">
              Recruiting strategies, hiring frameworks, and unfiltered takes on talent. Delivered to your inbox.
            </p>
            {/* Safe addition, owned email capture */}
            <EmailCapture source="homepage_newsletter" placeholder="your@email.com" buttonText="Get It" />
            <p className="text-zinc-600 text-xs mt-4">
              Or subscribe on{" "}
              <a
                href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7412825035092045824"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white underline transition-colors"
              >
                LinkedIn
              </a>
            </p>
          </div>
          </ScrollReveal>
        </div>
      </section>

      <section data-testid="section-cta" className="py-12 border-t border-zinc-800/50 bg-gradient-to-b from-rebel-red/5 to-transparent">
        <ScrollReveal variant="scale">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <img src="/logo.png" alt="Rebel Talent" className="w-16 h-16 mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight mb-4">
            Start a Confidential Conversation.
          </h2>
          <p className="text-zinc-400 text-base mb-8 max-w-xl mx-auto">
            30 minutes. Walk me through one of your hardest open reqs and I'll tell you straight whether I can help — and if not, I'll point you somewhere better.
          </p>
          <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer" data-testid="button-book-call-4">
            <Button onClick={hapticTap} size="lg" className="font-display tracking-wider uppercase text-sm px-10">
              Book Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
          <p className="text-zinc-600 text-xs mt-5 tracking-wide">
            All inquiries handled with discretion. FOCI-sensitive engagements supported.
          </p>
        </div>
        </ScrollReveal>
      </section>
    </PageLayout>
  );
}
