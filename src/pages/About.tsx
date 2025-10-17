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
      scale: 1.08,
      y: -10,
      boxShadow: "0 20px 40px rgba(59, 61, 73, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div
      className="bg-secondary py-10 sm:py-12 md:py-16 lg:py-20"
      ref={aboutRef}
    >
      <motion.div
        className="px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center pb-3 sm:pb-4 lg:pb-5">
          Who I Am
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-[20px] mx-auto max-w-[90%] sm:max-w-[85%] md:max-w-[90%] 2xl:mx-72 text-muted-foreground text-center pb-8 sm:pb-10 md:pb-14 lg:pb-20">
          I'm a full-stack web developer who enjoys building applications that
          are practical, scalable, and user-friendly. For me, coding is more
          than just writing functions — it's about designing solutions that make
          life easier for people.
        </p>
      </motion.div>

      <motion.div
        className="px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-3xl lg:text-3xl text-center pb-3 sm:pb-4 lg:pb-5">
          My Journey
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-[20px] mx-auto max-w-[90%] sm:max-w-[85%] md:max-w-[90%] 2xl:mx-72 text-muted-foreground text-center pb-8 sm:pb-10 md:pb-14 lg:pb-20">
          My Path in Development I started learning software development out of
          curiosity about how digital products work beneath the surface. Over
          time, that curiosity grew into a passion for creating software of my
          own. Today, I work mainly with React and Django REST Framework,
          crafting projects that connect clean back-end logic with smooth
          front-end experiences.
        </p>
      </motion.div>

      <motion.div className="px-4 sm:px-6 md:px-8">
        <h3 className="font-semibold text-2xl sm:text-3xl md:text-3xl lg:text-3xl text-center mb-4 sm:mb-5">
          What I Focus On
        </h3>
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:mx-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={cardVariants} whileHover="hover">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 cursor-pointer transition-all duration-300 h-full">
                <CardContent className="text-center p-4 sm:p-5 md:p-5 lg:p-6">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 md:h-8 md:w-8 text-primary mx-auto mb-3 sm:mb-4" />
                  </motion.div>
                  <h4 className="font-semibold mb-2 text-xs sm:text-sm md:text-base lg:text-[18px]">
                    {feature.title}
                  </h4>
                  <p className="text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-muted-foreground leading-relaxed">
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
