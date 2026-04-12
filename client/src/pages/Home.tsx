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

// Safe addition — haptic feedback for PWA CTA taps
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
          "name": "Rebel Contract Recruiters",
          "description": "Vetted contract recruiters deployed under Rebel Talent standards on an hourly basis. Scale up or down as hiring demands shift.",
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

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const y = window.scrollY;
      heroRef.current.style.backgroundPositionY = `calc(top + ${y * 0.38}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PageLayout>
      <PageSEO
        title="Fractional Recruiting for Startups & Defense | Rebel Talent"
        description="Rebel Talent provides fractional recruiting and embedded talent leadership for Series A-C startups and defense contractors. 350%+ ROI proven. 14+ years experience."
        path="/"
        ogTitle="Fractional Recruiting for Startups & Defense | Rebel Talent"
        ogDescription="Agencies profit from your chaos. Rebel Talent embeds fractional recruiting leadership to build the hiring infrastructure startups and defense firms need — without the agency fees, bad fits, or delays."
        ogImage="og-home.png"
        schemas={[homepageSchema]}
      />
      <section
        ref={heroRef}
        data-testid="section-hero"
        className="relative py-10 sm:py-14 overflow-hidden"
        style={{
          backgroundImage: "url('/hero-banner.png')",
          backgroundSize: "cover",
          backgroundPositionX: "center",
          backgroundPositionY: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/50 to-rebel-space pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />
        <ShootingStars />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="mb-5">
            <img
              src="/logo.png"
              alt="Rebel Talent"
              data-testid="img-hero-logo"
              className="w-20 h-20 mx-auto"
              style={{
                filter: "drop-shadow(0 0 16px rgba(220,38,38,0.55)) drop-shadow(0 0 36px rgba(234,88,12,0.30)) brightness(1.25) contrast(1.05)",
                animation: "logoFloat 3.5s ease-in-out infinite alternate",
              }}
            />
          </div>

          <h1 className="sr-only">Fractional Head of Talent for Startups &amp; Defense Contractors — Richie Lampani</h1>

          {/* Safe addition — Lead with the service, not the brand */}
          <div className="font-mono text-rebel-red text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">
            FRACTIONAL HEAD OF TALENT
          </div>

          <div className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-tight mb-5">
            <span className="block">YOUR HIRING IS BROKEN.</span>
            <span className="block text-rebel-red">I FIX IT.</span>
          </div>

          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
            Fractional Head of Talent for startups and defense contractors. I embed into your company, own the recruiting function, and build infrastructure that survives after I leave.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
            {["Embedded Leadership", "Not an Agency", "You Own Everything"].map((tag) => (
              <span key={tag} className="text-zinc-500 text-xs sm:text-sm font-mono tracking-wider uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-rebel-red rounded-full inline-block" />
                {tag}
              </span>
            ))}
          </div>

          {/* Safe addition — Richie headshot above the fold */}
          <div className="mb-6">
            <a href="https://linkedin.com/in/richielampani" target="_blank" rel="noopener noreferrer" className="inline-block group">
              <img
                src="/richie-headshot.png"
                alt="Richie Lampani — Fractional Head of Talent"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-rebel-red/30 mx-auto group-hover:border-rebel-red/60 transition-colors"
                style={{ filter: "drop-shadow(0 0 24px rgba(220,38,38,0.3))" }}
              />
            </a>
            <a href="https://linkedin.com/in/richielampani" target="_blank" rel="noopener noreferrer" className="block mt-2 text-zinc-500 text-xs font-mono tracking-wider hover:text-white transition-colors no-underline">
              linkedin.com/in/richielampani
            </a>
          </div>

          {/* Safe addition — Availability signal */}
          <div className="mb-6">
            <CapacityBadge />
          </div>

          {/* Safe addition — Current engagements */}
          <div className="mb-8 flex justify-center">
            <CurrentEngagements />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/richielam"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-book-call"
            >
              <Button onClick={hapticTap} size="lg" className="w-full sm:w-auto font-display tracking-wider uppercase text-sm px-8">
                Book Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Link href="/services" data-testid="link-view-services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto font-display tracking-wider uppercase text-sm px-8 border-zinc-700 text-zinc-300">
                View Services
              </Button>
            </Link>
          </div>

          {/* Safe addition — Social proof strip */}
          <div className="mt-10 pt-8 border-t border-zinc-800/30">
            <p className="text-zinc-600 text-xs font-mono tracking-[0.2em] uppercase mb-4">Trusted by teams at</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {["EarthDaily Federal", "Wells Fargo", "Tiffany & Co", "Travelers", "WK Kellogg Foundation", "Roadrunner", "Enveil"].map((name) => (
                <span key={name} className="text-zinc-500 text-sm font-display tracking-wide">{name}</span>
              ))}
            </div>
          </div>
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

      {/* Safe addition — Testimonials above the fold */}
      <section className="py-8 border-b border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <blockquote className="relative mb-6">
            <span className="absolute -top-4 -left-2 text-rebel-red/20 text-6xl font-serif leading-none select-none">&ldquo;</span>
            <p className="text-zinc-200 text-lg sm:text-xl leading-relaxed italic mb-4">
              In a review, I was told I had an amazing team, cohesive and indistinguishable from full time employees.
            </p>
            <footer className="text-zinc-500 text-sm">
              <span className="text-zinc-300 font-semibold">Arin, VP of Operations</span> — EarthDaily Federal
            </footer>
          </blockquote>
          {/* Safe addition — Colleen Garrett short testimonial */}
          <blockquote className="relative">
            <span className="absolute -top-4 -left-2 text-rebel-red/20 text-6xl font-serif leading-none select-none">&ldquo;</span>
            <p className="text-zinc-300 text-base leading-relaxed italic mb-4">
              My company is exceptionally picky at a maddening level. Richie kept giving us amazing candidates, reflecting on our feedback and adjusting on the go. I plan to work with him wherever I go.
            </p>
            <footer className="text-zinc-500 text-sm">
              <span className="text-zinc-300 font-semibold">Colleen Garrett</span> — Fractional HR Leader
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Safe addition — Pain points moved up to hook visitors */}
      <section data-testid="section-pain" className="py-10 border-b border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-6">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">SOUND FAMILIAR?</div>
            <h2 className="font-display text-2xl font-bold text-white uppercase">If Any of These Hit, We Need to Talk</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {[
              "Paying agencies $30K+ per hire and still getting bad fits",
              "Your ATS is a graveyard of unreviewed resumes",
              "Hiring managers winging interviews with zero structure",
              "You've been 'about to hire a recruiter' for six months",
              "Your 'recruiting process' is LinkedIn InMails and prayers",
              "Open roles costing more every day than filling them would",
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

      {/* Safe addition — Agency vs Fractional comparison table */}
      <section data-testid="section-compare" className="py-12 border-b border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-8">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">THE MATH</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
              Agency vs. Fractional
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 text-zinc-500 font-mono text-xs tracking-wider uppercase border-b border-zinc-800" />
                  <th className="text-center py-3 px-4 text-zinc-500 font-mono text-xs tracking-wider uppercase border-b border-zinc-800">Contingent Agency</th>
                  <th className="text-center py-3 px-4 text-rebel-red font-mono text-xs tracking-wider uppercase border-b border-rebel-red/30 bg-rebel-red/5">Fractional (Rebel)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: "Cost per Hire", agency: "$25K–$40K", fractional: "~$5K–$8K" },
                  { metric: "You Own the Process", agency: "No", fractional: "Yes — everything" },
                  { metric: "Alignment", agency: "Fee-motivated", fractional: "Embedded in your team" },
                  { metric: "Time to Fill", agency: "60–90 days", fractional: "<30 days" },
                  { metric: "Infrastructure Left Behind", agency: "Nothing", fractional: "ATS, playbooks, systems" },
                  { metric: "Candidate Quality", agency: "Resume spray", fractional: "Proof-first vetting" },
                ].map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? "bg-zinc-900/20" : ""}>
                    <td className="py-3 px-4 text-zinc-300 font-semibold border-b border-zinc-800/50">{row.metric}</td>
                    <td className="py-3 px-4 text-center text-zinc-500 border-b border-zinc-800/50">{row.agency}</td>
                    <td className="py-3 px-4 text-center text-white font-semibold border-b border-zinc-800/50 bg-rebel-red/5">{row.fractional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </ScrollReveal>
        </div>
      </section>

      <section data-testid="section-services" className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-8">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
              CHOOSE YOUR PATH
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
              How We Work Together
            </h2>
          </div>
          </ScrollReveal>

          <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-x-visible">
            <GlowCard className="border border-rebel-red/50 bg-rebel-red/5 p-8 group transition-colors hover:border-rebel-red snap-start shrink-0 w-[82vw] md:w-auto relative overflow-hidden" data-testid="card-fractional">
              <div className="absolute top-0 right-0 bg-rebel-red px-3 py-1 font-mono text-white text-[10px] tracking-widest uppercase">
                MOST POPULAR
              </div>
              <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">
                OPTION 01
              </div>
              <h3 className="font-display text-xl font-bold text-white uppercase mb-2">
                Fractional Head of Talent
              </h3>
              <p className="text-rebel-red font-mono text-sm mb-1">Monthly Retainer</p>
              <p className="text-zinc-500 font-mono text-xs mb-4">50%+ less than contingent agency fees</p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Embedded leadership that owns your entire recruiting function. Strategy, execution, and systems -- all in one.
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
                OPTION 02
              </div>
              <h3 className="font-display text-xl font-bold text-white uppercase mb-2">
                Critical Hire Execution
              </h3>
              <p className="text-rebel-red font-mono text-sm mb-1">Project-Based Retainer</p>
              <p className="text-zinc-500 font-mono text-xs mb-4">50%+ less than contingent search fees</p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Surgical execution for must-fill roles. I close hard-to-find talent in weeks, not months.
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

            <GlowCard className="border border-zinc-800 bg-zinc-900/50 p-8 group transition-colors hover:border-rebel-red/30 snap-start shrink-0 w-[82vw] md:w-auto" data-testid="card-contract-recruiters">
              <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">
                OPTION 03
              </div>
              <h3 className="font-display text-xl font-bold text-white uppercase mb-2">
                Rebel Contract Recruiters
              </h3>
              <p className="text-rebel-red font-mono text-sm mb-1">Hourly Engagement</p>
              <p className="text-zinc-500 font-mono text-xs mb-4">Scale up or down — no long-term lock-in</p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Vetted recruiters who execute under the Rebel Talent flag. Same standards, same playbooks -- deployed into your workflow on demand.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Sourced and vetted by Rebel Talent",
                  "Execute to our documented standards",
                  "Scale up or down as hiring demands shift",
                  "Fully briefed on your roles and culture",
                  "No long-term commitment required",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                    <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </div>

          <div className="text-center mt-10">
            <p className="text-zinc-500 text-sm mb-4">Agencies invoice excuses. We deliver fractional recruiting systems built for startup scale and defense complexity. Not sure which fits? Let's talk.</p>
            <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer" data-testid="button-book-call-2">
              <Button onClick={hapticTap} className="font-display tracking-wider uppercase text-sm">
                Book Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Safe addition — Proof/Case Study moved after pricing */}
      <section data-testid="section-proof" className="py-10 border-b border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-left">
          <ParallaxSection speed={0.1}>
          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/5 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
            <div className="flex-1">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">PROOF OF CONCEPT</div>
              <h2 className="font-display text-xl font-bold text-white uppercase mb-2">EarthDaily Federal</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                Defense-sector geospatial intelligence firm. 5 full-time hires + 2 contractors placed in 5 months — Controller ($140K), Backend Engineer ($180K), AI Engineer ($195K), Part-time IT Manager, and 2 contractors. At 20-25 hrs/week, $120/hr.
              </p>
              <p className="text-zinc-500 text-xs leading-relaxed mb-5">
                VP of Growth ($220K) and PM ($200K) currently in finals.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-5">
                {[
                  { value: "$229K", label: "Agency Fees Avoided" },
                  { value: "285%", label: "ROI Delivered" },
                  { value: "<21 days", label: "Avg. Time to Hire" },
                ].map((s) => (
                  <div key={s.label}>
                    <AnimatedCounter value={s.value} className="font-display text-xl sm:text-2xl font-bold text-rebel-red" />
                    <div className="text-zinc-500 text-xs uppercase tracking-wide leading-tight mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/case-studies" data-testid="link-case-study-proof">
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
          </ParallaxSection>
          </ScrollReveal>
        </div>
      </section>

      {/* Safe addition — Client testimonial */}
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
              <span className="text-zinc-300 font-semibold">Arin, VP of Operations</span> — EarthDaily Federal
            </footer>
          </blockquote>
          {/* Safe addition — replaced with higher-credibility testimonial */}
          <blockquote className="relative">
            <span className="absolute -top-4 -left-2 text-rebel-red/20 text-6xl font-serif leading-none select-none">&ldquo;</span>
            <p className="text-zinc-200 text-base sm:text-lg leading-relaxed italic mb-6">
              My company isn't easy to please and it is exceptionally picky at a maddening level. Richie kept giving us amazing candidates and moving forward, reflecting on our feedback and adjusting on the go. I plan to work with him wherever I go with whatever vacancy I need to fill — he guarantees my success in hiring.
            </p>
            <footer className="text-zinc-500 text-sm">
              <span className="text-zinc-300 font-semibold">Colleen Garrett</span> — Fractional HR Leader, Leadership Coach, MBA
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
            <p className="text-zinc-500 text-sm mt-3 max-w-2xl mx-auto">Built from scratch by Richie — not licensed from a vendor. A proprietary ATS, CRM, and talent portal that you get access to as part of every engagement.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: <Zap className="w-5 h-5 text-rebel-red" />, title: "Ship in days, not quarters", desc: "Full recruiting infrastructure deployed and running before your next board meeting. No six-month implementation cycles." },
              { icon: <Target className="w-5 h-5 text-rebel-red" />, title: "Proof-first signals", desc: "Every candidate surfaces with portfolio evidence, video intros, and AI-scored match signals — not just a resume and a prayer." },
              { icon: <Shield className="w-5 h-5 text-rebel-red" />, title: "Ownable infrastructure", desc: "Your ATS, your pipeline, your data. Not locked into some vendor's ecosystem that disappears when you cancel." },
              { icon: <TrendingUp className="w-5 h-5 text-rebel-red" />, title: "AI that works for you", desc: "23 specialized agents handle sourcing, briefs, interview prep, and follow-ups — while you focus on closing." },
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
            <a href="https://rebelapply.com/spotlight" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="font-display tracking-wider uppercase text-xs border-zinc-700 text-zinc-300">
                Browse Spotlight Talent <ArrowRight className="ml-2 w-3 h-3" />
              </Button>
            </a>
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
                items: [
                  "Scaling fast but can't hire fast enough",
                  "No internal recruiting function yet",
                  "Bleeding money on agency fees",
                ],
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: "Defense Contractors",
                items: [
                  "Need cleared talent (Secret, TS, TS/SCI)",
                  "CMMC compliance requirements",
                  "Federal contract deadlines looming",
                ],
              },
              {
                icon: <TrendingUp className="w-5 h-5" />,
                title: "Growth Companies",
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
                <h3 className="font-display text-lg font-bold text-white uppercase mb-4">
                  {cat.title}
                </h3>
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
                Book Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section data-testid="section-newsletter-shop" className="py-10 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
          <a
            href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7412825035092045824"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-newsletter-cta"
            className="group block border border-zinc-800 bg-zinc-900/30 p-8 text-center no-underline hover:border-rebel-red/50 transition-colors max-w-2xl mx-auto"
          >
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">NEWSLETTER</div>
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-3">
              Rebel Built
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Recruiting strategies, hiring frameworks, and unfiltered takes on talent. Subscribe on LinkedIn.
            </p>
            <span className="inline-flex items-center font-display text-sm tracking-wider uppercase text-rebel-red group-hover:text-white transition-colors">
              Subscribe Now <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </a>
          </ScrollReveal>
        </div>
      </section>

      <section data-testid="section-cta" className="py-12 border-t border-zinc-800/50 bg-gradient-to-b from-rebel-red/5 to-transparent">
        <ScrollReveal variant="scale">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <img src="/logo.png" alt="Rebel Talent" className="w-16 h-16 mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight mb-4">
            Stop the Bleed
          </h2>
          <p className="text-zinc-400 text-base mb-8 max-w-xl mx-auto">
            Book now. Fix tomorrow. 30 minutes to diagnose your systems: no sales pitch, just real answers for operators ready to build.
          </p>
          <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer" data-testid="button-book-call-4">
            <Button onClick={hapticTap} size="lg" className="font-display tracking-wider uppercase text-sm px-10">
              Book Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
        </ScrollReveal>
      </section>
    </PageLayout>
  );
}
