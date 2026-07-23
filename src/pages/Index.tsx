import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

const Index = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Use event.ctrlKey + event.shiftKey + event.code === 'Digit6'
      if (event.ctrlKey && event.shiftKey && event.code === "Digit6") {
        event.preventDefault();
        // Open LinkedIn safely
        window.open("https://www.linkedin.com/in/yassinedhaya/", "_blank");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <footer className="border-t border-border py-8 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-muted-foreground">
            © 2026 Yassine Dhaya · Built with React & Vite
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
