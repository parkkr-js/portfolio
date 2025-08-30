import { motion } from "framer-motion";

interface MobileHeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const MobileHeader = ({ activeSection, setActiveSection }: MobileHeaderProps) => {
  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gray-900 border-b border-gray-800 p-6"
    >
      {/* 프로필 정보 */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative">
          <div className="relative rounded-xl overflow-hidden shadow-lg w-16 h-16">
            <img
              src="/asset/img/profile.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 via-transparent to-transparent" />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary-500/10 rounded-full blur-sm" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-bold text-gray-100 truncate">박지성 Park Ji Sung</h1>
          <h2 className="text-sm text-gray-300 truncate">Software Engineer</h2>
          <p className="text-xs text-gray-400 truncate">
            IT 기술로 사람들의 문제를 해결하는 개발자가 되기 위해 성장하고 있습니다.
          </p>
        </div>
      </div>

      {/* 네비게이션 */}
      <nav className="relative">
        <div className="absolute inset-0 bg-gray-800/50 rounded-xl supports-[backdrop-filter]:backdrop-blur-sm" />
        <div className="relative flex space-x-1 p-1">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex-1 py-3 px-4 rounded-lg text-xs font-medium transition-all duration-300 relative overflow-hidden ${
                activeSection === item.id ? "text-white" : "text-gray-400 hover:text-gray-300"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
            >
              {activeSection === item.id && (
                <motion.div
                  className="absolute inset-0 rounded-lg bg-primary-500/20"
                  layoutId="activeTab"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10 font-medium">{item.label}</span>
              {activeSection === item.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                  layoutId="activeIndicator"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </nav>
    </motion.header>
  );
};

export default MobileHeader; 