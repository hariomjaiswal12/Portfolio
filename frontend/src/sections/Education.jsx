import Section from '../components/Section';
import TimelineItem from '../components/TimelineItem';

const Education = () => {
  const education = [
    {
      title: 'B.Tech in Computer Science & Engineering',
      organization: 'Acropolis Institute of Technology and Research, Indore',
      period: '2023 – 2027',
      description: 'Focusing on core software engineering principles, algorithms, data structures, database management systems, and full-stack web development.',
      details: ['Current Grade: CGPA 7.27', 'Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks'],
      type: 'education'
    },
    {
      title: 'Class XII / Higher Secondary School Certificate (HSC)',
      organization: 'RRMB Gujarati S School, Indore (MP Board)',
      period: '2022',
      description: 'Completed higher secondary education with major concentration in Physics, Chemistry, and Mathematics (PCM).',
      details: ['Score: 85.4% Marks'],
      type: 'education'
    }
  ];

  return (
    <Section
      id="education"
      heading="Education & Academic Background"
      subheading="Foundational academic foundation in Computer Science and Software Engineering."
      label="// 03. EDUCATION"
    >
      <div className="max-w-3xl mx-auto">
        {education.map((edu, index) => (
          <TimelineItem
            key={index}
            index={index}
            title={edu.title}
            organization={edu.organization}
            period={edu.period}
            description={edu.description}
            details={edu.details}
            type="education"
          />
        ))}
      </div>
    </Section>
  );
};

export default Education;
