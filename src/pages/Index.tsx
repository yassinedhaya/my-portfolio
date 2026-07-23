import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Skills />
        <Education />
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
