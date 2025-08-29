import { motion } from "framer-motion";
import { SectionTitle } from "../common";

const Experience = () => {
  return (
    <section id="experience" className="mb-16 lg:mb-32 pt-8 lg:pt-16">
      <SectionTitle>Experience</SectionTitle>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8"
        >

           {/* 셀러맵 */}
           <div className="border-l-2 border-primary-500 pl-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
              <a
                  href="https://sellermap.co.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-primary-200"
                >
                셀러맵
                </a>
              </h3>
              <p className="text-primary-400 mb-1">
              Frontend Developer • 2025.03 - Present
           
              </p>
              <p className="text-gray-400 text-sm mb-4">
                공구·1인 쇼핑몰 셀러를 위한 판매 링크 게시 및 구매자 통계 제공 서비스
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Redux와 3계층 아키텍처로 확장·유지보수 용이한 상태 관리 체계 구축</li>
                <li>• Zod·neverthrow·Jest 기반 TDD 환경 설계 및 구현</li>
                <li>• Webpack Module Federation으로 MSA 기반 마이크로 프런트엔드 설계·통합</li>
                <li>• Protocol Buffers로 통합 API 명세 수립, CI 포맷 검증으로 일관성 확보</li>
                <li>• CI/CD 파이프라인으로 개발/운영 분리 배포 및 안정적 릴리스 운영</li>
                <li>• 활성 사용자 60명 중 3명 연간 구독(₩78,000/년) 전환으로 초기 수익화 지표 확보</li>
              </ul>
            </motion.div>
          </div>

          {/* PARD */}
          <div className="border-l-2 border-gray-700 pl-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
              PARD (경북 IT 연합동아리)
              </h3>
              <p className="text-primary-400 mb-1">
              Lead Developer (Backend) • 2023.03 - 2024.02
              </p>
              <p className="text-gray-400 text-sm mb-4">
                기획자, 디자이너, 개발자가 함께하는 경북 IT 연합동아리 운영
               
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 백엔드 파트 신설 및 파트장 역할 수행</li>
                <li>• 동아리원을 위한 Spring Boot & AWS 자료 제작, 세미나 진행</li>
                <li>• 아마존웹서비스코리아 EC2 일일 세미나 주최</li>
                <li>• 공식 웹사이트 제작 <a
                  href="https://we-pard.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary-300 hover:text-primary-200"
                >
                  PARD 공식 웹사이트
                </a></li>
              </ul>
            </motion.div>
          </div>

         

          {/* 메를로랩 (인턴십) */}
          <div className="border-l-2 border-gray-700 pl-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
              메를로랩
              </h3>
              <p className="text-primary-400 mb-1">Frontend Developer (Internship)• 2024.07 - 2024.08</p>
              <p className="text-gray-400 text-sm mb-4">IoT 디바이스 관리 시스템 개발</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 기존 테이블 UI 한계를 지적하고 도면 기반 GUI 방향 제시</li>
                <li>• React & TypeScript로 디바이스 위치 추적, 좌표 이동, 스케일링 구현</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 