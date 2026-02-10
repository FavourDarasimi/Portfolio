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
    <div className="py-10 sm:py-12 md:py-16 lg:py-20" ref={servicesRef}>
      <motion.div
        className="px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center pb-5">
          My Services
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-[20px] text-muted-foreground text-center md:pb-20 pb-8 mx-auto max-w-[90%] sm:max-w-[85%] md:max-w-[75%]">
          Comprehensive web development services tailored to bring your digital
          vision to life with modern technologies and best practices.
        </p>
      </motion.div>

      <motion.div className="px-4 sm:px-6 md:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:mx-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants} whileHover="hover">
              <Card className="bg-card backdrop-blur-sm border-border/50 cursor-pointer transition-all duration-300 h-full">
                <CardContent className="text-center p-4 sm:p-5 md:p-5 lg:p-6">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <service.icon className="h-7 w-7 sm:h-8 sm:w-8 md:h-8 md:w-8 text-primary mx-auto mb-3 sm:mb-4" />
                  </motion.div>
                  <h4 className="font-semibold mb-2 text-xs sm:text-sm md:text-base lg:text-[18px]">
                    {service.title}
                  </h4>
                  <p className="text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-muted-foreground leading-relaxed">
                    {service.description}
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

export default Services;
