import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'experience', 'education', 'projects', 'skills', 'achievements', 'profiles', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 150;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-4 md:px-8 py-4 transition-all duration-500">
      <nav
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-500 px-6 py-3 flex justify-between items-center ${
          scrolled
            ? 'bg-surface-card/80 backdrop-blur-xl border border-white/10 shadow-2xl'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group text-xl md:text-2xl font-display font-bold text-white tracking-tighter flex items-center gap-1"
        >
          <span>HJ</span>
          <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300 shadow-glow" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-mono transition-colors duration-300 rounded-full ${
                    isActive ? 'text-white font-medium' : 'text-muted hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-primary/20 border border-primary/40 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Social Icons & Resume */}
          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            <a
              href="https://github.com/hariomjaiswal12"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-muted hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://linkedin.com/in/hariomjaiswal12"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-muted hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <FaLinkedin size={16} />
            </a>
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-mono text-white transition-all flex items-center gap-2"
              >
                <FaFileAlt size={12} className="text-primary" /> Resume
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 rounded-lg bg-white/5 border border-white/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl bg-surface-card/95 backdrop-blur-2xl border border-white/10 p-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-mono py-2 border-b border-white/5 ${
                    activeSection === link.href.slice(1) ? 'text-primary font-bold' : 'text-muted'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-between pt-2">
                <div className="flex gap-4">
                  <a
                    href="https://github.com/hariomjaiswal12"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted hover:text-white"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/hariomjaiswal12"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted hover:text-white"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
                {onOpenResume && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResume();
                    }}
                    className="px-4 py-2 rounded-lg bg-primary text-xs font-mono text-white"
                  >
                    View Resume
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
