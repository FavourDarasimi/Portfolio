import { useState } from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";

type SkillCardProps = {
  title: string;
  skillLogo: IconType;
  category?: string;
};

const SkillCard = ({ title, skillLogo: SkillLogo, category }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 120,
        damping: 14,
      },
    },
    hover: {
      scale: 1.08,
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    initial: { opacity: 0, y: 10, scale: 0.8 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: 0.1, duration: 0.4 },
    },
    hover: {
      scale: 1.25,
      rotate: 8,
      y: -6,
      transition: { duration: 0.3 },
    },
  };

  const tooltipVariants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 0,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: -48,
      transition: { duration: 0.25 },
    },
  };

  return (
    <motion.div
      className="relative group"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="bg-white dark:bg-[#121214] border border-zinc-900/10 dark:border-white/10 hover:border-[#FF5A36] p-4 sm:p-5 md:p-6 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white rounded-2xl flex flex-col items-center justify-center transition-all duration-300 cursor-pointer relative group"
        variants={containerVariants}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          variants={imageVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center pb-2 transition-transform duration-300"
        >
          <SkillLogo className="w-full h-full text-zinc-900 dark:text-white group-hover:text-[#FF5A36] transition-colors duration-300" />
        </motion.div>

        <motion.h3 className="text-center text-xs sm:text-sm font-semibold tracking-wide text-zinc-900 dark:text-white group-hover:text-[#FF5A36] transition-colors duration-300">
          {title}
        </motion.h3>

        {category && (
          <span className="text-[10px] text-zinc-500 mt-1 uppercase tracking-wider">
            {category}
          </span>
        )}
      </motion.div>

      {/* Floating Hallmark Tooltip */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#FF5A36] text-white px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap pointer-events-none z-50"
        variants={tooltipVariants}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
      >
        <span>{title}</span>
        <motion.div
          className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-0.5 w-0 h-0 border-4 border-transparent border-t-[#FF5A36]"
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
