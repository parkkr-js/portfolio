import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types/project';

interface ProjectListProps {
  project: Project;
  onClick: () => void;
  index: number;
}

export const ProjectList: React.FC<ProjectListProps> = ({ project, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 p-4 sm:p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors duration-300 cursor-pointer"
      onClick={onClick}
    >
      {/* 프로젝트 이미지와 링크 컨테이너 */}
      <div className="flex-shrink-0 w-full sm:w-auto">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-primary-600/30 rounded-lg z-10"></div>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full sm:w-48 h-32 sm:h-28 rounded-lg object-cover border border-gray-600 mx-auto sm:mx-0 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-lg z-20"></div>
          <div className="absolute top-2 right-2 z-30">
            <div className="bg-black/30 backdrop-blur-sm rounded-full p-1">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* 이미지 하단 외부 링크 */}
        {(project.external || project.video) && (
          <div className="flex justify-center sm:justify-start mt-2">
            <a
              href={project.external || project.video}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>{project.external ? '웹으로 이동' : '시연 영상'}</span>
            </a>
          </div>
        )}
      </div>

      {/* 프로젝트 정보 */}
      <div className="flex-1 min-w-0 text-center sm:text-left">
        {/* 제목 + (아래) 배지 */}
        <div className="mb-2">
          <h3 className="text-base sm:text-lg font-semibold text-gray-100 hover:text-primary-400 transition-colors duration-300 text-center sm:text-left">
            {project.title}
          </h3>
          {(project.period || project.position) && (
            <div className="mt-1 flex items-center justify-center sm:justify-start gap-2 flex-wrap">
              {project.period && (
                <span className="px-2 py-0.5 bg-gray-800/60 text-gray-300 text-[10px] rounded border border-gray-700">
                  {project.period}
                </span>
              )}
              {project.position && (
                <span className="px-2 py-0.5 bg-primary-500/10 text-primary-300 text-[10px] rounded border border-primary-500/20">
                  {project.position}
                </span>
              )}
            </div>
          )}
        </div>

        {/* 설명*/}
        <p className="text-gray-300 text-sm leading-relaxed mb-3">
          {project.description}
        </p>

        {/* 기술 스택 */}
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start max-h-8 overflow-hidden">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 sm:px-3 py-1 bg-primary-500/10 text-primary-300 text-xs rounded-full border border-primary-500/20"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 sm:px-3 py-1 bg-primary-500/10 text-primary-300 text-xs rounded-full border border-primary-500/20">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}; 