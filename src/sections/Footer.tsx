import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 max-w-[1500px] w-full mx-auto px-4 sm:px-6 md:px-8">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-6 tracking-wide">
            Connect & Follow
          </h2>
          <div className="flex justify-center items-center gap-4">
            {[
              {
                href: "https://github.com/FavourDarasimi",
                icon: FiGithub,
                label: "GitHub",
              },
              {
                href: "https://x.com/code_with_dara",
                icon: FaXTwitter,
                label: "Twitter",
              },
              {
                href: "https://linkedin.com",
                icon: FaLinkedinIn,
                label: "LinkedIn",
              },
              {
                href: "mailto:darasimi0603@gmail.com",
                icon: Mail,
                label: "Email",
              },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="bg-[#121214] border border-white/10 rounded-full p-3.5 hover:border-[#FF5A36] hover:bg-[#FF5A36]/10 text-zinc-300 hover:text-[#FF5A36] transition-all duration-300 cursor-pointer shadow-lg group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon
                  size={20}
                  className="sm:w-[22px] sm:h-[22px] text-white group-hover:text-[#FF5A36] transition-colors"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
        <p className="mt-10 text-zinc-500 text-sm font-normal">
          © {new Date().getFullYear()} Darasimi Olaniran. Designed & Built with passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
