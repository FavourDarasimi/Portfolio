import React, { useState } from "react";
import { Menu, X } from "lucide-react";

import { FiGithub, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

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
    <div className="flex lg:flex-row flex-col md:gap-6 lg:gap-8 gap-5">
      <h1
        className="text-muted-foreground hover:text-white hover:border-b-2 hover:border-white cursor-pointer text-base md:text-[16px] lg:text-[18px] transition-all duration-500"
        onClick={() => {
          scrollToSection(aboutRef);
          setMenuOpen(false);
        }}
      >
        About
      </h1>
      <h1
        className="text-muted-foreground hover:text-white hover:border-b-2 hover:border-white cursor-pointer text-base md:text-[16px] lg:text-[18px] transition-all duration-500"
        onClick={() => {
          scrollToSection(skillsRef);
          setMenuOpen(false);
        }}
      >
        Skills
      </h1>
      <h1
        className="text-muted-foreground hover:text-white hover:border-b-2 hover:border-white cursor-pointer text-base md:text-[16px] lg:text-[18px] transition-all duration-500"
        onClick={() => {
          scrollToSection(projectsRef);
          setMenuOpen(false);
        }}
      >
        Project
      </h1>
      <h1
        className="text-muted-foreground hover:text-white hover:border-b-2 hover:border-white cursor-pointer text-base md:text-[16px] lg:text-[18px] transition-all duration-500"
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
    <div className="flex gap-5 md:gap-6 lg:gap-8">
      <a
        href="https://github.com/FavourDarasimi"
        className="bg-transparent hover:bg-[#3b3d49] cursor-pointer p-2.5 md:p-2.5 lg:p-3 rounded-xl transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub
          size={20}
          className="md:w-[21px] md:h-[21px] lg:w-[23px] lg:h-[23px]"
          color="white"
        />
      </a>
      <a
        href="https://x.com/CodeWithDara?t=8fnrTaTdZ5jeNAZkom-X1w&s=09"
        className="bg-transparent hover:bg-[#3b3d49] cursor-pointer p-2.5 md:p-2.5 lg:p-3 rounded-xl transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter
          size={20}
          className="md:w-[21px] md:h-[21px] lg:w-[23px] lg:h-[23px]"
          color="white"
        />
      </a>
      <a
        href="mailto:darasimi0603@gmail.com"
        className="bg-transparent hover:bg-[#3b3d49] cursor-pointer p-2.5 md:p-2.5 lg:p-3 rounded-xl transition-all duration-300"
      >
        <FiMail
          size={20}
          className="md:w-[21px] md:h-[21px] lg:w-[23px] lg:h-[23px]"
          color="white"
        />
      </a>
    </div>
  );

  return (
    <div className="flex justify-between items-center py-3 sm:py-4 md:py-6 lg:py-7 px-4 sm:px-6 md:px-10 lg:px-20 backdrop-blur-lg fixed w-full top-0 z-50">
      {/* Logo */}
      <h1
        className="cursor-pointer text-2xl sm:text-2xl md:text-[28px] lg:text-[34px] font-bold"
        onClick={() => scrollToSection(homeRef)}
      >
        CodeWithDara
      </h1>

      {/* Desktop Menu */}
      <div className="hidden lg:flex">
        <NavLinks />
      </div>
      <div className="hidden lg:flex">
        <SocialLinks />
      </div>

      {/* Mobile Hamburger */}
      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? (
            <X size={26} className="sm:w-7 sm:h-7" color="white" />
          ) : (
            <Menu size={26} className="sm:w-7 sm:h-7" color="white" />
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-[52px] sm:top-[60px] left-0 w-full bg-black/95 backdrop-blur-md flex flex-col items-center py-6 sm:py-8 space-y-6 sm:space-y-7 lg:hidden shadow-lg">
          <NavLinks />
          <SocialLinks />
        </div>
      )}
    </div>
  );
};

export default NavBar;
