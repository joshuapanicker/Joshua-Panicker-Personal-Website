import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/* ── Wave constants ───────────────────────────────────────────────── */
const WAVE_COUNT = 28;

/* ── Intermittent strand definitions ─────────────────────────────── */
const STRAND_DEFS = [
  { xFrac: 0.10, yFrac: 0.26, length: 270, phase: 0.0 },
  { xFrac: 0.40, yFrac: 0.50, length: 210, phase: 2.5 },
  { xFrac: 0.63, yFrac: 0.36, length: 250, phase: 4.9 },
];

/* ── Animated Wireframe Waves ─────────────────────────────────────── */
function WireframeWaves() {
  const svgRef = useRef<SVGSVGElement>(null);
  const rafRef = useRef<number>(0);
  const [activeStrands, setActiveStrands] = useState<Set<number>>(new Set([0]));

  const initialPaths = useMemo(() => {
    const result: { d: string; opacity: number }[] = [];
    const W = 1440;
    const H = 270;

    for (let i = 0; i < WAVE_COUNT; i++) {
      const t = Math.pow(i / (WAVE_COUNT - 1), 0.62);
      const baseY = t * H;
      const amp = 3 + t * 28;
      const phase = i * 0.58;
      const f1 = 2.4 + t * 2.8;
      const f2 = 5.8 + t * 4.2;

      const pts: string[] = [];
      for (let x = 0; x <= W; x += 12) {
        const nx = x / W;
        const y =
          baseY +
          Math.sin(nx * Math.PI * f1 + phase) * amp +
          Math.sin(nx * Math.PI * f2 + phase * 1.6) * amp * 0.24;
        pts.push(`${x},${y.toFixed(1)}`);
      }

      result.push({
        d: `M ${pts.join(' L ')}`,
        opacity: 0.018 + t * 0.1,
      });
    }
    return result;
  }, []);

  /* Cycle which strands are visible — 1 or 2 at a time */
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const cycle = () => {
      const showTwo = Math.random() < 0.32;
      const indices = [0, 1, 2].sort(() => Math.random() - 0.5);
      setActiveStrands(new Set(indices.slice(0, showTwo ? 2 : 1)));
      timeoutId = setTimeout(cycle, 2600 + Math.random() * 2000);
    };

    timeoutId = setTimeout(cycle, 900);
    return () => clearTimeout(timeoutId);
  }, []);

  /* rAF animation loop */
  useEffect(() => {
    const W = 1440;
    const H = 270;

    const animate = (timestamp: number) => {
      const tAnim = timestamp * 0.00035;

      if (svgRef.current) {
        /* Regular wireframe waves */
        const pathEls = svgRef.current.querySelectorAll<SVGPathElement>('path[data-wave]');
        pathEls.forEach((pathEl, i) => {
          const t = Math.pow(i / (WAVE_COUNT - 1), 0.62);
          const baseY = t * H;
          const amp = 3 + t * 28;
          const speed = 0.3 + t * 1.0;
          const phase = i * 0.58 + tAnim * speed;
          const f1 = 2.4 + t * 2.8;
          const f2 = 5.8 + t * 4.2;

          const pts: string[] = [];
          for (let x = 0; x <= W; x += 12) {
            const nx = x / W;
            const y =
              baseY +
              Math.sin(nx * Math.PI * f1 + phase) * amp +
              Math.sin(nx * Math.PI * f2 + phase * 1.6) * amp * 0.24;
            pts.push(`${x},${y.toFixed(1)}`);
          }
          pathEl.setAttribute('d', `M ${pts.join(' L ')}`);
        });

        /* Intermittent gradient strands — slithering snake motion */
        const strandEls = svgRef.current.querySelectorAll<SVGPathElement>('path[data-strand]');
        strandEls.forEach((pathEl, i) => {
          const def = STRAND_DEFS[i];
          const startX = def.xFrac * W;
          const baseY = def.yFrac * H;
          const amp = 18 + def.yFrac * 26;
          const speed = 2.2 + def.yFrac * 1.6;
          const phase = def.phase + tAnim * speed;

          const pts: string[] = [];
          for (let x = startX; x <= startX + def.length; x += 6) {
            const nx = (x - startX) / def.length;
            // Primary traveling wave + secondary harmonic = slither
            const y =
              baseY +
              Math.sin(nx * Math.PI * 2.6 + phase) * amp +
              Math.sin(nx * Math.PI * 5.4 + phase * 1.55) * amp * 0.34;
            pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
          }
          pathEl.setAttribute('d', `M ${pts.join(' L ')}`);
        });
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1440 270"
      preserveAspectRatio="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        {STRAND_DEFS.map((def, i) => {
          const startX = def.xFrac * 1440;
          const endX = startX + def.length;
          return (
            <linearGradient
              key={i}
              id={`sg${i}`}
              x1={startX}
              y1="0"
              x2={endX}
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%"   stopColor="#ff7a28" stopOpacity="0" />
              <stop offset="18%"  stopColor="#ff7a28" stopOpacity="0.92" />
              <stop offset="68%"  stopColor="#ff1493" stopOpacity="0.88" />
              <stop offset="100%" stopColor="#ff1493" stopOpacity="0" />
            </linearGradient>
          );
        })}
      </defs>

      {/* Base wireframe waves */}
      {initialPaths.map((p, i) => (
        <path
          key={i}
          data-wave=""
          d={p.d}
          stroke={`rgba(195,165,235,${p.opacity})`}
          strokeWidth="0.7"
          fill="none"
        />
      ))}

      {/* Intermittent orange→pink gradient strands */}
      {STRAND_DEFS.map((_def, i) => (
        <path
          key={`s${i}`}
          data-strand=""
          d=""
          stroke={`url(#sg${i})`}
          strokeWidth="1.9"
          strokeLinecap="round"
          fill="none"
          style={{
            opacity: activeStrands.has(i) ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
          }}
        />
      ))}
    </svg>
  );
}

