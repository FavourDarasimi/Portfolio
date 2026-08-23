/* Hallmark · component: nav · genre: editorial · theme: custom
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (46–50)
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
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

  const linkVariants: Variants = {
    hidden: { opacity: 0, y: -8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.3 },
    }),
  };

  const socialVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.06, duration: 0.3 },
    }),
    hover: {
      scale: 1.08,
      transition: { duration: 0.2 },
    },
  };

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, y: -16, scaleY: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      transition: { duration: 0.25, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -16,
      scaleY: 0.95,
      transition: { duration: 0.2 },
    },
  };

  const mobileLinkVariants: Variants = {
    hidden: { opacity: 0, x: -16 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.05 + i * 0.06, duration: 0.25 },
    }),
  };

  const navItems = [
    { label: "About", ref: aboutRef },
    { label: "Skills", ref: skillsRef },
    { label: "Services", ref: servicesRef },
    { label: "Projects", ref: projectsRef },
    { label: "Contact", ref: contactRef },
  ];

  const socialItems = [
    {
      href: "https://github.com/FavourDarasimi",
      icon: FiGithub,
      label: "GitHub Profile",
    },
    {
      href: "https://x.com/code_with_dara",
      icon: FaXTwitter,
      label: "X (Twitter) Profile",
    },
    {
      href: "mailto:darasimi0603@gmail.com",
      icon: FiMail,
      label: "Send Email",
    },
  ];

  const NavLinks = () => (
    <div className="flex lg:flex-row flex-col items-center gap-2 lg:gap-1">
      {navItems.map(({ label, ref }, index) => (
        <motion.button
          key={label}
          custom={index}
          variants={menuOpen ? mobileLinkVariants : linkVariants}
          initial="hidden"
          animate="visible"
          onClick={() => {
            scrollToSection(ref);
            setMenuOpen(false);
          }}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="text-zinc-400 hover:text-white focus-visible:text-white px-3.5 py-2 text-sm sm:text-base lg:text-sm font-medium rounded-lg transition-all duration-200 relative group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
        >
          <span className="relative z-10">{label}</span>
          <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-[#FF5A36] rounded-full scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100 transition-transform duration-200 origin-left" />
        </motion.button>
      ))}
    </div>
  );

  const SocialLinks = () => (
    <div className="flex items-center gap-3">
      {socialItems.map(({ href, icon: Icon, label }, index) => (
        <motion.a
          key={label}
          href={href}
          aria-label={label}
          custom={index}
          variants={socialVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
          className="bg-[#121214] border border-white/10 hover:border-[#FF5A36]/60 hover:bg-[#FF5A36]/10 text-zinc-300 hover:text-[#FF5A36] p-2.5 rounded-xl transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon size={18} className="transition-colors duration-200" />
        </motion.a>
      ))}
    </div>
  );

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
    <header
      ref={navRef}
      className="sticky top-0 z-50 w-full pt-3 sm:pt-4 md:pt-5 px-4 sm:px-6 md:px-8 bg-transparent transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto bg-[#0A0A0A]/75 backdrop-blur-2xl border border-white/15 rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 flex justify-between items-center relative transition-all duration-300">
        {/* Brand Logo */}
        <motion.button
          onClick={() => scrollToSection(homeRef)}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="text-left font-sans text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-1.5 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded-md px-1 py-0.5"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A36] inline-block shrink-0" />
          <span>CodeWithDara</span>
        </motion.button>

        {/* Desktop Navigation & Actions */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 xl:gap-8">
          <NavLinks />
          <div className="h-4 w-[1px] bg-white/10" />
          <SocialLinks />
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-xl bg-[#121214]/80 backdrop-blur-xl border border-white/15 text-white hover:border-[#FF5A36]/60 transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={20} className="text-[#FF5A36]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={20} className="text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer (Absolute overlay) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden absolute left-4 right-4 sm:left-6 sm:right-6 md:left-8 md:right-8 top-full mt-2 z-50 max-w-5xl mx-auto bg-[#0A0A0A]/85 backdrop-blur-2xl border border-white/15 rounded-2xl px-6 py-6 shadow-2xl"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col items-center space-y-5">
              <NavLinks />
              <div className="w-16 h-[1px] bg-white/10 my-1" />
              <SocialLinks />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
