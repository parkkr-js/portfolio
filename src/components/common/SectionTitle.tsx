import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <motion.h2
      className="text-3xl font-bold text-gray-100 mb-8 text-center lg:text-left"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.h2>
  );
};

export default SectionTitle; 