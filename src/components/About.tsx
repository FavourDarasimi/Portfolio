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
    <div className="bg-secondary py-20" ref={aboutRef}>
      <div>
        <h1 className="text-5xl font-bold text-center pb-5">
          Who I{" "}
          <span className="bg-gradient-to-r from-[#a855f7]  to-blue-500    bg-clip-text text-transparent">
            Am
          </span>
        </h1>
        <h1 className="text-[20px] mx-80 text-gray-400 text-center pb-20">
          I’m a full-stack web developer who enjoys building applications that
          are practical, scalable, and user-friendly. For me, coding is more
          than just writing functions — it’s about designing solutions that make
          life easier for people.
        </h1>
      </div>
      <div>
        <h1 className="font-semibold text-3xl text-center mb-5">My Journey</h1>
        <h1 className="text-[20px] mx-80 text-gray-400 text-center pb-20">
          My Path in Development I started learning software development out of
          curiosity about how digital products work beneath the surface. Over
          time, that curiosity grew into a passion for creating software of my
          own. Today, I work mainly with React and Django REST Framework,
          crafting projects that connect clean back-end logic with smooth
          front-end experiences.
        </h1>
      </div>
      <div>
        <h1 className="font-semibold text-3xl text-center mb-5">
          What I Focus On
        </h1>
        <div className="grid grid-cols-4 gap-6 mx-20">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card hover:scale-110 cursor-pointer transition-all duration-300"
            >
              <CardContent className=" text-center">
                <feature.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">
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
