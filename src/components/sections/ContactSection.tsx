import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Rss } from 'lucide-react';

const contactInfo = [
    { icon: Mail, text: 'hello@aabid.com', href: 'mailto:hello@aabid.com' },
    { icon: Github, text: 'github.com/aabid', href: 'https://github.com/aabid' },
    { icon: Linkedin, text: 'linkedin.com/in/aabid', href: 'https://linkedin.com/in/aabid' },
    { icon: Rss, text: 'aabid.tech/blog', href: 'https://aabid.tech/blog' },
];

const ContactSection: React.FC = () => {
  return (
    <motion.section 
      id="contact" 
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-white mb-8">Contact</h2>
      <div className="space-y-4">
        {contactInfo.map((item, index) => (
          <a 
            key={index} 
            href={item.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-4 group"
          >
            <item.icon className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
            <span className="text-gray-300 group-hover:text-primary transition-colors">{item.text}</span>
          </a>
        ))}
      </div>
    </motion.section>
  );
};

export default ContactSection; 