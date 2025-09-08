import React, { useState } from 'react';
import { Modal } from './Modal';
import { Project } from '../../types/project';
import { PugoNargoSection } from './projects/PugoNargoSection';
import { Info, ListChecks, Boxes, Wrench, Trophy, Bug, Lightbulb, Activity, Github, Globe } from 'lucide-react';
import { Section } from './projects/ProjectDetail/Section';
import { BulletList } from './projects/ProjectDetail/TextBlocks';
import { ProblemCard } from './projects/ProjectDetail/ProblemCard';

interface ProjectDetailModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal = ({ project, isOpen, onClose }: ProjectDetailModalProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);


  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.serviceName}>
      <div className="space-y-6">
        {(project.period || project.position) && (
          <div className="flex flex-wrap gap-2">
            {project.period && (
              <span className="px-2 py-1 bg-gray-800/60 text-gray-200 text-xs rounded border border-gray-700">
                {project.period}
              </span>
            )}
            {project.position && (
              <span className="px-2 py-1 bg-primary-500/10 text-primary-300 text-xs rounded border border-primary-500/20">
                {project.position}
              </span>
            )}
          </div>
        )}
        {/* 프로젝트 이미지 */}
        <div className="relative rounded-xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-primary-600/30 z-10"></div>
          <img
            src={project.image}
            alt={project.serviceName}
            className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
              <h4 className="text-white font-semibold text-sm">{project.subtitle}</h4>
            </div>
          </div>
        </div>

        {/* SellerMap extended sections (readable layout) */}
        <div className="space-y-4 text-white">
          {project.background && project.background.length > 0 && (
            <Section title="Background" icon={<Info className="w-5 h-5 text-blue-400" />}>
              <BulletList items={project.background} />
            </Section>
          )}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <Section title="Key Features" icon={<ListChecks className="w-5 h-5 text-green-400" />}>
              <BulletList items={project.keyFeatures} />
            </Section>
          )}
          {project.architecture && project.architecture.length > 0 && (
            <Section title="Architecture" icon={<Boxes className="w-5 h-5 text-purple-400" />}>
              <BulletList items={project.architecture} />
            </Section>
          )}
          {project.stackDetail && project.stackDetail.length > 0 && (
            <Section title="Stack" icon={<Wrench className="w-5 h-5 text-orange-400" />}>
              <BulletList items={project.stackDetail} />
            </Section>
          )}
          {project.results && project.results.length > 0 && (
            <Section title="Result" icon={<Trophy className="w-5 h-5 text-yellow-400" />}>
              <BulletList items={project.results} />
            </Section>
          )}
        </div>

        {/* 이하 섹션 후단으로 이동: Current Status, Tech Stack */}

        {/* 프로젝트 이미지들 */}
        {project.slug === 'pugonargo' && (
          <PugoNargoSection onImageClick={handleImageClick} />
        )}

        {/* 문제 해결 과정 */}
        {project.problemSolving && project.problemSolving.length > 0 && (
          <Section title="Problem Solving" icon={<Bug className="w-5 h-5 text-blue-500" />}>
            <div className="space-y-6">
              {project.problemSolving.map((item, idx) => (
                <ProblemCard
                  key={idx}
                  problem={item.problem}
                  symptom={item.symptom}
                  cause={item.cause}
                  solution={item.solution}
                  result={item.result}
                  alternatives={item.alternatives}
                  adoptionReason={item.adoptionReason}
                />
              ))}
            </div>
          </Section>
        )}

        {/* Tech Stack: 사용 기술 스택 및 선정 이유 */}
        {project.star?.stackReasons && project.star.stackReasons.length > 0 && (
          <Section title="Tech Stack" icon={<Wrench className="w-5 h-5 text-orange-400" />}>
            <BulletList items={project.star.stackReasons} />
          </Section>
        )}

        {project.insights && project.insights.length > 0 && (
          <Section title="Insights" icon={<Lightbulb className="w-5 h-5 text-green-400" />}>
            <BulletList items={project.insights} />
          </Section>
        )}

        {/* Current Status (하단) */}
        {project.currentStatus && (
          <Section title="Current Status" icon={<Activity className="w-5 h-5 text-blue-500" />}>
            <p className="text-primary-300 font-medium">{project.currentStatus}</p>
          </Section>
        )}

        {/* 링크 버튼들 */}
        <div className="flex gap-4 pt-4 border-t border-gray-700">
          {typeof project.github === 'string' ? (
            <a
              href={project.github as string}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
              {`GitHub${project.githubPrivate ? ' (Private)' : ''}`}
            </a>
          ) : Array.isArray(project.github) ? (
            project.github.map((url, index) => (
              <a
                key={index}
                href={url as string}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
                {index === 0 ? `GitHub (Admin${project.githubPrivate ? ' · Private' : ''})` : `GitHub (Client${project.githubPrivate ? ' · Private' : ''})`}
              </a>
            ))
          ) : (
            project.githubPrivate ? (
              <span className="bg-gray-900 text-gray-400 px-4 py-2 rounded-lg border border-gray-700 cursor-not-allowed">
                GitHub (Private)
              </span>
            ) : null
          )}
          {project.external && (
            <a
              href={project.external as string}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              <Globe className="w-5 h-5" />
              웹사이트
            </a>
          )}
          {project.video && (
            <a
              href={project.video as string}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              시연 영상
            </a>
          )}
          {project.awardLink && (
            <a
              href={project.awardLink as string}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              Award
            </a>
          )}
        </div>
      </div>

      {/* 이미지 모달 */}
      {selectedImage && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center">
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <img
              src={selectedImage}
              alt="확대된 이미지"
              className={`w-auto h-auto max-w-full max-h-full object-contain ${
                selectedImage.includes('운행일지') || 
                selectedImage.includes('거래내역엑셀시트') || 
                selectedImage.includes('배차관리엑셀시트')
                  ? 'filter blur-[3px]'
                  : ''
              }`}
            />
                  <button
        onClick={closeImageModal}
        className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-200 z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
          </div>
        </div>
      )}
    </Modal>
  );
}; 