/* Hallmark · component: section:about · genre: editorial · theme: custom
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (46–50)
 */

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Code, Palette, Zap, Users, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement | null>;
}

const About: React.FC<AboutProps> = ({ aboutRef }) => {
  const features = [
    {
      icon: Code,
      category: "Architecture",
      title: "Clean Code",
      description: "Maintainable, modular, and well-structured codebases.",
      stat: "100%",
    },
    {
      icon: Palette,
      category: "Interfaces",
      title: "Intuitive Design",
      description: "Fluid layouts with high attention to user experience.",
      stat: "60fps",
    },
    {
      icon: Zap,
      category: "Performance",
      title: "Speed & Scale",
      description: "Optimizing render speeds, bundles, and API latency.",
      stat: "99.9%",
    },
    {
      icon: Users,
      category: "Engineering",
      title: "Collaboration",
      description: "Effective communication and solution-focused teamwork.",
      stat: "Active",
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section ref={aboutRef} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 space-y-12 sm:space-y-16">
        {/* Section Header Pill */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-[#FF5A36] text-xs sm:text-sm font-medium tracking-wider uppercase bg-[#FF5A36]/10 px-3.5 py-1.5 rounded-full border border-[#FF5A36]/25 inline-flex items-center gap-1.5">
            <Compass size={14} className="text-[#FF5A36]" /> About Me
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mt-3 leading-tight">
            Engineering software with purpose & precision.
          </h2>
        </motion.div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Story & Journey */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#121214]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 space-y-3 shadow-2xl relative">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg sm:text-xl text-white flex items-center gap-2">
                  <span>Who I Am</span>
                  <span className="w-2 h-2 rounded-full bg-[#FF5A36]" />
                </h3>
                <span className="text-[#FF5A36] text-xs font-mono font-medium">01</span>
              </div>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
                I'm a full-stack web developer who enjoys building applications that are practical, scalable, and user-friendly. For me, coding is more than just writing functions — it's about designing solutions that make life easier for people.
              </p>
            </div>

            <div className="bg-[#121214]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 space-y-3 shadow-2xl relative">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg sm:text-xl text-white flex items-center gap-2">
                  <span>My Journey</span>
                  <span className="w-2 h-2 rounded-full bg-[#FF5A36]" />
                </h3>
                <span className="text-[#FF5A36] text-xs font-mono font-medium">02</span>
              </div>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
                I started learning software development out of curiosity about how digital products work beneath the surface. Over time, that curiosity grew into a passion for creating software of my own. Today, I work mainly with React, Next.js, and Django REST Framework, crafting projects that connect clean back-end logic with smooth front-end experiences.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Reference-Style Cards */}
          <motion.div
            className="lg:col-span-7 space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="font-semibold text-xl sm:text-2xl text-white pb-1">
              What I Focus On
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div key={index} variants={cardVariants} whileHover={{ y: -4 }}>
                  <Card className="bg-[#121214]/60 backdrop-blur-xl border-white/10 hover:border-[#FF5A36]/50 transition-all duration-300 h-full rounded-3xl group cursor-pointer overflow-hidden shadow-2xl">
                    <CardContent className="p-6 sm:p-7 flex flex-col justify-between h-full min-h-[170px]">
                      {/* Top Circular Badge */}
                      <div className="w-10 h-10 rounded-full bg-[#FF5A36]/10 border border-[#FF5A36]/20 flex items-center justify-center group-hover:bg-[#FF5A36] transition-colors duration-300">
                        <feature.icon className="h-4 sm:h-5 w-4 sm:w-5 text-[#FF5A36] group-hover:text-white transition-colors duration-300" />
                      </div>

                      {/* Bottom Layout Row */}
                      <div className="pt-8">
                        <p className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider mb-0.5">
                          {feature.category}
                        </p>
                        <div className="flex items-baseline justify-between gap-3">
                          <h4 className="font-semibold text-white text-lg sm:text-xl tracking-tight">
                            {feature.title}
                          </h4>
                          <span className="text-base sm:text-lg font-medium text-zinc-400 group-hover:text-[#FF5A36] transition-colors duration-300 shrink-0 font-mono">
                            {feature.stat}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
