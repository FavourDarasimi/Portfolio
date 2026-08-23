import React from "react";
import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

interface SkillsProps {
  skillsRef: React.RefObject<HTMLDivElement | null>;
}

const Skills: React.FC<SkillsProps> = ({ skillsRef }) => {
  const skills = [
    { skillName: "HTML5", skillLogo: FaHtml5, category: "Frontend" },
    { skillName: "CSS3", skillLogo: FaCss3Alt, category: "Frontend" },
    { skillName: "JavaScript", skillLogo: IoLogoJavascript, category: "Language" },
    { skillName: "TypeScript", skillLogo: SiTypescript, category: "Language" },
    { skillName: "React", skillLogo: FaReact, category: "Frontend" },
    { skillName: "Next.js", skillLogo: RiNextjsLine, category: "Frontend" },
    { skillName: "Python", skillLogo: FaPython, category: "Backend" },
    { skillName: "Django", skillLogo: SiDjango, category: "Backend" },
    { skillName: "Git", skillLogo: SiGit, category: "Tools" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 25 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 110,
      },
    },
  };

  return (
    <div ref={skillsRef} className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <motion.div
        className="px-4 sm:px-6 md:px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-[#FF5A36] text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#FF5A36]/10 px-3.5 py-1 rounded-full border border-[#FF5A36]/20">
          Hallmark Skillset
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 pb-4">
          Skills & Technical Expertise
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-zinc-400 pb-10 leading-relaxed font-normal">
          With a balance of technical expertise and creative problem-solving, I
          enjoy turning complex challenges into clean, scalable, and high-performance applications.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3 sm:gap-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants} className="w-full">
              <SkillCard title={skill.skillName} skillLogo={skill.skillLogo} category={skill.category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
