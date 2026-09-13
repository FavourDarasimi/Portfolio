import { useRef } from "react";

import NavBar from "./components/NavBar";
import { ThemeProvider, useTheme } from "./components/theme-provider";
import Home from "./sections/Home";
import About from "./sections/About";
import StarsBackground from "./components/StarsBackground";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { Toaster } from "sonner";

function ThemedToaster() {
  const { theme } = useTheme();
  return <Toaster position="top-center" theme={theme} />;
}

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
    <div className="min-h-screen bg-zinc-100 dark:bg-[#0A0A0A] text-foreground relative isolate">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ThemedToaster />
        <StarsBackground />
        <div className="max-w-[1500px] mx-auto relative z-10 w-full">
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
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
