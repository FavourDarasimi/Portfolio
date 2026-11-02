/* Hallmark · component: section:projects · genre: editorial · theme: monochrome
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (46–50)
 */

import React from "react";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";

import gemmacodeLaptop from "../assets/gemmacode laptop.webp";
import gemmacodeMobile from "../assets/gemmacode mobile.webp";
import plantleyLaptop from "../assets/plantley laptop.webp";
import plantleyMobile from "../assets/plantley mobile.webp";
import veyloraLaptop from "../assets/veylora laptop.webp";
import veyloraMobile from "../assets/veylora mobile.webp";
import steelgrooveLaptop from "../assets/steelgroove laptop.webp";
import steelgrooveMobile from "../assets/steelgroove mobile.webp";
import aurabydassyLaptop from "../assets/aurabydassy laptop.webp";
import aurabydassyMobile from "../assets/aurabydassy mobile.webp";
import nexusLaptop from "../assets/nexusevent laptop.webp";
import nexusMobile from "../assets/nexusevents mobile.webp";

interface ProjectProps {
  projectsRef: React.RefObject<HTMLDivElement | null>;
}

const Projects: React.FC<ProjectProps> = ({ projectsRef }) => {
  const projectData = [
    {
      title: "Auth System",
      description:
        "Designed a security-hardened authentication system that closes common account-takeover gaps: TOTP MFA with backup codes, refresh-token rotation with reuse detection, brute-force lockouts, and full login audit trails — built as a reusable drop-in module for other projects.",
      hasMockup: false,
      highlights: [
        "TOTP MFA & Backup Code Generation",
        "Refresh Token Rotation & Reuse Detection",
        "Brute-Force Lockout & Rate Limiting",
        "Full Security Login Audit Trails",
      ],
      projectUrl: "https://github.com/FavourDarasimi/Auth-System.git",
      techStack: ["Python", "Django", "Django REST Framework"],
      featured: true,
    },
    {
      title: "GemmaCode",
      description:
        "Built a full-stack AI coding assistant end to end — from secure login (JWT + GitHub/Google OAuth) to real-time streaming chat with persistent history — demonstrating the ability to ship a complete, production-style LLM-powered product solo.",
      imageUrl: [gemmacodeLaptop, gemmacodeMobile],
      liveUrl: "https://gemma-code-frontend.vercel.app/",
      frontendUrl: "https://github.com/FavourDarasimi/Gemma-Code-Frontend.git",
      backendUrl: "https://github.com/FavourDarasimi/Gemma-Code-Backend.git",
      techStack: ["Next.js", "TypeScript", "Django REST Framework", "Google Gemma"],
      featured: true,
    },
    {
      title: "Notification System",
      description:
        "Built a real-time notification microservice that guarantees reliable delivery at scale — automatic retries with backoff, idempotency keys to prevent duplicate sends, and full delivery audit logs — plus scheduled digest emails and automated data cleanup to keep the system self-maintaining.",
      hasMockup: false,
      highlights: [
        "Celery & Redis Distributed Task Queue",
        "Exponential Backoff & Automatic Retries",
        "Idempotency Keys (Prevent Duplicate Delivery)",
        "Pusher Websockets & Scheduled Digest Mail",
      ],
      projectUrl: "https://github.com/FavourDarasimi/Auth-System.git",
      techStack: ["Python", "Django", "Django REST Framework", "Celery", "Redis", "Pusher"],
      featured: true,
    },
    {
      title: "Plantley",
      description:
        "Built an ML-powered app that gives instant tomato disease diagnosis from a photo, enabling early intervention without needing an agricultural expert on hand — paired a camera-capture frontend with a Django API serving a Keras CNN model.",
      imageUrl: [plantleyLaptop, plantleyMobile],
      liveUrl: "http://plantley.vercel.app/",
      frontendUrl: "https://github.com/FavourDarasimi/Plantley.git",
      backendUrl: "https://github.com/FavourDarasimi/Plantley-Backend.git",
      techStack: ["Next.js", "TypeScript", "Django REST Framework", "TensorFlow/Keras"],
      featured: true,
    },
    {
      title: "Veylora Interiors",
      description:
        "Built an interactive portfolio site that helps an interior design studio showcase past work convincingly — including a before/after comparison slider that lets prospective clients see transformation quality at a glance.",
      imageUrl: [veyloraLaptop, veyloraMobile],
      liveUrl: "https://veylora-interiors.vercel.app/",
      projectUrl: "https://github.com/FavourDarasimi/Veylora-Interiors.git",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
      featured: true,
    },
    {
      title: "Steel Groove Construction",
      description:
        "Built a multi-page marketing site that communicates a construction firm's process and credibility to prospective clients, using animated process breakdowns and a dedicated project showcase to build trust before first contact.",
      imageUrl: [steelgrooveLaptop, steelgrooveMobile],
      liveUrl: "http://steel-groove-construction.vercel.app/",
      projectUrl: "https://github.com/FavourDarasimi/Steel-Groove-Construction",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
      featured: true,
    },
    {
      title: "Nexus Events",
      description:
        "Designed and built a 5-page luxury brand site from scratch, translating a premium positioning (dark/gold theme, custom animations) into a cohesive multi-page experience with an interactive filterable gallery.",
      imageUrl: [nexusLaptop, nexusMobile],
      liveUrl: "https://nexus-events.pxxl.run/",
      projectUrl: "https://github.com/FavourDarasimi/Blogify-Space-v2.git",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
      featured: true,
    },
    {
      title: "AuraByDassy",
      description:
        "Built a full-stack e-commerce platform that lets a Nigerian fashion brand sell directly online — replacing manual/social-media order-taking with a self-service storefront and a custom admin dashboard for inventory and order tracking.",
      imageUrl: [aurabydassyLaptop, aurabydassyMobile],
      liveUrl: "http://aurabydassy.shop/",
      projectUrl: "https://github.com/FavourDarasimi/AuraByDassy",
      techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      featured: true,
    },
  ];

  const otherProjects = [
    {
      title: "Velion",
      description:
        "Built a modern dealership site for Velion Motors — hand-picked cars with transparent pricing, filterable collection, showroom with detail dialogs, financing calculator, trade-in estimator, and test-drive booking in a responsive dark/light experience.",
      hasMockup: false,
      highlights: [
        "Filterable Collection by Body Type",
        "Showroom with Car Detail Dialogs",
        "Financing Calculator & Trade-In Estimator",
        "Dark/Light Mode + GSAP Scroll Animations",
      ],
      liveUrl: "https://velion-dun.vercel.app/",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
      tag: "Other Project",
    },
    {
      title: "MockDrop",
      description:
        "Built a zero-friction developer tool that turns pasted JSON into a live, CORS-enabled REST endpoint in seconds — with status-code simulation, Redis-backed 24-hour expiry, rate limiting, and one-click copy.",
      hasMockup: false,
      highlights: [
        "Paste JSON → Live GET Endpoint",
        "Status-Code Simulation (200 / 404 / 500)",
        "Redis TTL Expiry (24h) + Rate Limiting",
        "CORS-Enabled + One-Click Copy",
      ],
      liveUrl: "https://mockdrop.pxxl.click/",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Redis", "nanoid"],
      tag: "Other Project",
    },
  ];

  return (
    <section ref={projectsRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8">
      <SectionHeader
        index="04"
        label="Selected Work"
        title="Featured Projects"
        deck="A showcase of my recent production applications, demonstrating technical depth across modern frontend frameworks, backend API engineering, and responsive user experiences."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 sm:mt-14">
        {projectData.map(
          (project, index) =>
            project.featured && (
              <ProjectCard
                key={index}
                number={`4.${index + 1}`}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
                frontendUrl={project.frontendUrl}
                backendUrl={project.backendUrl}
                liveUrl={project.liveUrl}
                techStack={project.techStack}
                hasMockup={project.hasMockup}
                highlights={project.highlights}
              />
            )
        )}
      </div>

      <div className="mt-16 sm:mt-20">
        <Reveal>
          <div className="flex items-baseline gap-4 border-b border-rule pb-3">
            <span className="font-mono text-xs text-ink-soft">05</span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-ink-soft font-medium">
              More Builds
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-6">
            Other Projects
          </h3>
          <p className="text-sm leading-relaxed text-ink-soft max-w-[58ch] mt-3">
            Additional builds and experiments, shipped live without full
            case-study mockups.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={`other-${index}`}
              number={`5.${index + 1}`}
              title={project.title}
              description={project.description}
              liveUrl={project.liveUrl}
              techStack={project.techStack}
              hasMockup={project.hasMockup}
              highlights={project.highlights}
              tag={project.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
