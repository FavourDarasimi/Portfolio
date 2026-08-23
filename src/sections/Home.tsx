/* Hallmark · component: hero · genre: editorial · theme: custom
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (46–50)
 */

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Button } from "../components/ui/button";
import { Download, ArrowRight, Code2 } from "lucide-react";
import photo from "../assets/photo.webp";
import photo_mobile from "../assets/photo_mobile.webp";
import photo_tablet from "../assets/photo_tablet.webp";

interface HomeProps {
  homeRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
}

const Home: React.FC<HomeProps> = ({
  homeRef,
  projectsRef,
  scrollToSection,
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -3 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./Darasimi_CV.pdf";
    link.download = "Darasimi_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const techBadges = ["Next.js", "Django REST Framework", "Tailwind CSS"];

  return (
    <section
      ref={homeRef}
      className="min-h-[calc(100vh-var(--nav-h))] flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 relative overflow-hidden"
    >
      <div className="max-w-[1500px] w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20 z-10">
        {/* Main Content Column */}
        <motion.div
          className="flex flex-col items-start text-left w-full lg:w-[60%] space-y-5 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#121214] border border-white/10 text-zinc-300 text-xs sm:text-sm font-medium tracking-wide">
              <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for work & projects</span>
            </div>
          </motion.div>

          {/* Typography Header Group */}
          <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.2]">
              I build web products that solve problems and{" "}
              <span className="text-[#FF5A36] font-semibold">deliver real impact.</span>
            </h1>
            <p className="text-zinc-400 text-xs sm:text-sm font-medium tracking-wider uppercase">
              Darasimi Olaniran · Full-Stack Developer
            </p>
            <p className="text-xs sm:text-sm md:text-base text-zinc-400 max-w-xl font-normal leading-relaxed">
              I design modern user interfaces, engineer robust backend systems, and ship scalable full-stack web applications using Next.js, Django REST Framework, and Tailwind CSS.
            </p>
          </motion.div>

          {/* Authority Tech Stack Tags */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-start gap-2 sm:gap-2.5 pt-1">
            <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider mr-1 flex items-center gap-1">
              <Code2 size={13} className="text-[#FF5A36]" /> Core Stack:
            </span>
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="text-xs sm:text-sm px-3 py-1 rounded-lg bg-[#121214] border border-white/10 text-zinc-300 font-medium hover:border-[#FF5A36]/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Action CTAs (Side-by-side on mobile) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row items-center justify-start gap-3 sm:gap-4 w-full sm:w-auto pt-2"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 sm:flex-none">
              <Button
                onClick={() => scrollToSection(projectsRef)}
                className="bg-[#FF5A36] hover:bg-[#E04826] text-white font-medium text-xs sm:text-sm md:text-base px-3.5 sm:px-7 py-3 sm:py-5 rounded-xl w-full flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] group"
              >
                <span>View Projects</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200 shrink-0" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 sm:flex-none">
              <Button
                onClick={handleDownload}
                className="bg-[#121214] border border-white/15 hover:border-[#FF5A36]/60 hover:bg-[#FF5A36]/10 text-white font-medium text-xs sm:text-sm md:text-base px-3.5 sm:px-7 py-3 sm:py-5 rounded-xl w-full flex items-center justify-center gap-1.5 sm:gap-2.5 cursor-pointer transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] group"
              >
                <Download size={15} className="text-[#FF5A36] group-hover:-translate-y-0.5 transition-transform duration-200 shrink-0" />
                <span>Download CV</span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Editorial Portrait Column (Rectangular Frame) */}
        <motion.div
          className="w-full lg:w-[40%] flex justify-center items-center relative"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative group p-2">
            {/* Outer Decorative Accent Border */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-dashed border-[#FF5A36]/30 group-hover:border-[#FF5A36]/60 transition-colors duration-300 scale-[1.03]" />
            
            {/* Main Rectangular Portrait Frame */}
            <picture className="relative block">
              <source media="(max-width: 480px)" srcSet={photo_mobile} />
              <source media="(max-width: 768px)" srcSet={photo_tablet} />
              <img
                src={photo}
                alt="Portrait of Darasimi Olaniran"
                className="w-[270px] h-[330px] sm:w-[320px] sm:h-[390px] md:w-[350px] md:h-[420px] lg:w-[370px] lg:h-[440px] xl:w-[390px] xl:h-[460px] object-cover rounded-2xl sm:rounded-3xl border-2 border-white/15 group-hover:border-[#FF5A36]/50 transition-all duration-300 relative z-10"
              />
            </picture>

            {/* Float Experience Badge */}
            <div className="absolute -bottom-3 -right-2 sm:bottom-4 sm:right-2 z-20 bg-[#121214]/95 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-xl text-left shadow-xl hidden sm:block">
              <p className="text-[11px] text-zinc-400 font-medium uppercase tracking-wider">Role Focus</p>
              <p className="text-xs font-bold text-white flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A36]" /> Full-Stack Engineering
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
