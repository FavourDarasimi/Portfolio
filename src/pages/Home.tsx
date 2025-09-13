import React from "react";
import { Button } from "../components/ui/button";
import { Download } from "lucide-react";

interface HomeProps {
  homeRef: React.RefObject<HTMLDivElement | null>;
}

const Home: React.FC<HomeProps> = ({ homeRef }) => {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center gap-10 text-center"
      ref={homeRef}
    >
      <div>
        <h1 className="md:text-7xl text-3xl font-bold">Darasimi Olaniran</h1>
        <h1 className="md:text-7xl text-3xl font-bold bg-gradient-to-r from-[#a855f7]  to-blue-500    bg-clip-text text-transparent">
          Full-Stack Developer
        </h1>
        <h1 className="md:mx-80 mx-[1px] md:text-[23px] text-[15px] mt-5 text-gray-400">
          Crafting exceptional digital experiences with modern technologies —
          building responsive, scalable web applications that deliver real
          impact. Passionate about clean code, innovative solutions, modern
          frameworks, and continuous learning.
        </h1>
      </div>
      <div className="flex gap-5">
        <Button className="bg-gradient-to-r from-[#a855f7]  to-blue-500 text-white hover:scale-110 transition-all duration-500 md:p-6 md:text-[17px] text-[13px] cursor-pointer">
          View my Work
        </Button>
        <Button className="text-white hover:scale-110 transition-all duration-500 md:p-6 md:text-[17px] text-[13px] border-[1px] border-[#a855f7] bg-transparent hover:bg-gradient-to-r from-[#a855f7]  to-blue-500 hover:border-transparent cursor-pointer">
          <Download /> Download CV
        </Button>
      </div>
    </div>
  );
};

export default Home;
