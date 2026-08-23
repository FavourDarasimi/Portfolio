/* Hallmark · component: section:services · genre: editorial · theme: custom
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (46–50)
 */

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Globe, Code2, Database, Network, Smartphone, Zap, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServicesProps {
  servicesRef: React.RefObject<HTMLDivElement | null>;
}

const Services: React.FC<ServicesProps> = ({ servicesRef }) => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Full-stack web applications engineered for performance, scalability, and long-term maintainability.",
    },
    {
      icon: Code2,
      title: "Frontend Engineering",
      description:
        "Intuitive, high-fidelity user interfaces built with React, TypeScript, and modern styling architectures.",
    },
    {
      icon: Database,
      title: "Backend & Systems",
      description:
        "Robust server-side architectures, custom business logic, and structured database management.",
    },
    {
      icon: Network,
      title: "API Integration",
      description:
        "Designing RESTful APIs and seamless data integration layers for third-party platforms.",
    },
    {
      icon: Smartphone,
      title: "Responsive UI & UX",
      description:
        "Adaptive and mobile-first layouts designed to deliver flawless experiences across all viewports.",
    },
    {
      icon: Zap,
      title: "Performance Tuning",
      description:
        "Optimizing bundle sizes, API latency, render speeds, and Core Web Vitals for maximum performance.",
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
    <section ref={servicesRef} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
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
            <Sparkles size={14} className="text-[#FF5A36]" /> What I Offer
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mt-3 pb-2 leading-tight">
            Services & Solutions
          </h2>
          <p className="text-sm sm:text-base max-w-xl text-zinc-400 font-normal leading-relaxed">
            Tailored software development services designed to translate your ideas into scalable, high-performance web products.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants} whileHover={{ y: -4 }}>
              <Card className="bg-[#121214]/60 backdrop-blur-xl border-white/10 hover:border-[#FF5A36]/50 transition-all duration-300 h-full rounded-3xl group overflow-hidden shadow-2xl cursor-pointer">
                <CardContent className="px-6 py-4.5 sm:px-7 sm:py-5 flex flex-col justify-between h-full space-y-3">
                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#FF5A36] group-hover:border-[#FF5A36] transition-colors duration-300">
                      <service.icon className="h-5 w-5 text-zinc-300 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg sm:text-xl tracking-tight mb-2 group-hover:text-[#FF5A36] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
