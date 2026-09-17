import { motion } from 'framer-motion';

const TimelineItem = ({
  title,
  organization,
  period,
  description,
  details,
  logo,
  type = 'experience',
  index = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-8 md:pl-10 pb-12 last:pb-0 group"
    >
      {/* Vertical Track Line */}
      <div className="absolute left-3 top-3 h-full w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent group-last:h-0" />

      {/* Glowing Circle Marker */}
      <div className={`absolute left-[7px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-background z-10 transition-all duration-300 group-hover:scale-125 ${
        type === 'experience'
          ? 'bg-primary border-primary shadow-[0_0_12px_rgba(99,102,241,0.8)]'
          : 'bg-emerald-400 border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]'
      }`} />

      {/* Content Card */}
      <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 group-hover:border-white/20 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div className="flex items-center gap-3.5">
            {logo && (
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 p-1.5 flex items-center justify-center shrink-0 shadow-md group-hover:border-primary/50 transition-colors bg-surface-muted">
                <img
                  src={logo}
                  alt={organization}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            )}
            <div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-sm font-medium text-emerald-400/90 font-mono mt-0.5">
                {organization}
              </p>
            </div>
          </div>

          <span className="self-start md:self-auto inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-muted">
            {period}
          </span>
        </div>

        {description && (
          <p className="text-muted text-sm md:text-base leading-relaxed mb-4">
            {description}
          </p>
        )}

        {details && details.length > 0 && (
          <ul className="space-y-2 mt-4 pt-4 border-t border-white/5">
            {details.map((item, idx) => (
              <li key={idx} className="text-xs md:text-sm text-muted/90 flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineItem;
