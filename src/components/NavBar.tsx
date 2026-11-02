import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

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
    { label: "GitHub", href: "https://github.com/FavourDarasimi" },
    { label: "X", href: "https://x.com/code_with_dara" },
    { label: "Email", href: "mailto:darasimi0603@gmail.com" },
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
    <div className="flex items-center gap-5">
      {socialItems.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap text-[11px] uppercase tracking-[0.14em] font-medium text-ink-soft hover:text-ink hover:underline underline-offset-4 decoration-1 transition-colors duration-150"
        >
          {label}
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
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden border-t border-rule bg-background px-4 sm:px-6 py-6"
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
