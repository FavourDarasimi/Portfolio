/* Hallmark · component: section:services · genre: editorial · theme: monochrome
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (46–50)
 */

import React from "react";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";

interface ServicesProps {
  servicesRef: React.RefObject<HTMLDivElement | null>;
}

const Services: React.FC<ServicesProps> = ({ servicesRef }) => {
  const services = [
    {
      title: "Web Development",
      description:
        "Full-stack web applications engineered for performance, scalability, and long-term maintainability.",
    },
    {
      title: "Frontend Engineering",
      description:
        "Intuitive, high-fidelity user interfaces built with React, TypeScript, and modern styling architectures.",
    },
    {
      title: "Backend & Systems",
      description:
        "Robust server-side architectures, custom business logic, and structured database management.",
    },
    {
      title: "API Integration",
      description:
        "Designing RESTful APIs and seamless data integration layers for third-party platforms.",
    },
    {
      title: "Responsive UI & UX",
      description:
        "Adaptive and mobile-first layouts designed to deliver flawless experiences across all viewports.",
    },
    {
      title: "Performance Tuning",
      description:
        "Optimizing bundle sizes, API latency, render speeds, and Core Web Vitals for maximum performance.",
    },
  ];

  return (
    <section ref={servicesRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8">
      <SectionHeader
        index="03"
        label="Services"
        title="Services & Solutions"
        deck="Tailored software development services designed to translate your ideas into scalable, high-performance web products."
      />

      <Reveal className="mt-10 sm:mt-14">
        <ul className="grid grid-cols-1 sm:grid-cols-2 border-b border-rule">
          {services.map((service, idx) => (
            <li
              key={service.title}
              className="border-t border-rule py-6 sm:even:border-l sm:even:border-rule sm:even:pl-8 sm:odd:pr-8 flex items-start gap-5"
            >
              <span className="font-mono text-xs text-ink-soft pt-1 shrink-0">
                3.{idx + 1}
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft mt-2 max-w-[52ch]">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
};

export default Services;
