/* Hallmark · component: project-card · genre: editorial · theme: monochrome
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (46–50)
 */

import { Card } from "./ui/card";
import { ArrowUpRight, Github } from "lucide-react";
import Reveal from "./Reveal";

type ProjectProps = {
  title: string;
  description: string;
  imageUrl?: string[] | undefined;
  projectUrl?: string | undefined;
  frontendUrl?: string | undefined;
  backendUrl?: string | undefined;
  liveUrl?: string | undefined;
  number: string;
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
  number,
}: ProjectProps) => {
  const cardLabel = tag ?? (hasMockup ? "Featured Application" : "Backend Architecture");
  const mockup = imageUrl?.[0];
  const phoneMockup = imageUrl?.[1];

  const linkClass =
    "inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium underline underline-offset-4 decoration-1 hover:decoration-2 transition-all duration-150";

  return (
    <Reveal className="h-full">
      <Card className="h-full gap-0 border-rule bg-card p-6 sm:p-7 flex flex-col">
        <div className="flex items-baseline justify-between gap-4">
          <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-ink-soft">
            {cardLabel}
          </span>
          <span className="font-mono text-xs text-ink-soft">{number}</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mt-3">
          {title}
        </h3>

        <p className="text-sm leading-relaxed mt-3 max-w-[62ch]">{description}</p>

        {highlights && highlights.length > 0 && (
          <ul className="divide-y divide-rule border-y border-rule mt-6">
            {highlights.map((item) => (
              <li key={item} className="py-3 text-sm text-ink-soft">
                {item}
              </li>
            ))}
          </ul>
        )}

        {mockup && (
          <div className="flex items-end gap-3 mt-6 min-w-0">
            <img
              src={mockup}
              alt={`${title} desktop preview`}
              width={1600}
              height={975}
              loading="lazy"
              className="grayscale w-full min-w-0 h-auto border border-rule"
            />
            {phoneMockup && (
              <img
                src={phoneMockup}
                alt={`${title} mobile preview`}
                width={1020}
                height={2160}
                loading="lazy"
                className="grayscale hidden sm:block w-[18%] min-w-[56px] max-w-[88px] h-auto shrink-0 border border-rule"
              />
            )}
          </div>
        )}

        <p className="text-sm text-ink-soft mt-6">
          {techStack.join(" · ")}
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-rule pt-4 mt-auto">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <ArrowUpRight size={14} />
              <span>Live Demo</span>
            </a>
          ) : (
            projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
            )
          )}

          {frontendUrl && (
            <a
              href={frontendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <Github size={14} />
              <span>Frontend</span>
            </a>
          )}

          {backendUrl && (
            <a
              href={backendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <Github size={14} />
              <span>Backend</span>
            </a>
          )}
        </div>
      </Card>
    </Reveal>
  );
};

export default ProjectCard;
