import { useEffect } from 'react';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ResumeSection from '../components/ResumeSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import MarqueeStrip from '../components/MarqueeStrip';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <AboutSection />
        <MarqueeStrip reverse />
        <ProjectsSection />
        <MarqueeStrip />
        <ResumeSection />
        <MarqueeStrip reverse />
        <BlogSection />
        <MarqueeStrip />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
