/* Hallmark · component: section:contact · genre: editorial · theme: monochrome
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (46–50)
 */

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";

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
      label: "Direct Email",
      value: "darasimi0603@gmail.com",
      href: "mailto:darasimi0603@gmail.com",
    },
    {
      label: "Primary Location",
      value: "Iwo, Osun State, Nigeria",
      href: undefined,
    },
  ];

  const fieldClass =
    "h-12 bg-transparent border-rule text-sm focus-visible:border-ink focus-visible:ring-ink/20";

  return (
    <section ref={contactRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8">
      <SectionHeader
        index="06"
        label="Contact"
        title="Get In Touch"
        deck="Have a project in mind, an engineering opportunity to discuss, or just want to connect? I'd love to hear from you."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] gap-x-16 gap-y-10 mt-10 sm:mt-14 lg:gap-y-14">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-ink-soft">
            Available for work
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mt-3 max-w-[30ch]">
            Let's build something extraordinary together.
          </h3>
          <p className="text-sm leading-relaxed text-ink-soft mt-4 max-w-[52ch]">
            I specialize in building production-ready web applications with
            clean architecture, responsive interfaces, and performant
            backends.
          </p>

          <ul className="divide-y divide-rule border-y border-rule mt-10">
            {contactDetails.map((detail) => (
              <li
                key={detail.label}
                className="py-4 grid grid-cols-1 sm:grid-cols-[minmax(0,9rem)_minmax(0,1fr)] gap-x-6 gap-y-1 items-baseline"
              >
                <span className="text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                  {detail.label}
                </span>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="text-sm font-medium underline underline-offset-4 decoration-1 hover:decoration-2 break-words [overflow-wrap:anywhere]"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span className="text-sm">{detail.value}</span>
                )}
              </li>
            ))}
          </ul>

          <p className="text-sm leading-relaxed text-ink-soft mt-6 max-w-[52ch]">
            <span className="text-ink font-medium">Fast turnaround:</span>{" "}
            typically responding within 24 hours during standard weekdays.
          </p>
        </Reveal>

        <Reveal>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs text-ink-soft">
                  Your Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="e.g. Alex Morgan"
                  className={fieldClass}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs text-ink-soft">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="alex@example.com"
                  className={fieldClass}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title" className="text-xs text-ink-soft">
                Subject
              </Label>
              <Input
                id="title"
                name="title"
                placeholder="Project Inquiry / Opportunity"
                className={fieldClass}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-xs text-ink-soft">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project, timeline, or requirements..."
                className="bg-transparent border-rule text-sm focus-visible:border-ink focus-visible:ring-ink/20 resize-none min-h-36"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-12 px-8 text-sm font-semibold bg-ink text-white border border-ink shadow-none hover:bg-transparent hover:text-ink transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending Message..." : "Send Message"}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
