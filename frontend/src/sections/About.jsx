import { motion } from 'framer-motion';
import Section from '../components/Section';
import Button from '../components/Button';
import TiltCard from '../components/TiltCard';
import { FaFileAlt, FaCode, FaLaptopCode, FaAward } from 'react-icons/fa';

const About = ({ onOpenResume }) => {
  const stats = [
    { label: 'Projects Built', value: '7+', icon: <FaCode className="text-primary" /> },
    { label: 'Internship Experience', value: '2', icon: <FaLaptopCode className="text-emerald-400" /> },
    { label: 'Certifications', value: '5+', icon: <FaAward className="text-cyan-400" /> },
  ];

  return (
    <Section
      id="about"
      heading="About Me — Developer Profile"
      subheading="Computer Science Undergraduate & Full-Stack MERN Developer driven by clean architecture and practical problem solving."
      label="// 01. ABOUT"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Avatar Tilt Card */}
        <div className="lg:col-span-5 flex justify-center">
          <TiltCard className="w-full max-w-sm p-6 text-center space-y-6">
            <div className="relative mx-auto w-48 h-48 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-primary/40 p-1.5 bg-gradient-to-tr from-primary/30 via-emerald-500/20 to-transparent shadow-glow">
              <img
                src="/hariom.jpg"
                alt="Hariom Jaiswal"
                className="w-full h-full object-cover object-top rounded-xl bg-surface-muted"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-30 pointer-events-none" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-display font-bold text-white">Hariom Jaiswal</h3>
              <p className="text-xs font-mono text-emerald-400">MERN Stack Developer</p>
              <p className="text-xs text-muted">Indore, Madhya Pradesh, India</p>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-center gap-2">
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted">
                B.Tech CSE (2023–2027)
              </span>
            </div>
          </TiltCard>
        </div>

        {/* Right Column: Bio & Core Competencies */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="space-y-4 text-muted text-base leading-relaxed">
            <p>
              I am <span className="text-white font-medium">Hariom Jaiswal</span>, a Computer Science undergraduate at <span className="text-white font-medium">Acropolis Institute of Technology and Research</span> (2023–2027) with a hands-on foundation in full-stack web development.
            </p>
            <p>
              During my internship at <span className="text-emerald-400 font-medium font-mono">Visiomatix Media Pvt. Ltd.</span>, I contributed to production-ready web applications, resolving landing page performance bottlenecks, designing RESTful APIs in Node.js/Express.js, and implementing database schemas in MongoDB.
            </p>
            <p>
              I take pride in bridging frontend user experiences built with React and Tailwind CSS with robust backend micro-architecture, JWT authentication, and AI capabilities using Google Gemini API.
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-4 rounded-xl border border-white/5 text-center space-y-1 min-w-0"
              >
                <div className="flex justify-center text-base mb-1">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-display font-bold text-white">{stat.value}</div>
                <div className="text-[11px] font-mono text-muted break-words">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Skill Focus Pills */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted">Core Focus Areas</h4>
            <div className="flex flex-wrap gap-2">
              {[
                'MERN Full-Stack',
                'RESTful API Engineering',
                'MongoDB & SQL Schema Design',
                'JWT Authentication',
                'Frontend Optimization',
                'Gemini AI Integrations',
              ].map((focus) => (
                <span
                  key={focus}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-gray-300"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-wrap gap-4">
            {onOpenResume && (
              <Button
                variant="primary"
                onClick={onOpenResume}
                icon={<FaFileAlt className="text-white" />}
              >
                View Full Resume
              </Button>
            )}
            <a href="#contact">
              <Button variant="outline">
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
