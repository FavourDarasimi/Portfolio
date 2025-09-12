import React from "react";
import ProjectCard from "./ProjectCard";
import eduverse from "../assets/eduverse.png";
import eduversemobile from "../assets/screenshot-1757183157804-portrait.png";
import blogmobile from "../assets/blog mobile.png";
import blog from "../assets/blog.png";
import taskmobile from "../assets/task mobile.png";
import task from "../assets/task.png";
import { Card } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

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
      projectUrl: "https://github.com/FavourDarasimi/EduVerse.git",
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
      projectUrl: "https://github.com/FavourDarasimi/Anime-Hub.git",
      techStack: [
        "TypeScript",
        "React",
        "Tailwind CSS",
        "React Query",
        "Axios",
        "Jikan API ",
      ],
      featured: false,
    },
    {
      title: "Food Delivery",
      description:
        "A responsive anime discovery platform with a clean UI and smooth browsing experience. Features real-time search, advanced filtering, infinite scroll, and dark mode. Built with React, TypeScript, Tailwind, and the Jikan API",
      projectUrl: "https://github.com/FavourDarasimi/Anime-Hub.git",
      techStack: ["JavaScript", "React", "Tailwind CSS"],
      featured: false,
    },
    {
      title: "Clothing E-Commerce Platform",
      description:
        "A responsive anime discovery platform with a clean UI and smooth browsing experience. Features real-time search, advanced filtering, infinite scroll, and dark mode. Built with React, TypeScript, Tailwind, and the Jikan API",
      projectUrl: "https://github.com/FavourDarasimi/Anime-Hub.git",
      techStack: ["HTML", "CSS", "Python", "Django"],
      featured: false,
    },
  ];
  return (
    <div className="bg-secondary md:py-20 py-10" ref={projectsRef}>
      <div>
        <h1 className="md:text-5xl text-3xl font-bold text-center pb-5">
          Featured{" "}
          <span className="bg-gradient-to-r from-[#a855f7]  to-blue-500    bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <h1 className="md:text-[20px] text-[15px] md:mx-80 mx-2 text-gray-400 text-center md:pb-20 pb-10">
          A showcase of my recent work, demonstrating expertise in modern web
          technologies, a variety of technical skills, and creative
          problem-solving approaches.
        </h1>
      </div>
      <div className="md:mx-auto mx-2 md:w-[60%]  space-y-10">
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
                techStack={project.techStack}
              />
            )
        )}
      </div>

      <div className="mt-10">
        <h1 className="text-center md:text-3xl text-xl font-bold">
          More Projects
        </h1>
        <div className="grid md:grid-cols-3 md:mx-20 mx-2 gap-10 md:mt-10 mt-5">
          {projectData.map(
            (project) =>
              !project.featured && (
                <Card className="hover:scale-110 transition-all duration-500  p-5">
                  <div className=" px-5 my-auto">
                    <h1 className="md:text-xl text-[18px] font-bold text-foreground mb-4">
                      {project.title}
                    </h1>
                    <h1 className="text-muted-foreground mb-6 leading-relaxed text-[14px]">
                      {project.description}
                    </h1>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="bg-secondary text-foreground hover:bg-accent/10 transition-smooth text-[12px]"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div>
                      {project.frontendUrl && project.backendUrl ? (
                        <div className="flex gap-4">
                          <Button
                            variant="secondary"
                            className="text-white hover:scale-110 transition-all duration-500 p-5 text-[12px]  bg-secondary hover:bg-gradient-to-r from-[#a855f7]  to-blue-500 hover:border-transparent cursor-pointer"
                          >
                            <a
                              href={project.frontendUrl}
                              className="flex items-center gap-2"
                            >
                              <Github size={18} color="white" />
                              Frontend Source Code
                            </a>
                          </Button>
                          <Button
                            variant="secondary"
                            className="text-white hover:scale-110 transition-all duration-500 p-5 text-[12px]  bg-secondary hover:bg-gradient-to-r from-[#a855f7]  to-blue-500 hover:border-transparent cursor-pointer"
                          >
                            <a
                              href={project.backendUrl}
                              className="flex items-center gap-2"
                            >
                              <Github size={18} color="white" />
                              Backend Source Code
                            </a>
                          </Button>
                        </div>
                      ) : (
                        <Button
                          variant="secondary"
                          className="text-white hover:scale-110 transition-all duration-500 p-5 text-[12px]  bg-secondary hover:bg-gradient-to-r from-[#a855f7]  to-blue-500 hover:border-transparent cursor-pointer"
                        >
                          {" "}
                          <a
                            href={project.projectUrl}
                            className="flex items-center gap-2"
                          >
                            <Github size={18} color="white" />
                            Source Code{" "}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
