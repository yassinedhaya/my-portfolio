import { useEffect, useRef, useState } from "react";
import { Code2, Gamepad2, Zap, Heart, Trophy, Globe, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
}

const SkillBar = ({ name, level, color }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(level), 200);
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={barRef} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden border border-border">
        <div
          className={`h-full ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const About = () => {

  // ---------------------
  // SKILLS BASED ON CV
  // ---------------------
  const skills = [
    { name: "Unity / C#", level: 95, color: "bg-primary" },
    { name: "XR • AR • VR Development", level: 90, color: "bg-secondary" },
    { name: "React / TypeScript", level: 92, color: "bg-primary" },
    { name: "React Native / Kotlin", level: 84, color: "bg-accent" },
    { name: "Python / FastAPI", level: 86, color: "bg-primary" },
    { name: "Supabase / PostgreSQL", level: 85, color: "bg-secondary" },
    { name: "AI Integration (LLMs, Voice, ATS)", level: 91, color: "bg-accent" },
    { name: "Mentorship & Product Delivery", level: 94, color: "bg-primary" },
  ];

  // ----------------------
  // CHARACTER TRAITS (CV)
  // ----------------------
  const traits = [
    { icon: Brain, label: "AI Integration", value: "95", color: "text-primary" },
    { icon: Gamepad2, label: "XR/Game Dev", value: "97", color: "text-secondary" },
    { icon: Code2, label: "Full-Stack Skills", value: "92", color: "text-accent" },
    { icon: Heart, label: "Mentorship", value: "100", color: "text-secondary" },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-4">
            <Trophy className="w-4 h-4 text-accent" />
            <span className="text-sm font-bold text-accent">CHARACTER STATS</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About This Player
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A full-stack, XR, and AI engineer building products across web, desktop, mobile,
            and immersive experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {/* Origin Story */}
          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-4">Origin Story</h3>

              <p className="text-muted-foreground leading-relaxed">
                I started with solid software engineering fundamentals, then expanded into XR,
                real-time 3D systems, and AI-powered product development. Today my work spans
                web platforms, desktop tooling, mobile experiences, and private local AI apps.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Alongside product work, I teach and mentor engineering students while shipping
                practical tools such as CV optimization platforms, academic workflow apps, and
                immersive prototypes. I enjoy turning ambitious ideas into polished, usable builds.
              </p>
            </CardContent>
          </Card>

          {/* Character Traits */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Character Traits</h3>

              <div className="grid grid-cols-2 gap-4">
                {traits.map((trait, index) => (
                  <div
                    key={trait.label}
                    className="bg-background/50 border border-border rounded-lg p-4 text-center hover:scale-105 transition-transform"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <trait.icon className={`w-8 h-8 mx-auto mb-2 ${trait.color}`} />
                    <div className="text-2xl font-bold text-foreground">{trait.value}</div>
                    <div className="text-xs text-muted-foreground">{trait.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skill Tree */}
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Skill Tree</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
};

export default About;
