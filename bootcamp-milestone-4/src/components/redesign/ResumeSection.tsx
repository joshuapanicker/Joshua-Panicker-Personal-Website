"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Download } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import TiltCard from "../TiltCard";
import ScrollReveal from "../ScrollReveal";
import SubtleBackground from "../SubtleBackground";

const helvetica = {
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
};

function TechLogo({
  name,
  url,
  delay = 0,
}: {
  name: string;
  url: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      className="group flex flex-col items-center gap-2.5 p-4 border border-border hover:border-white/18 bg-card/40 hover:bg-card/90 transition-all duration-300 cursor-default"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -5, scale: 1.1 }}
    >
      <div className="w-10 h-10 flex items-center justify-center">
        <img
          src={url}
          alt={name}
          className="w-8 h-8 object-contain transition-all duration-300 group-hover:scale-110"
          style={{
            filter:
              "sepia(0.55) saturate(3.5) hue-rotate(315deg) brightness(1.15)",
          }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
      </div>
      <span className="text-[9px] font-mono text-white/35 group-hover:text-white/70 transition-colors tracking-wider text-center leading-tight">
        {name}
      </span>
    </motion.div>
  );
}

function TimelineCard({
  title,
  subtitle,
  period,
  description,
  index,
}: {
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      className="relative pl-10"
      initial={{ opacity: 0, x: -28 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -28 }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border/60 to-transparent" />
      <motion.div
        className="absolute left-[9px] top-8 w-2.5 h-2.5 rounded-full border-2 border-primary bg-background z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{
          delay: index * 0.12 + 0.3,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
      <TiltCard intensity={3}>
        <Card className="futuristic-card relative overflow-hidden p-7 bg-card border-border hover:border-primary/40 transition-all duration-300 group">
          <span className="absolute top-4 right-5 font-mono text-6xl font-black text-white/[0.025] select-none pointer-events-none leading-none">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
            <div>
              <h3
                className="text-lg font-black text-foreground group-hover:text-primary transition-colors duration-300 mb-1 tracking-[-0.01em]"
                style={helvetica}
              >
                {title}
              </h3>
              <p className="text-xs font-mono text-secondary tracking-widest">
                {subtitle}
              </p>
            </div>
            <span className="shrink-0 font-mono text-[10px] text-primary/70 tracking-widest border border-primary/25 px-3 py-1.5 rounded-full bg-primary/5 whitespace-nowrap self-start">
              {period}
            </span>
          </div>
          {description && (
            <p className="text-sm text-gray-400 leading-relaxed" style={helvetica}>
              {description}
            </p>
          )}
        </Card>
      </TiltCard>
    </motion.div>
  );
}

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState("skills");

  const experience = [
    {
      title: "Code Coach",
      company: "theCoderSchool, South Bay",
      period: "Sept 2024 — Jan 2025",
      description:
        "Mentored and taught kids (7–11 yrs) how to code using Scratch and Python.",
    },
    {
      title: "Tutor",
      company: "Code For Fun Non-profit",
      period: "July 2024",
      description:
        "Taught a summer-camp class of 10 students (5–12 yrs) with Scratch and Python. Created lesson plans, assisted with assignments, provided 1:1 debugging support, and helped create interactive coding projects per curriculum.",
    },
    {
      title: "Volunteer",
      company: "Atria Senior Living Center",
      period: "Sept 2023 — Jan 2025",
      description:
        "Founded a weekly tech class for seniors. Conducted surveys to tailor instruction. Assisted with troubleshooting electronic devices, demonstrated social media skills, and created comprehensive How-to guides.",
    },
  ];

  const education = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "California Polytechnic State University, San Luis Obispo",
      period: "Expected May 2029",
      description: undefined,
    },
    {
      title: "High School Diploma",
      institution: "Archbishop Mitty High School, San Jose",
      period: "May 2025",
      description: undefined,
    },
  ];

  const courses = [
    {
      title: "Intro to Computer Programming Using JAVA",
      provider: "De Anza College",
      year: "Dual Enrollment",
    },
    {
      title: "Beginning Programming Methodologies in C++",
      provider: "De Anza College",
      year: "Dual Enrollment",
    },
    {
      title: "Intermediate Problem Solving Java",
      provider: "De Anza College",
      year: "Dual Enrollment",
    },
    {
      title: "Python Programming",
      provider: "De Anza College",
      year: "Dual Enrollment",
    },
    {
      title: "Discrete Mathematics",
      provider: "Foothill College",
      year: "Dual Enrollment",
    },
    {
      title: "Data Structures",
      provider: "California Polytechnic University San Luis Obispo",
      year: "Current",
    },
  ];

  const skillGroups = [
    {
      category: "Frontend",
      techs: [
        { name: "React", url: "https://cdn.simpleicons.org/react/61DAFB" },
        {
          name: "Next.js",
          url: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
        },
        {
          name: "TypeScript",
          url: "https://cdn.simpleicons.org/typescript/3178C6",
        },
        {
          name: "Tailwind CSS",
          url: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
        },
        { name: "HTML5", url: "https://cdn.simpleicons.org/html5/E34F26" },
      ],
    },
    {
      category: "Backend",
      techs: [
        { name: "Node.js", url: "https://cdn.simpleicons.org/nodedotjs/339933" },
        {
          name: "PostgreSQL",
          url: "https://cdn.simpleicons.org/postgresql/4169E1",
        },
        { name: "MongoDB", url: "https://cdn.simpleicons.org/mongodb/47A248" },
        {
          name: "Supabase",
          url: "https://cdn.simpleicons.org/supabase/3ECF8E",
        },
      ],
    },
    {
      category: "Design & Tools",
      techs: [
        { name: "Figma", url: "https://cdn.simpleicons.org/figma/F24E1E" },
        { name: "Canva", url: "https://cdn.simpleicons.org/canva/00C4CC" },
        { name: "Framer", url: "https://cdn.simpleicons.org/framer/FFFFFF" },
        { name: "WordPress", url: "https://cdn.simpleicons.org/wordpress/21759B" },
        {
          name: "Photoshop",
          url: "https://cdn.simpleicons.org/adobephotoshop/31A8FF",
        },
        { name: "Git", url: "https://cdn.simpleicons.org/git/F05032" },
        { name: "GitHub", url: "https://cdn.simpleicons.org/github/FFFFFF" },
      ],
    },
    {
      category: "Languages",
      techs: [
        {
          name: "Java",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        },
        {
          name: "C++",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "Python",
          url: "https://cdn.simpleicons.org/python/3776AB",
        },
      ],
    },
  ];

  return (
    <section id="resume" className="relative py-32 bg-background">
      <SubtleBackground />
      <div className="relative z-10 container mx-auto px-8">
        <div className="mb-20">
          <ScrollReveal>
            <p className="font-mono text-xs text-primary/70 tracking-[0.25em] uppercase mb-4">
              // EXPERIENCE
            </p>
          </ScrollReveal>
          <div className="overflow-hidden">
            <ScrollReveal delay={0.08}>
              <h2
                className="text-6xl md:text-8xl font-sans font-normal text-foreground leading-none mb-6 uppercase tracking-[0.05em]"
                style={helvetica}
              >
                Resume
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.18}>
            <div className="flex flex-col items-start gap-5">
              <div className="flex items-center gap-4">
                <div className="h-px w-16 bg-primary/50" />
                <p className="text-lg text-gray-400 max-w-xl" style={helvetica}>
                  My professional journey and qualifications
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-xs tracking-[0.2em] uppercase px-8 py-6 rounded-none animate-pulse-glow"
                >
                  <a
                    href="/Joshua_Panicker_Resume.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2" size={16} strokeWidth={1.5} />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.1}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-2xl grid-cols-4 mb-12 bg-card border border-border rounded-none">
              {["skills", "experience", "education", "courses"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="font-mono text-xs tracking-widest uppercase text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-none"
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="experience" className="space-y-5">
              {experience.map((item, index) => (
                <TimelineCard
                  key={index}
                  title={item.title}
                  subtitle={item.company}
                  period={item.period}
                  description={item.description}
                  index={index}
                />
              ))}
            </TabsContent>

            <TabsContent value="education" className="space-y-5">
              {education.map((item, index) => (
                <TimelineCard
                  key={index}
                  title={item.title}
                  subtitle={item.institution}
                  period={item.period}
                  description={item.description}
                  index={index}
                />
              ))}
            </TabsContent>

            <TabsContent value="skills">
              <div className="space-y-10">
                {skillGroups.map((group, gi) => (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: gi * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <p className="font-mono text-xs text-primary/70 tracking-[0.25em] uppercase mb-5">
                      {group.category}
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
                      {group.techs.map((tech, ti) => (
                        <TechLogo
                          key={tech.name}
                          name={tech.name}
                          url={tech.url}
                          delay={gi * 0.06 + ti * 0.05}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="courses" className="space-y-5">
              {courses.map((course, index) => (
                <TimelineCard
                  key={index}
                  title={course.title}
                  subtitle={course.provider}
                  period={course.year}
                  index={index}
                />
              ))}
            </TabsContent>
          </Tabs>
        </ScrollReveal>
      </div>
    </section>
  );
}
