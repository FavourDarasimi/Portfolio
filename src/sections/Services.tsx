import React from "react";
import { motion } from "framer-motion";
import { Globe, Code2, Database, Network, Smartphone, Zap } from "lucide-react";
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
        "Building responsive, modern web applications with clean architecture and optimal performance.",
    },
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "Creating intuitive user interfaces with React, TypeScript, and modern CSS frameworks.",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Developing robust server-side solutions with Django REST Framework and Python.",
    },
    {
      icon: Network,
      title: "API Development",
      description:
        "Building RESTful APIs and backend services with Django REST Framework for seamless data integration.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Ensuring seamless experiences across all devices and screen sizes.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Optimizing applications for speed, efficiency, and smooth user experiences.",
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
    hidden: { opacity: 0, scale: 0.85, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
    hover: {
      scale: 1.03,
      y: -6,
      boxShadow: "0 15px 30px rgba(255, 90, 54, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 relative" ref={servicesRef}>
      <motion.div
        className="px-4 sm:px-6 md:px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-[#FF5A36] text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#FF5A36]/10 px-3.5 py-1 rounded-full border border-[#FF5A36]/20">
          What I Offer
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 pb-4">
          Services & Solutions
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-zinc-400 pb-12 leading-relaxed font-normal">
          Comprehensive web development services tailored to bring your digital vision to life with modern technologies, scalable architecture, and best practices.
        </p>
      </motion.div>

      <motion.div className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants} whileHover="hover">
              <Card className="bg-[#121214] border-white/10 hover:border-[#FF5A36]/50 cursor-pointer transition-all duration-300 h-full rounded-2xl group overflow-hidden">
                <CardContent className="p-6 sm:p-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FF5A36]/10 border border-[#FF5A36]/20 flex items-center justify-center mb-5 group-hover:bg-[#FF5A36] transition-all duration-300">
                      <service.icon className="h-6 w-6 text-[#FF5A36] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-white text-xl mb-3 group-hover:text-[#FF5A36] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
