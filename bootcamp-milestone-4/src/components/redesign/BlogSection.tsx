"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import TiltCard from "../TiltCard";
import ScrollReveal from "../ScrollReveal";
import SubtleBackground from "../SubtleBackground";

const helvetica = {
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
};

export interface BlogPost {
  _id?: string;
  title: string;
  slug: string;
  date: string;
  description: string;
  image: string;
  image_alt?: string;
}

export default function BlogSection({ blogs }: { blogs: BlogPost[] }) {
  const displayBlogs = blogs.length > 0 ? blogs : [];

  return (
    <section
      id="blog"
      className="relative py-32 bg-gradient-to-b from-gray-900 to-background"
    >
      <SubtleBackground />
      <div className="relative z-10 container mx-auto px-8">
        <div className="mb-20">
          <ScrollReveal>
            <p className="font-mono text-xs text-primary/70 tracking-[0.25em] uppercase mb-4">
              // LATEST ARTICLES
            </p>
          </ScrollReveal>
          <div className="overflow-hidden">
            <ScrollReveal delay={0.08}>
              <h2 className="text-6xl md:text-8xl font-sans font-black text-foreground leading-none mb-6 tracking-[-0.03em]">
                Latest Articles
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.18}>
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-primary/50" />
              <p className="text-lg text-gray-400 max-w-2xl">
                Thoughts and updates on my journey in tech
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayBlogs.map((post, index) => (
            <ScrollReveal
              key={post._id ?? post.slug}
              delay={index * 0.13}
              direction={index % 2 === 0 ? "up" : "scale"}
            >
              <TiltCard className="h-full" intensity={6}>
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <Card className="futuristic-card group bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col cursor-pointer">
                    <div className="relative overflow-hidden h-56">
                      <Image
                        src={post.image}
                        alt={post.image_alt ?? post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    </div>

                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mb-3 tracking-widest">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} strokeWidth={1.5} />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>

                      <h3 className="text-xl font-sans font-black text-foreground mb-3 tracking-[-0.01em] group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p
                        className="text-base text-gray-400 mb-6 flex-1"
                        style={helvetica}
                      >
                        {post.description}
                      </p>

                      <span className="text-primary hover:text-primary font-normal w-fit p-0 group/btn inline-flex items-center">
                        Read More
                        <ArrowRight
                          className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
                          size={18}
                          strokeWidth={1.5}
                        />
                      </span>
                    </div>
                  </Card>
                </Link>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {displayBlogs.length === 0 && (
          <p className="text-center text-gray-500 py-12">
            No blog posts yet. Check back soon!
          </p>
        )}
      </div>
    </section>
  );
}
