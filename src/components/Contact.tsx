import React from "react";

interface ContactProps {
  contactRef: React.RefObject<HTMLDivElement | null>;
}

const Contact: React.FC<ContactProps> = ({ contactRef }) => {
  return (
    <div ref={contactRef}>
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;
