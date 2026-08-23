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
    <div ref={contactRef} className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
      <motion.div
        className="px-4 sm:px-6 md:px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-[#FF5A36] text-xs sm:text-sm font-medium tracking-wider uppercase bg-[#FF5A36]/10 px-3.5 py-1 rounded-full border border-[#FF5A36]/20">
          Contact Me
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mt-3 pb-3">
          Get In Touch
        </h2>
        <p className="text-sm sm:text-base max-w-xl mx-auto text-zinc-400 pb-10 leading-relaxed font-normal">
          Have a project in mind, an opportunity to discuss, or just want to connect? I'd love to hear from you. Let me know how I can help!
        </p>
      </motion.div>

      <div className="px-4 sm:px-6 md:px-8 flex justify-center max-w-4xl mx-auto">
        <motion.div
          className="bg-[#121214]/80 backdrop-blur-xl border border-white/10 p-6 sm:p-8 md:p-10 rounded-3xl w-full relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">Send a Message</h3>
          <p className="text-zinc-400 text-sm mb-6 font-normal">
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
          
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <motion.div className="space-y-2" variants={itemVariants}>
                <Label htmlFor="name" className="text-sm font-medium text-zinc-300">
                  Name
                </Label>
                <Input
                  placeholder="Your full name"
                  className="h-11 bg-[#1A1A1E] border-white/10 text-white placeholder:text-zinc-500 focus:border-[#FF5A36] focus:ring-1 focus:ring-[#FF5A36] rounded-xl transition-all"
                  name="name"
                  required
                />
              </motion.div>
              <motion.div className="space-y-2" variants={itemVariants}>
                <Label htmlFor="email" className="text-sm font-medium text-zinc-300">
                  Email
                </Label>
                <Input
                  placeholder="your.email@example.com"
                  className="h-11 bg-[#1A1A1E] border-white/10 text-white placeholder:text-zinc-500 focus:border-[#FF5A36] focus:ring-1 focus:ring-[#FF5A36] rounded-xl transition-all"
                  name="email"
                  type="email"
                  required
                />
              </motion.div>
            </div>

            <motion.div className="space-y-2" variants={itemVariants}>
              <Label htmlFor="title" className="text-sm font-medium text-zinc-300">
                Subject
              </Label>
              <Input
                placeholder="What's this regarding?"
                className="h-11 bg-[#1A1A1E] border-white/10 text-white placeholder:text-zinc-500 focus:border-[#FF5A36] focus:ring-1 focus:ring-[#FF5A36] rounded-xl transition-all"
                name="title"
                required
              />
            </motion.div>

            <motion.div className="space-y-2" variants={itemVariants}>
              <Label htmlFor="message" className="text-sm font-medium text-zinc-300">
                Message
              </Label>
              <Textarea
                name="message"
                placeholder="Tell me about your project, ideas, or questions..."
                className="h-36 bg-[#1A1A1E] border-white/10 text-white placeholder:text-zinc-500 focus:border-[#FF5A36] focus:ring-1 focus:ring-[#FF5A36] rounded-xl resize-none transition-all"
                required
              />
            </motion.div>

            <motion.div whileTap={{ scale: 0.97 }}>
              <Button
                disabled={isSubmitting}
                className="bg-[#FF5A36] hover:bg-[#E04826] text-white font-semibold transition-all duration-300 w-full sm:w-auto px-8 py-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
                {!isSubmitting && (
                  <FaArrowRight size={13} className="text-white" />
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
