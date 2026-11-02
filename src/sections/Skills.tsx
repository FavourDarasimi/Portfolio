/* Hallmark · component: section:skills · genre: editorial · theme: monochrome
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (46–50)
 */

import React from "react";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";

interface SkillsProps {
  skillsRef: React.RefObject<HTMLDivElement | null>;
}

const Skills: React.FC<SkillsProps> = ({ skillsRef }) => {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      description: "Building responsive, modern, and accessible user interfaces.",
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Framer Motion",
        "HTML5 / CSS3",
      ],
    },
    {
      title: "Backend & Systems",
      description: "Designing REST APIs, database schemas, and business logic.",
      skills: [
        "Django",
        "Django REST Framework",
        "Python",
        "Supabase",
        "Postman",
        "REST APIs",
      ],
    },
    {
      title: "Tools & Ecosystem",
      description: "Version control, containerization, and cloud deployment.",
      skills: ["Docker", "Git", "GitHub", "Vercel"],
    },
  ];

  return (
    <section ref={skillsRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8">
      <SectionHeader
        index="02"
        label="Skills"
        title="Skills & Stack Proficiency"
        deck="A battle-tested set of languages, frameworks, and developer tools I use to turn ideas into production-ready web products."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 mt-10 sm:mt-14">
        {skillCategories.map((category, idx) => (
          <Reveal key={category.title}>
            <div className="flex items-baseline gap-3 border-b border-rule pb-3">
              <span className="font-mono text-xs text-ink-soft">
                2.{idx + 1}
              </span>
              <h3 className="text-base font-semibold tracking-tight">
                {category.title}
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-ink-soft mt-4">
              {category.description}
            </p>

            <ul className="mt-5 border-b border-rule">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="border-t border-rule py-3 text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
