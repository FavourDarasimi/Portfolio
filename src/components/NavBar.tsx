import React from "react";
import { Github, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavBarProps {
  homeRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  skillsRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
}

const NavBar: React.FC<NavBarProps> = ({
  homeRef,
  aboutRef,
  skillsRef,
  projectsRef,
  contactRef,
  scrollToSection,
}) => {
  return (
    <div className="flex justify-between items-center py-3 px-20 backdrop-blur-lg fixed w-full top-0 z-50">
      <div>
        <h1
          className="name cursor-pointer text-[34px] font-bold bg-gradient-to-r  from-[#a855f7]   to-blue-500 bg-clip-text text-transparent"
          onClick={() => scrollToSection(homeRef)}
        >
          CodeWithDara
        </h1>
      </div>
      <div className="flex gap-8">
        <h1
          className="text-gray-400 hover:text-white cursor-pointer text-[17px] transition-all duration-500"
          onClick={() => scrollToSection(aboutRef)}
        >
          About
        </h1>
        <h1
          className="text-gray-400 hover:text-white cursor-pointer text-[17px] transition-all duration-500"
          onClick={() => scrollToSection(skillsRef)}
        >
          Skills
        </h1>
        <h1
          className="text-gray-400 hover:text-white cursor-pointer text-[17px] transition-all duration-500"
          onClick={() => scrollToSection(projectsRef)}
        >
          Project
        </h1>
        <h1
          className="text-gray-400 hover:text-white cursor-pointer text-[17px] transition-all duration-500"
          onClick={() => scrollToSection(contactRef)}
        >
          Contact
        </h1>
      </div>
      <div className="flex gap-8">
        <a href="https://github.com/FavourDarasimi">
          <Button
            size="lg"
            className=" bg-transparent hover:bg-gradient-to-r from-[#a855f7]  to-blue-500 hover:border-transparent cursor-pointer "
          >
            <Github size={30} color="white" />
          </Button>
        </a>

        <a href="https://x.com/CodeWithDara?t=8fnrTaTdZ5jeNAZkom-X1w&s=09">
          {" "}
          <Button
            size="lg"
            className=" bg-transparent hover:bg-gradient-to-r from-[#a855f7]  to-blue-500 hover:border-transparent cursor-pointer "
          >
            <Twitter size={30} color="white" />
          </Button>
        </a>

        <a href="mailto:darasimi0603@gmail.com">
          {" "}
          <Button
            size="lg"
            className=" bg-transparent hover:bg-gradient-to-r from-[#a855f7]  to-blue-500 hover:border-transparent cursor-pointer "
          >
            <Mail size={40} color="white" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
