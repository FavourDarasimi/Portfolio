import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import eduverse from "../assets/School Website Desktop.png";
import eduversemobile from "../assets/School Website Mobile.png";
import blogmobile from "../assets/Blogify Mobile.png";
import blog from "../assets/Blogify Desktop.png";
import taskmobile from "../assets/task mobile.png";
import task from "../assets/task.png";
import { Card } from "../components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../components/ui/button";
import { FiGithub } from "react-icons/fi";

interface ProjectProps {
  projectsRef: React.RefObject<HTMLDivElement | null>;
}

const Projects: React.FC<ProjectProps> = ({ projectsRef }) => {
  const projectData = [
    {
      title: "EduVerse",
      description:
        "A modern, responsive school website with a clean UI, interactive features, and mobile-first design. Built with HTML, CSS, and JavaScript to showcase academic programs, student life, and core values.",
      imageUrl: [eduverse, eduversemobile],
      liveUrl: "http://edu-verse-gamma.vercel.app",
      techStack: ["HTML", "CSS", "JavaScript"],
      featured: true,
    },
    {
      title: "Blogify Space",
      description:
        "A modern blogging platform with a clean UI, seamless content management, and user-friendly design. Built with JavaScript and Python, featuring a structured frontend and backend for scalability and flexibility.",
      imageUrl: [blog, blogmobile],
      projectUrl: "https://github.com/FavourDarasimi/Blogify-Space.git",
      techStack: [
        "JavaScript",
        "React",
        "Axios",
        "Tailwind CSS",
        "Python",
        "Django",
        "Django Rest Framework",
      ],
      featured: true,
    },
    {
      title: "Task Hive",
      description:
        "A responsive full-stack task management platform with a clean UI and modular frontend–backend architecture. Built to support seamless task creation, tracking, and collaboration with scalable performance and an intuitive user experience",
      imageUrl: [task, taskmobile],
      backendUrl: "https://github.com/FavourDarasimi/Task-Hive-Backend.git",
      frontendUrl: "https://github.com/FavourDarasimi/Task-Hive-Backend.git",
      techStack: [
        "JavaScript",
        "React",
        "Axios",
        "Tailwind CSS",
        "Python",
        "Django",
        "Django Rest Framework",
      ],
      featured: true,
    },
    {
      title: "Anime Hub",
      description:
        "A responsive anime discovery platform with a clean UI and smooth browsing experience. Features real-time search, advanced filtering, infinite scroll, and dark mode. Built with React, TypeScript, Tailwind, and the Jikan API",
      liveUrl: "https://anime-hub.pxxl.click/",
      techStack: [
        "TypeScript",
        "React",
        "Tailwind CSS",
        "React Query",
        "Axios",
        "Jikan API",
      ],
      featured: false,
    },
    {
      title: "Food Delivery",
      description:
        "A responsive food delivery platform with dynamic menu filtering, real-time cart management, and multi-step checkout. Features category browsing, live price calculations, and secure authentication for seamless meal ordering.",
      liveUrl: "https://food-delivery-website-frontend.pxxl.click/",
      techStack: ["JavaScript", "React", "Tailwind CSS"],
      featured: false,
    },
    {
      title: "Clothing E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with category filtering, shopping cart management, user authentication, and product reviews. Built with Django, featuring persistent carts, real-time calculations, and admin inventory control.",
      projectUrl: "https://github.com/FavourDarasimi/Anime-Hub.git",
      techStack: ["HTML", "CSS", "Python", "Django"],
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="bg-secondary lg:py-20 py-10" ref={projectsRef}>
      <motion.div
        className="px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center pb-5">
          Featured Projects
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-[20px] text-muted-foreground text-center md:pb-20 pb-8 mx-auto max-w-[90%] sm:max-w-[85%] md:max-w-[75%]">
          A showcase of my recent work, demonstrating expertise in modern web
          technologies, a variety of technical skills, and creative
          problem-solving approaches.
        </p>
      </motion.div>

      <div className="mx-auto w-[95%] sm:w-[90%] md:w-[70%] lg:w-[95%] 2xl:w-[75%] space-y-8 sm:space-y-10 px-2 sm:px-4">
        {projectData.map(
          (project, index) =>
            project.featured && (
              <ProjectCard
                key={index}
                index={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
                frontendUrl={project.frontendUrl}
                backendUrl={project.backendUrl}
                liveUrl={project.liveUrl}
                techStack={project.techStack}
              />
            )
        )}
      </div>

      <motion.div
        className="mt-12 sm:mt-14 px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-center text-2xl sm:text-3xl font-bold">
          More Projects
        </h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-[95%] lg:w-[95%] 2xl:w-[75%] gap-6 sm:gap-8 lg:gap-10 mt-6 sm:mt-8 lg:mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectData.map((project, idx) =>
            !project.featured ? (
              <motion.div
                key={project.title + idx}
                variants={cardVariants}
                whileHover="hover"
              >
                <Card className="hover:shadow-lg transition-all duration-500 p-4 sm:p-5 lg:p-5 h-full flex flex-col">
                  <div className="px-2 sm:px-3 lg:px-5 my-auto flex-1">
                    <h2 className="text-base sm:text-lg lg:text-xl font-bold text-foreground mb-2 sm:mb-5">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground mb-3 sm:mb-8 leading-relaxed text-xs sm:text-sm lg:text-[18px]">
                      {project.description}
                    </p>
                    <motion.div
                      className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-8"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: { staggerChildren: 0.05 },
                        },
                      }}
                    >
                      {project.techStack.map((tech, techIndex) => (
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
                            className="bg-secondary text-foreground hover:bg-accent/10 transition-smooth text-xs sm:text-sm lg:text-[16px] px-2 py-0.5 cursor-pointer"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>

                    <div>
                      {project.liveUrl ? (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="secondary"
                            className="text-white hover:scale-105 transition-all duration-300 px-3 py-2 sm:px-4 sm:py-2 lg:px-5 lg:py-3 text-xs sm:text-sm lg:text-[16px] bg-secondary hover:bg-[#3b3d49] hover:border-transparent cursor-pointer w-full lg:w-auto"
                          >
                            <a
                              href={project.liveUrl}
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
                      ) : project.frontendUrl && project.backendUrl ? (
                        <div className="flex flex-col gap-2 sm:gap-3 lg:flex-row lg:gap-4">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1"
                          >
                            <Button
                              variant="secondary"
                              className="text-white hover:scale-105 transition-all duration-300 px-3 py-2 sm:px-4 sm:py-2 lg:px-5 lg:py-3 text-xs sm:text-sm lg:text-[16px] bg-secondary hover:bg-[#3b3d49] hover:border-transparent cursor-pointer w-full"
                            >
                              <a
                                href={project.frontendUrl}
                                className="flex items-center justify-center gap-2 w-full"
                              >
                                <FiGithub
                                  size={14}
                                  className="sm:w-4 sm:h-4"
                                  color="white"
                                />
                                <span className="hidden sm:inline lg:inline">
                                  Frontend Code
                                </span>
                                <span className="sm:hidden">Frontend</span>
                              </a>
                            </Button>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1"
                          >
                            <Button
                              variant="secondary"
                              className="text-white hover:scale-105 transition-all duration-300 px-3 py-2 sm:px-4 sm:py-2 lg:px-5 lg:py-3 text-xs sm:text-sm lg:text-[16px] bg-secondary hover:bg-[#3b3d49] hover:border-transparent cursor-pointer w-full"
                            >
                              <a
                                href={project.backendUrl}
                                className="flex items-center justify-center gap-2 w-full"
                              >
                                <FiGithub
                                  size={14}
                                  className="sm:w-4 sm:h-4"
                                  color="white"
                                />
                                <span className="hidden sm:inline lg:inline">
                                  Backend Code
                                </span>
                                <span className="sm:hidden">Backend</span>
                              </a>
                            </Button>
                          </motion.div>
                        </div>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="secondary"
                            className="text-white hover:scale-105 transition-all duration-300 px-3 py-2 sm:px-4 sm:py-2 lg:px-5 lg:py-3 text-xs sm:text-sm lg:text-[16px] bg-secondary hover:bg-[#3b3d49] hover:border-transparent cursor-pointer w-full lg:w-auto"
                          >
                            <a
                              href={project.projectUrl}
                              className="flex items-center justify-center gap-2 w-full"
                            >
                              <FiGithub
                                size={14}
                                className="sm:w-4 sm:h-4"
                                color="white"
                              />
                              <span className="hidden sm:inline lg:inline">
                                Source Code
                              </span>
                              <span className="sm:hidden">Source Code</span>
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ) : null
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
