import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import TiltCard from './TiltCard';

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    techStack,
    githubUrl,
    demoUrl,
    image,
    number,
    date,
    category
  } = project;

  return (
    <TiltCard className="group h-full flex flex-col justify-between">
      {/* Media Header */}
      <div className="relative h-56 md:h-60 overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

        {/* Number Badge */}
        <div className="absolute top-4 right-4 font-mono text-xs font-bold text-white bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full shadow-lg">
          {number}
        </div>

        {/* Category Pill */}
        <div className="absolute bottom-4 left-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-semibold bg-primary/10 border border-primary/20 backdrop-blur-md px-2.5 py-1 rounded-full">
            {category || 'Full Stack'}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 md:p-7 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-3">
          <div className="flex justify-between items-center text-xs font-mono text-muted">
            <span>{date || '2026'}</span>
          </div>

          <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          <p className="text-muted text-xs md:text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-4 pt-2 border-t border-white/5">
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="text-[11px] font-mono text-gray-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md group-hover:border-white/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex gap-3 pt-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/30 text-white text-xs font-mono font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaGithub size={14} /> GitHub
              </a>
            )}

            {demoUrl && demoUrl !== '#' && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-lg bg-primary hover:bg-primary/90 text-white text-xs font-mono font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-glow"
              >
                <FaExternalLinkAlt size={12} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </TiltCard>
  );
};

export default ProjectCard;