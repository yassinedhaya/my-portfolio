import { Github, Linkedin, Download, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import myPhoto from "/public/Dhaya.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[92vh] flex items-center px-4 sm:px-6 pt-28 pb-16">
      <div className="max-w-6xl w-full mx-auto grid gap-10 md:grid-cols-[280px_1fr] md:gap-12 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src={myPhoto}
            alt="Portrait of Yassine Dhaya"
            className="w-44 sm:w-52 md:w-64 rounded-2xl border border-border/80 shadow-xl shadow-black/35"
          />
        </div>

        <div className="space-y-6 text-center md:text-left">
          <p className="text-xs tracking-[0.16em] uppercase text-primary font-medium">Yassine Dhaya</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
            Full-Stack Software Engineer
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed">
            I design and ship production software across Angular/React frontends and Spring Boot/Node.js backends,
            including privacy-first on-device AI products.
          </p>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto md:mx-0">
            <div className="rounded-xl border border-border/80 bg-card/70 p-3 sm:p-4">
              <p className="text-xl sm:text-2xl font-semibold">3+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="rounded-xl border border-border/80 bg-card/70 p-3 sm:p-4">
              <p className="text-xl sm:text-2xl font-semibold">500+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Daily Users Served</p>
            </div>
            <div className="rounded-xl border border-border/80 bg-card/70 p-3 sm:p-4">
              <p className="text-xl sm:text-2xl font-semibold">99.9%</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Uptime (3 Services)</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Button size="lg" onClick={() => scrollToSection("projects")} className="w-full sm:w-auto shadow-sm shadow-primary/30">
              <ArrowRight className="mr-2 h-4 w-4" />
              View Case Studies
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-primary/35"
              onClick={() => window.open(`${import.meta.env.BASE_URL}2026Resume-YD.pdf`, "_blank", "noopener,noreferrer")}
            >
              <Download className="mr-2 h-4 w-4" />
              View Resume
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <a
              href="https://github.com/yassinedhaya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border/80 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/35 transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/yassinedhaya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border/80 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/35 transition-colors"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 rounded-lg border border-border/80 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/35 transition-colors"
            >
              <Mail className="w-4 h-4" /> Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
