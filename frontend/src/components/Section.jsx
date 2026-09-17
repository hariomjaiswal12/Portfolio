import { motion } from 'framer-motion';

const Section = ({
  children,
  id,
  className = '',
  heading,
  subheading,
  center = true,
  label
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`relative py-20 md:py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto ${className}`}
    >
      {heading && (
        <div className={`mb-16 md:mb-20 ${center ? 'text-center' : 'text-left'}`}>
          {label && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-primary tracking-widest uppercase mb-4 ${center ? 'mx-auto' : ''}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {label}
            </motion.div>
          )}

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-5">
            {heading}
          </h2>

          {subheading && (
            <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed mx-auto">
              {subheading}
            </p>
          )}
        </div>
      )}

      {children}
    </motion.section>
  );
};

export default Section;
