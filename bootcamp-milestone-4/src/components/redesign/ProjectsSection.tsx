"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TiltCard from "../TiltCard";
import ScrollReveal from "../ScrollReveal";
import SubtleBackground from "../SubtleBackground";

const helvetica = {
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
};

export interface Project {
  _id?: string;
  name: string;
  description: string;
  image: string;
  image_alt?: string;
  tech_stack: string[];
  link?: string;
}

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const displayProjects = projects.length > 0 ? projects : [];

  return (
    <section
      id="projects"
      className="relative py-32 bg-gradient-to-b from-background to-gray-900"
    >
      <SubtleBackground />
      <div className="relative z-10 container mx-auto px-8">
        <div className="mb-20">
          <ScrollReveal>
            <p className="font-mono text-xs text-primary/70 tracking-[0.25em] uppercase mb-4">
              // FEATURED WORK
            </p>
          </ScrollReveal>
          <div className="overflow-hidden">
            <ScrollReveal delay={0.08}>
              <h2
                className="text-6xl md:text-8xl font-sans font-normal text-foreground leading-none mb-6 uppercase tracking-[0.05em]"
                style={helvetica}
              >
                Featured Projects
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.18}>
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-primary/50" />
              <p className="text-lg text-gray-400 max-w-2xl">
                A selection of my work showcasing creativity and technical
                skills
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <ScrollReveal
              key={project._id ?? project.name}
              delay={index * 0.13}
              direction={index % 2 === 0 ? "left" : "right"}
              className="h-full"
            >
              <TiltCard className="h-full flex" intensity={6}>
                <Card className="futuristic-card group bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col min-h-[420px]">
                  <div className="relative overflow-hidden h-52 w-full shrink-0">
                    <Image
                      src={project.image}
                      alt={project.image_alt ?? project.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col min-h-0">
                    <h3 className="text-xl font-sans font-black text-foreground mb-2 tracking-[-0.01em] group-hover:text-primary transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p
                      className="text-sm text-gray-400 mb-4 line-clamp-3 flex-1"
                      style={helvetica}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech_stack.slice(0, 4).map((tag) => (
                        <motion.span
                          key={tag}
                          className="px-2.5 py-0.5 text-xs font-mono bg-primary/10 text-primary border border-primary/20"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(236,72,153,0.2)",
                          }}
                          transition={{ duration: 0.15 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <Button
                      asChild
                      className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal mt-auto shrink-0 group/btn"
                    >
                      <a
                        href={project.link ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink
                          className="mr-2 transition-transform duration-300 group-hover/btn:rotate-12"
                          size={18}
                          strokeWidth={1.5}
                        />
                        View Project
                      </a>
                    </Button>
                  </div>
                </Card>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
