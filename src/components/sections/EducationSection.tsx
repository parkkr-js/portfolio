import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: '경북 IT 협업 동아리 PARD',
    period: '2023.03 - 2024.03',
    description: '1기 프론트엔드, 2기 서버파트장',
  },
  {
    institution: '한동 대학교',
    period: '2017.03 - 2025.02',
    description: '전산전자공학부',
  },
];

const EducationSection: React.FC = () => {
  return (
    <motion.section 
      id="education" 
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
      <div className="space-y-6 border-l-2 border-primary/30 pl-6">
        {educationData.map((edu, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-7 w-4 h-4 bg-primary rounded-full top-1"></div>
            <h3 className="text-xl font-semibold text-light">{edu.institution}</h3>
            <p className="text-primary font-medium my-1">{edu.period}</p>
            <p className="text-gray-400">{edu.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default EducationSection; 