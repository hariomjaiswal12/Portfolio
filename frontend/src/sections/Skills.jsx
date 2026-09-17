import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import TiltCard from '../components/TiltCard';
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaLaptopCode,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPostman,
  SiMysql,
  SiRedux,
  SiCplusplus,
} from 'react-icons/si';

const skillsCategories = [
  {
    category: 'Languages',
    icon: <FaCode className="text-primary" />,
    skills: [
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'C++', icon: <SiCplusplus className="text-blue-400" /> },
      { name: 'C', icon: <FaCode className="text-gray-400" /> },
      { name: 'SQL', icon: <SiMysql className="text-cyan-400" /> },
    ],
  },
  {
    category: 'Frontend',
    icon: <FaReact className="text-cyan-400" />,
    skills: [
      { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Redux Toolkit', icon: <SiRedux className="text-purple-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    ],
  },
  {
    category: 'Backend',
    icon: <FaServer className="text-emerald-400" />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-emerald-500" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
      { name: 'RESTful APIs', icon: <FaServer className="text-primary" /> },
      { name: 'JWT Authentication', icon: <FaLaptopCode className="text-violet-400" /> },
    ],
  },
  {
    category: 'Databases',
    icon: <FaDatabase className="text-emerald-400" />,
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="text-emerald-500" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
      { name: 'MongoDB Atlas', icon: <SiMongodb className="text-emerald-400" /> },
    ],
  },
  {
    category: 'Tools & Ecosystem',
    icon: <FaGitAlt className="text-orange-400" />,
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
      { name: 'GitHub', icon: <FaGithub className="text-white" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
      { name: 'VS Code', icon: <FaCode className="text-blue-400" /> },
    ],
  },
  {
    category: 'Fundamentals',
    icon: <FaLaptopCode className="text-purple-400" />,
    skills: [
      { name: 'Data Structures & Algorithms', icon: <FaCode className="text-primary" /> },
      { name: 'Object-Oriented Programming (OOPs)', icon: <FaLaptopCode className="text-emerald-400" /> },
      { name: 'Database Management (DBMS)', icon: <FaDatabase className="text-cyan-400" /> },
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Languages', 'Frontend', 'Backend', 'Databases', 'Tools & Ecosystem', 'Fundamentals'];

  const filteredCategories = activeTab === 'All'
    ? skillsCategories
    : skillsCategories.filter((cat) => cat.category === activeTab);

  return (
    <Section
      id="skills"
      heading="Technical Toolkit & Core Skills"
      subheading="Engineering languages, frameworks, databases, and developer utilities in my tech stack."
      label="// 05. SKILLS"
    >
      <div className="space-y-10">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-mono rounded-full border transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-primary text-white border-primary shadow-glow'
                  : 'bg-white/[0.03] text-muted border-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid Matrix */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCategories.map((group) => (
              <motion.div
                key={group.category}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <TiltCard className="p-6 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-lg">
                        {group.icon}
                      </div>
                      <h3 className="text-lg font-display font-bold text-white">
                        {group.category}
                      </h3>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {group.skills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 hover:border-primary/50 hover:bg-white/[0.08] transition-all group/skill"
                        >
                          <span className="text-base shrink-0 group-hover/skill:scale-110 transition-transform">
                            {skill.icon}
                          </span>
                          <span className="text-xs font-mono text-gray-200">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
};

export default Skills;
