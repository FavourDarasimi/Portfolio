/* Hallmark · component: section:skills · genre: editorial · theme: custom
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (46–50)
 */

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Cpu, Layout, Server, Wrench } from "lucide-react";
import { FaHtml5, FaReact, FaPython, FaGithub, FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiDjango, SiGit, SiTailwindcss, SiVercel, SiPostman, SiFramer, SiSupabase } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

interface SkillsProps {
  skillsRef: React.RefObject<HTMLDivElement | null>;
}

const Skills: React.FC<SkillsProps> = ({ skillsRef }) => {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: Layout,
      description: "Building responsive, modern, and accessible user interfaces.",
      skills: [
        { name: "Next.js", logo: RiNextjsLine },
        { name: "React", logo: FaReact },
        { name: "TypeScript", logo: SiTypescript },
        { name: "JavaScript", logo: IoLogoJavascript },
        { name: "Tailwind CSS", logo: SiTailwindcss },
        { name: "Framer Motion", logo: SiFramer },
        { name: "HTML5 / CSS3", logo: FaHtml5 },
      ],
    },
    {
      title: "Backend & Systems",
      icon: Server,
      description: "Designing REST APIs, database schemas, and business logic.",
      skills: [
        { name: "Django", logo: SiDjango },
        { name: "Django REST Framework", logo: SiDjango },
        { name: "Python", logo: FaPython },
        { name: "Supabase", logo: SiSupabase },
        { name: "Postman", logo: SiPostman },
        { name: "REST APIs", logo: Server },
      ],
    },
    {
      title: "Tools & Ecosystem",
      icon: Wrench,
      description: "Version control, containerization, and cloud deployment.",
      skills: [
        { name: "Docker", logo: FaDocker },
        { name: "Git", logo: SiGit },
        { name: "GitHub", logo: FaGithub },
        { name: "Vercel", logo: SiVercel },
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section ref={skillsRef} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 space-y-12">
        {/* Section Header */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-[#FF5A36] text-xs sm:text-sm font-medium tracking-wider uppercase bg-[#FF5A36]/10 px-3.5 py-1.5 rounded-full border border-[#FF5A36]/25 inline-flex items-center gap-1.5">
            <Cpu size={14} className="text-[#FF5A36]" /> Technical Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white mt-3 pb-2 leading-tight">
            Skills & Stack Proficiency
          </h2>
          <p className="text-sm sm:text-base max-w-xl text-zinc-500 dark:text-zinc-400 font-normal leading-relaxed">
            A battle-tested set of languages, frameworks, and developer tools I use to turn ideas into production-ready web products.
          </p>
        </motion.div>

        {/* Category Domain Panels */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white/90 dark:bg-[#0D0D0F]/90 backdrop-blur-xl border border-zinc-900/12 dark:border-white/12 hover:border-[#FF5A36]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              {/* Header with Title Left & Orange Index Right */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#FF5A36]/10 border border-[#FF5A36]/20 flex items-center justify-center group-hover:bg-[#FF5A36] transition-colors duration-300">
                    <category.icon className="h-5 w-5 text-[#FF5A36] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[#FF5A36] font-mono text-sm font-semibold tracking-wider">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white text-lg sm:text-xl tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal mt-1">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skill Pill Badges */}
              <div className="flex flex-wrap gap-2.5 pt-4 border-t border-zinc-900/10 dark:border-white/10">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/[0.04] dark:bg-white/[0.04] backdrop-blur-md border border-zinc-900/15 dark:border-white/15 text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm font-medium hover:border-[#FF5A36]/60 hover:text-zinc-900 dark:hover:text-white hover:bg-[#FF5A36]/10 transition-all duration-200"
                  >
                    <skill.logo className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white text-sm shrink-0 transition-colors duration-200" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
