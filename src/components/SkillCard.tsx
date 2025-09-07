import React from "react";

interface SkillCardProps {
  skillName: string;
  skillLogo: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skillName, skillLogo }) => {
  return (
    <div className="bg-secondary p-5 rounded-2xl flex flex-col items-center hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 group cursor-pointer">
      <img
        src={skillLogo}
        alt=""
        className="w-12 pb-5 group-hover:scale-125 transition-transform duration-500"
      />
      <h1 className="text-center text-gray-400">{skillName}</h1>
    </div>
  );
};

export default SkillCard;
