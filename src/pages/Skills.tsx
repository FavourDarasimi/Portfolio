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
    { skillName: "HTML", skillLogo: FaHtml5 },
    { skillName: "CSS", skillLogo: FaCss3Alt },
    { skillName: "JavaScript", skillLogo: IoLogoJavascript },
    { skillName: "TypeScript", skillLogo: SiTypescript },
    { skillName: "React", skillLogo: FaReact },
    { skillName: "Nextjs", skillLogo: RiNextjsLine },
    { skillName: "Python", skillLogo: FaPython },
    { skillName: "Django", skillLogo: SiDjango },
    { skillName: "Git", skillLogo: SiGit },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.6, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <div ref={skillsRef} className="py-10 sm:py-12 md:py-16 lg:py-20">
      <motion.div
        className="px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center pb-4 sm:pb-5">
          Skills & Expertise
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-[20px] mx-auto max-w-[90%] sm:max-w-[85%] md:max-w-[75%] 2xl:mx-80 text-muted-foreground text-center pb-8 sm:pb-10">
          With a balance of technical expertise and creative problem-solving, I
          enjoy turning complex challenges into clean, scalable and user-
          friendly solutions.
        </p>
      </motion.div>

      <div className="grid place-content-center pt-6 sm:pt-8 md:pt-10 px-4 sm:px-6 md:px-8">
        <motion.div
          className="lg:flex grid grid-cols-4  gap-3 sm:gap-4 md:gap-5 lg:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants} className="">
              <SkillCard title={skill.skillName} skillLogo={skill.skillLogo} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
