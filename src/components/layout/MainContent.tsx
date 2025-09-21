import { useEffect, useCallback, useRef, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";

const About = lazy(() => import("../sections/About"));
const Experience = lazy(() => import("../sections/Experience"));
const Projects = lazy(() => import("../sections/Projects"));

interface MainContentProps {
  setActiveSection: (section: string) => void;
  activeSection?: string;
  isMobile?: boolean;
}

const MainContent = ({ setActiveSection, activeSection = "about", isMobile = false }: MainContentProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const experienceSentinelRef = useRef<HTMLDivElement>(null);
  const projectsSentinelRef = useRef<HTMLDivElement>(null);
  const [shouldMountExperience, setShouldMountExperience] = useState<boolean>(false);
  const [shouldMountProjects, setShouldMountProjects] = useState<boolean>(false);

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

  // 데스크톱: 섹션 근접 시점에만 마운트 (IntersectionObserver)
  useEffect(() => {
    if (isMobile) return;
    const root = containerRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (entry.target === experienceSentinelRef.current) {
            setShouldMountExperience(true);
          }
          if (entry.target === projectsSentinelRef.current) {
            setShouldMountProjects(true);
          }
        }
      },
      { root, rootMargin: "400px 0px 400px 0px", threshold: 0 }
    );

    if (experienceSentinelRef.current) observer.observe(experienceSentinelRef.current);
    if (projectsSentinelRef.current) observer.observe(projectsSentinelRef.current);

    return () => observer.disconnect();
  }, [isMobile]);

  // 모바일 레이아웃
  if (isMobile) {
    return (
      <div className="w-full">
        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          className="w-full px-4 py-6"
        >
          <Suspense
            fallback={<div className="max-w-4xl mx-auto animate-pulse text-gray-500">로딩 중…</div>}
          >
            {activeSection === "about" && <About />}
            {activeSection === "experience" && <Experience />}
            {activeSection === "projects" && <Projects />}
          </Suspense>
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
        <Suspense fallback={<div className="h-24 w-full animate-pulse bg-gray-800/40 rounded" />}> 
          <About />
        </Suspense>

        <div ref={experienceSentinelRef} />
        {shouldMountExperience ? (
          <Suspense fallback={<div className="h-24 w-full mt-8 animate-pulse bg-gray-800/40 rounded" />}> 
            <Experience />
          </Suspense>
        ) : (
          <div className="h-24 w-full mt-8 animate-pulse bg-gray-800/40 rounded" aria-hidden />
        )}

        <div ref={projectsSentinelRef} />
        {shouldMountProjects ? (
          <Suspense fallback={<div className="h-24 w-full mt-8 animate-pulse bg-gray-800/40 rounded" />}> 
            <Projects />
          </Suspense>
        ) : (
          <div className="h-24 w-full mt-8 animate-pulse bg-gray-800/40 rounded" aria-hidden />
        )}
        <footer className="mt-16 border-t border-gray-800 pt-6 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} 박지성 Park Ji Sung. All rights reserved.</p>
          <a
            href="https://github.com/parkkr-js/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-primary-400 hover:text-primary-300 underline"
          >
            GitHub Source
          </a>
        </footer>
      </div>
    </motion.div>
  );
};

export default MainContent; 