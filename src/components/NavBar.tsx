import React, { useState } from "react";
import { Github, Mail, Twitter, Menu, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const NavLinks = () => (
    <div className="flex md:flex-row flex-col md:gap-8 gap-5">
      <h1
        className="text-gray-400 hover:text-white cursor-pointer text-[17px] transition-all duration-500"
        onClick={() => {
          scrollToSection(aboutRef);
          setMenuOpen(false);
        }}
      >
        About
      </h1>
      <h1
        className="text-gray-400 hover:text-white cursor-pointer text-[17px] transition-all duration-500"
        onClick={() => {
          scrollToSection(skillsRef);
          setMenuOpen(false);
        }}
      >
        Skills
      </h1>
      <h1
        className="text-gray-400 hover:text-white cursor-pointer text-[17px] transition-all duration-500"
        onClick={() => {
          scrollToSection(projectsRef);
          setMenuOpen(false);
        }}
      >
        Project
      </h1>
      <h1
        className="text-gray-400 hover:text-white cursor-pointer text-[17px] transition-all duration-500"
        onClick={() => {
          scrollToSection(contactRef);
          setMenuOpen(false);
        }}
      >
        Contact
      </h1>
    </div>
  );

  const SocialLinks = () => (
    <div className="flex gap-6">
      <a href="https://github.com/FavourDarasimi" target="_blank">
        <Button
          size="lg"
          className="bg-transparent hover:bg-gradient-to-r from-[#a855f7] to-blue-500 hover:border-transparent"
        >
          <Github size={26} color="white" />
        </Button>
      </a>
      <a
        href="https://x.com/CodeWithDara?t=8fnrTaTdZ5jeNAZkom-X1w&s=09"
        target="_blank"
      >
        <Button
          size="lg"
          className="bg-transparent hover:bg-gradient-to-r from-[#a855f7] to-blue-500 hover:border-transparent"
        >
          <Twitter size={26} color="white" />
        </Button>
      </a>
      <a href="mailto:darasimi0603@gmail.com">
        <Button
          size="lg"
          className="bg-transparent hover:bg-gradient-to-r from-[#a855f7] to-blue-500 hover:border-transparent"
        >
          <Mail size={30} color="white" />
        </Button>
      </a>
    </div>
  );

  return (
    <div className="flex justify-between items-center md:py-3 py-[6px] px-6 md:px-20 backdrop-blur-lg fixed w-full top-0 z-50">
      {/* Logo */}
      <h1
        className="cursor-pointer text-[26px] md:text-[34px] font-bold bg-gradient-to-r from-[#a855f7] to-blue-500 bg-clip-text text-transparent"
        onClick={() => scrollToSection(homeRef)}
      >
        CodeWithDara
      </h1>

      {/* Desktop Menu */}
      <div></div>
      <div className="hidden md:flex">
        <NavLinks />
      </div>
      <div className="hidden md:flex">
        <SocialLinks />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X size={28} color="white" />
          ) : (
            <Menu size={28} color="white" />
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-[50px] left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-6 space-y-6 md:hidden">
          <NavLinks />
          <SocialLinks />
        </div>
      )}
    </div>
  );
};

export default NavBar;
