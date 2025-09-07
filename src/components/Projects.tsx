import React from "react";
import ProjectCard from "./ProjectCard";
import eduverse from "../assets/eduverse.png";
import eduversemobile from "../assets/screenshot-1757183157804-portrait.png";
import blogmobile from "../assets/blog mobile.png";
import blog from "../assets/blog.png";
import taskmobile from "../assets/task mobile.png";
import task from "../assets/task.png";

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
    },
    {
      title: "Blogify Space",
      description:
        "A modern blogging platform with a clean UI, seamless content management, and user-friendly design. Built with JavaScript and Python, featuring a structured frontend and backend for scalability and flexibility.",
      imageUrl: [blog, blogmobile],
      projectUrl: "https://github.com/FavourDarasimi/Blogify-Space.git",
      techStack: ["React", "Tailwind CSS", "Django", "Django Rest Framework"],
    },
    {
      title: "Task Hive",
      description:
        "A responsive full-stack task management platform with a clean UI and modular frontend–backend architecture. Built to support seamless task creation, tracking, and collaboration with scalable performance and an intuitive user experience",
      imageUrl: [task, taskmobile],
      backendUrl: "https://github.com/FavourDarasimi/Task-Hive-Backend.git",
      frontendUrl: "https://github.com/FavourDarasimi/Task-Hive-Backend.git",
      techStack: ["React", "Tailwind CSS", "Django", "Django Rest Framework"],
    },
  ];
  return (
    <div className="bg-secondary py-20" ref={projectsRef}>
      <div>
        <h1 className="text-5xl font-bold text-center pb-5">
          Featured{" "}
          <span className="bg-gradient-to-r from-[#a855f7]  to-blue-500    bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <h1 className="text-[20px] mx-80 text-gray-400 text-center pb-20">
          A showcase of my recent work, demonstrating expertise in modern web
          technologies, a variety of technical skills, and creative
          problem-solving approaches.
        </h1>
      </div>
      <div className="mx-auto  w-[60%] space-y-10">
        {projectData.map((project, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default Projects;
