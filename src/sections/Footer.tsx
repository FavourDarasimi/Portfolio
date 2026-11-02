/* Hallmark · component: section:footer · genre: editorial · theme: monochrome
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (46–50)
 */

import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { href: "https://github.com/FavourDarasimi", label: "GitHub" },
    { href: "https://x.com/code_with_dara", label: "X" },
    { href: "https://linkedin.com", label: "LinkedIn" },
    { href: "mailto:favourdarasimi6@gmail.com", label: "Email" },
  ];

  const linkClass =
    "whitespace-nowrap text-sm underline underline-offset-4 decoration-1 hover:decoration-2 transition-all duration-150";

  return (
    <footer className="border-t border-rule py-16 sm:py-20 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 lg:gap-16">
        <div className="space-y-4 max-w-lg">
          <p className="text-xl sm:text-2xl font-semibold tracking-tight">
            Darasimi Olaniran
          </p>
          <p className="text-sm leading-relaxed text-ink-soft max-w-[52ch]">
            Full-Stack Developer specializing in scalable web architecture, API
            engineering, ML integrations, and modern frontend experiences.
          </p>
        </div>

        <nav aria-label="Social links" className="flex flex-wrap gap-x-6 gap-y-3">
          {socialLinks.map((social) =>
            social.href.startsWith("mailto:") ? (
              <a key={social.label} href={social.href} className={linkClass}>
                {social.label}
              </a>
            ) : (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {social.label}
              </a>
            )
          )}
        </nav>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-rule mt-12 pt-6 text-xs text-ink-soft">
        <p>© {new Date().getFullYear()} Darasimi Olaniran.</p>

        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="inline-flex items-center gap-1.5 whitespace-nowrap underline underline-offset-4 decoration-1 hover:decoration-2 transition-all duration-150"
        >
          <span>Back to top</span>
          <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
