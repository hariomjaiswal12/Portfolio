import { motion } from 'framer-motion';
import Section from '../components/Section';
import TiltCard from '../components/TiltCard';
import { FaTrophy, FaMedal, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { SiPostman, SiMongodb } from 'react-icons/si';

const Achievements = () => {
  const achievements = [
    {
      title: 'NPTEL — Database Management Systems',
      issuer: 'National Programme on Technology Enhanced Learning (NPTEL - IIT Kharagpur)',
      description: 'Achieved Elite Rank status in the national examination for Database Management Systems.',
      year: '2024',
      badge: 'Elite Rank',
      link: 'https://www.linkedin.com/in/hariomjaiswal12/details/certifications/',
      icon: <FaCertificate className="text-yellow-400" />
    },
    {
      title: 'Postman API Student Expert',
      issuer: 'Postman',
      description: 'Certified in API request construction, parameters, authorization headers, tests, and mock server workflows.',
      year: '2024',
      badge: 'Certified',
      link: 'https://www.linkedin.com/in/hariomjaiswal12/details/certifications/',
      icon: <SiPostman className="text-orange-400" />
    },
    {
      title: 'Full Stack MERN Web Development',
      issuer: 'Online Professional Certification',
      description: 'Comprehensive certification covering frontend React.js, backend Node.js & Express.js, MongoDB database modeling, and REST APIs.',
      year: '2024',
      badge: 'Full Stack',
      link: 'https://www.linkedin.com/in/hariomjaiswal12/details/certifications/',
      icon: <FaCertificate className="text-primary" />
    },
    {
      title: 'DBMS Project Competition',
      issuer: 'Acropolis Institute of Technology and Research',
      description: 'Secured 3rd rank for designing, modeling, and demonstrating a relational database management project.',
      year: '2023',
      badge: 'Rank 3',
      link: 'https://www.linkedin.com/in/hariomjaiswal12/',
      icon: <FaTrophy className="text-emerald-400" />
    },
    {
      title: 'Data Structures & Algorithms in C++',
      issuer: 'Technical Certification',
      description: 'Mastery in core computer science fundamentals, algorithmic efficiency, memory management, and problem solving in C++.',
      year: '2023',
      badge: 'Core CS',
      link: 'https://www.linkedin.com/in/hariomjaiswal12/details/certifications/',
      icon: <FaMedal className="text-cyan-400" />
    }
  ];

  return (
    <Section
      id="achievements"
      heading="Achievements & Certifications"
      subheading="Recognitions, industry certifications, and academic milestones from LinkedIn and NPTEL."
      label="// 06. ACHIEVEMENTS & CERTIFICATIONS"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {achievements.map((ach, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TiltCard className="p-6 h-full flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl shrink-0">
                    {ach.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium">
                      {ach.badge}
                    </span>
                    <span className="text-xs font-mono text-muted bg-white/5 px-2.5 py-1 rounded-full">
                      {ach.year}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-display font-bold text-white">
                    {ach.title}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400">
                    {ach.issuer}
                  </p>
                </div>

                <p className="text-muted text-xs leading-relaxed">
                  {ach.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-muted">
                  <FaMedal className="text-primary" /> Verified Badge
                </span>
                <a
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-white transition-all flex items-center gap-1.5"
                >
                  Credential <FaExternalLinkAlt size={10} />
                </a>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;
