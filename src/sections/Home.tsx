import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Download } from "lucide-react";
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
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

  return (
    <div
      className="lg:h-[calc(100vh-var(--nav-h))] flex flex-col md:flex-row justify-center items-center px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-12 lg:gap-10 2xl:gap-0 md:py-14 lg:py-10 relative overflow-hidden"
      ref={homeRef}
    >
      <motion.div
        className="flex flex-col gap-5 sm:gap-6 w-full md:w-[60%] md:text-left text-center lg:items-start items-center justify-center mt-12 md:mt-0 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <p className="text-[#FF5A36] bg-[#FF5A36]/10 border border-[#FF5A36]/20 px-3.5 py-1 rounded-full w-fit text-xs sm:text-sm font-semibold flex gap-2 items-center justify-center md:justify-start mb-4 shadow-[0_0_15px_rgba(255,90,54,0.15)]">
            <span className="w-2.5 h-2.5 bg-[#FF5A36] rounded-full animate-pulse shadow-[0_0_8px_#FF5A36]"></span>
            Available for work & projects
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Darasimi Olaniran
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mt-1 sm:mt-2 leading-tight bg-gradient-to-r from-white via-[#FFFFFF] to-[#FF5A36] bg-clip-text text-transparent">
            Full-Stack Developer
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto lg:mx-0 px-1 sm:px-0 leading-relaxed font-normal">
            Building responsive, scalable web applications that deliver real
            impact through clean code, robust backend services, and modern UI architecture.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full sm:w-auto mt-2"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              onClick={() => scrollToSection(projectsRef)}
              className="bg-[#FF5A36] hover:bg-[#E04826] text-white font-semibold shadow-[0_0_25px_rgba(255,90,54,0.35)] transition-all duration-300 px-7 py-3 md:px-8 md:py-6 text-sm sm:text-base rounded-xl w-full sm:w-auto cursor-pointer"
            >
              View Featured Projects
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              onClick={() => handleDownload()}
              className="bg-[#121214] border border-white/15 hover:border-[#FF5A36]/60 hover:bg-[#FF5A36]/10 text-white font-medium transition-all duration-300 px-7 py-3 md:px-8 md:py-6 text-sm sm:text-base rounded-xl flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Download className="w-4 h-4 text-[#FF5A36]" />
              </motion.div>
              <span>Download CV</span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-72 sm:w-64 md:w-[380px] xl:w-[35%] flex justify-center lg:mx-0 sm:mb-10 mt-12 md:mt-0 relative z-10"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative group">
          <picture className="relative block">
            <source media="(max-width: 480px)" srcSet={photo_mobile} />
            <source media="(max-width: 768px)" srcSet={photo_tablet} />
            <img
              src={photo}
              alt="Portrait of Darasimi Olaniran"
              className="rounded-full md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] xl:w-[400px] xl:h-[400px] w-[280px] h-[280px] object-cover border-2 border-white/10 shadow-2xl relative z-10"
            />
          </picture>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
