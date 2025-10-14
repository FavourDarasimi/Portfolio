import { useRef } from "react";

import NavBar from "./components/NavBar";
import { ThemeProvider } from "./components/theme-provider";
import Home from "./pages/Home";
import About from "./pages/About";
import StarsBackground from "./components/StarsBackground";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <StarsBackground />
        <NavBar
          homeRef={homeRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
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
        <Projects projectsRef={projectsRef} />
        <Contact contactRef={contactRef} />
      </ThemeProvider>
    </div>
  );
}

export default App;
