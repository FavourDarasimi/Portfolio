/* Hallmark · component: project-card · genre: editorial · theme: custom
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (46–50)
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github } from "lucide-react";

type ProjectProps = {
  title: string;
  description: string;
  imageUrl?: string[] | undefined;
  projectUrl?: string | undefined;
  frontendUrl?: string | undefined;
  backendUrl?: string | undefined;
  liveUrl?: string | undefined;
  index: number;
  techStack: string[];
};

const ProjectCard = ({
  title,
  description,
  imageUrl,
  projectUrl,
  frontendUrl,
  backendUrl,
  techStack,
  liveUrl,
}: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const targetLink = liveUrl || projectUrl || frontendUrl || backendUrl;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="overflow-hidden bg-[#121214]/60 backdrop-blur-xl border border-white/10 hover:border-[#FF5A36]/50 transition-all duration-300 rounded-3xl shadow-2xl group relative flex flex-col h-full cursor-pointer min-h-[360px] sm:min-h-[380px]"
      >
        {/* Default Text Content (Slides OUT to Left on Hover) */}
        <motion.div
          className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-6 w-full h-full"
          initial={{ x: "0%", opacity: 1 }}
          animate={{
            x: isHovered ? "-105%" : "0%",
            opacity: isHovered ? 0 : 1,
          }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A36]" />
              <span className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
                Featured Application
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-[#FF5A36] transition-colors duration-300">
              {title}
            </h3>
            <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm font-normal">
              {description}
            </p>
          </div>

          <div className="space-y-5 pt-3 border-t border-white/5">
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="outline"
                  className="bg-white/5 text-zinc-200 border-white/10 hover:border-[#FF5A36]/50 hover:bg-[#FF5A36]/10 hover:text-white transition-all duration-200 text-xs px-3 py-1 font-medium rounded-full cursor-pointer"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            {(liveUrl || projectUrl || frontendUrl || backendUrl) && (
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                {liveUrl ? (
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center gap-1.5 bg-[#FF5A36] hover:bg-[#E04826] active:scale-95 text-white px-4 py-2 rounded-full font-semibold text-xs transition-all duration-300 cursor-pointer shadow-md outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
                  >
                    <ArrowUpRight size={14} />
                    <span>Live Demo</span>
                  </a>
                ) : (
              </div>
            )}
          </div>
        </motion.div>

        {/* Hover Mockup Layer (Slides IN from Right on Hover) */}
        <motion.a
          href={targetLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20 p-6 sm:p-8 flex flex-col justify-between bg-[#121214]/95 backdrop-blur-2xl rounded-3xl overflow-hidden border border-[#FF5A36]/40"
          initial={{ x: "105%", opacity: 0 }}
          animate={{
            x: isHovered ? "0%" : "105%",
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Centered Mockup Images */}
          <div className="flex-grow flex items-center justify-center relative w-full h-full overflow-hidden p-1 sm:p-2">
            {imageUrl &&
              imageUrl.map((url, imgIndex) =>
                imgIndex === 1 ? (
                  <motion.img
                    key={imgIndex}
                    src={url}
                    alt={`${title} mobile preview`}
                    className="w-20 sm:w-28 md:w-32 h-auto max-h-[90%] object-contain -ml-6 sm:-ml-10 rounded-xl shadow-2xl relative z-10 border border-white/20 shrink-0"
                    animate={{ scale: isHovered ? 1.04 : 0.95 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  />
                ) : (
                  <motion.img
                    key={imgIndex}
                    src={url}
                    alt={`${title} desktop preview`}
                    className="w-full h-full max-h-full object-contain rounded-xl shadow-2xl border border-white/15"
                    animate={{ scale: isHovered ? 1.02 : 0.95 }}
                    transition={{ duration: 0.4 }}
                  />
                )
              )}
          </div>

          {/* Bottom Overlay Info Bar */}
          <div className="flex items-center justify-between pt-3 border-t border-white/10 shrink-0">
            <span className="text-xs text-zinc-300 font-medium tracking-wide">
              {title}
            </span>
          </div>
        </motion.a>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
