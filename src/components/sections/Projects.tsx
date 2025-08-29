import React, { useState } from "react";
import { SectionTitle } from "../common";
import { ProjectList, ProjectDetailModal } from "../ui";
import { Project } from "../../types/project";
import { pugoNargoProject } from "../../data/pugonargo";
import { sellerMapProject } from "../../data/sellermap";
import { npmHubProject } from "../../data/npmhub";
import { studentUnionAdminProject } from "../../data/studentUnion";
import { pardWebsiteProject } from "../../data/pard";
import { ossMovieApiProject } from "../../data/ossExample";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [sellerMapProject, pugoNargoProject, studentUnionAdminProject, npmHubProject, pardWebsiteProject, ossMovieApiProject];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="mb-16 lg:mb-32 pt-8 lg:pt-16">
      <SectionTitle>Projects</SectionTitle>

      <div className="space-y-4 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <ProjectList
            key={index}
            project={project}
            onClick={() => handleProjectClick(project)}
            index={index}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default Projects; 