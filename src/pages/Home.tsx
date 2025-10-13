import React from "react";
import { Button } from "../components/ui/button";
import { Download } from "lucide-react";
import photo from "../assets/photo.webp";
import photo_mobile from "../assets/photo_mobile.webp";
import photo_tablet from "../assets/photo_tablet.webp";

interface HomeProps {
  homeRef: React.RefObject<HTMLDivElement | null>;
}

const Home: React.FC<HomeProps> = ({ homeRef }) => {
  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row justify-center items-center px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-12 lg:gap-10 2xl:gap-0 md:py-14 lg:py-10"
      ref={homeRef}
    >
      <div className="lg:hidden w-72 sm:w-56 md:w-[400px]  xl:w-[30%] flex justify-center  lg:mx-0 mb-8 sm:mb-10 lg:mt-0">
        <picture>
          <source media="(max-width: 480px)" srcSet={photo_mobile} />
          <source media="(max-width: 768px)" srcSet={photo_tablet} />
          <img
            src={photo}
            alt="Portrait of Darasimi Olaniran"
            className="rounded-full  md:w-[350px] md:h-[350px] w-[200px] h-[200px] object-cover shadow-lg"
          />
        </picture>
      </div>
      <div className="flex flex-col gap-5 sm:gap-6 w-full lg:w-[60%] lg:text-left text-center lg:items-start items-center">
        <div>
          <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
            Darasimi Olaniran
          </h1>
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mt-1 sm:mt-2 leading-tight">
            Full-Stack Developer
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto lg:mx-0 px-2 sm:px-0 leading-relaxed">
            Crafting exceptional digital experiences with modern technologies —
            building responsive, scalable web applications that deliver real
            impact. Passionate about clean code, innovative solutions, modern
            frameworks, and continuous learning.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
          <Button className="bg-white border-[#3b3d49] hover:bg-[#3b3d49] hover:text-white transition-all duration-300 px-5 py-2 sm:px-6 sm:py-2 md:px-8 md:py-8 text-sm sm:text-base md:text-[17px] w-full sm:w-auto">
            View Projects
          </Button>
          <Button className="bg-transparent border-[1px] border-[#3b3d49] hover:bg-[#3b3d49] text-white transition-all duration-300 px-5 py-2 sm:px-6 sm:py-2 md:px-8 md:py-8 text-sm sm:text-base md:text-[17px] flex items-center justify-center gap-2 w-full sm:w-auto">
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Download CV</span>
          </Button>
        </div>
      </div>

      <div className="lg:w-[30%] hidden lg:flex xl:w-[30%] flex-shrink-0 mx-4 lg:mx-0 mt-8 sm:mt-10 lg:mt-0">
        <picture>
          <source media="(max-width: 480px)" srcSet={photo_mobile} />
          <source media="(max-width: 768px)" srcSet={photo_tablet} />
          <img
            src={photo}
            alt="Portrait of Darasimi Olaniran"
            className="lg:rounded-full rounded-2xl w-[280px] h-[280px] xl:w-[350px] xl:h-[350px] 2xl:w-[420px] 2xl:h-[420px] object-cover shadow-lg"
          />
        </picture>
      </div>
    </div>
  );
};

export default Home;
