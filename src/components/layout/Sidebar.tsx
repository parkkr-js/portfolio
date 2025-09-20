import { motion } from "framer-motion";
import { Navigation } from "../ui";
import { SocialLinks } from "../common";
import { socialLinks } from "../../data/socialLinks";

interface SidebarProps {
  activeSection: string;
}

const Sidebar = ({ activeSection }: SidebarProps) => {
  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
  ];

 

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full h-full bg-gray-900 flex flex-col p-12 overflow-hidden"
    >
      <div className="space-y-6 shrink-0">
        <motion.h1
          className="w-72 text-3xl font-bold text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          박지성 Park Ji Sung
        </motion.h1>
        
        <motion.h2
          className="w-72 text-xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          Software Engineer
        </motion.h2>
        
        <motion.p
          className="w-72 text-base text-gray-400 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          IT 기술로 사람들의 문제를 해결하는 <br/>개발자가 되기 위해 성장하고 있습니다.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-64 h-56">
              <img
                src="/asset/img/profile.webp"
                alt="Profile"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 via-transparent to-transparent" />
            </div>
            
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-primary-500/10 rounded-full blur-xl" />
            <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-primary-500/5 rounded-full blur-2xl" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2 max-w-xs">
            {[
              "TypeScript",
              "React",
              "Next.js",
              "MySQL",
              "Spring Boot",
              "AWS",
              "Git"
            ].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-primary-500/10 text-primary-300 text-[11px] rounded-full border border-primary-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="shrink-0 mt-8">
        <Navigation 
          items={navItems}
          activeSection={activeSection}
          onNavClick={handleNavClick}
        />
      </div>

      <div className="shrink-0 mt-16">
        <SocialLinks links={socialLinks} />
      </div>
    </motion.div>
  );
};

export default Sidebar; 