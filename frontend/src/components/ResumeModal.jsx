import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaTimes, FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative w-full max-w-3xl glass-panel rounded-2xl p-6 md:p-8 z-10 border border-white/10 shadow-2xl max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex justify-between items-center pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                <FaFileAlt size={20} />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  Hariom Jaiswal — Resume
                </h3>
                <p className="text-xs text-muted font-mono">Full Stack / MERN Stack Developer</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-muted hover:text-white transition-colors rounded-lg hover:bg-white/10"
              aria-label="Close Modal"
            >
              <FaTimes size={18} />
            </button>
          </div>

          {/* Resume Overview Cards */}
          <div className="py-6 space-y-6">
            <div className="bg-surface-card p-5 rounded-xl border border-white/5 space-y-3">
              <h4 className="text-sm font-mono text-primary uppercase tracking-wider">
                Executive Summary
              </h4>
              <p className="text-muted text-sm leading-relaxed">
                Computer Science undergraduate (2023–2027) with hands-on internship experience as a MERN Stack Developer. Proficient in building full-stack web applications using React.js, Node.js, Express.js, MongoDB, RESTful APIs, and Google Gemini AI integrations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-surface-card p-4 rounded-xl border border-white/5 space-y-2">
                <span className="text-xs font-mono text-emerald-400">KEY STRENGTHS</span>
                <ul className="text-xs text-muted space-y-1.5 list-disc list-inside">
                  <li>Full Stack Web Development (MERN)</li>
                  <li>RESTful API & Database Architecture</li>
                  <li>AI API Integration (Gemini AI)</li>
                  <li>Frontend Performance Optimization</li>
                </ul>
              </div>

              <div className="bg-surface-card p-4 rounded-xl border border-white/5 space-y-2">
                <span className="text-xs font-mono text-cyan-400">EDUCATION & EXPERIENCE</span>
                <p className="text-xs text-foreground font-medium">B.Tech CSE — Acropolis Institute (7.27 CGPA)</p>
                <p className="text-xs text-muted">MERN Intern — Visiomatix Media Pvt. Ltd.</p>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10 justify-end">
            <a
              href="https://github.com/hariomjaiswal12"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg border border-white/10 text-xs font-medium text-muted hover:text-foreground hover:border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <FaExternalLinkAlt size={12} /> View GitHub Profile
            </a>
            <a
              href="/resume.pdf"
              download="Hariom_Jaiswal_Resume.pdf"
              className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-xs font-medium text-white transition-all flex items-center justify-center gap-2 shadow-glow"
              onClick={(e) => {
                // If static resume file isn't uploaded yet, notify gracefully
                fetch('/resume.pdf', { method: 'HEAD' }).then((res) => {
                  if (!res.ok) {
                    alert('Resume PDF will download when uploaded to public directory. GitHub link opened above!');
                  }
                });
              }}
            >
              <FaDownload size={12} /> Download PDF Resume
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
