import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
      setIsScrolled(window.scrollY > 60);

      const sections = ['home', 'about', 'projects', 'resume', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const helvetica = { fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 'normal' as const };

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent">
        <motion.div
          className="h-full"
          style={{
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, hsl(335,85%,58%), hsl(38,95%,55%))',
          }}
          transition={{ duration: 0.05 }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'pt-3 pb-2' : 'pt-5 pb-4'
        }`}
      >
        <nav className="container mx-auto px-6">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              isScrolled
                ? 'bg-[hsl(258,28%,7%)]/85 backdrop-blur-2xl border border-white/[0.07] rounded-2xl px-6 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.04)]'
                : 'px-2'
            }`}
          >
            {/* ── Logo ── */}
            <motion.button
              onClick={() => scrollToSection('home')}
              className="relative flex items-center gap-2.5 group"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="relative">
                <span
                  className="text-base font-black tracking-[0.12em] uppercase"
                  style={{
                    ...helvetica,
                    background: 'linear-gradient(135deg, hsl(335,85%,68%) 0%, hsl(38,95%,65%) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  AM
                </span>
                <motion.span
                  className="absolute -top-0.5 -right-2 w-1.5 h-1.5 rounded-full bg-primary"
                  animate={{ opacity: [1, 0.15, 1], scale: [1, 0.55, 1] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
              <div className="w-px h-3.5 bg-white/12" />
              <span
                className="text-[10px] tracking-[0.32em] uppercase text-white/28 group-hover:text-white/48 transition-colors duration-300"
                style={helvetica}
              >
                Portfolio
              </span>
            </motion.button>

            {/* ── Desktop nav ── */}
            <div className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-[10px] uppercase transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-white/42 hover:text-white/80'
                  }`}
                  style={{ ...helvetica, letterSpacing: '0.30em' }}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      className="absolute bottom-0 left-3 right-3 h-px"
                      style={{
                        background:
                          'linear-gradient(90deg, transparent, hsl(335,85%,58%), hsl(38,95%,55%), transparent)',
                      }}
                      layoutId="nav-underline"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* ── Right: CTA + mobile toggle ── */}
            <div className="flex items-center gap-3">
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="hidden md:flex items-center gap-2 px-5 py-2 text-[11px] tracking-[0.18em] uppercase text-primary border border-primary/35 hover:bg-primary/10 hover:border-primary/65 transition-all duration-300 rounded-full"
                style={helvetica}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Let's Talk
                <motion.span
                  className="text-secondary font-bold"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  →
                </motion.span>
              </motion.button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-foreground/70 hover:text-foreground p-2 transition-colors"
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <X size={22} strokeWidth={1.5} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <Menu size={22} strokeWidth={1.5} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* ── Mobile menu ── */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="md:hidden mt-3 bg-[hsl(258,28%,7%)]/95 backdrop-blur-2xl border border-white/8 rounded-2xl p-3 shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 text-[10px] uppercase tracking-[0.28em] transition-all duration-200 rounded-xl ${
                      activeSection === item.id
                        ? 'text-primary bg-primary/10'
                        : 'text-white/55 hover:text-white hover:bg-white/5'
                    }`}
                    style={helvetica}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="mt-3 pt-3 border-t border-white/6">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full px-4 py-3 text-sm text-primary border border-primary/30 rounded-xl hover:bg-primary/10 transition-all duration-200"
                    style={helvetica}
                  >
                    Let's Talk →
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
}
