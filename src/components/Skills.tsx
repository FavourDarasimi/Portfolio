import React from "react";
import htmlLogo from "../assets/html-5.png";
import cssLogo from "../assets/css-3.png";
import jsLogo from "../assets/js.png";
import tsLogo from "../assets/typescript.png";
import reactLogo from "../assets/react.svg";
import pythonLogo from "../assets/python.png";
import djangoLogo from "../assets/icons8-django-96.png";
import gitLogo from "../assets/git.png";
import SkillCard from "./SkillCard";

interface SkillsProps {
  skillsRef: React.RefObject<HTMLDivElement | null>;
}

const Skills: React.FC<SkillsProps> = ({ skillsRef }) => {
  const skills = [
    { skillName: "HTML", skillLogo: htmlLogo },
    { skillName: "CSS", skillLogo: cssLogo },
    { skillName: "JavaScript", skillLogo: jsLogo },
    { skillName: "TypeScript", skillLogo: tsLogo },
    { skillName: "React", skillLogo: reactLogo },
    { skillName: "Python", skillLogo: pythonLogo },
    { skillName: "Django", skillLogo: djangoLogo },
    { skillName: "Git", skillLogo: gitLogo },
  ];
  return (
    <div ref={skillsRef} className="py-20">
      <div>
        <h1 className="md:text-5xl text-3xl font-bold text-center pb-5">
          Skills &{" "}
          <span className="bg-gradient-to-r from-[#a855f7]  to-blue-500    bg-clip-text text-transparent">
            Expertise
          </span>
        </h1>
        <h1 className="md:text-[20px] text-[15px] md:mx-80 mx-2 text-gray-400 text-center pb-10">
          With a balnace of technical expertise and creative problem-solving, I
          enjoy turning complex challenges into clean, scalale and user-
          friendly solutions
        </h1>
      </div>

      <div className="h-[3px] w-52 mx-auto rounded-full bg-gradient-to-r from-[#a855f7] to-blue-500"></div>

      <div className="grid place-content-center pt-10">
        <div className="inline-grid md:grid-cols-4 grid-cols-3 md:gap-5 gap-2">
          {skills.map((skill) => (
            <SkillCard
              skillName={skill.skillName}
              skillLogo={skill.skillLogo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
