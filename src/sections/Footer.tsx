/* Hallmark · component: section:footer · genre: editorial · theme: custom
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (46–50)
 */

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      href: "https://github.com/FavourDarasimi",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://x.com/code_with_dara",
      icon: Twitter,
      label: "Twitter",
    },
    {
      href: "https://linkedin.com",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:favourdarasimi6@gmail.com",
      icon: Mail,
      label: "Email",
    },
  ];

  return (
    <footer className="py-12 sm:py-16 border-t border-zinc-900/10 dark:border-white/10 relative overflow-hidden bg-zinc-100 dark:bg-[#0A0A0A]">
      <div className="max-w-[1500px] w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-16 space-y-10 sm:space-y-12">
        {/* Top Editorial Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-zinc-900/10 dark:border-white/10">
          {/* Brand & Tagline */}
          <div className="space-y-3 max-w-lg">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A36] animate-pulse" />
              <span className="font-semibold text-zinc-900 dark:text-white text-xl sm:text-2xl tracking-tight">
                Darasimi Olaniran
              </span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
              Full-Stack Developer specializing in scalable web architecture, API engineering, ML integrations, and modern frontend experiences.
            </p>
          </div>

          {/* Social Pill Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900/5 dark:bg-white/5 hover:bg-[#FF5A36]/10 border border-zinc-900/10 dark:border-white/10 hover:border-[#FF5A36]/50 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white text-xs sm:text-sm font-medium transition-all duration-300 group cursor-pointer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <social.icon
                  size={15}
                  className="text-zinc-500 dark:text-zinc-400 group-hover:text-[#FF5A36] transition-colors"
                />
                <span>{social.label}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Metadata & Back to Top Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-xs text-zinc-500 font-normal">
          <p>
            © {new Date().getFullYear()} Darasimi Olaniran.
          </p>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900/5 dark:bg-white/5 hover:bg-zinc-900/10 dark:hover:bg-white/10 border border-zinc-900/10 dark:border-white/10 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36]"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to top</span>
            <ArrowUp size={13} className="text-[#FF5A36]" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
