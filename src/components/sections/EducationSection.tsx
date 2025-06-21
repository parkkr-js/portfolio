import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: '멋쟁이사자처럼 FE 스쿨',
    period: '2023.09 - 2024.03',
    description: 'React, Next.js, TypeScript 기반의 프론트엔드 심화 과정 수료',
  },
  {
    institution: 'OO 대학교',
    period: '2018.03 - 2023.08',
    description: '컴퓨터공학과 졸업 (학점: 3.8 / 4.5)',
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