import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 border-t border-white/10 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Tagline */}
        <div className="space-y-2 text-center md:text-left">
          <div className="text-xl font-display font-bold text-white tracking-tighter flex items-center justify-center md:justify-start gap-1">
            <span>Hariom Jaiswal</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
          <p className="text-xs font-mono text-muted">
            MERN Stack Developer • Building scalable web products with precision.
          </p>
        </div>

        {/* Quick Socials */}
        <div className="flex items-center gap-4 text-muted">
          <a
            href="https://github.com/hariomjaiswal12"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:text-white hover:border-white/20 transition-colors"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://linkedin.com/in/hariomjaiswal12"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:text-white hover:border-white/20 transition-colors"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="mailto:omjaiswal942@gmail.com"
            aria-label="Email"
            className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:text-white hover:border-white/20 transition-colors"
          >
            <FaEnvelope size={16} />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 rounded-lg bg-primary/20 border border-primary/40 text-primary hover:bg-primary hover:text-white transition-all shadow-glow"
          >
            <FaArrowUp size={16} />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 text-center md:flex md:justify-between text-xs text-muted font-mono">
        <p>© {new Date().getFullYear()} Hariom Jaiswal. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed & Engineered with React, Vite & Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;
