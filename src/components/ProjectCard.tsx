import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "@/components/ui/badge";

import { FaArrowRight } from "react-icons/fa";

type ProjectProps = {
  title: string;
  description: string;
  imageUrl: string[] | undefined;
  projectUrl: string | undefined;
  // frontendUrl?: string | undefined;
  // backendUrl?: string | undefined;
  liveUrl: string | undefined;
  index: number;
  techStack: string[];
};

const ProjectCard = ({
  title,
  description,
  imageUrl,
  projectUrl,
  index,
  techStack,

  liveUrl,
}: ProjectProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card
        className={`overflow-hidden bg-[#121214] border-white/10 hover:border-[#FF5A36]/60 transition-all duration-500 rounded-2xl ${
          index % 2 === 1 ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div
          className={`flex flex-col lg:flex-row ${
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <motion.div
            className="group flex justify-center items-center relative p-6 lg:p-4 xl:p-6 lg:w-1/2 overflow-hidden bg-[#1A1A1E]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {imageUrl &&
              imageUrl.map((url, imgIndex) =>
                imgIndex == 1 ? (
                  <motion.img
                    key={imgIndex}
                    src={url}
                    alt={`${title} mobile preview`}
                    className="w-24 sm:w-32 md:w-36 lg:w-40 h-[170px] sm:h-[210px] md:h-60 lg:h-[320px] -ml-5 md:-ml-8 lg:-ml-12 transition-transform duration-500 group-hover:scale-105 rounded-lg shadow-2xl relative z-10"
                    whileHover={{ scale: 1.08 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  />
                ) : (
                  <motion.img
                    key={imgIndex}
                    src={url}
                    alt={`${title} desktop preview`}
                    className="lg:w-full h-[170px] sm:h-[190px] md:h-60 lg:h-[320px] object-cover transition-transform duration-500 group-hover:scale-105 rounded-lg shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  />
                )
              )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
          </motion.div>

          <motion.div
            className="lg:w-1/2 h-fit p-6 sm:p-8 flex flex-col justify-between"
            initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h3
                className="text-xl sm:text-2xl font-semibold text-white mb-3 tracking-tight"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {title}
              </motion.h3>
              <p className="text-zinc-400 mb-6 leading-relaxed text-sm sm:text-base font-normal">
                {description}
              </p>
            </div>

            <div>
              <motion.div
                className="flex flex-wrap gap-2 mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
                  },
                }}
              >
                {techStack.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge
                      variant="outline"
                      className="bg-[#1C1C1F] text-[#FF5A36] border-[#FF5A36]/30 hover:bg-[#FF5A36] hover:text-white transition-colors duration-300 text-xs sm:text-sm px-3 py-1 font-medium rounded-md cursor-pointer"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.02 }}>
                <a
                  href={liveUrl ? liveUrl : projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-[#FF5A36] hover:bg-[#E04826] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer"
                >
                  <span>View Live Project</span>
                  <FaArrowRight
                    size={13}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
