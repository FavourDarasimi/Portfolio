import React from "react";
import { Card } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";

import { FiGithub } from "react-icons/fi";

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string[] | undefined;
  projectUrl: string | undefined;
  frontendUrl: string | undefined;
  backendUrl: string | undefined;
  index: number;
  techStack: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
  index,
  techStack,
  frontendUrl,
  backendUrl,
}) => {
  return (
    <Card
      className={`overflow-hidden -py-6 card-gradient border-border hover:shadow-card transition-smooth group ${
        index % 2 === 1 ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div
        className={`flex flex-col lg:flex-row ${
          index % 2 === 1 ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="flex items-center relative p-4 sm:p-6 md:p-8 lg:p-10 lg:w-1/2 overflow-hidden bg-neutral-700">
          {imageUrl &&
            imageUrl.map((url, imgIndex) =>
              imgIndex == 1 ? (
                <img
                  key={imgIndex}
                  src={url}
                  alt={`${title} mobile preview`}
                  className="w-28 sm:w-32 md:w-36 lg:w-40 h-[180px] sm:h-[200px] md:h-56 lg:h-72 absolute right-0 transition-smooth group-hover:scale-105 duration-500 object-cover"
                />
              ) : (
                <img
                  key={imgIndex}
                  src={url}
                  alt={`${title} desktop preview`}
                  className="w-full sm:w-[90%] md:w-[87%] lg:w-[85%] h-[160px] sm:h-[180px] md:h-56 lg:h-[300px] object-cover transition-smooth group-hover:scale-105 duration-500"
                />
              )
            )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth hover:duration-500" />
        </div>
        <div className="lg:w-1/2 px-4 sm:px-5 md:px-6 lg:px-4 my-auto py-6 sm:py-5 md:py-6 lg:py-0">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3">
            {title}
          </h1>
          <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm md:text-base lg:text-[18px]">
            {description}
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
            {techStack.map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="outline"
                className="bg-secondary text-foreground hover:bg-accent/10 transition-smooth text-xs sm:text-sm md:text-[15px] lg:text-[16px] px-2 py-0.5"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div>
            {frontendUrl && backendUrl ? (
              <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-3 sm:gap-3 md:gap-4">
                <Button
                  variant="secondary"
                  className="text-white hover:scale-105 transition-all duration-300 px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 text-xs sm:text-sm md:text-[15px] lg:text-[16px] bg-secondary hover:bg-[#3b3d49] hover:border-transparent cursor-pointer w-full lg:w-auto"
                >
                  <a
                    href={frontendUrl}
                    className="flex items-center justify-center gap-2 w-full"
                  >
                    <FiGithub
                      size={16}
                      className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
                      color="white"
                    />
                    <span className="hidden sm:inline">
                      Frontend Source Code
                    </span>
                    <span className="sm:hidden">Frontend Code</span>
                  </a>
                </Button>
                <Button
                  variant="secondary"
                  className="text-white hover:scale-105 transition-all duration-300 px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 text-xs sm:text-sm md:text-[15px] lg:text-[16px] bg-secondary hover:bg-[#3b3d49] hover:border-transparent cursor-pointer w-full lg:w-auto"
                >
                  <a
                    href={backendUrl}
                    className="flex items-center justify-center gap-2 w-full"
                  >
                    <FiGithub
                      size={16}
                      className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
                      color="white"
                    />
                    <span className="hidden sm:inline">
                      Backend Source Code
                    </span>
                    <span className="sm:hidden">Backend Code</span>
                  </a>
                </Button>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
