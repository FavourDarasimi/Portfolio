/* Hallmark · component: section:contact · genre: editorial · theme: custom
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (46–50)
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

interface ContactProps {
  contactRef: React.RefObject<HTMLDivElement | null>;
}

const Contact: React.FC<ContactProps> = ({ contactRef }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service is not fully configured.");
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(serviceId, templateId, form, publicKey);
      toast.success("Message sent successfully!");
      form.reset();
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: Mail,
      label: "Direct Email",
      value: "darasimi0603@gmail.com",
      href: "mailto:darasimi0603@gmail.com",
    },
    {
      icon: MapPin,
      label: "Primary Location",
      value: "Sagamu, Ogun State",
      href: undefined,
    },
  ];

  return (
    <section ref={contactRef} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 space-y-12">
        {/* Section Header */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-[#FF5A36] text-xs sm:text-sm font-medium tracking-wider uppercase bg-[#FF5A36]/10 px-3.5 py-1.5 rounded-full border border-[#FF5A36]/25 inline-flex items-center gap-1.5">
            <Mail size={14} className="text-[#FF5A36]" /> Direct Contact
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mt-3 pb-2 leading-tight">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base max-w-xl text-zinc-400 font-normal leading-relaxed">
            Have a project in mind, an engineering opportunity to discuss, or just want to connect? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Asymmetric 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact & Status Cards */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#121214]/60 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                  <CheckCircle2 size={13} />
                  <span>Available for work</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight pt-1">
                  Let's build something extraordinary together.
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
                  I specialize in building production-ready web applications with clean architecture, responsive interfaces, and performant backends.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                {contactDetails.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <detail.icon size={18} className="text-zinc-300" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-sm font-semibold text-white hover:text-[#FF5A36] transition-colors"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-white">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Response Notice Box */}
            <div className="p-5 rounded-3xl bg-white/[0.02] border border-white/10 flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-[#FF5A36]/10 border border-[#FF5A36]/20 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles size={15} className="text-[#FF5A36]" />
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                <strong className="text-zinc-200 font-medium">Fast Turnaround:</strong> Typically responding within 24 hours during standard weekdays.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#121214]/60 backdrop-blur-xl border border-white/10 p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  Send a Message
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-1 font-normal">
                  Fill out the details below and I'll get back to you promptly.
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs sm:text-sm font-medium text-zinc-300">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g. Alex Morgan"
                      className="h-11 bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:border-[#FF5A36] focus:ring-1 focus:ring-[#FF5A36] rounded-2xl transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs sm:text-sm font-medium text-zinc-300">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="alex@example.com"
                      className="h-11 bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:border-[#FF5A36] focus:ring-1 focus:ring-[#FF5A36] rounded-2xl transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title" className="text-xs sm:text-sm font-medium text-zinc-300">
                    Subject
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Project Inquiry / Opportunity"
                    className="h-11 bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:border-[#FF5A36] focus:ring-1 focus:ring-[#FF5A36] rounded-2xl transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs sm:text-sm font-medium text-zinc-300">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, timeline, or requirements..."
                    className="h-36 bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:border-[#FF5A36] focus:ring-1 focus:ring-[#FF5A36] rounded-2xl resize-none transition-all"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#FF5A36] hover:bg-[#E04826] active:scale-95 text-white font-semibold px-8 py-3 rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
                >
                  <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
                  <Send size={15} className="text-white" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
