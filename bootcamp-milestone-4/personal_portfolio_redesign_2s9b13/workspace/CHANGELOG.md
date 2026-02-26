<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
<!-- NEXT_ENTRY_HERE -->

## 2026-02-26 (8)
- ResumeSection: subtitle stacked above download button (flex-col instead of sm:flex-row)
- TabsList: removed `mx-auto` to left-align the skills/experience/education/courses navbar

## 2026-02-26 (7)
- Navbar: added `fontWeight: 'normal'` to helvetica const to revert unintended weight-300 inheritance from body
- Section titles (About Me, Featured Projects, Resume, Get In Touch): `tracking-[-0.03em]` → `uppercase tracking-[0.08em]` + inline helvetica style (navbar font)
- Body paragraphs (About bio, project descriptions, blog excerpts, "let's work together"): added `style={helvetica}` to use Helvetica Neue instead of DM Sans

## 2026-02-26 (6)
- Headings (h2/h3) across all sections: `font-serif font-bold` → `font-sans font-black tracking-[-0.03em]` to match hero title weight
- Body text: switched to DM Sans 300 with `letter-spacing: 0.018em` for thin, spaced minimalist feel
- Updated index.css: new Google Fonts import (DM Sans 300/400), body font-weight:300, h1-h6 font-weight:900
- Affected: AboutSection, ProjectsSection, ResumeSection, BlogSection, ContactSection

## 2026-02-26 (5)
- HeroSection strands: speed 0.45→2.2, dual harmonics (2.6π + 5.4π) for snake slither, amp 7→18
- CustomCursor ring: stiffness 88→165, mass 1.0→0.6 for faster tracking
- Navbar nav items: font matched to "Portfolio" label — text-[10px] uppercase tracking-[0.30em]

## 2026-02-26 (4)
- HeroSection: removed 6 accent lines, replaced with 3-slot intermittent orange→pink gradient strands (1-2 visible at a time, 1.5s fade)
- CustomCursor: ring spring stiffness 42→88, mass 1.6→1.0 for faster cursor tracking
- Created SubtleBackground.tsx (purple radial glow + grid at reduced opacity)
- Added SubtleBackground to About, Projects, Resume, Blog, Contact sections

## 2026-02-26 (3)
- Cursor: dot now follows mouse directly (no spring), ring uses mass:1.6/stiffness:42/damping:16 for smooth momentum deceleration
- HeroSection: added 6 colored accent wave lines (orange/pink/violet/amber) animating alongside wireframe waves
- ResumeSection: default tab changed to 'skills', tab order reordered to skills-first
- TechLogo: added sepia+hue-rotate filter for orange-pink tint on all skill logos

## 2026-02-26 (2)
- Font: switched to "Helvetica Neue" first in all font stacks (tailwind.config.js + index.css)
- HeroSection: sun moved up (0.3→0.22 viewport), z-index raised to z-[55] (above navbar z-50), waves now animate via rAF
- Navbar: full redesign — floating frosted-glass pill on scroll, gradient "AM" logo with pulsing dot, "Let's Talk →" CTA
- ResumeSection: skill bars replaced with tech logo grid (simpleicons + devicons CDN); experience/education/courses use new TimelineCard with vertical line, animated dot, number badge, left accent

## 2026-02-26
- Replaced fonts with Apple system stack (-apple-system, SF Pro, Inter fallback) in index.css + tailwind.config.js
- Complete HeroSection rewrite: sunset CSS scene, large centered "ALEX MORGAN" name (James Williams style)
- Fixed-position sun scroll-animates from center (30% from top) to top-right corner via useScroll + useSpring
- Wireframe waves SVG (28 perspective-distributed paths) + sun reflection streaks at bottom of hero
- Background updated to deep purple hsl(258,28%,8%) across all sections; card/muted/border colors purple-tinted

## 2026-02-25 (4)
- Part 1: Fixed cursor ring lag (stiffness 200→550, damping 35→22); rethemed to dark gray + hot pink + amber
- Part 2: Added ScrollReveal (once:false, bidirectional) + MarqueeStrip (ticker between all sections)
- All section headings upgraded to text-6xl/8xl editorial style; all viewport once:true→false
- New files: src/components/ScrollReveal.tsx, src/components/MarqueeStrip.tsx
- TiltCard glow updated to hot pink; skill bars + nav progress bar updated to new palette

## 2026-02-25 (3)
- Full interactive overhaul: custom cursor (dot+ring), scroll progress bar, typewriter hero, floating orbs, scan line
- Added TiltCard (3D tilt + mouse-spotlight) wrapping all cards in About/Projects/Resume/Blog
- Added AnimatedCounter in About, animated skill bars in Resume, film grain noise overlay
- New files: src/hooks/use-typewriter.ts, src/components/CustomCursor.tsx, src/components/TiltCard.tsx
- CSS: blink, float, pulse-glow, gradient-x, noise body::before, cursor:none on fine pointer

## 2026-02-25 (2)
- Replaced Syne heading font with Plus Jakarta Sans for cleaner display typography
- Updated Google Fonts import, index.css h1-h6 rule, and tailwind.config.js fontFamily.serif

## 2026-02-25
- Fixed hero text disappearing: removed conflicting GSAP + Framer Motion dual-animation on same elements
- Replaced GSAP with pure Framer Motion stagger (containerVariants/itemVariants) in HeroSection
- Overhauled theme: Space Grotesk body + Syne headings, border-radius 2–4px, dark subtle borders
- Added grid background pattern (body + hero overlay), corner bracket hover effect (.futuristic-card)
- All sections: monospace `// LABEL` headers, sharp tags/buttons, futuristic card styling
</changelog>
