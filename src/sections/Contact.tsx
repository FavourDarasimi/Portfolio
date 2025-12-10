import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "sonner";

import emailjs from "@emailjs/browser";

interface ContactProps {
  contactRef: React.RefObject<HTMLDivElement | null>;
}

const Contact: React.FC<ContactProps> = ({ contactRef }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      toast.error("Email service ID is not configured.");
      return;
    }
    if (!publicKey) {
      toast.error("Email Public Key is not configured.");
      return;
    }
    if (!templateId) {
      toast.error("Email Template Id is not configured.");
      return;
    }
    setIsSubmitting(true);

    emailjs
      .sendForm(serviceId, templateId, e.target, publicKey)
      .then(() => {
        toast.success("Message sent successfully!");
      })
      .catch(() => {
        toast.error("Failed to send message");
      });
    setIsSubmitting(false);
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

      <div className=" px-4 sm:px-6 md:px-8 flex justify-center">
        <motion.div
          className="bg-card p-4 sm:p-5 md:p-6 lg:p-6 rounded-xl w-3xl"
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
                  required
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
                  required
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
                required
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
                required
              />
            </motion.div>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                disabled={isSubmitting}
                className="group hover:scale-105 transition durationn-300 w-full sm:w-auto px-6 sm:px-8 lg:px-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && (
                  <FaArrowRight
                    size={12}
                    className="sm:w-4 sm:h-4 group-hover:ml-2 group-hover:mr-0 mr-2 transition-all duration-300"
                    color="#3b3d49"
                  />
                )}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
