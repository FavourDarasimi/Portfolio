import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement | null>;
}

const About: React.FC<AboutProps> = ({ aboutRef }) => {
  const features = [
    {
      icon: Code,
      title: "Writing Clean Code",
      description: "Maintainable, efficient, and scalable.",
    },
    {
      icon: Palette,
      title: "Crafting Good Interfaces",
      description: "Intuitive layouts with attention to user experience.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Ensuring apps run quickly and handle data smoothly.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description:
        "Clear communication and problem-solving in collaborative settings.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.04,
      y: -6,
      boxShadow: "0 15px 35px rgba(255, 90, 54, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 relative" ref={aboutRef}>
      <motion.div
        className="px-4 sm:px-6 md:px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-[#FF5A36] text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#FF5A36]/10 px-3 py-1 rounded-full border border-[#FF5A36]/20">
          About Me
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 pb-4">
          Who I Am
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-zinc-400 pb-12 leading-relaxed font-normal">
          I'm a full-stack web developer who enjoys building applications that
          are practical, scalable, and user-friendly. For me, coding is more
          than just writing functions — it's about designing solutions that make
          life easier for people.
        </p>
      </motion.div>

      <motion.div
        className="px-4 sm:px-6 md:px-8 text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto bg-[#121214] border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-xl">
          <h2 className="font-bold text-2xl sm:text-3xl text-white pb-3 flex items-center justify-center gap-2">
            My Journey <span className="w-2 h-2 rounded-full bg-[#FF5A36]"></span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl mx-auto">
            I started learning software development out of curiosity about how digital products work beneath the surface. Over time, that curiosity grew into a passion for creating software of my own. Today, I work mainly with React, Next.js, and Django REST Framework, crafting projects that connect clean back-end logic with smooth front-end experiences.
          </p>
        </div>
      </motion.div>

      <motion.div className="px-4 sm:px-6 md:px-8">
        <h3 className="font-bold text-2xl sm:text-3xl text-white text-center mb-8">
          What I Focus On
        </h3>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={cardVariants} whileHover="hover">
              <Card className="bg-[#121214] backdrop-blur-sm border-white/10 hover:border-[#FF5A36]/50 cursor-pointer transition-all duration-300 h-full rounded-2xl group">
                <CardContent className="text-center p-6 flex flex-col items-center justify-center">
                  <div className="p-3.5 rounded-xl bg-[#FF5A36]/10 border border-[#FF5A36]/20 mb-4 group-hover:bg-[#FF5A36] transition-all duration-300">
                    <feature.icon className="h-7 w-7 text-[#FF5A36] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="font-bold text-white text-lg mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
