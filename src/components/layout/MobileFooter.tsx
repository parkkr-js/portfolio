import { motion } from "framer-motion";
import { SocialLinks } from "../common";
import { socialLinks } from "../../data/socialLinks";

const MobileFooter = () => {
  

 

  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      className="bg-gray-900 border-t border-gray-800 p-4"
    >
      <SocialLinks links={socialLinks} />
      
      <div className="text-center mt-3">
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} 박지성 Park Ji Sung. All rights reserved.</p>
        <a
          href="https://github.com/parkkr-js/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-1 text-xs text-primary-400 hover:text-primary-300 underline"
        >
          GitHub Source
        </a>
      </div>
    </motion.footer>
  );
};

export default MobileFooter; 