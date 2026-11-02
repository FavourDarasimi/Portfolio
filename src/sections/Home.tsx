/* Hallmark · component: hero · genre: editorial · theme: monochrome
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (46–50)
 */

import React from "react";
import { Button } from "../components/ui/button";
import Reveal from "../components/Reveal";

interface HomeProps {
  homeRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
}

const Home: React.FC<HomeProps> = ({
  homeRef,
  projectsRef,
  scrollToSection,
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./Darasimi_CV.pdf";
    link.download = "Darasimi_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const techBadges = ["Next.js", "Django REST Framework", "Tailwind CSS"];

  return (
    <section
      ref={homeRef}
      className="min-h-[calc(100vh-var(--nav-h))] flex items-center px-4 sm:px-6 md:px-8 py-16 sm:py-24"
    >
      <Reveal className="w-full">
        <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.18em] font-medium text-ink-soft">
          <span className="w-1.5 h-1.5 rounded-full bg-ink shrink-0" />
          <span>Available for work &amp; projects</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[0.98] mt-8 break-words [overflow-wrap:anywhere]">
          I build web products that solve problems and deliver real impact.
        </h1>

        <p className="text-sm sm:text-base leading-relaxed text-ink-soft max-w-[58ch] mt-6">
          I design modern user interfaces, engineer robust backend systems, and
          ship scalable full-stack web applications using Next.js, Django REST
          Framework, and Tailwind CSS.
        </p>

        <div className="border-t border-rule mt-12 pt-6 flex flex-wrap items-baseline gap-x-3 gap-y-2">
          <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-ink-soft">
            Core stack
          </span>
          <span className="text-sm">{techBadges.join(" · ")}</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-10">
          <Button
            onClick={() => scrollToSection(projectsRef)}
            className="h-12 px-7 text-sm font-semibold bg-ink text-white border border-ink hover:bg-transparent hover:text-ink transition-colors duration-200 cursor-pointer"
          >
            View Projects
          </Button>

          <Button
            onClick={handleDownload}
            variant="outline"
            className="h-12 px-7 text-sm font-semibold bg-transparent text-ink border border-ink shadow-none hover:bg-ink hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Download CV
          </Button>
        </div>
      </Reveal>
    </section>
  );
};

export default Home;
