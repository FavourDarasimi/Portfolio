import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { FiGithub } from "react-icons/fi";

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
        className={`overflow-hidden card-gradient border-border hover:shadow-card transition-smooth group ${
          index % 2 === 1 ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div
          className={`flex flex-col lg:flex-row ${
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <motion.div
            className="flex justify-center items-center relative p-4 sm:p-6 md:p-8 lg:p-2 xl:p-5 lg:w-1/2 overflow-hidden bg-neutral-700 -pl-5 lg:-my-6 -mt-6"
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
                    className="w-24  sm:w-32 md:w-36 lg:w-40 h-[160px] sm:h-[200px] md:h-56 lg:h-[330px] -ml-5 md:-ml-8 lg:-ml-12 transition-smooth group-hover:scale-105 duration-500"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  />
                ) : (
                  <motion.img
                    key={imgIndex}
                    src={url}
                    alt={`${title} desktop preview`}
                    className="lg:w-full h-[160px] sm:h-[180px] md:h-56 lg:h-[330px] transition-smooth group-hover:scale-105 duration-500"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  />
                )
              )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth hover:duration-500" />
          </motion.div>

          <motion.div
            className="lg:w-1/2 h-fit px-4 sm:px-5 md:px-6 lg:px-4 pt-5  sm:py-5 md:py-6 lg:py-3"
            initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {title}
            </motion.h1>
            <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm md:text-base lg:text-[18px]">
              {description}
            </p>

            <motion.div
              className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6"
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
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge
                    variant="outline"
                    className="bg-secondary text-foreground hover:bg-accent/10 transition-smooth text-xs sm:text-sm md:text-[15px] lg:text-[16px] px-2 py-0.5 cursor-pointer"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            <div>
              {liveUrl ? (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="secondary"
                    className="text-white hover:scale-105 transition-all duration-300 px-3 py-2 sm:px-4 sm:py-2 lg:px-5 lg:py-3 text-xs sm:text-sm lg:text-[16px] bg-secondary hover:bg-[#3b3d49] hover:border-transparent cursor-pointer w-full lg:w-auto"
                  >
                    <a
                      href={liveUrl}
                      className="flex items-center justify-center gap-2 w-full"
                    >
                      <FiGithub
                        size={14}
                        className="sm:w-4 sm:h-4"
                        color="white"
                      />
                      <span className="hidden sm:inline lg:inline">
                        Live Preview
                      </span>
                      <span className="sm:hidden">Live Preview</span>
                    </a>
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="secondary"
                    className="text-white hover:scale-105 transition-all duration-300 px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 text-xs sm:text-sm md:text-[15px] lg:text-[16px] bg-secondary hover:bg-[#3b3d49] hover:border-transparent cursor-pointer w-full lg:w-auto"
                  >
                    <a
                      href={projectUrl}
                      className="flex items-center justify-center gap-2 w-full"
                    >
                      <FiGithub
                        size={16}
                        className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
                        color="white"
                      />
                      Source Code
                    </a>
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
