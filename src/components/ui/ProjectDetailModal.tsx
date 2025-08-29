import React, { useState } from 'react';
import { Modal } from './Modal';
import { Project } from '../../types/project';
import { PugoNargoSection } from './projects/PugoNargoSection';

interface ProjectDetailModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // ESC 키로 이미지 모달 닫기
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

        {/* STAR 렌더링 */}
        <div>
          {project.star ? (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-500 mb-2">Situation</h4>
                <ul className="space-y-2 text-gray-300">
                  {project.star.situation.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary-500">•</span>
                      <span className="[&_strong]:text-gray-100" dangerouslySetInnerHTML={{ __html: s.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-500 mb-2">Task</h4>
                <ul className="space-y-2 text-gray-300">
                  {project.star.task.map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary-500">•</span>
                      <span className="[&_strong]:text-gray-100" dangerouslySetInnerHTML={{ __html: t.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-500 mb-2">Action</h4>
                <ul className="space-y-2 text-gray-300">
                  {project.star.action.map((a, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary-500">•</span>
                      <span className="[&_strong]:text-gray-100" dangerouslySetInnerHTML={{ __html: a.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-500 mb-2">Result</h4>
                <ul className="space-y-2 text-gray-300">
                  {project.star.result.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary-500">•</span>
                      <span className="[&_strong]:text-gray-100" dangerouslySetInnerHTML={{ __html: r.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    </li>
                  ))}
                </ul>
              </div>
              {/* stackReasons는 아래 Tech Stack 섹션에서 렌더링 */}
            </div>
          ) : (
          <div className="text-gray-300 leading-relaxed space-y-4">
              <p>{project.description}</p>
          </div>
          )}
        </div>

        {/* 이하 섹션 후단으로 이동: Current Status, Tech Stack */}

        {/* 프로젝트 이미지들 */}
        {project.slug === 'pugonargo' && (
          <PugoNargoSection onImageClick={handleImageClick} />
        )}

        {/* 문제 해결 과정 */}
        {project.problemSolving && project.problemSolving.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-blue-500 mb-3">Problem Solving</h3>
            <div className="space-y-6">
              {project.problemSolving.map((item, idx) => (
                <div key={idx} className="bg-gray-800/40 border border-gray-700 rounded-lg p-4 space-y-3">
                  <div>
                    <h4 className="text-gray-400">{item.problem}</h4>
                  </div>
                  {item.cause && (
                    <div>
                      <p className="text-gray-400">{item.cause}</p>
                    </div>
                  )}
                  {item.symptom && (
                    <div>
                      <p className="text-gray-400">{item.symptom}</p>
                    </div>
                  )}
                  {item.solution && (
                    <div>
                      <p className="text-gray-300">{item.solution}</p>
                    </div>
                  )}
                  {item.alternatives && item.alternatives.length > 0 && (
                    <div>
                      <div className="space-y-3">
                        {item.alternatives.map((alt, aIdx) => (
                          <div key={aIdx} className="bg-gray-900/40 border border-gray-700 rounded-md p-3">
                            <div className="text-gray-100 font-semibold">{alt.summary}</div>
                            {alt.description && (
                              <p className="text-gray-300 mt-1 whitespace-pre-line">{alt.description}</p>
                            )}
                            {alt.pros && alt.pros.length > 0 && (
                              <div className="mt-2">
                                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                                  {alt.pros.map((p, pIdx) => (
                                    <li key={pIdx}>{p}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {alt.cons && alt.cons.length > 0 && (
                              <div className="mt-2">
                                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                                  {alt.cons.map((c, cIdx) => (
                                    <li key={cIdx}>{c}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {item.adoptionReason && (() => {
                    const lines = item.adoptionReason.split('\n');
                    const title = lines[0] ?? '';
                    const points = lines.slice(1).filter((l) => l.trim().length > 0);
                    return (
                      <div className="mt-2 bg-gray-900/40 border border-gray-700 rounded-md p-3">
                        <div className="text-white font-semibold">{title}</div>
                        {points.length > 0 && (
                          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
                            {points.map((pt, i) => (
                              <li key={i}>{pt}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })()}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack: 사용 기술 스택 및 선정 이유 */}
        {project.star?.stackReasons && project.star.stackReasons.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-blue-500 mb-3">Tech Stack</h3>
            <ul className="space-y-2 text-gray-300">
              {project.star.stackReasons.map((s, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span className="[&_strong]:text-gray-100" dangerouslySetInnerHTML={{ __html: s.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.insights && project.insights.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-blue-500 mb-3">Insights</h3>
            <ul className="space-y-2 text-gray-300">
              {project.insights.map((i, iIdx) => (
                <li key={iIdx} className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  <span className="[&_strong]:text-gray-100" dangerouslySetInnerHTML={{ __html: i.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Current Status (하단) */}
        {project.currentStatus && (
          <div>
            <h3 className="text-lg font-semibold text-blue-500 mb-3">Current Status</h3>
            <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4">
              <p className="text-primary-300 font-medium">{project.currentStatus}</p>
            </div>
          </div>
        )}

        {/* 링크 버튼들 */}
        <div className="flex gap-4 pt-4 border-t border-gray-700">
          {project.github ? (
            Array.isArray(project.github) ? (
              project.github.map((url, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  {index === 0 ? `GitHub (Admin${project.githubPrivate ? ' · Private' : ''})` : `GitHub (Client${project.githubPrivate ? ' · Private' : ''})`}
                </a>
              ))
            ) : (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                {`GitHub${project.githubPrivate ? ' (Private)' : ''}`}
              </a>
            )
          ) : (
            project.githubPrivate ? (
              <span className="flex items-center gap-2 bg-gray-900 text-gray-400 px-4 py-2 rounded-lg border border-gray-700 cursor-not-allowed">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub (Private)
              </span>
            ) : null
          )}
          {project.external && (
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              웹사이트
            </a>
          )}
          {project.video && (
            <a
              href={project.video}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              시연 영상
            </a>
          )}
          {project.awardLink && (
            <a
              href={project.awardLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
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