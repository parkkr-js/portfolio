import React from 'react';
import { motion } from 'framer-motion';

const AboutMeSection: React.FC = () => {
  return (
    <motion.section 
      id="about" 
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-white mb-6">방문해주셔서 감사합니다.</h2>
      <div className="space-y-4 text-gray-300 leading-relaxed">
        <p>
          안녕하세요! 사용자 경험을 중시하는 프론트엔드 개발자 박지성입니다. 
          React와 TypeScript를 활용하여 인터랙티브하고 직관적인 웹 애플리케이션을 만드는 데 열정을 가지고 있습니다.
        </p>
        <p>
          새로운 기술을 배우고 적용하는 것을 즐기며, 동료들과의 협업을 통해 함께 성장하는 것을 중요하게 생각합니다. 
          깨끗하고 유지보수하기 좋은 코드를 작성하기 위해 항상 노력하고 있습니다.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutMeSection; 