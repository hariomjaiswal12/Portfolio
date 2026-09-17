import Section from '../components/Section';
import TimelineItem from '../components/TimelineItem';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      organization: 'VKAPS IT Solutions Pvt. Ltd.',
      period: 'September 2026 – Present',
      logo: '/vkaps_logo.svg',
      description: 'Currently contributing to full-stack web applications, AI automation integrations, and scalable SaaS solutions in a high-growth tech environment.',
      details: [
        'Developing and optimizing full-stack web applications using MERN stack architecture.',
        'Integrating third-party APIs, AI automation workflows, and microservices.',
        'Building responsive, accessible frontend user interfaces with React and Tailwind CSS.',
        'Collaborating with engineering team members to design scalable database schemas and server endpoints.'
      ]
    },
    {
      title: 'MERN Stack Developer Intern',
      organization: 'Visiomatix Media Pvt. Ltd.',
      period: 'June 2026 – August 2026',
      logo: '/visiomatix_logo.png',
      description: 'Contributed to production-ready web applications, focusing on frontend performance optimization, component architecture, and backend API engineering.',
      details: [
        'Optimized company landing page by resolving responsive layout bottlenecks across desktop, tablet, and mobile browsers.',
        'Engineered RESTful backend APIs and database schemas for a Hospital Management Web Platform using Node.js, Express.js, and MongoDB.',
        'Constructed modular, reusable React.js components with clean state management.',
        'Integrated frontend components with server REST endpoints and validated API payloads.',
        'Identified and resolved bug tickets, improving overall application stability.',
        'Collaborated with cross-functional development team utilizing Git and GitHub version control.'
      ]
    }
  ];

  return (
    <Section
      id="experience"
      heading="Work Experience — Industry Journey"
      subheading="Hands-on professional software engineering experience in production web environments."
      label="// 02. EXPERIENCE"
    >
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            index={index}
            title={exp.title}
            organization={exp.organization}
            period={exp.period}
            logo={exp.logo}
            description={exp.description}
            details={exp.details}
            type="experience"
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
