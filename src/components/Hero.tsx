import { Github, Linkedin, Download, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import myPhoto from "/public/Dhaya.jpg"; // Replace with your image path

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6">

      {/* ===================== Background Particles ===================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 sm:w-4 sm:h-4 bg-secondary rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* ===================== Main Content ===================== */}
      <div className="max-w-6xl w-full relative z-10 animate-fade-in flex flex-col md:flex-row items-center md:items-start justify-center gap-8 px-4">

        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-center mt-8 md:mt-0">
          <img
            src={myPhoto}
            alt="Yassine Dhaya"
            className="w-40 sm:w-48 md:w-56 lg:w-64 rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Yassine Dhaya
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 font-mono">
            Full-Stack Software Engineer
          </p>

          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
            3+ years building production-grade web platforms, on-device AI, and XR products.
            Angular · React · Spring Boot · Node.js · Based in Tunisia, open to EU.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto md:mx-0 mb-6 sm:mb-8">
            <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
              <div className="text-xl sm:text-2xl font-bold text-foreground">3+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 hover:border-secondary/50 transition-colors">
              <div className="text-xl sm:text-2xl font-bold text-foreground">15+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Public Repos</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 hover:border-accent/50 transition-colors">
              <div className="text-xl sm:text-2xl font-bold text-foreground">100+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Students Mentored</div>
            </div>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 w-full sm:w-auto"
              onClick={() => scrollToSection("projects")}
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              View Projects
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-border hover:border-primary/50 w-full sm:w-auto"
              onClick={() => window.open("/2026Resume-YD.pdf", "_blank")}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social / Contact links */}
          <div className="flex gap-3 justify-center md:justify-start flex-wrap">
            <a
              href="https://github.com/yassinedhaya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors text-sm"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yassinedhaya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors text-sm"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* ===================== Scroll Indicator ===================== */}
      <div className="mt-12 sm:mt-16 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
