/* Hallmark · component: section:about · genre: editorial · theme: monochrome
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (46–50)
 */

import React from "react";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement | null>;
}

const About: React.FC<AboutProps> = ({ aboutRef }) => {
  const focus = [
    {
      category: "Architecture",
      title: "Clean Code",
      description: "Maintainable, modular, and well-structured codebases.",
    },
    {
      category: "Interfaces",
      title: "Intuitive Design",
      description: "Fluid layouts with high attention to user experience.",
    },
    {
      category: "Performance",
      title: "Speed & Scale",
      description: "Optimizing render speeds, bundles, and API latency.",
    },
    {
      category: "Engineering",
      title: "Collaboration",
      description:
        "Effective communication and solution-focused teamwork.",
    },
  ];

  const story = [
    {
      label: "Who I Am",
      body: "I'm a full-stack web developer who enjoys building applications that are practical, scalable, and user-friendly. For me, coding is more than just writing functions — it's about designing solutions that make life easier for people.",
    },
    {
      label: "My Journey",
      body: "I started learning software development out of curiosity about how digital products work beneath the surface. Over time, that curiosity grew into a passion for creating software of my own. Today, I work mainly with React, Next.js, and Django REST Framework, crafting projects that connect clean back-end logic with smooth front-end experiences.",
    },
  ];

  return (
    <section ref={aboutRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8">
      <SectionHeader
        index="01"
        label="About"
        title="Engineering software with purpose & precision."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 mt-10 sm:mt-14 lg:gap-y-14">
        <Reveal className="space-y-10">
          {story.map((item) => (
            <div key={item.label}>
              <h3 className="text-[11px] uppercase tracking-[0.18em] font-medium text-ink-soft">
                {item.label}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed mt-3 max-w-[62ch]">
                {item.body}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <h3 className="text-[11px] uppercase tracking-[0.18em] font-medium text-ink-soft">
            What I Focus On
          </h3>
          <ul className="mt-4 border-b border-rule">
            {focus.map((item) => (
              <li
                key={item.title}
                className="border-t border-rule py-5 grid grid-cols-1 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] gap-x-8 gap-y-1.5 items-baseline"
              >
                <h4 className="text-base sm:text-lg font-semibold tracking-tight">
                  {item.title}
                </h4>
                <div>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-ink-soft mt-1.5">
                    {item.category}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
