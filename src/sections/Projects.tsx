import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import eduverse from "../assets/School Website Desktop.png";
import eduversemobile from "../assets/School Website Mobile.png";
import blogmobile from "../assets/Blogify Mobile.png";
import blog from "../assets/Blogify Desktop.png";
import animehubdesktop from "../assets/anime hub laptop.png";
import animehubmobile from "../assets/anime hub mobile.png";
import technovadesktop from "../assets/tech nova laptop.png";
import technovamobile from "../assets/tech nova mobile.png";
import serenityspadesktop from "../assets/serenity spa laptop.png";
import serenityspamobile from "../assets/serenity spa mobile.png";
import makodesktop from "../assets/mako laptop.png";
import makomobile from "../assets/mako mobile.png";

interface ProjectProps {
  projectsRef: React.RefObject<HTMLDivElement | null>;
}

const Projects: React.FC<ProjectProps> = ({ projectsRef }) => {
  const projectData = [
    {
      title: "EduVerse - Educational Institution Platform",
      description:
        "A responsive multi-page school website designed to streamline admissions and communication. Features include a structured curriculum layout (Nursery to Secondary), a step-by-step enrollment guide, dynamic tabbed components for student activities, and filtered contact forms.",
      imageUrl: [eduverse, eduversemobile],
      liveUrl: "http://eduverse.pxxl.click",
      techStack: ["HTML", "CSS", "JavaScript"],
      featured: true,
    },

    {
      title: "Anime Hub - Anime Discovery Platform",
      description:
        "A responsive anime discovery platform featuring a clean UI and a smooth browsing experience. Key capabilities include real-time search, advanced filtering for precise discovery, and infinite scroll for seamless navigation.",
      imageUrl: [animehubdesktop, animehubmobile],
      liveUrl: "https://anime-hub.pxxl.click/",
      techStack: ["TypeScript", "React", "Tailwind CSS", "Jikan API"],
      featured: true,
    },
    {
      title: "Serenity Spa - Business Landing Page",
      description:
        "A fully responsive web application for a wellness business, designed with a focus on aesthetics and conversion. Key features include an elegant service showcase with pricing, a mobile-optimized layout, a client testimonial section, and an intuitive booking system.",
      imageUrl: [serenityspadesktop, serenityspamobile],
      liveUrl: "https://serenity-spa-phi.vercel.app/",
      techStack: ["TypeScript", "React", "Tailwind CSS"],
      featured: true,
    },

    {
      title: "Tech Nova - Premium Gadget Storefront",
      description:
        "Tech Nova is a concept e-commerce application designed to showcase modern web development practices. It features a fully responsive product grid, 'Deal of the Day' spotlights, and integrated customer testimonials. The interface prioritizes a clean UI/UX with consistent color theory and intuitive navigation for a seamless shopping experience.",
      imageUrl: [technovadesktop, technovamobile],
      liveUrl: "https://tech-nova-tau.vercel.app/",
      techStack: ["TypeScript", "Nextjs", "Tailwind CSS"],
      featured: true,
    },

    {
      title: "Mako - Restaurant Digital Experience",
      description:
        "A responsive web application for a high-end dining establishment, prioritizing visual storytelling and accessibility. Key features include a dynamic menu grid with dietary tags, a brand 'Story' section with chef bios, a verified review system, and clear operational details to drive table bookings.",
      imageUrl: [makodesktop, makomobile],
      liveUrl: "https://mako-nine.vercel.app/",
      techStack: ["TypeScript", "Nextjs", "Tailwind CSS"],
      featured: true,
    },
    {
      title: "Blogify Space",
      description:
        "A modern blogging platform with a clean UI, seamless content management, and user-friendly design. Built with JavaScript and Python, featuring a structured frontend and backend for scalability and flexibility.",
      imageUrl: [blog, blogmobile],
      projectUrl: "https://github.com/FavourDarasimi/Blogify-Space-v2.git",
      techStack: [
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Python",
        "Django",
        "Django Rest Framework",
      ],
      featured: true,
    },
  ];

  return (
    <div className=" lg:py-20 py-10" ref={projectsRef}>
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

      <div className="mx-auto w-[95%] sm:w-[90%] md:w-[70%] lg:w-[95%] 2xl:w-[75%] space-y-8 sm:space-y-20 px-2 sm:px-4">
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
                liveUrl={project.liveUrl}
                techStack={project.techStack}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Projects;
