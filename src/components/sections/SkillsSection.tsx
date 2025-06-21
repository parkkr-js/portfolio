import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: 'Languages', items: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'] },
  { category: 'Frameworks & Libraries', items: ['React', 'Next.js', 'Zustand', 'React Query', 'Framer Motion'] },
  { category: 'Styling', items: ['Tailwind CSS', 'Styled-components', 'Sass/SCSS'] },
  { category: 'Tools & Others', items: ['Git', 'GitHub', 'Figma', 'Vercel', 'Postman'] },
];

const SkillsSection: React.FC = () => {
  return (
    <motion.section 
      id="skills" 
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
      <div className="space-y-8">
        {skillsData.map((skillGroup) => (
          <div key={skillGroup.category}>
            <h3 className="text-xl font-semibold text-primary mb-4">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill) => (
                <span key={skill} className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection; 