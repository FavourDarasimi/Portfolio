import React from "react";
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
      detail: "darasimi0603@gmai.com",
      icon: <Mail />,
    },
    {
      name: "Response Time",
      detail: "Typically within 24-48 hours",
      icon: <MessageCircle />,
    },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dup8s1v",
        "template_8mdt58c",
        e.target,
        "53CabAy4bE6nw2YLm"
      )
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        alert("Failed to send message");
      });
  };
  return (
    <div ref={contactRef} className="py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center pb-4 sm:pb-5">
          Get In Touch
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-[20px] mx-auto max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:mx-80 text-muted-foreground text-center pb-8 sm:pb-10">
          Have a project in mind or want to collaborate? I'd love to hear from
          you. Let's create something amazing together.
        </p>
      </div>
      <div className="grid gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 lg:grid-cols-2 mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:mx-20">
        <div className="bg-secondary p-4 sm:p-5 md:p-6 lg:p-5 rounded-xl">
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
              <div className="space-y-2 sm:space-y-3">
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
              </div>
              <div className="space-y-2 sm:space-y-3">
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
              </div>
            </div>
            <div className="space-y-2 sm:space-y-3">
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
            </div>
            <div className="space-y-2 sm:space-y-3">
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
            </div>
            <Button className="w-full sm:w-auto px-6 sm:px-8">
              Send Message
            </Button>
          </form>
        </div>
        <div className="flex flex-col justify-between gap-8 sm:gap-10">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-2xl">Get in Touch</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 mt-4 sm:mt-5">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-secondary flex flex-row gap-4 sm:gap-5 items-start p-4 sm:p-5"
                >
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
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-2xl">Follow Me</h1>
            <div className="flex flex-row gap-4 sm:gap-5 mt-4 sm:mt-5">
              <a
                href="https://github.com/FavourDarasimi"
                target="_blank"
                rel="noopener noreferrer"
                className="border-[1px] border-gray-600 rounded-full p-3 sm:p-4 w-fit hover:bg-[#3b3d49] transition-all duration-300 cursor-pointer"
              >
                <FiGithub
                  size={20}
                  className="sm:w-[23px] sm:h-[23px] md:w-[25px] md:h-[25px]"
                />
              </a>
              <a
                href="https://x.com/CodeWithDara?t=8fnrTaTdZ5jeNAZkom-X1w&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="border-[1px] border-gray-600 rounded-full p-3 sm:p-4 w-fit hover:bg-[#3b3d49] transition-all duration-300 cursor-pointer"
              >
                <FaXTwitter
                  size={20}
                  className="sm:w-[23px] sm:h-[23px] md:w-[25px] md:h-[25px]"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-[1px] border-gray-600 rounded-full p-3 sm:p-4 w-fit hover:bg-[#3b3d49] transition-all duration-300 cursor-pointer"
              >
                <FaLinkedinIn
                  size={20}
                  className="sm:w-[23px] sm:h-[23px] md:w-[25px] md:h-[25px]"
                />
              </a>
            </div>
          </div>
          <div>
            <Card className="bg-secondary p-4 sm:p-5 md:p-6 lg:p-5">
              <h1 className="text-lg sm:text-xl md:text-[21px] font-semibold mb-2">
                Current Availability
              </h1>
              <h1 className="flex flex-row items-center gap-2 text-base sm:text-[17px] md:text-[18px] mb-2">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-600 rounded-full flex-shrink-0"></span>
                Available for new projects
              </h1>
              <h1 className="text-muted-foreground text-sm sm:text-[15px] md:text-[16px] leading-relaxed">
                I'm currently open to new freelance and consulting
                opportunities. Let's collaborate to turn your ideas into
                impactful digital experiences.
              </h1>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
