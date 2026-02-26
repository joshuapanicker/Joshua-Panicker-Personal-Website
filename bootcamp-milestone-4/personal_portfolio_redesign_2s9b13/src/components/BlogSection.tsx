import { motion } from 'framer-motion';

const helvetica = { fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' };
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';
import SubtleBackground from './SubtleBackground';

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications',
      date: 'March 15, 2024',
      readTime: '6 min read',
      excerpt: 'Learn best practices for structuring large-scale React applications with maintainability in mind.',
      image: 'https://c.animaapp.com/mm2ichvsjU5B6T/img/ai_3.png',
      category: 'Development',
    },
    {
      id: 2,
      title: 'The Art of Modern UI Design',
      date: 'March 10, 2024',
      readTime: '4 min read',
      excerpt: 'Exploring contemporary design principles and how to create visually stunning user interfaces.',
      image: 'https://c.animaapp.com/mm2ichvsjU5B6T/img/ai_4.png',
      category: 'Design',
    },
    {
      id: 3,
      title: 'Performance Optimization Techniques',
      date: 'March 5, 2024',
      readTime: '8 min read',
      excerpt: 'Practical tips and strategies for improving web application performance and user experience.',
      image: 'https://c.animaapp.com/mm2ichvsjU5B6T/img/ai_5.png',
      category: 'Performance',
    },
  ];

  return (
    <section id="blog" className="relative py-32 bg-gradient-to-b from-gray-900 to-background">
      <SubtleBackground />
      <div className="relative z-10 container mx-auto px-8">

        {/* Editorial section header */}
        <div className="mb-20">
          <ScrollReveal>
            <p className="font-mono text-xs text-primary/70 tracking-[0.25em] uppercase mb-4">// LATEST ARTICLES</p>
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
                Thoughts, tutorials, and insights on web development and design
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <ScrollReveal
              key={post.id}
              delay={index * 0.13}
              direction={index % 2 === 0 ? 'up' : 'scale'}
            >
              <TiltCard className="h-full" intensity={6}>
                <Card
                  className="futuristic-card group bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col cursor-pointer"
                  data-cursor-hover
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-mono bg-primary text-primary-foreground tracking-widest uppercase">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mb-3 tracking-widest">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} strokeWidth={1.5} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} strokeWidth={1.5} />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-sans font-black text-foreground mb-3 tracking-[-0.01em] group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-base text-gray-400 mb-6 flex-1" style={helvetica}>
                      {post.excerpt}
                    </p>

                    <Button
                      variant="ghost"
                      className="text-primary hover:text-primary hover:bg-primary/10 font-normal w-fit p-0 group/btn"
                    >
                      Read More
                      <ArrowRight
                        className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
                        size={18}
                        strokeWidth={1.5}
                      />
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
