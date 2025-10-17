import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";

interface ContactProps {
  contactRef: React.RefObject<HTMLDivElement | null>;
}

const Contact: React.FC<ContactProps> = ({ contactRef }) => {
  const contactInfo = [
    {
      name: "Email",
      detail: "darasimi0603@gmail.com",
      icon: <Mail />,
    },
    {
      name: "Response Time",
      detail: "Typically within 24-48 hours",
      icon: <MessageCircle />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    if (!serviceId) {
      alert("Email service ID is not configured.");
      return;
    }
    if (!publicKey) {
      alert("Email Public Key is not configured.");
      return;
    }
    if (!templateId) {
      alert("Email Template Id is not configured.");
      return;
    }
    alert("Sending message...");
    emailjs
      .sendForm(serviceId, templateId, e.target, publicKey)
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch(() => {
        alert("Failed to send message");
      });
  };

  return (
    <div ref={contactRef} className="py-10 sm:py-12 md:py-16 lg:py-20">
      <motion.div
        className="px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center pb-4 sm:pb-5">
          Get In Touch
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-[20px] mx-auto max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:mx-80 text-muted-foreground text-center pb-8 sm:pb-10">
          Have a project in mind or want to collaborate? I'd love to hear from
          you. Let's create something amazing together.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 lg:grid-cols-2 mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:mx-20">
        <motion.div
          className="bg-secondary p-4 sm:p-5 md:p-6 lg:p-5 rounded-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-xl sm:text-2xl md:text-2xl">Send a Message</h1>
          <p className="mt-2 text-muted-foreground text-sm sm:text-[15px] md:text-[16px] font-extralight">
            Fill out the form below and I'll get back to you as soon as
            possible.
          </p>
          <form
            className="space-y-4 sm:space-y-5 mt-5 sm:mt-7"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5">
              <motion.div
                className="space-y-2 sm:space-y-3"
                variants={itemVariants}
              >
                <Label
                  htmlFor="name"
                  className="text-sm sm:text-[14px] lg:text-[16px]"
                >
                  Name
                </Label>
                <Input
                  placeholder="your full name"
                  className="h-10 sm:h-11"
                  name="name"
                />
              </motion.div>
              <motion.div
                className="space-y-2 sm:space-y-3"
                variants={itemVariants}
              >
                <Label
                  htmlFor="email"
                  className="text-sm sm:text-[14px] lg:text-[16px]"
                >
                  Email
                </Label>
                <Input
                  placeholder="your@email.com"
                  className="h-10 sm:h-11"
                  name="email"
                />
              </motion.div>
            </div>
            <motion.div
              className="space-y-2 sm:space-y-3"
              variants={itemVariants}
            >
              <Label
                htmlFor="title"
                className="text-sm sm:text-[14px] lg:text-[16px]"
              >
                Subject
              </Label>
              <Input
                placeholder="What's this about?"
                className="h-10 sm:h-11"
                name="title"
              />
            </motion.div>
            <motion.div
              className="space-y-2 sm:space-y-3"
              variants={itemVariants}
            >
              <Label
                htmlFor="message"
                className="text-sm sm:text-[14px] lg:text-[16px]"
              >
                Message
              </Label>
              <Textarea
                name="message"
                placeholder="Tell me about your project or idea..."
                className="h-32 sm:h-36 resize-none"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="w-full sm:w-auto px-6 sm:px-8">
                Send Message
              </Button>
            </motion.div>
          </form>
        </motion.div>

        <motion.div
          className="flex flex-col justify-between gap-8 sm:gap-10"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="text-xl sm:text-2xl md:text-2xl mb-4">
              Get in Touch
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="bg-secondary flex flex-row gap-4 sm:gap-5 items-start p-4 sm:p-5">
                    <div className="mt-0.5">
                      {React.cloneElement(info.icon, {
                        className: "w-5 h-5 sm:w-6 sm:h-6",
                      })}
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <h1 className="text-sm sm:text-[16px] lg:text-[18px] font-medium">
                        {info.name}
                      </h1>
                      <h1 className="text-muted-foreground text-xs sm:text-[14px] lg:text-[16px]">
                        {info.detail}
                      </h1>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="text-xl sm:text-2xl md:text-2xl mb-4">Follow Me</h1>
            <div className="flex flex-row gap-4 sm:gap-5">
              {[
                {
                  href: "https://github.com/FavourDarasimi",
                  icon: FiGithub,
                  label: "GitHub",
                },
                {
                  href: "https://x.com/CodeWithDara?t=8fnrTaTdZ5jeNAZkom-X1w&s=09",
                  icon: FaXTwitter,
                  label: "Twitter",
                },
                {
                  href: "https://linkedin.com",
                  icon: FaLinkedinIn,
                  label: "LinkedIn",
                },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-[1px] border-gray-600 rounded-full p-3 sm:p-4 w-fit hover:bg-[#3b3d49] transition-all duration-300 cursor-pointer"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="bg-secondary p-4 sm:p-5 md:p-6 lg:p-5">
              <h1 className="text-lg sm:text-xl md:text-[21px] font-semibold mb-2">
                Current Availability
              </h1>
              <h1 className="flex flex-row items-center gap-2 text-base sm:text-[17px] md:text-[18px] mb-2">
                <motion.span
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-600 rounded-full flex-shrink-0"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Available for new projects
              </h1>
              <h1 className="text-muted-foreground text-sm sm:text-[15px] md:text-[16px] leading-relaxed">
                I'm currently open to new freelance and consulting
                opportunities. Let's collaborate to turn your ideas into
                impactful digital experiences.
              </h1>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
