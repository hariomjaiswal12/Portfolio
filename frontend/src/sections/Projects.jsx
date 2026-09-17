import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

const projectsData = [
  {
    number: '01',
    title: 'StudyNotion EdTech Platform',
    description: 'A comprehensive full-stack EdTech platform enabling students to browse and purchase courses while providing instructors with tools to create, manage, and monetize educational content.',
    date: '2026',
    category: 'Full-Stack',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/hariomjaiswal12/StudyNotion',
    demoUrl: 'https://study-notion-one-olive.vercel.app/',
    image: '/study_notion_preview.jpg'
  },
  {
    number: '02',
    title: 'AI-Guided Interview Prep',
    description: 'An AI-powered interview preparation platform using Google Gemini API to generate tailored technical interview questions, simulate real-time mock experiences, and evaluate answers.',
    date: '2026',
    category: 'AI / Full-Stack',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API'],
    githubUrl: 'https://github.com/hariomjaiswal12/AI-Interview-Prep',
    demoUrl: 'https://ai-interview-prep-ten-tau.vercel.app',
    image: '/ai_interview_prep_preview.jpg'
  },
  {
    number: '03',
    title: 'FoodHub Order Platform',
    description: 'A full-stack food delivery web application featuring user authentication, interactive cart management, order status tracking, and structured backend API endpoints.',
    date: '2026',
    category: 'Full-Stack',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    githubUrl: 'https://github.com/hariomjaiswal12/FoodHub',
    demoUrl: '#',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: '04',
    title: 'Appointy Doctor Booking',
    description: 'A doctor appointment booking web application built with MERN stack to streamline patient schedule management and healthcare service operations.',
    date: '2026',
    category: 'Full-Stack',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    githubUrl: 'https://github.com/hariomjaiswal12/Appointy',
    demoUrl: '#',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: '05',
    title: 'AI Chatbot Experience',
    description: 'A modern AI-driven chat application engineered with Next.js and integrated with Google Gemini API for intelligent, real-time conversational streaming and markdown rendering.',
    date: '2026',
    category: 'AI / SaaS',
    techStack: ['Next.js', 'Gemini API', 'Tailwind CSS', 'React Markdown'],
    githubUrl: 'https://github.com/hariomjaiswal12/ai-chatbot-nextjs',
    demoUrl: '#',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: '06',
    title: 'Product Management System',
    description: 'A comprehensive product management portal providing full CRUD functionality with secure JWT authentication, role authorization, and MongoDB data management.',
    date: '2025',
    category: 'Full-Stack',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/hariomjaiswal12/product-management',
    demoUrl: '#',
    image: '/product_management_preview.jpg'
  },
  {
    number: '07',
    title: 'Task Manager App',
    description: 'A full-stack task management application utilizing React and Supabase for real-time user authentication, task organization, and persistent data storage.',
    date: '2025',
    category: 'Full-Stack',
    techStack: ['React.js', 'Supabase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/hariomjaiswal12/react-supabase-task-manager',
    demoUrl: '#',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop'
  }
];

const categories = ['All', 'Full-Stack', 'AI / Full-Stack', 'AI / SaaS'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <Section
      id="projects"
      heading="Featured Projects Showcase"
      subheading="Curated full-stack web applications, AI integrations, and software engineering projects."
      label="// 04. PROJECTS"
    >
      <div className="space-y-10">
        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-mono rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-white border-primary shadow-glow'
                  : 'bg-white/[0.03] text-muted border-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.number}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
};

export default Projects;
