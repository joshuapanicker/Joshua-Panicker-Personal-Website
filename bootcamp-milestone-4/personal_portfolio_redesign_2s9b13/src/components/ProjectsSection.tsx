import { motion } from 'framer-motion';

const helvetica = { fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' };
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';
import SubtleBackground from './SubtleBackground';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Creative Portfolio Platform',
      subtitle: 'Web Application',
      description: 'A modern portfolio platform built with React and Node.js, featuring dynamic content management and responsive design.',
      image: 'https://c.animaapp.com/mm2ichvsjU5B6T/img/ai_3.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Design System Library',
      subtitle: 'UI Component Library',
      description: 'Comprehensive design system with reusable components, built for scalability and accessibility.',
      image: 'https://c.animaapp.com/mm2ichvsjU5B6T/img/ai_4.png',
      tags: ['TypeScript', 'React', 'Storybook', 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 3,
      title: 'Content Management Dashboard',
      subtitle: 'Admin Panel',
      description: 'Intuitive dashboard for managing content, users, and analytics with real-time updates.',
      image: 'https://c.animaapp.com/mm2ichvsjU5B6T/img/ai_5.png',
      tags: ['Vue.js', 'Firebase', 'Chart.js', 'SCSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="relative py-32 bg-gradient-to-b from-background to-gray-900">
      <SubtleBackground />
      <div className="relative z-10 container mx-auto px-8">

        {/* Editorial section header */}
        <div className="mb-20">
          <ScrollReveal>
            <p className="font-mono text-xs text-primary/70 tracking-[0.25em] uppercase mb-4">// FEATURED WORK</p>
          </ScrollReveal>
          <div className="overflow-hidden">
            <ScrollReveal delay={0.08}>
              <h2 className="text-6xl md:text-8xl font-sans font-normal text-foreground leading-none mb-6 uppercase tracking-[0.05em]" style={helvetica}>
                Featured Projects
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.18}>
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-primary/50" />
              <p className="text-lg text-gray-400 max-w-2xl">
                A selection of my recent work showcasing creativity and technical expertise
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 0.13}
              direction={index % 2 === 0 ? 'left' : 'right'}
              className={project.featured ? 'md:col-span-2 lg:col-span-2' : ''}
            >
              <TiltCard className="h-full" intensity={6}>
                <Card className="futuristic-card group bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <motion.span
                          className="px-3 py-1 text-xs font-mono bg-primary text-primary-foreground tracking-widest uppercase animate-pulse-glow"
                          animate={{ opacity: [0.8, 1, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Featured
                        </motion.span>
                      </div>
                    )}
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-2">
                      <span className="text-xs font-mono text-secondary tracking-widest uppercase">{project.subtitle}</span>
                    </div>
                    <h3 className="text-2xl font-sans font-black text-foreground mb-3 tracking-[-0.01em] group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-base text-gray-400 mb-6 flex-1" style={helvetica}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/20"
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(236,72,153,0.2)' }}
                          transition={{ duration: 0.15 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button
                        asChild
                        className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal flex-1 group/btn"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 transition-transform duration-300 group-hover/btn:rotate-12" size={18} strokeWidth={1.5} />
                          View Live
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-normal flex-1"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2" size={18} strokeWidth={1.5} />
                          GitHub
                        </a>
                      </Button>
                    </div>
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
