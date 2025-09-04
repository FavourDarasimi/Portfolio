import React from "react";

interface SkillsProps {
  skillsRef: React.RefObject<HTMLDivElement | null>;
}

const Skills: React.FC<SkillsProps> = ({ skillsRef }) => {
  return (
    <div ref={skillsRef}>
      <h1>Skills</h1>
    </div>
  );
  <h1>Skills</h1>;
};

export default Skills;
