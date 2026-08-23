/* Hallmark · component: section:projects · genre: editorial · theme: custom
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (46–50)
 */

import React from "react";
import { motion } from "framer-motion";
import { FolderKanban } from "lucide-react";
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
        "Tech Nova is a concept e-commerce application designed to showcase modern web development practices. It features a fully responsive product grid, 'Deal of the Day' spotlights, and integrated customer testimonials. The interface prioritizes a clean UI/UX with consistent color theory and intuitive navigation.",
      imageUrl: [technovadesktop, technovamobile],
      liveUrl: "https://tech-nova-tau.vercel.app/",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      featured: true,
    },
    {
      title: "Mako - Restaurant Digital Experience",
      description:
        "A responsive web application for a high-end dining establishment, prioritizing visual storytelling and accessibility. Key features include a dynamic menu grid with dietary tags, a brand 'Story' section with chef bios, a verified review system, and clear operational details.",
      imageUrl: [makodesktop, makomobile],
      liveUrl: "https://mako-nine.vercel.app/",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      featured: true,
    },
    {
      title: "Blogify Space - Full-Stack Blog Platform",
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
        "Django REST Framework",
      ],
      featured: true,
    },
  ];

  return (
    <section ref={projectsRef} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
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
            <FolderKanban size={14} className="text-[#FF5A36]" /> Selected Work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mt-3 pb-2 leading-tight">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base max-w-xl text-zinc-400 font-normal leading-relaxed">
            A showcase of my recent production applications, demonstrating technical depth across modern frontend frameworks, backend API engineering, and responsive user experiences.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
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
    </section>
  );
};

export default Projects;
