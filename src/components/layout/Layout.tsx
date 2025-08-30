import { useState, useEffect, useRef } from "react";
import { Sidebar, MainContent, MobileHeader, MobileFooter } from "./index";

const Layout = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  // 마우스 움직임 감지 (데스크톱에서만)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const container = mobileScrollRef.current;
    if (!container) return;
    try {
      container.scrollTo({ top: 0, behavior: "auto" });
    } catch {
      // scrollTo 미지원 브라우저 대응
      container.scrollTop = 0;
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* 데스크톱 마우스 효과 */}
      <div
        className="fixed inset-0 pointer-events-none z-50 hidden lg:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(65, 103, 243, 0.1), transparent 40%)`,
        }}
      />
      
      {/* 데스크톱 레이아웃 */}
      <div className="hidden lg:flex min-h-screen">
        <div className="w-2/5 h-screen bg-gray-900">
          <Sidebar activeSection={activeSection} />
        </div>
        <div className="w-3/5 h-screen bg-gray-900">
          <MainContent setActiveSection={setActiveSection} activeSection={activeSection} />
        </div>
      </div>

      {/* 모바일 레이아웃 */}
      <div className="lg:hidden flex flex-col h-screen">
        <MobileHeader activeSection={activeSection} setActiveSection={setActiveSection} />
        <div ref={mobileScrollRef} className="flex-1 overflow-y-auto">
          <MainContent setActiveSection={setActiveSection} activeSection={activeSection} isMobile={true} />
        </div>
        <MobileFooter />
      </div>
    </div>
  );
};

export default Layout; 