"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import TiltCard from "../TiltCard";
import ScrollReveal from "../ScrollReveal";
import SubtleBackground from "../SubtleBackground";

const helvetica = {
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
};

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }
    const duration = 2000;
    const start = performance.now();
    const update = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const skills = [
    {
      icon: Code2,
      title: "Full-Stack & Web",
      description:
        "Building applications with React, Next.js, and modern frameworks. Experience with MongoDB and REST APIs.",
    },
    {
      icon: Palette,
      title: "UI/UX & Design",
      description:
        "Creating intuitive interfaces with Figma, WordPress, and responsive design. Focus on accessibility.",
    },
    {
      icon: Zap,
      title: "Teaching & Mentorship",
      description:
        "Teaching young kids to code with Scratch and Python. Experience as Code Coach and summer camp tutor.",
    },
  ];

  const counters = [
    { target: 4, suffix: "+", label: "Languages" },
    { target: 6, suffix: "+", label: "Tools & Frameworks" },
    { target: 2, suffix: "+", label: "Teaching Roles" },
    { target: 100, suffix: "%", label: "Passion" },
  ];

  return (
    <section id="about" className="relative py-32 bg-background">
      <SubtleBackground />
      <div className="relative z-10 container mx-auto px-8">
        <div className="mb-20">
          <ScrollReveal>
            <p className="font-mono text-xs text-primary/70 tracking-[0.25em] uppercase mb-4">
              // ABOUT ME
            </p>
          </ScrollReveal>
          <div className="overflow-hidden">
            <ScrollReveal delay={0.08}>
              <h2
                className="text-6xl md:text-8xl font-sans font-normal text-foreground leading-none mb-6 uppercase tracking-[0.05em]"
                style={helvetica}
              >
                About Me
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.18}>
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-primary/50" />
              <p className="text-lg text-gray-400 max-w-2xl">
                First-year computer science major from San Jose, California
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <ScrollReveal direction="left">
            <div className="photo-aura-wrap relative w-full max-w-[400px] aspect-[4/5] mx-auto md:mx-0">
              <div className="photo-aura-inner relative w-full h-full">
                <Image
                  src="/isthatme.PNG"
                  alt="Joshua Panicker"
                  fill
                  className="object-cover object-center w-full h-full"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={0.1}>
              <p
                className="text-lg md:text-xl text-gray-400 leading-relaxed"
                style={helvetica}
              >
                Hey, I&apos;m Joshua Panicker (I also go by Josh). I&apos;m from
                San Jose, California, and I&apos;m a first-year computer science
                major at Cal Poly San Luis Obispo.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p
                className="text-lg md:text-xl text-gray-400 leading-relaxed"
                style={helvetica}
              >
                I&apos;m passionate about technology and always eager to learn.
                I&apos;ve taught kids to code with Scratch and Python, built
                websites with WordPress and Next.js, and I love turning ideas
                into real projects.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p
                className="text-lg md:text-xl text-gray-400 leading-relaxed"
                style={helvetica}
              >
                When I&apos;m not coding, you can find me exploring new tools,
                contributing to open source, or sharing what I know with the
                developer community.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {counters.map((counter, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="scale">
              <motion.div
                className="futuristic-card text-center p-6 bg-card border border-border hover:border-primary/50 transition-all duration-300"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="text-4xl font-sans font-black text-primary mb-2 glow-primary tracking-[-0.02em]">
                  <AnimatedCounter
                    target={counter.target}
                    suffix={counter.suffix}
                  />
                </div>
                <p className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                  {counter.label}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.title} delay={index * 0.12}>
              <TiltCard className="h-full">
                <Card className="futuristic-card p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="inline-block mb-4"
                  >
                    <skill.icon
                      className="text-primary"
                      size={40}
                      strokeWidth={1.5}
                    />
                  </motion.div>
                  <h3 className="text-xl font-sans font-black text-foreground mb-3 tracking-[-0.01em]">
                    {skill.title}
                  </h3>
                  <p className="text-base text-gray-300">{skill.description}</p>
                </Card>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
