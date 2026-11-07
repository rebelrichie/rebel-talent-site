import { useEffect, useRef } from "react";

type Light = {
  x: number;
  y: number;
  r: number;
  base: number;
  phase: number;
  speed: number;
  color: string;
};

/**
 * City-light twinkle over the hero photograph.
 * Lights are sampled from warm, bright pixels in the displayed photo so they
 * sit on illuminated cities, not oceans or open space. The canvas is paused
 * offscreen and when the tab is hidden. Reduced motion draws one static frame.
 */
export default function GlobeTwinkle() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const hero = canvas?.parentElement;
    if (!canvas || !hero) return;
    const img = hero.querySelector(".hero-photo") as HTMLImageElement | null;
    if (!img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    canvas.dataset.motion = reduced ? "static" : "live";

    let lights: Light[] = [];
    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let visible = true;
    let running = false;
    let resizeTimer = 0;

    const sample = () => {
      const rect = hero.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      lights = [];
      canvas.dataset.lights = "0";
      if (!img.complete || !img.naturalWidth) return;

      const sw = Math.max(1, Math.floor(w / 4));
      const sh = Math.max(1, Math.floor(h / 4));
      const off = document.createElement("canvas");
      off.width = sw;
      off.height = sh;
      const octx = off.getContext("2d", { willReadFrequently: true });
      if (!octx) return;

      const nw = img.naturalWidth;
      const nh = img.naturalHeight;
      const heroRect = hero.getBoundingClientRect();
      const imgRect = img.getBoundingClientRect();
      const ix = ((imgRect.left - heroRect.left) / Math.max(heroRect.width, 1)) * sw;
      const iy = ((imgRect.top - heroRect.top) / Math.max(heroRect.height, 1)) * sh;
      const iw = (imgRect.width / Math.max(heroRect.width, 1)) * sw;
      const ih = (imgRect.height / Math.max(heroRect.height, 1)) * sh;
      const cover = Math.max(iw / nw, ih / nh);
      const dw = nw * cover;
      const dh = nh * cover;
      const extraX = iw - dw;
      const extraY = ih - dh;
      const [rawX, rawY] = (getComputedStyle(img).objectPosition || "50% 50%").trim().split(/\s+/);
      const axis = (token: string | undefined, extra: number) => {
        const value = token || "50%";
        if (value.endsWith("%")) return (parseFloat(value) / 100) * extra;
        if (value === "left" || value === "top") return 0;
        if (value === "right" || value === "bottom") return extra;
        return extra / 2;
      };
      const dx = ix + axis(rawX, extraX);
      const dy = iy + axis(rawY, extraY);
      octx.save();
      octx.translate(ix + iw / 2, iy + ih / 2);
      octx.rotate(Math.PI);
      octx.translate(-(ix + iw / 2), -(iy + ih / 2));
      octx.drawImage(img, dx, dy, dw, dh);
      octx.restore();

      let data: Uint8ClampedArray;
      try {
        data = octx.getImageData(0, 0, sw, sh).data;
      } catch {
        return;
      }

      const candidates: { x: number; y: number; lum: number }[] = [];
      const sx = w / sw;
      const sy = h / sh;
      for (let y = 0; y < sh; y += 1) {
        for (let x = 0; x < sw; x += 1) {
          const i = (y * sw + x) * 4;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];
          if (a < 220) continue;
          const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          // City lights are warm. Oceans, space, and the blue limb are not.
          if (lum < 72 || r < 96 || r < b + 18) continue;
          candidates.push({ x: (x + 0.5) * sx, y: (y + 0.5) * sy, lum });
        }
      }
      candidates.sort((a, b) => b.lum - a.lum);
      const minDist = 12;
      const minDist2 = minDist * minDist;
      const picked: { x: number; y: number; lum: number }[] = [];
      for (const c of candidates) {
        if (picked.length >= 90) break;
        let near = false;
        for (const p of picked) {
          const dxp = p.x - c.x;
          const dyp = p.y - c.y;
          if (dxp * dxp + dyp * dyp < minDist2) {
            near = true;
            break;
          }
        }
        if (!near) picked.push(c);
      }

      lights = picked.map((p) => ({
        x: p.x,
        y: p.y,
        r: 0.9 + Math.random() * 1.5,
        base: 0.55 + Math.min(0.4, (p.lum - 72) / 280),
        phase: Math.random() * Math.PI * 2,
        speed: 0.6 + Math.random() * 1.5,
        color: Math.random() > 0.72 ? "226,197,122" : "255,244,214",
      }));
      canvas.dataset.lights = String(lights.length);
    };

    const paint = (time: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const t = reduced ? 0 : time * 0.001;
      for (const light of lights) {
        const flicker = reduced ? 0.9 : 0.38 + 0.62 * (0.5 + 0.5 * Math.sin(t * light.speed + light.phase));
        const alpha = light.base * flicker;
        ctx.fillStyle = `rgba(${light.color},${alpha})`;
        ctx.beginPath();
        ctx.arc(light.x, light.y, light.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(${light.color},${alpha * 0.28})`;
        ctx.beginPath();
        ctx.arc(light.x, light.y, light.r * 3.4, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const frame = (time: number) => {
      paint(time);
      if (running) raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (reduced) {
        paint(0);
        return;
      }
      if (!visible || document.hidden) return;
      if (running) return;
      running = true;
      raf = requestAnimationFrame(frame);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const boot = () => {
      sample();
      if (reduced || !visible) paint(0);
      else start();
    };

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(boot, 120);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { threshold: 0.02 },
    );
    io.observe(hero);

    const onVis = () => {
      if (document.hidden) stop();
      else if (visible) start();
    };

    if (img.complete && img.naturalWidth) boot();
    else img.addEventListener("load", boot, { once: true });
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      stop();
      io.disconnect();
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
      img.removeEventListener("load", boot);
    };
  }, []);

  return <canvas ref={ref} className="twinkle" aria-hidden="true" data-lights="0" />;
}
