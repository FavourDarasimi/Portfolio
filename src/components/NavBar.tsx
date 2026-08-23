import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FiGithub, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

type NavBarProps = {
  navRef: React.RefObject<HTMLDivElement | null>;
  homeRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  skillsRef: React.RefObject<HTMLDivElement | null>;
  servicesRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
};

const NavBar = ({
  navRef,
  homeRef,
  aboutRef,
  skillsRef,
  servicesRef,
  projectsRef,
  contactRef,
  scrollToSection,
}: NavBarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.08, duration: 0.4 },
    }),
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.08, duration: 0.3 },
    }),
  };

  const NavLinks = () => (
    <div className="flex lg:flex-row flex-col md:gap-6 lg:gap-8 gap-5">
      {[
        { label: "About", ref: aboutRef, index: 0 },
        { label: "Skills", ref: skillsRef, index: 1 },
        { label: "Services", ref: servicesRef, index: 2 },
        { label: "Projects", ref: projectsRef, index: 3 },
        { label: "Contact", ref: contactRef, index: 4 },
      ].map(({ label, ref, index }) => (
        <motion.h1
          key={label}
          custom={index}
          variants={menuOpen ? mobileLinkVariants : linkVariants}
          initial="hidden"
          animate="visible"
          className="text-zinc-400 hover:text-[#FF5A36] cursor-pointer text-base md:text-[16px] lg:text-[18px] font-medium transition-colors duration-300 relative group"
          onClick={() => {
            scrollToSection(ref);
            setMenuOpen(false);
          }}
          whileHover={{ y: -2 }}
        >
          {label}
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF5A36] transition-all duration-300 group-hover:w-full" />
        </motion.h1>
      ))}
    </div>
  );

  const SocialLinks = () => (
    <div className="flex gap-4 md:gap-5">
      {[
        {
          href: "https://github.com/FavourDarasimi",
          icon: FiGithub,
          label: "GitHub",
          index: 0,
        },
        {
          href: "https://x.com/code_with_dara",
          icon: FaXTwitter,
          label: "Twitter",
          index: 1,
        },
        {
          href: "mailto:darasimi0603@gmail.com",
          icon: FiMail,
          label: "Email",
          index: 2,
        },
      ].map(({ href, icon: Icon, label, index }) => (
        <motion.a
          key={label}
          href={href}
          custom={index}
          variants={socialVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="bg-[#121214] border border-white/10 hover:border-[#FF5A36]/50 hover:text-[#FF5A36] cursor-pointer p-2.5 rounded-xl transition-all duration-300 group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            size={20}
            className="md:w-[20px] md:h-[20px] lg:w-[22px] lg:h-[22px] text-white group-hover:text-[#FF5A36] transition-colors"
          />
        </motion.a>
      ))}
    </div>
  );

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  useEffect(() => {
    const updateNavHeight = () => {
      if (!navRef.current) return;
      const height = navRef.current.offsetHeight;
      document.documentElement.style.setProperty("--nav-h", `${height}px`);
    };

    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  return (
    <div
      ref={navRef}
      className="flex justify-between items-center py-4 md:py-5 px-4 sm:px-6 md:px-10 lg:px-20 bg-[#0A0A0A]/85 backdrop-blur-xl border-b border-white/10 sticky w-full top-0 z-50 transition-all duration-300"
    >
      {/* Logo */}
      <motion.h1
        className="cursor-pointer tracking-tight font-serif text-2xl sm:text-2xl md:text-[28px] lg:text-[32px] font-bold text-white flex items-center gap-1"
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        onClick={() => scrollToSection(homeRef)}
      >
        CodeWithDara<span className="text-[#FF5A36] text-3xl font-sans">.</span>
      </motion.h1>

      {/* Desktop Menu */}
      <motion.div
        className="hidden lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <NavLinks />
      </motion.div>

      <motion.div
        className="hidden lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <SocialLinks />
      </motion.div>

      {/* Mobile Hamburger */}
      <motion.div
        className="lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-lg bg-[#121214] border border-white/10"
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} className="text-[#FF5A36]" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} className="text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-[65px] left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-white/10 flex flex-col items-center py-8 space-y-7 lg:hidden shadow-2xl"
          >
            <NavLinks />
            <SocialLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
