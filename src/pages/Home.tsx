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
      className="lg:h-[calc(100vh-var(--nav-h))] flex flex-col md:flex-row justify-center items-center px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-12 lg:gap-10 2xl:gap-0 md:py-14 lg:py-10"
      ref={homeRef}
    >
      <motion.div
        className="flex flex-col  gap-5 sm:gap-6 w-full md:w-[60%] md:text-left text-center lg:items-start items-center justify-center h-[calc(100vh-var(--nav-h))] lg:h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <p className="text-green-500 flex gap-2 items-center justify-center md:justify-start">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            Available for work
          </p>
          <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
            Darasimi Olaniran
          </h1>
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mt-1 sm:mt-2 leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Full-Stack Developer
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto lg:mx-0 px-2 sm:px-0 leading-relaxed">
            Building responsive, scalable web applications that deliver real
            impact through clean code and modern architecture.
          </p>
        </motion.div>

        <motion.div
          className="flex   justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => scrollToSection(projectsRef)}
              className="bg-white border-[#3b3d49] hover:bg-[#3b3d49] hover:text-white transition-all duration-300 px-5 py-2 sm:px-6 sm:py-2 md:px-8 md:py-8 text-sm sm:text-base md:text-[17px] w-full sm:w-auto"
            >
              View Projects
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => handleDownload()}
              className="bg-transparent border-[1px] border-[#3b3d49] hover:bg-[#3b3d49] text-white transition-all duration-300 px-5 py-2 sm:px-6 sm:py-2 md:px-8 md:py-8 text-sm sm:text-base md:text-[17px] flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
              <span>Download CV</span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className=" w-72 sm:w-56 md:w-[400px] xl:w-[30%] flex justify-center lg:mx-0  sm:mb-10 "
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <picture>
          <source media="(max-width: 480px)" srcSet={photo_mobile} />
          <source media="(max-width: 768px)" srcSet={photo_tablet} />
          <img
            src={photo}
            alt="Portrait of Darasimi Olaniran"
            className="rounded-full md:w-[300px] md:h-[300px] lg:w-[370px] lg:h-[370px] xl:h-[370px] 2xl:w-[420px] 2xl:h-[420px] w-[300px] h-[300px] object-cover shadow-lg"
          />
        </picture>
      </motion.div>
      {/* <motion.div
        className="lg:w-[30%] hidden lg:flex xl:w-[30%] flex-shrink-0 mx-4 lg:mx-0 mt-8 sm:mt-10 lg:mt-0"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <picture>
          <source media="(max-width: 480px)" srcSet={photo_mobile} />
          <source media="(max-width: 768px)" srcSet={photo_tablet} />
          <img
            src={photo}
            alt="Portrait of Darasimi Olaniran"
            className="lg:rounded-full rounded-2xl w-[280px] h-[280px] xl:w-[350px]  object-cover shadow-lg"
          />
        </picture>
      </motion.div>*/}
    </div>
  );
};

export default Home;
