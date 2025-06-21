import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, StickyNote } from 'lucide-react';

interface ProfileCardProps {
  name?: string;
  title?: string;
  description?: string;
  image?: string;
  links?: {
    github?: string;
    linkedin?: string;
    email?: string;
    blog?: string;
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name = "박지성",
  title = "Junior Frontend Developer",
  description = "사용자 경험을 중시하는 프론트엔드 개발자입니다. React와 TypeScript를 활용하여 깔끔하고 효율적인 웹 애플리케이션을 개발합니다.",
  image = "/asset/img/profile.jpeg",
  links = {
    github: "https://github.com/parkkr-js",
    linkedin: "https://linkedin.com",
    email: "mailto:parkkr.js@gmail.com",
    blog: "https://velog.io/@live_in_truth/posts"
  }
}) => {
  return (
    <motion.div 
        className="w-full max-w-sm bg-[#1e1b1a] text-light rounded-3xl p-6 shadow-2xl flex flex-col items-center text-center ring-1 ring-white/10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative w-40 h-40 mb-4">
        <div 
            className="absolute inset-0 border-2 border-dashed border-primary rounded-2xl"
        ></div>
        <img
          src={image}
          alt={`${name}의 프로필 사진`}
          className="rounded-2xl w-full h-full object-cover relative z-10"
        />
      </div>

      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-primary mt-1">{title}</p>
      
      <div className="mt-6 pt-6 w-full space-y-4">
        <p className="text-gray-400">
          {description}
        </p>

        <div className="flex justify-center gap-4">
          {links.github && (
            <a 
              href={links.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="GitHub 프로필"
            >
              <Github size={20} />
            </a>
          )}
          {links.linkedin && (
            <a 
              href={links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="LinkedIn 프로필"
            >
              <Linkedin size={20} />
            </a>
          )}
          {links.email && (
            <a 
              href={links.email} 
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="이메일 보내기"
            >
              <Mail size={20} />
            </a>
          )}
          {links.blog && (
            <a 
              href={links.blog} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="개발 블로그"
            >
              <StickyNote size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard; 