/* ── Main component ──────────────────────────────────────────────── */
export default function HeroSection() {
  const [win, setWin] = useState({
    w: typeof window !== 'undefined' ? window.innerWidth : 1440,
    h: typeof window !== 'undefined' ? window.innerHeight : 900,
  });

  const { scrollY } = useScroll();

  useEffect(() => {
    const update = () => setWin({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const scrollEnd = win.h * 0.88;

  // Sun: starts centered at ~22% from top → moves to top-right corner
  const rawLeft = useTransform(
    scrollY,
    [0, scrollEnd],
    [win.w / 2 - 90, win.w - 68]
  );
  const rawTop = useTransform(
    scrollY,
    [0, scrollEnd],
    [win.h * 0.22 - 90, 14]
  );
  const rawSize = useTransform(scrollY, [0, scrollEnd], [180, 44]);

  const sunLeft = useSpring(rawLeft, { stiffness: 120, damping: 26 });
  const sunTop  = useSpring(rawTop,  { stiffness: 120, damping: 26 });
  const sunSize = useSpring(rawSize, { stiffness: 120, damping: 26 });

  // Hero text fades + rises as user scrolls
  const contentOpacity = useTransform(scrollY, [0, scrollEnd * 0.48], [1, 0]);
  const contentY       = useTransform(scrollY, [0, scrollEnd * 0.48], [0, -44]);

  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  // Reflection streaks below the sun
  const streaks = [
    { top: 0,   w: 112, h: 14, blur: 3, op: 0.68 },
    { top: 26,  w: 74,  h: 9,  blur: 4, op: 0.50 },
    { top: 56,  w: 94,  h: 11, blur: 5, op: 0.37 },
    { top: 90,  w: 58,  h: 8,  blur: 6, op: 0.26 },
    { top: 126, w: 78,  h: 9,  blur: 7, op: 0.17 },
    { top: 164, w: 44,  h: 7,  blur: 8, op: 0.11 },
    { top: 204, w: 58,  h: 7,  blur: 9, op: 0.07 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Purple radial glow at top */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 55% at 50% -8%, rgba(110,55,175,0.42) 0%, transparent 68%)',
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(180,140,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(180,140,255,0.028) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Wireframe waves + intermittent strands — bottom 44% */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '44%' }}
      >
        <WireframeWaves />
      </div>

      {/* Sun reflection streaks */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-10"
        style={{ top: '36%' }}
      >
        {streaks.map((s, i) => (
          <div
            key={i}
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: `${s.top}px`,
              width: `${s.w}px`,
              height: `${s.h}px`,
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,20,147,0.88) 25%, rgba(255,200,0,0.96) 50%, rgba(255,20,147,0.88) 75%, transparent 100%)',
              opacity: s.op,
              borderRadius: '50%',
              filter: `blur(${s.blur}px)`,
            }}
          />
        ))}
      </div>

      {/* ── Hero text ── */}
      <motion.div
        className="relative z-20 text-center w-full px-6"
        style={{ opacity: contentOpacity, y: contentY, marginTop: '4vh' }}
      >
        {/* Eyebrow */}
        <motion.p
          className="font-mono text-[11px] tracking-[0.48em] uppercase text-white/28 mb-10"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          Creative Developer &amp; Designer
        </motion.p>

        {/* Name */}
        <motion.h1
          className="font-sans font-black text-white leading-[0.86] tracking-[-0.03em] mb-8 select-none"
          style={{ fontSize: 'clamp(2.8rem, 10.5vw, 12rem)' }}
          initial={{ opacity: 0, y: 56 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
        >
          ALEX MORGAN
        </motion.h1>

        {/* Divider + subtitle */}
        <motion.div
          className="flex items-center justify-center gap-5 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="h-px w-12 bg-white/10" />
          <span className="text-sm text-white/32 tracking-[0.32em] uppercase font-light">
            Full-Stack Engineer
          </span>
          <div className="h-px w-12 bg-white/10" />
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="px-7 py-3 text-[11px] font-mono tracking-[0.22em] uppercase border border-white/14 text-white/60 hover:border-primary/55 hover:text-primary transition-all duration-300"
          >
            View Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-7 py-3 text-[11px] font-mono tracking-[0.22em] uppercase bg-primary/85 text-white hover:bg-primary transition-all duration-300"
          >
            Contact →
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 1 }}
      >
        <span className="font-mono text-[9px] text-white/18 tracking-[0.4em] uppercase">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-white/18 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatDelay: 0.5,
          }}
          style={{ originY: 0 }}
        />
      </motion.div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />

      {/* ── Fixed Sun — z-[55] = above navbar (z-50), below progress bar (z-[60]) ── */}
      <motion.div
        className="fixed pointer-events-none z-[55]"
        style={{ left: sunLeft, top: sunTop, width: sunSize, height: sunSize }}
      >
        {/* Outer atmospheric glow */}
        <div
          className="absolute rounded-full"
          style={{
            inset: '-70%',
            background:
              'radial-gradient(circle, rgba(255,185,0,0.2) 0%, rgba(255,20,147,0.12) 45%, transparent 70%)',
            filter: 'blur(22px)',
          }}
        />
        {/* Sun body */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(circle at 38% 30%, #ffe566 0%, #ff7a28 36%, #ff1493 70%, #be0060 100%)',
          }}
        />
      </motion.div>
    </section>
  );
}
