import React from "react";

interface SkillCardProps {
  skillName: string;
  skillLogo: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skillName, skillLogo }) => {
  return (
    <div className="bg-secondary p-3 sm:p-4 md:p-4 lg:p-5 text-muted-foreground hover:text-white rounded-xl sm:rounded-2xl flex flex-col items-center hover:shadow-2xl hover:shadow-[#3b3d49] transition-all duration-500 group cursor-pointer">
      <img
        src={skillLogo}
        alt={`${skillName} logo`}
        className="w-7 sm:w-9 md:w-10 lg:w-12 pb-2 sm:pb-3 md:pb-4 lg:pb-5 group-hover:scale-125 transition-transform duration-500"
      />
      <h1 className="text-center text-xs sm:text-sm md:text-[15px] lg:text-[16px]">
        {skillName}
      </h1>
    </div>
  );
};

export default SkillCard;
