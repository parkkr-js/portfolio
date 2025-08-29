import { motion } from "framer-motion";

interface NavItem {
  id: string;
  label: string;
}

interface NavigationProps {
  items: NavItem[];
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  className?: string;
}

const Navigation = ({ items, activeSection, onNavClick, className = "" }: NavigationProps) => {
  return (
    <motion.nav
      className={`space-y-2 lg:space-y-3 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {items.map((item, index) => (
        <motion.button
          key={item.id}
          onClick={() => onNavClick(item.id)}
          className={`flex items-center space-x-2 lg:space-x-4 py-2 lg:py-3 w-full text-left transition-all duration-300 rounded-lg px-3 lg:px-4 ${
            activeSection === item.id ? "text-gray-100" : "text-gray-500 hover:text-gray-300"
          }`}
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.03, ease: "easeOut" }}
        >
          <motion.div
            className={`w-8 lg:w-12 h-px ${
              activeSection === item.id ? "bg-primary-500" : "bg-gray-500"
            }`}
            animate={{
              width: activeSection === item.id ? 60 : 32,
            }}
            whileHover={{
              width: activeSection === item.id ? 48 : 40,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          <span className={`text-xs lg:text-sm font-medium ${activeSection === item.id ? 'font-semibold' : ''}`}>
            {item.label}
          </span>
          {activeSection === item.id && (
            <motion.div
              className="w-1.5 lg:w-2 h-1.5 lg:h-2 bg-primary-500 rounded-full ml-auto"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          )}
        </motion.button>
      ))}
    </motion.nav>
  );
};

export default Navigation; 