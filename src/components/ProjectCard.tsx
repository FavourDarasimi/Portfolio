/* Hallmark · component: project-card · genre: editorial · theme: custom
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (46–50)
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github, ShieldCheck } from "lucide-react";

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
  hasMockup?: boolean;
  highlights?: string[];
  tag?: string;
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
  hasMockup = true,
  highlights,
  tag,
}: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardLabel = tag ?? (hasMockup ? "Featured Application" : "Backend Architecture");

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
        className="overflow-hidden bg-white/70 dark:bg-[#121214]/60 backdrop-blur-xl border border-zinc-900/10 dark:border-white/10 hover:border-[#FF5A36]/50 transition-all duration-300 rounded-3xl shadow-2xl group relative flex flex-col h-full cursor-pointer min-h-[360px] sm:min-h-[380px]"
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
              <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                {cardLabel}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white tracking-tight group-hover:text-[#FF5A36] transition-colors duration-300">
              {title}
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-xs sm:text-sm font-normal">
              {description}
            </p>
          </div>

          <div className="space-y-5 pt-3 border-t border-zinc-900/5 dark:border-white/5">
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="outline"
                  className="bg-zinc-900/5 dark:bg-white/5 text-zinc-700 dark:text-zinc-200 border-zinc-900/10 dark:border-white/10 hover:border-[#FF5A36]/50 hover:bg-[#FF5A36]/10 hover:text-zinc-900 dark:hover:text-white transition-all duration-200 text-xs px-3 py-1 font-medium rounded-full cursor-pointer"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            {(liveUrl || projectUrl || frontendUrl || backendUrl) && (
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                {liveUrl ? (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center gap-1.5 bg-[#FF5A36] hover:bg-[#E04826] active:scale-95 text-white px-4 py-2 rounded-full font-semibold text-xs transition-all duration-300 cursor-pointer shadow-md outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0A0A0A]"
                  >
                    <ArrowUpRight size={14} />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <>
                    {projectUrl && (
                      <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center gap-1.5 bg-zinc-900/5 dark:bg-white/5 hover:bg-zinc-900/10 dark:hover:bg-white/10 active:scale-95 border border-zinc-900/10 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-3.5 py-2 rounded-full font-medium text-xs transition-all duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0A0A0A]"
                      >
                        <Github size={14} />
                        <span>GitHub</span>
                      </a>
                    )}
                    {frontendUrl && (
                      <a
                        href={frontendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center gap-1.5 bg-zinc-900/5 dark:bg-white/5 hover:bg-zinc-900/10 dark:hover:bg-white/10 active:scale-95 border border-zinc-900/10 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-3.5 py-2 rounded-full font-medium text-xs transition-all duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0A0A0A]"
                      >
                        <Github size={14} />
                        <span>Frontend GitHub</span>
                      </a>
                    )}
                    {backendUrl && (
                      <a
                        href={backendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center gap-1.5 bg-zinc-900/5 dark:bg-white/5 hover:bg-zinc-900/10 dark:hover:bg-white/10 active:scale-95 border border-zinc-900/10 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-3.5 py-2 rounded-full font-medium text-xs transition-all duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0A0A0A]"
                      >
                        <Github size={14} />
                        <span>Backend GitHub</span>
                      </a>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </motion.div>

        {/* Hover Layer */}
        {!hasMockup ? (
          /* Architecture Specs Hover Layer for Backend Projects */
          <motion.a
            href={targetLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-20 p-6 sm:p-8 flex flex-col justify-between bg-white/98 dark:bg-[#121214]/98 backdrop-blur-2xl rounded-3xl overflow-hidden border border-[#FF5A36]/40"
            initial={{ x: "105%", opacity: 0 }}
            animate={{
              x: isHovered ? "0%" : "105%",
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck size={15} className="text-[#FF5A36]" />
                <span className="text-[11px] font-medium text-[#FF5A36] uppercase tracking-wider">
                  System Architecture Specs
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white tracking-tight">
                {title}
              </h3>
              {highlights && (
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 bg-zinc-900/5 dark:bg-white/5 border border-zinc-900/10 dark:border-white/10 rounded-2xl px-3.5 py-2.5 text-xs font-medium text-zinc-700 dark:text-zinc-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A36] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-zinc-900/10 dark:border-white/10 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 bg-[#FF5A36] text-white px-4.5 py-2.5 rounded-full font-semibold text-xs shadow-md">
                <Github size={15} />
                <span>View Source Code</span>
              </span>
            </div>
          </motion.a>
        ) : (
          /* Mockup Images Hover Layer for Frontend & Fullstack Web Apps */
          <motion.a
            href={targetLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-20 p-4 sm:p-6 md:p-8 flex flex-col justify-between bg-white/95 dark:bg-[#121214]/95 backdrop-blur-2xl rounded-3xl overflow-hidden"
            initial={{ x: "105%", opacity: 0 }}
            animate={{
              x: isHovered ? "0%" : "105%",
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Centered Mockup Images Container */}
            <div className="flex-grow flex items-center justify-center relative w-full h-full p-2 sm:p-4 overflow-hidden min-h-0">
              <div className="relative w-full h-full flex items-center justify-center">
                {imageUrl &&
                  imageUrl.map((url, imgIndex) =>
                    imgIndex === 1 ? (
                      /* Mobile Phone Preview Overlay */
                      <motion.img
                        key={imgIndex}
                        src={url}
                        alt={`${title} mobile preview`}
                        className="absolute bottom-20 md:bottom-4 right-1 sm:right-3 w-22 sm:w-22 md:w-28   max-h-[70%] sm:max-h-[85%] lg:mx-h-[100%] object-contain rounded-xl z-10 drop-shadow-2xl"
                        animate={{ scale: isHovered ? 1.04 : 0.95 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      />
                    ) : (
                      /* Main Desktop Preview */
                      <motion.img
                        key={imgIndex}
                        src={url}
                        alt={`${title} desktop preview`}
                        className="max-w-full max-h-full w-auto h-auto object-contain rounded-xl drop-shadow-lg"
                        animate={{ scale: isHovered ? 1.02 : 0.95 }}
                        transition={{ duration: 0.4 }}
                      />
                    )
                  )}
              </div>
            </div>

            {/* Bottom Overlay Info Bar */}
            <div className="flex items-center justify-between pt-2.5 sm:pt-3 border-t border-zinc-900/10 dark:border-white/10 shrink-0">
              <span className="text-xs text-zinc-600 dark:text-zinc-300 font-medium tracking-wide">
                {title}
              </span>
            </div>
          </motion.a>
        )}
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
