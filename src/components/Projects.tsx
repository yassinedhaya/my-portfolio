import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Trophy, Star, Zap, Youtube, CloudDownload, Github } from "lucide-react";
import { toast } from "sonner";

interface Project {
  title: string;
  description: string;
  tags: string[];
  achievement: string;
  icon: string;
  link?: string;
  linkLabel: string;
  Trailer?: string;
  trailerLabel?: string;
  Test?: string;
  testLabel?: string;
}

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [achievementsShown, setAchievementsShown] = useState<{ [key: string]: boolean }>({});
  // tracks which projects have shown their achievement

  const githubProjects: Project[] = [
    {
      title: "LocalMind",
      description:
        "A private, on-device AI assistant for Android with offline chat, PDF Q&A, voice features, and a native Kotlin inference layer powered by Google AI Edge LiteRT.",
      tags: ["React Native", "Kotlin", "Android", "Gemma", "On-device AI"],
      achievement: "Offline AI Builder",
      icon: "📱",
      link: "https://github.com/yassinedhaya/LocalMind",
      linkLabel: "Repository",
    },
    {
      title: "TailoredCV",
      description:
        "An AI-powered CV tailoring platform with ATS scoring, recruiter simulation, market-specific formatting, and secure Supabase-backed workflows.",
      tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "OpenAI"],
      achievement: "Career Toolsmith",
      icon: "🧾",
      link: "https://github.com/yassinedhaya/TailoredCV",
      linkLabel: "Repository",
    },
    {
      title: "CV-Maker-Local",
      description:
        "A local-first resume tailoring and job hunting workspace with per-section AI agents, ATS scoring, browser extension support, and private Ollama-based processing.",
      tags: ["FastAPI", "React", "Electron", "Ollama", "Playwright"],
      achievement: "Local AI Architect",
      icon: "🧠",
      link: "https://github.com/yassinedhaya/CV-Maker-Local",
      linkLabel: "Repository",
    },
    {
      title: "AutoPost",
      description:
        "A full-stack SaaS platform for job discovery, CV tailoring, ATS optimization, alerts, and application tracking across multiple public job sources.",
      tags: ["FastAPI", "Next.js", "PostgreSQL", "Docker", "AI"],
      achievement: "Workflow Automator",
      icon: "🚀",
      link: "https://github.com/yassinedhaya/Auto-Post",
      linkLabel: "Repository",
    },
    {
      title: "EspritNote",
      description:
        "A desktop grade and module manager for teachers that streamlines imports, continuous-assessment calculations, exports, and academic status workflows.",
      tags: ["Electron", "React", "TypeScript", "Tailwind", "XLSX"],
      achievement: "EdTech Builder",
      icon: "📊",
      link: "https://github.com/yassinedhaya/EspritNote",
      linkLabel: "Repository",
    },
    {
      title: "Surveillance-Esprit",
      description:
        "A desktop productivity app built to calculate surveillance workloads and simplify teaching operations with a focused internal tooling experience.",
      tags: ["JavaScript", "Desktop", "Operations", "Productivity"],
      achievement: "Ops Simplifier",
      icon: "🛡️",
      link: "https://github.com/yassinedhaya/Surveillance-Esprit",
      linkLabel: "Repository",
    },
    {
      title: "teacher-assigner-helper",
      description:
        "A TypeScript helper tool to streamline teacher assignment workflows with clearer organization and automation for repetitive allocation tasks.",
      tags: ["TypeScript", "Automation", "Productivity"],
      achievement: "Workflow Tactician",
      icon: "🧩",
      link: "https://github.com/yassinedhaya/teacher-assigner-helper",
      linkLabel: "Repository",
    },
  ];

  const researchProjects: Project[] = [
    {
      title: "Tic Tac Toe – MCTS AI",
      description:
        "A Unity WebGL Tic-Tac-Toe game implementing Monte Carlo Tree Search (MCTS) to enable strategic AI decision-making and optimal gameplay.",
      tags: ["Unity", "C#", "WebGL", "AI", "MCTS"],
      achievement: "AI Strategist",
      icon: "⭕",
      link: "https://www.linkedin.com/in/yassinedhaya/details/projects/?locale=en_US",
      linkLabel: "Project Story",
    },
    {
      title: "T-Booky – Book Exchange App",
      description:
        "A Flutter mobile application that allows users to upload, exchange, and request books with a clean UI and fully interactive user flow.",
      tags: ["Flutter", "Dart", "Firebase", "Mobile"],
      achievement: "App Builder",
      icon: "📚",
      link: "https://www.linkedin.com/in/yassinedhaya/details/projects/?locale=en_US",
      linkLabel: "Project Story",
    },
    {
      title: "LaughRoom – Multiplayer VR Social Game",
      description:
        "A multiplayer VR experience where players meet, communicate, play casual activities, and socialize in a fun virtual playground.",
      tags: ["Unity", "C#", "VR", "Mirror Networking"],
      achievement: "VR Creator",
      icon: "😂",
      link: "https://www.linkedin.com/in/yassinedhaya/details/projects/?locale=en_US",
      linkLabel: "Project Story",
      Trailer: "https://www.youtube.com/watch?v=j9TKsLdi8vc",
      trailerLabel: "Trailer",
    },
    {
      title: "Study Buddy – Educational Mini-Games",
      description:
        "A Unity mobile app containing mini-games designed for children aged 5–12. Built with 3D assets modeled in Maya and optimized for mobile performance.",
      tags: ["Unity", "C#", "Maya 3D", "Mobile"],
      achievement: "Edu Game Dev",
      icon: "🎒",
      link: "https://www.linkedin.com/in/yassinedhaya/details/projects/?locale=en_US",
      linkLabel: "Project Story",
    },
    {
      title: "Metaxpo – 3D Events Platform",
      description:
        "A flagship immersive events platform combining full-stack web systems, real-time 3D experiences, and XR product thinking for large interactive showcases.",
      tags: ["React", "TypeScript", "Unity", "Node.js", "MongoDB"],
      achievement: "XR Innovator",
      icon: "🌐",
      link: "https://www.linkedin.com/in/yassinedhaya/details/projects/?locale=en_US",
      linkLabel: "Project Story",
    },
    {
      title: "HumAnatomy – Mixed Reality Anatomy App",
      description:
        "Built a mixed reality anatomy learning experience using Unity & MRTK with organ manipulation, realistic rendering, and interactive UI for medical students.",
      tags: ["Unity", "C#", "MRTK", "Mixed Reality"],
      achievement: "MR Developer",
      icon: "🧠",
      link: "https://www.linkedin.com/in/yassinedhaya/details/projects/?locale=en_US",
      linkLabel: "Project Story",
    },
    {
      title: "TRICO – AI Virtual Family Companion",
      description:
        "Designed an AI-powered assistant using Google Gemini API, voice cloning, and QR-based personalization, achieving an 18% improvement in conversational accuracy.",
      tags: ["AI", "Google Gemini", "Flutter", "Node.js", "Voice AI"],
      achievement: "AI Engineer",
      icon: "🤖",
      link: "https://www.linkedin.com/in/yassinedhaya/details/projects/?locale=en_US",
      linkLabel: "Project Story",
      Trailer: "https://www.youtube.com/watch?v=CQ659lQ6ebk",
      trailerLabel: "Trailer",
    },
    {
      title: "Whispers of the Enigma – VR Escape Game",
      description:
        "Developed the game logic and backend of a multiplayer VR escape experience using Unity, Mirror, and MongoDB with real-time analytics to optimize puzzle flow.",
      tags: ["Unity", "C#", "VR", "Netcode", "Node.js", "MongoDB"],
      achievement: "Game Architect",
      icon: "🎮",
      link: "https://www.linkedin.com/in/yassinedhaya/details/projects/?locale=en_US",
      linkLabel: "Project Story",
      Trailer: "https://www.youtube.com/watch?v=lBxNnFKvXoY",
      trailerLabel: "Trailer",
      Test: "https://gamix-esprit.itch.io/whispers-of-the-enigma",
      testLabel: "Download",
    },
  ];

  const handleAchievement = (projectId: string, achievement: string) => {
    if (!achievementsShown[projectId]) {
      toast.success(`🏆 Achievement Unlocked: ${achievement}`, {
        description: "Click on project links to explore more!",
      });
      setAchievementsShown((prev) => ({ ...prev, [projectId]: true }));
    }
  };

  const renderProjectGrid = (projectList: Project[], category: string) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectList.map((project, index) => {
        const projectId = `${category}-${index}`;

        return (
          <Card
            key={projectId}
            className="group bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
            onMouseEnter={() => {
              setHoveredProject(projectId);
              handleAchievement(projectId, project.achievement);
            }}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <CardContent className="p-6 space-y-4 relative">
              {hoveredProject === projectId && (
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold animate-achievement-pop flex items-center gap-1">
                  <Trophy className="w-3 h-3" />
                  {project.achievement}
                </div>
              )}

              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {project.icon}
              </div>

              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed min-h-[100px]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs bg-white hover:bg-muted/80"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 pt-2">
                {project.link && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/30 hover:bg-primary/10"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    {project.linkLabel === "Repository" ? (
                      <Github className="w-4 h-4 mr-1" />
                    ) : (
                      <ExternalLink className="w-4 h-4 mr-1" />
                    )}
                    {project.linkLabel}
                  </Button>
                )}
                {project.Trailer && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/30 hover:bg-primary/10"
                    onClick={() => window.open(project.Trailer, "_blank")}
                  >
                    <Youtube className="w-4 h-4 mr-1" />
                    {project.trailerLabel ?? "Trailer"}
                  </Button>
                )}
                {project.Test && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/30 hover:bg-primary/10"
                    onClick={() => window.open(project.Test, "_blank")}
                  >
                    <CloudDownload className="w-4 h-4 mr-1" />
                    {project.testLabel ?? "Download"}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full mb-4">
            <Star className="w-4 h-4 text-secondary" />
            <span className="text-sm font-bold text-secondary">QUEST LOG</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Completed Quests
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            New product builds from GitHub plus legacy projects preserved in a dedicated R&D archive
          </p>
        </div>

        <div className="mb-14">
          <h3 className="text-2xl font-bold text-foreground mb-2">New Projects from GitHub</h3>
          <p className="text-muted-foreground mb-6">
            Recent repositories and products currently active in my development workflow.
          </p>
          {renderProjectGrid(githubProjects, "github")}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Research & Development Archive</h3>
          <p className="text-muted-foreground mb-6">
            Legacy and experimental projects that shaped my current engineering direction.
          </p>
          {renderProjectGrid(researchProjects, "rnd")}
        </div>

        {/* Bottom CTA – Feedback & Opportunities */}
        <div className="text-center mt-16">
          <Card className="bg-card border-border shadow-lg hover:shadow-accent/30 transition-all max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="text-5xl mb-4">💬</div>

              <h3 className="text-2xl font-bold text-foreground mb-2">
                Did These Projects Spark Your Interest?
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you're looking for a developer for your next project, exploring 
                collaboration opportunities, or need a freelancer with strong skills in 
                AI, XR, Unity, and full-stack development — I'm always open to new quests.
              </p>

              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 transition-all"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Zap className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
