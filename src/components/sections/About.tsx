import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "../common";

const About = () => {
  return (
    <section id="about" className="mb-16 lg:mb-32 pt-8 lg:pt-16">
      <SectionTitle>About</SectionTitle>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-lg font-semibold text-white leading-relaxed space-y-6"
      >
    
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-primary-300">사람들의 문제를 IT 서비스로 해결</span>하는 데 가치를 두는 개발자 박지성입니다. <br/>2023년 상담심리학부에서 전산전자공학부로 전과한 뒤, 경북 IT 협업동아리 PARD 1기에서 <br/> 개발파트원으로 기획·디자인·개발자들과 <span className="text-primary-300">협업</span>을 처음 경험했습니다.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          서비스 완성을 위해 백엔드의 중요성을 확인하고, 다음 기수에 <span className="text-primary-300">백엔드 파트를 신설해</span> 파트장을 맡았습니다.<br/> 한 달간 <span className="text-primary-300">빠르게 학습</span>해 Spring Boot·AWS 커리큘럼과 자료를 제작하고 세미나를 진행했으며, <br/>AWS Korea와 EC2 일일 세미나를 주최했습니다. <br/>동시에 <span className="text-primary-300">운영진</span>으로서 50여 명의 동아리원에게 협업 경험을 공유하며 <span className="text-primary-300">직군 간 협업을 이끌었습니다</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-primary-300">React·TypeScript</span> 환경에서 <span className="text-primary-300">테스트 주도 개발</span>(TDD)을 적용하고, <br/>서비스 특성에 맞는 <span className="text-primary-300">확장성과 유지보수성</span>을 우선하는 아키텍처를 지향합니다. <br/>2023년부터 현재까지 PM·디자이너와 프로젝트를 꾸준히 함께하며 스타트업 협업 환경에 필요한 <span className="text-primary-300">커뮤니케이션</span>과 <br/>실행 역량을 다져왔고, 협업 과정에서 팀원들이 <span className="text-primary-300">같은 목표</span>를 보고 제 생각이 팀원에게 명확히 전달되도록 늘 고민하고 있습니다.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          2025년 3월부터는 PM·디자이너·백엔드 개발자와 함께{' '}
          <a
            href="https://sellermap.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-300 hover:text-primary-200 underline"
          >
            셀러맵(SaaS)
          </a>
          {' '}웹 서비스를 개발 중입니다. <br/>스타트업 환경에서 IT 서비스로 사람들의 <span className="text-primary-300">문제를 해결</span>하고 팀의 성장에 기여하는 <span className="text-primary-300">소프트웨어 엔지니어</span>를 목표로 합니다.
        </motion.p>

        
      </motion.div>
    </section>
  );
};

export default About; 


