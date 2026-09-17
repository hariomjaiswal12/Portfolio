import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import TiltCard from '../components/TiltCard';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCopy, FaCheck, FaExternalLinkAlt } from 'react-icons/fa';

const Profiles = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const profiles = [
    {
      icon: <FaGithub size={24} className="text-white" />,
      label: 'GitHub',
      value: 'hariomjaiswal12',
      link: 'https://github.com/hariomjaiswal12',
      color: 'hover:border-white/40',
      actionType: 'link'
    },
    {
      icon: <FaLinkedin size={24} className="text-blue-400" />,
      label: 'LinkedIn',
      value: 'hariomjaiswal12',
      link: 'https://linkedin.com/in/hariomjaiswal12',
      color: 'hover:border-blue-400/40',
      actionType: 'link'
    },
    {
      icon: <FaEnvelope size={24} className="text-primary" />,
      label: 'Email',
      value: 'omjaiswal942@gmail.com',
      link: 'mailto:omjaiswal942@gmail.com',
      color: 'hover:border-primary/40',
      actionType: 'copy',
      copyValue: 'omjaiswal942@gmail.com'
    },
    {
      icon: <FaPhone size={24} className="text-emerald-400" />,
      label: 'Phone',
      value: '+91-8770180357',
      link: 'tel:+918770180357',
      color: 'hover:border-emerald-400/40',
      actionType: 'copy',
      copyValue: '+918770180357'
    },
  ];

  const handleCopy = (value, index) => {
    navigator.clipboard.writeText(value);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <Section
      id="profiles"
      heading="Online Presence & Direct Profiles"
      subheading="Connect with me across developer networks or send a direct communication."
      label="// 07. PROFILES"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {profiles.map((profile, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TiltCard className={`p-6 text-center space-y-4 ${profile.color}`}>
              <div className="w-14 h-14 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                {profile.icon}
              </div>

              <div className="space-y-1">
                <h3 className="text-xs font-mono uppercase text-muted tracking-wider">
                  {profile.label}
                </h3>
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-white font-medium hover:text-primary transition-colors block truncate"
                >
                  {profile.value}
                </a>
              </div>

              <div className="pt-2 flex justify-center gap-2">
                {profile.actionType === 'copy' ? (
                  <button
                    onClick={() => handleCopy(profile.copyValue, index)}
                    className="w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-muted hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    {copiedIndex === index ? (
                      <>
                        <FaCheck className="text-emerald-400" size={12} /> Copied!
                      </>
                    ) : (
                      <>
                        <FaCopy size={12} /> Copy {profile.label}
                      </>
                    )}
                  </button>
                ) : (
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-muted hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt size={12} /> Visit Profile
                  </a>
                )}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Profiles;