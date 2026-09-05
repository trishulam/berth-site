"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import lanes from "./lanes.json";

/** [weight, xs[], ys[], widths[]] per lane, normalised to the 6000 x 2160 hero frame. */
type Lane = [number, number[], number[], number[]];
const LANES = lanes as Lane[];

const IMG_A = 6000 / 2160; // hero render aspect
const ZOOM = 1.3;          // zoomed on the Indian Ocean basin
const U0 = 0.21;           // window starts 21% into the map: Cape ~38% of the viewport, Malacca ~82%

type Particle = {
  px: number[]; py: number[]; n: number; dir: number; t: number; v: number;
  col: string; a: number; x: number; y: number; fresh: boolean;
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const stillRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const hero = heroRef.current, v = videoRef.current, still = stillRef.current, cv = canvasRef.current;
    if (!hero || !still || !cv) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ---- media placement: the same cover-crop for video, still and canvas ----
    let W = 0, H = 0, dw = 0, dh = 0, ox = 0, oy = 0;
    const layout = () => {
      W = hero.clientWidth; H = hero.clientHeight;
      const s = Math.max(W / IMG_A, H) * ZOOM;
      dw = s * IMG_A; dh = s; ox = -U0 * dw; oy = (H - dh) * 0.5;
      if (ox + dw < W) ox = W - dw;
      if (ox > 0) ox = 0;
      [v, still].forEach((m) => {
        if (!m) return;
        m.style.width = dw + "px"; m.style.height = dh + "px";
        m.style.left = ox + "px"; m.style.top = oy + "px";
        m.style.objectFit = "fill";
      });
    };
    layout();

    if (reduce) {
      v?.remove();
      still.style.display = "block";
    } else if (v) {
      v.addEventListener("error", () => { v.remove(); still.style.display = "block"; });
      v.play().catch(() => {});
    }

    // ---- live layer: ships moving along the lanes the render was built from ----
    const ctx = cv.getContext("2d");
    if (reduce || !ctx) {
      window.addEventListener("resize", layout);
      return () => window.removeEventListener("resize", layout);
    }
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let maxW = 0, acc = 0;
    const cum: number[] = [];
    LANES.forEach((l) => { if (l[0] > maxW) maxW = l[0]; acc += l[0]; cum.push(acc); });

    const size = () => {
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
    };
    const gauss = () => { const u = 1 - Math.random(), w = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * w); };
    const pickLane = () => { const r = Math.random() * acc; let lo = 0, hi = cum.length - 1; while (lo < hi) { const m = (lo + hi) >> 1; if (cum[m] < r) lo = m + 1; else hi = m; } return lo; };
    const at = (p: Particle, t: number): [number, number] => {
      const n = p.n, s = Math.min(n - 2, Math.max(0, Math.floor(t * (n - 1)))), u = t * (n - 1) - s;
      const i0 = Math.max(s - 1, 0), i1 = s, i2 = s + 1, i3 = Math.min(s + 2, n - 1), u2 = u * u, u3 = u2 * u;
      const cr = (a: number, b: number, c: number, d: number) => 0.5 * ((2 * b) + (-a + c) * u + (2 * a - 5 * b + 4 * c - d) * u2 + (-a + 3 * b - 3 * c + d) * u3);
      return [cr(p.px[i0], p.px[i1], p.px[i2], p.px[i3]), cr(p.py[i0], p.py[i1], p.py[i2], p.py[i3])];
    };
    const spawn = (p: Particle) => {
      const l = LANES[pickLane()], xs = l[1], ys = l[2], ws = l[3], n = xs.length;
      const px: number[] = [], py: number[] = [];
      let off = gauss() * 0.6;
      const bias = gauss() * 0.35, sc = 0.7 + Math.random() * 0.6;
      for (let i = 0; i < n; i++) {
        if (i) off = 0.45 * off + gauss() * 0.55;
        const ax = xs[Math.max(i - 1, 0)], ay = ys[Math.max(i - 1, 0)], bx = xs[Math.min(i + 1, n - 1)], by = ys[Math.min(i + 1, n - 1)];
        const tx = bx - ax, ty = (by - ay) / IMG_A, len = Math.hypot(tx, ty) || 1;
        const nx = -ty / len, ny = (tx / len) * IMG_A;
        const o = (off + bias) * ws[i] * sc;
        px.push(xs[i] + nx * o); py.push(ys[i] + ny * o);
      }
      p.px = px; p.py = py; p.n = n; p.dir = Math.random() < 0.5 ? 1 : -1;
      p.t = p.dir > 0 ? Math.random() * 0.05 : 1 - Math.random() * 0.05;
      if (!p.fresh) p.t = Math.random(); // first fill: scatter along the route
      p.v = (0.0016 + Math.random() * 0.0018) * p.dir;
      const wt = l[0] / maxW;
      p.col = wt > 0.45 ? "rgba(255,244,220," : wt > 0.15 ? "rgba(217,164,91," : "rgba(120,160,190,";
      p.a = 0.25 + 0.45 * Math.min(1, wt * 1.6);
      p.fresh = true;
      const q = at(p, p.t); p.x = q[0]; p.y = q[1];
    };
    const N = Math.round(Math.min(400, Math.max(160, window.innerWidth * 0.28)));
    const P: Particle[] = [];
    for (let i = 0; i < N; i++) {
      const p = { px: [], py: [], n: 0, dir: 1, t: 0, v: 0, col: "", a: 0, x: 0, y: 0, fresh: false } as Particle;
      spawn(p); P.push(p);
    }
    size();

    let running = false, last = 0, raf = 0;
    const frame = (ts: number) => {
      if (!running) return;
      const dt = Math.min(0.05, (ts - last) / 1000 || 0.016); last = ts;
      ctx.globalCompositeOperation = "destination-out"; ctx.fillStyle = "rgba(0,0,0,0.035)"; ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter"; ctx.lineWidth = 1; ctx.lineCap = "round";
      for (const p of P) {
        p.t += p.v * dt * (1.6 / Math.max(1, p.n / 12));
        if (p.t >= 1 || p.t <= 0) { spawn(p); continue; }
        const q = at(p, p.t), x0 = ox + p.x * dw, y0 = oy + p.y * dh, x1 = ox + q[0] * dw, y1 = oy + q[1] * dh;
        p.x = q[0]; p.y = q[1];
        if (Math.abs(x1 - x0) > W * 0.5) continue; // seam crossing
        if ((x1 < -2 && x0 < -2) || (x1 > W + 2 && x0 > W + 2)) continue;
        ctx.strokeStyle = p.col + p.a + ")"; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
      }
      raf = requestAnimationFrame(frame);
    };
    const start = () => { if (!running) { running = true; last = 0; raf = requestAnimationFrame(frame); } };
    const stop = () => { running = false; cancelAnimationFrame(raf); };
    const onResize = () => { layout(); size(); };
    window.addEventListener("resize", onResize);
    const io = new IntersectionObserver((es) => { if (es[0].isIntersecting && !document.hidden) start(); else stop(); });
    io.observe(cv);
    const onVis = () => { if (document.hidden) stop(); else start(); };
    document.addEventListener("visibilitychange", onVis);
    start();

    return () => {
      stop(); io.disconnect();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <header className="hero" id="top" ref={heroRef}>
      <div className="hero-media" aria-hidden="true">
        <video ref={videoRef} autoPlay muted loop playsInline poster="/assets/hero.webp" id="heroVideo">
          <source src="/assets/hero-loop.mp4" type="video/mp4" />
        </video>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={stillRef} src="/assets/hero.webp" alt="" id="heroStill" />
        <canvas ref={canvasRef} id="heroLive" />
      </div>
      <div className="hero-copy">
        <span className="label">Agents for every desk in maritime trade</span>
        <h1>Your desk<br />fixes more<br />when it<br />knows more.</h1>
        <div className="cta-row">
          <Link className="btn" href="/fix">See Fix at work <span aria-hidden="true">↗</span></Link>
          <a className="textlink" href="#thesis">Read the thesis</a>
        </div>
      </div>
    </header>
  );
}
