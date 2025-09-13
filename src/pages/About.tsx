import React from "react";
import { Code, Palette, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement | null>;
}

const About: React.FC<AboutProps> = ({ aboutRef }) => {
  const features = [
    {
      icon: Code,
      title: "Writing Clean Code",
      description: "Maintainable, efficient, and scalable.",
    },
    {
      icon: Palette,
      title: "Crafting Good Interfaces",
      description: "Intuitive layouts with attention to user experience.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Ensuring apps run quickly and handle data smoothly.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description:
        "Clear communication and problem-solving in collaborative settings.",
    },
  ];
  return (
    <div className="bg-secondary md:py-20 py-10" ref={aboutRef}>
      <div>
        <h1 className="md:text-5xl text-3xl font-bold text-center md:pb-5 pb-4">
          Who I{" "}
          <span className="bg-gradient-to-r from-[#a855f7]  to-blue-500    bg-clip-text text-transparent">
            Am
          </span>
        </h1>
        <h1 className="md:text-[20px] text-[15px] md:mx-80 mx-2 text-gray-400 text-center md:pb-20 pb-10">
          I’m a full-stack web developer who enjoys building applications that
          are practical, scalable, and user-friendly. For me, coding is more
          than just writing functions — it’s about designing solutions that make
          life easier for people.
        </h1>
      </div>
      <div>
        <h1 className="font-semibold md:text-3xl text-2xl text-center md:pb-5 pb-4">
          My Journey
        </h1>
        <h1 className="md:text-[20px] text-[15px] md:mx-80 mx-2 text-gray-400 text-center pb-20">
          My Path in Development I started learning software development out of
          curiosity about how digital products work beneath the surface. Over
          time, that curiosity grew into a passion for creating software of my
          own. Today, I work mainly with React and Django REST Framework,
          crafting projects that connect clean back-end logic with smooth
          front-end experiences.
        </h1>
      </div>
      <div>
        <h1 className="font-semibold md:text-3xl text-2xl text-center mb-5">
          What I Focus On
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-6 md:mx-20 gap-2 mx-5">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card hover:scale-110 cursor-pointer transition-all duration-300 "
            >
              <CardContent className=" text-center">
                <feature.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2 md:text-[16px] text-[15px]">
                  {feature.title}
                </h4>
                <p className="md:text-sm text-[13px] text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
