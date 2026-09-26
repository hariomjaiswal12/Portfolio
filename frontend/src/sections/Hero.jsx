import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown, FaFileAlt, FaCode } from 'react-icons/fa';
import Button from '../components/Button';

const roles = [
  'Full Stack / MERN Developer',
  'AI Application Creator',
  'Computer Science Undergraduate',
];

const Hero = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && displayedText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }, 70);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      }, 35);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-14 sm:pb-16 overflow-hidden bg-ambient-grid"
    >
      {/* Radial Gradient Spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,80vw)] h-[min(400px,60vw)] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center space-y-8 z-10">
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] sm:text-xs font-mono text-emerald-400 backdrop-blur-md shadow-glass"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>AVAILABLE FOR OPPORTUNITIES</span>
        </motion.div>

        {/* Main Name & Title */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight leading-none break-words"
          >
            Hariom <span className="text-gradient-accent">Jaiswal</span>
          </motion.h1>

          {/* Role Switcher / Typing Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="min-h-[2.5rem] flex items-center justify-center text-base sm:text-xl md:text-2xl font-mono text-primary/90 font-medium px-2 text-center leading-relaxed"
          >
            <span className="text-white/40 mr-2 shrink-0">&gt;</span>
            <span className="break-words">{displayedText}</span>
            <span className="w-2 h-5 bg-primary ml-1 animate-pulse shrink-0" />
          </motion.div>
        </div>

        {/* Short Professional Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Full-Stack Web Developer specializing in building scalable MERN stack applications, RESTful APIs, and intelligent AI integrations with clean architecture and user-centric design.
        </motion.p>

        {/* Technology Pill Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-2 pt-2"
        >
          {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini AI', 'C++'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md text-xs font-mono text-gray-300 bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 pt-4"
        >
          <a href="#projects" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" icon={<FaCode />} className="w-full sm:w-auto">
              Explore Projects
            </Button>
          </a>
          <a href="#contact" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Let's Connect
            </Button>
          </a>
          {onOpenResume && (
            <Button
              variant="glass"
              size="lg"
              onClick={onOpenResume}
              icon={<FaFileAlt className="text-primary" />}
              className="w-full sm:w-auto"
            >
              Resume
            </Button>
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 pt-4 text-muted"
        >
          <a
            href="https://github.com/hariomjaiswal12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-2 text-[11px] sm:text-xs font-mono text-center"
          >
            <FaGithub size={16} className="shrink-0" /> github.com/hariomjaiswal12
          </a>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
          <a
            href="https://linkedin.com/in/hariomjaiswal12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-2 text-[11px] sm:text-xs font-mono text-center"
          >
            <FaLinkedin size={16} className="shrink-0" /> linkedin.com/in/hariomjaiswal12
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.5 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted/60 hover:text-white transition-colors p-2"
        aria-label="Scroll to About section"
      >
        <FaArrowDown size={14} />
      </motion.a>
    </section>
  );
};

export default Hero;