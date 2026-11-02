import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Cancel01Icon,
  Github01Icon,
  Mail01Icon,
  Menu01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";

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

  const navItems = [
    { label: "About", ref: aboutRef },
    { label: "Skills", ref: skillsRef },
    { label: "Services", ref: servicesRef },
    { label: "Projects", ref: projectsRef },
    { label: "Contact", ref: contactRef },
  ];

  const socialItems = [
    {
      label: "GitHub",
      href: "https://github.com/FavourDarasimi",
      icon: Github01Icon,
    },
    {
      label: "X",
      href: "https://x.com/code_with_dara",
      icon: NewTwitterIcon,
    },
    {
      label: "Email",
      href: "mailto:darasimi0603@gmail.com",
      icon: Mail01Icon,
    },
  ];

  const linkClass =
    "whitespace-nowrap text-sm text-ink-soft hover:text-ink hover:underline underline-offset-4 decoration-1 focus-visible:text-ink focus-visible:underline transition-colors duration-150";

  const NavLinks = () => (
    <div className="flex lg:flex-row flex-col items-start lg:items-center gap-4 lg:gap-7">
      {navItems.map(({ label, ref }) => (
        <button
          key={label}
          onClick={() => {
            scrollToSection(ref);
            setMenuOpen(false);
          }}
          className={linkClass}
        >
          {label}
        </button>
      ))}
    </div>
  );

  const SocialLinks = () => (
    <div className="flex items-center gap-1">
      {socialItems.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="inline-flex h-8 w-8 items-center justify-center text-ink-soft hover:text-ink focus-visible:text-ink transition-colors duration-150"
        >
          <HugeiconsIcon icon={icon} size={17} />
        </a>
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
      className="sticky top-0 z-50 w-full bg-background border-b border-rule"
    >
      <div className="flex h-[68px] items-center justify-between gap-6 px-4 sm:px-6 md:px-8">
        <button
          onClick={() => scrollToSection(homeRef)}
          className="text-lg font-semibold tracking-tight whitespace-nowrap hover:underline underline-offset-4 decoration-1"
        >
          CodeWithDara
        </button>

        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-10"
        >
          <NavLinks />
          <SocialLinks />
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="lg:hidden p-2 -ml-2 text-ink"
        >
          {menuOpen ? (
            <HugeiconsIcon icon={Cancel01Icon} size={22} />
          ) : (
            <HugeiconsIcon icon={Menu01Icon} size={22} />
          )}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-x-0 top-full lg:hidden border-b border-rule bg-background px-4 sm:px-6 py-6"
          >
            <div className="flex flex-col items-start gap-5">
              <NavLinks />
              <div className="pt-2">
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
