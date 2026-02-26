import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Resume', id: 'resume' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background to-gray-900 border-t border-border py-16">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-xs font-mono font-medium text-foreground mb-2 tracking-[0.25em] uppercase">
              Alex Morgan
            </h3>
            <p className="text-xs font-mono text-gray-500 tracking-widest uppercase">
              Creative Developer & Designer
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xs font-mono text-gray-500 hover:text-primary transition-colors duration-300 cursor-pointer tracking-widest uppercase"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <Button
            onClick={scrollToTop}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal rounded-none p-3"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} strokeWidth={1.5} />
          </Button>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs font-mono text-gray-500 tracking-widest">
            © {currentYear} Alex Morgan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}