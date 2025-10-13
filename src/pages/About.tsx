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
    <div
      className="bg-secondary py-10 sm:py-12 md:py-16 lg:py-20"
      ref={aboutRef}
    >
      <div className="px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center pb-3 sm:pb-4 lg:pb-5">
          Who I Am
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-[20px] mx-auto max-w-[90%] sm:max-w-[85%] md:max-w-[90%] lg:mx-80 text-muted-foreground text-center pb-8 sm:pb-10 md:pb-14 lg:pb-20">
          I'm a full-stack web developer who enjoys building applications that
          are practical, scalable, and user-friendly. For me, coding is more
          than just writing functions — it's about designing solutions that make
          life easier for people.
        </p>
      </div>
      <div className="px-4 sm:px-6 md:px-8">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-3xl lg:text-3xl text-center pb-3 sm:pb-4 lg:pb-5">
          My Journey
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-[20px] mx-auto max-w-[90%] sm:max-w-[85%] md:max-w-[90%] lg:mx-80 text-muted-foreground text-center pb-8 sm:pb-10 md:pb-14 lg:pb-20">
          My Path in Development I started learning software development out of
          curiosity about how digital products work beneath the surface. Over
          time, that curiosity grew into a passion for creating software of my
          own. Today, I work mainly with React and Django REST Framework,
          crafting projects that connect clean back-end logic with smooth
          front-end experiences.
        </p>
      </div>
      <div className="px-4 sm:px-6 md:px-8">
        <h3 className="font-semibold text-2xl sm:text-3xl md:text-3xl lg:text-3xl text-center mb-4 sm:mb-5">
          What I Focus On
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:mx-20">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card hover:scale-105 lg:hover:scale-110 cursor-pointer transition-all duration-300"
            >
              <CardContent className="text-center p-4 sm:p-5 md:p-5 lg:p-6">
                <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 md:h-8 md:w-8 text-primary mx-auto mb-3 sm:mb-4" />
                <h4 className="font-semibold mb-2 text-xs sm:text-sm md:text-base lg:text-[18px]">
                  {feature.title}
                </h4>
                <p className="text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-muted-foreground leading-relaxed">
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
