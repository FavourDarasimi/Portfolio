import { useState } from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";

type SkillCardProps = {
  title: string;
  skillLogo: IconType;
};

const SkillCard = ({ title, skillLogo: SkillLogo }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.6, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.15,
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  const cardBackgroundVariants = {
    rest: {
      background: "rgba(59, 61, 73, 1)",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    hover: {
      background: "rgba(59, 61, 73, 0.8)",
      boxShadow: "0 12px 24px rgba(59, 61, 73, 0.4)",
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
      scale: 1.3,
      rotate: 15,
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 5 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.15, duration: 0.4 },
    },
  };

  const tooltipVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: -10,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: -45,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="bg-secondary p-3 sm:p-4 md:p-4 lg:p-5 text-muted-foreground hover:text-white rounded-xl sm:rounded-2xl flex flex-col items-center transition-all duration-500 group cursor-pointer relative"
        variants={containerVariants}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute inset-0 rounded-xl sm:rounded-2xl -z-10"
          variants={cardBackgroundVariants}
          initial="rest"
          animate={isHovered ? "hover" : "rest"}
        />

        <motion.div
          variants={imageVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="w-7 sm:w-9 md:w-10 lg:w-12 pb-2 sm:pb-3 md:pb-4 lg:pb-5 transition-transform duration-500"
        >
          <SkillLogo className="w-full h-full text-white" />
        </motion.div>

        <motion.h1
          className="text-center text-xs sm:text-sm md:text-[15px] lg:text-[16px] font-medium relative z-10"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          {title}
        </motion.h1>
      </motion.div>

      {/* Floating Tooltip */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap pointer-events-none z-50"
        variants={tooltipVariants}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
      >
        <span>{title}</span>
        <motion.div
          className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1 w-0 h-0 border-4 border-transparent border-t-white"
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
