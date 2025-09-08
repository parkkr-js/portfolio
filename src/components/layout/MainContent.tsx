import { useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { About, Experience, Projects } from "../sections";

interface MainContentProps {
  setActiveSection: (section: string) => void;
  activeSection?: string;
  isMobile?: boolean;
}

const MainContent = ({ setActiveSection, activeSection = "about", isMobile = false }: MainContentProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 스크롤 이벤트 핸들러 (모바일 제외)
  const handleScroll = useCallback(() => {
    if (!containerRef.current || isMobile) return;

    const sections = ["about", "experience", "projects"];
    const containerTop = containerRef.current.offsetTop;
    const scrollTop = containerRef.current.scrollTop;

    for (let i = sections.length - 1; i >= 0; i--) {
      const sectionId = sections[i];
      const element = document.getElementById(sectionId);
      
      if (element) {
        const elementTop = element.offsetTop - containerTop;
        const elementHeight = element.offsetHeight;
        
        if (scrollTop >= elementTop - 100 && scrollTop < elementTop + elementHeight - 100) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  }, [setActiveSection, isMobile]);

  // 스크롤 이벤트 리스너 등록 (모바일 제외)
  useEffect(() => {
    if (isMobile) return;

    const container = containerRef.current;
    if (!container) return;

    const timer = setTimeout(() => {
      handleScroll();
    }, 100);
    
    container.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      clearTimeout(timer);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, isMobile]);

  // 모바일 레이아웃
  if (isMobile) {
    return (
      <div className="w-full">
        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          className="w-full px-4 py-6"
        >
          <div className={activeSection === "about" ? "" : "hidden"} aria-hidden={activeSection !== "about"}>
            <About />
          </div>
          <div className={activeSection === "experience" ? "" : "hidden"} aria-hidden={activeSection !== "experience"}>
            <Experience />
          </div>
          <div className={activeSection === "projects" ? "" : "hidden"} aria-hidden={activeSection !== "projects"}>
            <Projects />
          </div>
        </motion.div>
      </div>
    );
  }

  // 데스크톱 레이아웃
  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full h-full overflow-y-auto scroll-smooth"
    >
      <div className="w-full pr-12 py-12">
        <About />
        <Experience />
        <Projects />
        <footer className="mt-16 border-t border-gray-800 pt-6 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} 박지성 Park Ji Sung. All rights reserved.</p>
        </footer>
      </div>
    </motion.div>
  );
};

export default MainContent; 