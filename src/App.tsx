import { useRef } from "react";

import NavBar from "./components/NavBar";
import { ThemeProvider } from "./components/theme-provider";
import Home from "./sections/Home";
import About from "./sections/About";
import StarsBackground from "./components/StarsBackground";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { Toaster } from "sonner";

function App() {
  const navRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Toaster position="top-center" />
        <StarsBackground />
        <NavBar
          navRef={navRef}
          homeRef={homeRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          servicesRef={servicesRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
          scrollToSection={scrollToSection}
        />
        <Home
          homeRef={homeRef}
          projectsRef={projectsRef}
          scrollToSection={scrollToSection}
        />
        <About aboutRef={aboutRef} />
        <Skills skillsRef={skillsRef} />
        <Services servicesRef={servicesRef} />
        <Projects projectsRef={projectsRef} />
        <Contact contactRef={contactRef} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
