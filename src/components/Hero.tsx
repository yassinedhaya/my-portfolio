import { useEffect, useState } from "react";
import { Gamepad2, Sparkles, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import myPhoto from "/public/Dhaya.jpg"; // Replace with your image path

const Hero = () => {
  const [xp, setXp] = useState(0);
  const [level] = useState(89);
  const targetXp = 85;
  const [showOverlay, setShowOverlay] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setXp(targetXp), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleStart = () => {
    setFadeOut(true);
    setTimeout(() => setShowOverlay(false), 600);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6">

      {/* ===================== Overlay ===================== */}
      {showOverlay && (
        <div
          className={`
            fixed inset-0 z-[9999] flex flex-col items-center justify-center
            bg-background/95 backdrop-blur-xl transition-opacity duration-700
            ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
        >
          {/* Image on Overlay */}
          <img 
            src={myPhoto} 
            alt="Yassine Dhaya" 
            className="w-32 sm:w-40 md:w-48 lg:w-56 rounded-full border-4 border-primary shadow-lg mb-6"
          />

          {/* Name Glow */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold 
            bg-gradient-to-r from-primary via-secondary to-accent 
            bg-clip-text text-transparent animate-pulse drop-shadow-xl text-center">
            Yassine Dhaya
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold
            bg-gradient-to-r from-primary via-secondary to-accent
            bg-clip-text text-transparent mt-2 text-center">
            Software Engineer × Game Developer
          </h2>

          {/* READY? typing */}
          <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center">
            <span className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-primary pr-2">
              Ready?
            </span>
          </h3>

          {/* START Button */}
          <button
            onClick={handleStart}
            className="mt-6 sm:mt-8 px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-2xl sm:text-3xl md:text-4xl font-extrabold
              bg-gradient-to-r from-accent to-primary
              text-primary-foreground shadow-lg shadow-primary/40
              hover:scale-105 hover:shadow-primary/60 transition-all opacity-0 animate-startPop"
          >
            START
          </button>
        </div>
      )}

      {/* ===================== Background Particles ===================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 sm:w-4 sm:h-4 bg-secondary rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* ===================== Main Content ===================== */}
      <div className="max-w-6xl w-full relative z-10 animate-fade-in flex flex-col md:flex-row items-center md:items-start justify-center gap-8 px-4">

     {/* Image Section with Shadow Box Overlay */}
<div className="flex-1 flex justify-center md:justify-center mt-8 md:mt-0 relative">
  <img 
    src={myPhoto} 
    alt="Yassine Dhaya" 
    className="w-40 sm:w-48 md:w-56 lg:w-64 rounded-lg shadow-lg"
  />

  {/* LEVEL / ENGINEER text overlay in shadow box */}
  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 bg-background/70 backdrop-blur-md shadow-lg px-3 py-0 rounded-lg flex flex-col items-center ">
    <div className="text-1xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
      LEVEL {level}
    </div>
    <div className="text-1xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
      ENGINEER
    </div>
  </div>
</div>
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Yassine Dhaya
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 font-mono">
            &gt; Software Engineer × Game Developer
          </p>

          {/* XP Bar */}
          <div className="max-w-md w-full mx-auto mb-6 sm:mb-8 space-y-2">
            <div className="flex justify-between text-sm sm:text-base text-muted-foreground">
              <span>Experience Points</span>
              <span>{xp}%</span>
            </div>
            <div className="h-3 sm:h-4 bg-muted rounded-full overflow-hidden border border-border">
              <div
                className="h-full bg-gradient-to-r from-xp to-primary transition-all duration-1000 ease-out"
                style={{ width: `${xp}%` }}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-lg mx-auto mb-6 sm:mb-8">
            <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
              <Code2 className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-foreground">2+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Years XP</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 hover:border-secondary/50 transition-colors">
              <Gamepad2 className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-foreground">10+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 hover:border-accent/50 transition-colors">
              <Sparkles className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-foreground">∞</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Creativity</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 animate-glow-pulse w-full sm:w-auto"
              onClick={() => scrollToSection("projects")}
            >
              <Gamepad2 className="mr-2 h-5 w-5" />
              View Projects
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground w-full sm:w-auto"
              onClick={() => scrollToSection("contact")}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
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
