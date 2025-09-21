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
          <span className="text-primary-300">사람들의 문제를 IT 서비스로 해결</span>하는 데 가치를 두는 개발자 박지성입니다. <br/>2023년부터 다양한 프로젝트를 통해 협업 경험을 쌓아왔습니다.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-primary-300">React·TypeScript</span> 환경에서 <span className="text-primary-300">테스트 주도 개발</span>(TDD)을 적용하고, <br/>서비스 특성에 맞는 <span className="text-primary-300">확장성과 유지보수성</span>을 우선하는 아키텍처를 지향합니다. <br/>2023년부터 현재까지 PM·디자이너와 프로젝트를 꾸준히 함께하며 <br/>스타트업 협업 환경에 필요한 <span className="text-primary-300">커뮤니케이션</span>과 실행 역량을 다져왔고, <br/>협업 과정에서 팀원들이 <span className="text-primary-300">같은 목표</span>를 보고 제 생각이 팀원에게 명확히 전달되도록 늘 고민하고 있습니다.
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
          {' '}웹 서비스를 개발 중입니다. <br/>스타트업 환경에서 IT 서비스로 사람들의 <span className="text-primary-300">문제를 해결</span>하고 <br/>팀의 성장에 기여하는 <span className="text-primary-300">소프트웨어 엔지니어</span>를 목표로 합니다.
        </motion.p>

        
      </motion.div>
    </section>
  );
};

export default About; 


