import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ContactProps {
  contactRef: React.RefObject<HTMLDivElement | null>;
}

const Contact: React.FC<ContactProps> = ({ contactRef }) => {
  return (
    <div ref={contactRef} className="md:py-20 py-10">
      <div>
        <h1 className="md:text-5xl text-3xl font-bold text-center pb-5">
          Get In{" "}
          <span className="bg-gradient-to-r from-[#a855f7]  to-blue-500    bg-clip-text text-transparent">
            Touch
          </span>
        </h1>
        <h1 className="md:text-[20px] text-[15px] md:mx-80 mx-2 text-gray-400 text-center pb-10">
          Have a project in mind or want to collaborate? I'd love to hear from
          you. Let's create something amazing together.
        </h1>
      </div>
      <div className="mx-40 grid grid-cols-2">
        <div className="bg-secondary p-5 rounded-xl">
          <h1 className="text-2xl">Send a Message</h1>
          <h1 className="mt-2 text-gray-400 font-extralight">
            Fill out the form below and I'll get back to you as soon as
            possible.
          </h1>
          <form className="space-y-5 mt-7">
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-3">
                <Label htmlFor="text">Name</Label>
                <Input placeholder="your full name" className="h-10" />
              </div>
              <div className="space-y-3">
                <Label htmlFor="email">Email</Label>
                <Input placeholder="your@email.com" className="h-10" />
              </div>
            </div>
            <div className="space-y-3">
              <Label htmlFor="text">Subject</Label>
              <Input placeholder="What's this about?" className="h-10" />
            </div>
            <div className="space-y-3">
              <Label htmlFor="text">Name</Label>
              <Textarea
                placeholder="Tell me about your prject or idea..."
                className="h-36"
              />
            </div>
            <Button>Send Message</Button>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
