import React from "react";
import { Card } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string[];
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
        className={`flex flex-col  lg:flex-row ${
          index % 2 === 1 ? "lg:flex-row-reverse" : ""
        }`}
      >
        {" "}
        <div className="flex items-center relative p-10 w-1/2 overflow-hidden bg-neutral-700">
          {imageUrl.map((url, index) =>
            index == 1 ? (
              <img
                src={url}
                alt=""
                className="w-40 h-72 absolute right-0 -translate-x-0  transition-smooth group-hover:scale-105 duration-500"
              />
            ) : (
              <img
                src={url}
                alt=""
                className="w-[85%] h-[300px] transition-smooth  group-hover:scale-105 duration-500"
              />
            )
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth hover:duration-500" />
        </div>
        <div className="w-1/2 px-5 my-auto">
          <h1 className="text-2xl font-bold text-foreground mb-4">{title}</h1>
          <h1 className="text-muted-foreground mb-6 leading-relaxed">
            {description}
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {techStack.map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="outline"
                className="bg-secondary text-foreground hover:bg-accent/10 transition-smooth"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div>
            {frontendUrl && backendUrl ? (
              <div className="flex gap-4">
                <Button
                  variant="secondary"
                  className="text-white hover:scale-110 transition-all duration-500 p-5 text-[14px]  bg-secondary hover:bg-gradient-to-r from-[#a855f7]  to-blue-500 hover:border-transparent cursor-pointer"
                >
                  <a href={frontendUrl} className="flex items-center gap-2">
                    <Github size={20} color="white" />
                    Frontend Source Code
                  </a>
                </Button>
                <Button
                  variant="secondary"
                  className="text-white hover:scale-110 transition-all duration-500 p-5 text-[14px]  bg-secondary hover:bg-gradient-to-r from-[#a855f7]  to-blue-500 hover:border-transparent cursor-pointer"
                >
                  <a href={backendUrl} className="flex items-center gap-2">
                    <Github size={20} color="white" />
                    Backend Source Code
                  </a>
                </Button>
              </div>
            ) : (
              <Button
                variant="secondary"
                className="text-white hover:scale-110 transition-all duration-500 p-5 text-[14px]  bg-secondary hover:bg-gradient-to-r from-[#a855f7]  to-blue-500 hover:border-transparent cursor-pointer"
              >
                {" "}
                <a href={projectUrl} className="flex items-center gap-2">
                  <Github size={20} color="white" />
                  Source Code{" "}
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
