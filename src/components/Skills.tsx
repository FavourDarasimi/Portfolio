import React from "react";
import htmlLogo from "../assets/html-5.png";
import cssLogo from "../assets/css-3.png";
import jsLogo from "../assets/js.png";
import tsLogo from "../assets/typescript.png";
import reactLogo from "../assets/react.svg";
import pythonLogo from "../assets/python.png";
import djangoLogo from "../assets/icons8-django-96.png";
import gitLogo from "../assets/git.png";

interface SkillsProps {
  skillsRef: React.RefObject<HTMLDivElement | null>;
}

const Skills: React.FC<SkillsProps> = ({ skillsRef }) => {
  return (
    <div ref={skillsRef} className="py-20">
      <div>
        <h1 className="text-5xl font-bold text-center pb-5">
          Skills &{" "}
          <span className="bg-gradient-to-r from-[#a855f7]  to-blue-500    bg-clip-text text-transparent">
            Expertise
          </span>
        </h1>
        <h1 className="text-[20px] mx-80 text-gray-400 text-center pb-10">
          With a balnace of technical expertise and creative problem-solving, I
          enjoy turning complex challenges into clean, scalale and user-
          friendly solutions
        </h1>
      </div>

      <div className="h-[3px] w-52 mx-auto rounded-full bg-gradient-to-r from-[#a855f7] to-blue-500"></div>

      <div className="grid place-content-center pt-10">
        <div className="inline-grid grid-cols-4  gap-5">
          <div className="bg-secondary p-5 rounded-2xl flex flex-col items-center hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 group cursor-pointer">
            <img
              src={htmlLogo}
              alt=""
              className="w-12 pb-5 group-hover:scale-125 transition-transform duration-500"
            />
            <h1 className="text-center text-gray-400">HTML</h1>
          </div>

          <div className="bg-secondary p-5 rounded-2xl flex flex-col items-center hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 group cursor-pointer">
            <img
              src={cssLogo}
              alt=""
              className="w-12 pb-5 group-hover:scale-125 transition-transform duration-500"
            />
            <h1 className="text-center text-gray-400">CSS</h1>
          </div>

          <div className="bg-secondary p-5 rounded-2xl flex flex-col items-center hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 group cursor-pointer">
            <img
              src={jsLogo}
              alt=""
              className="w-12 pb-5 group-hover:scale-125 transition-transform duration-500"
            />
            <h1 className="text-center text-gray-400">JavaScript</h1>
          </div>

          <div className="bg-secondary p-5 rounded-2xl flex flex-col items-center hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 group cursor-pointer">
            <img
              src={tsLogo}
              alt=""
              className="w-12 pb-5 group-hover:scale-125 transition-transform duration-500"
            />
            <h1 className="text-center text-gray-400">TypeScript</h1>
          </div>

          <div className="bg-secondary p-5 rounded-2xl flex flex-col items-center hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 group cursor-pointer">
            <img
              src={reactLogo}
              alt=""
              className="w-12 pb-5 group-hover:scale-125 transition-transform duration-500"
            />
            <h1 className="text-center text-gray-400">React</h1>
          </div>

          <div className="bg-secondary p-5 rounded-2xl flex flex-col items-center hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 group cursor-pointer">
            <img
              src={pythonLogo}
              alt=""
              className="w-12 pb-5 group-hover:scale-125 transition-transform duration-500"
            />
            <h1 className="text-center text-gray-400">Python</h1>
          </div>

          <div className="bg-secondary p-5 rounded-2xl flex flex-col items-center hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 group cursor-pointer">
            <img
              src={djangoLogo}
              alt=""
              className="w-12 pb-5 group-hover:scale-125 transition-transform duration-500"
            />
            <h1 className="text-center text-gray-400">Django</h1>
          </div>

          <div className="bg-secondary p-5 rounded-2xl flex flex-col items-center hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 group cursor-pointer">
            <img
              src={gitLogo}
              alt=""
              className="w-12 pb-5 group-hover:scale-125 transition-transform duration-500"
            />
            <h1 className="text-center text-gray-400">Git</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
