import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className=" py-10 sm:py-12 md:py-16 lg:py-10 border-t border-t-[#3b3d49] max-w-7xl mx-auto">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-xl sm:text-2xl md:text-2xl mb-4">Follow Me</h1>
          <div className="flex  justify-center gap-4 sm:gap-5">
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
                className="border-[1px] border-gray-600 rounded-full p-3 sm:p-4 w-fit hover:bg-card transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon
                  size={20}
                  className="sm:w-[23px] sm:h-[23px] md:w-[25px] md:h-[25px]"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
        <h1 className="mt-10">© 2025 Darasimi. All rights reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
