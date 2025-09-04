import React from "react";

interface ProjectProps {
  projectsRef: React.RefObject<HTMLDivElement | null>;
}

const Projects: React.FC<ProjectProps> = ({ projectsRef }) => {
  return (
    <div className="bg-secondary" ref={projectsRef}>
      <h1>Project</h1>
    </div>
  );
};

export default Projects;
