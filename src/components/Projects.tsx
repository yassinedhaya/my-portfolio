import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Trophy, Star, Zap, Youtube, CloudDownload } from "lucide-react";
import { toast } from "sonner";

interface Project {
  title: string;
  description: string;
  tags: string[];
  achievement: string;
  icon: string;
  link?: string;
  Trailer?: string;
  Test?: string;
}

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [achievementsShown, setAchievementsShown] = useState<{ [key: number]: boolean }>({}); 
  // tracks which projects have shown their achievement

  const projects: Project[] = [
    {
      title: "Tic Tac Toe – MCTS AI",
      description:
        "A Unity WebGL Tic-Tac-Toe game implementing Monte Carlo Tree Search (MCTS) to enable strategic AI decision-making and optimal gameplay.",
      tags: ["Unity", "C#", "WebGL", "AI", "MCTS"],
      achievement: "AI Strategist",
      icon: "⭕",
      link: "https://www.linkedin.com/in/yassinedhaya/details/projects/?locale=en_US",
    },
    {
      title: "T-Booky – Book Exchange App",
      description:
        "A Flutter mobile application that allows users to upload, exchange, and request books with a clean UI and fully interactive user flow.",
      tags: ["Flutter", "Dart", "Firebase", "Mobile"],
      achievement: "App Builder",
      icon: "📚",
      link: "https://www.linkedin.com/in/yassinedhaya/details/projects/?locale=en_US",
    },
    {
      title: "LaughRoom – Multiplayer VR Social Game",
      description:
        "A multiplayer VR experience where players meet, communicate, play casual activities, and socialize in a fun virtual playground.",
      tags: ["Unity", "C#", "VR", "Mirror Networking"],
      achievement: "VR Creator",
      icon: "😂",
      link: "https://www.linkedin.com/in/yassinedhaya/details/projects/?locale=en_US",
      Trailer: "https://www.youtube.com/watch?v=j9TKsLdi8vc",
    },
    {
      title: "Study Buddy – Educational Mini-Games",
      description:
        "A Unity mobile app containing mini-games designed for children aged 5–12. Built with 3D assets modeled in Maya and optimized for mobile performance.",
      tags: ["Unity", "C#", "Maya 3D", "Mobile"],
      achievement: "Edu Game Dev",
      icon: "🎒",
      link: "https://www.linkedin.com/in/yassinedhaya/details/projects/?locale=en_US",
    },
    {
      title: "Metaxpo – 3D Events Platform",
      description:
        "Developed a full immersive 3D events platform with interactive booths, real-time chat, admin analytics, and optimized backend pipelines. Showcased at the ESPRIT Bal des Projets.",
      tags: ["React.js", "TypeScript", "Unity", "C#", "Strapi", "Node.js", "MongoDB"],
      achievement: "XR Innovator",
      icon: "🌐",
      link: "https://www.linkedin.com/in/yassinedhaya/details/projects/?locale=en_US",
    },
    {
      title: "HumAnatomy – Mixed Reality Anatomy App",
      description:
        "Built a mixed reality anatomy learning experience using Unity & MRTK with organ manipulation, realistic rendering, and interactive UI for medical students.",
      tags: ["Unity", "C#", "MRTK", "Mixed Reality"],
      achievement: "MR Developer",
      icon: "🧠",
      link: "https://www.linkedin.com/in/yassinedhaya/details/projects/?locale=en_US",
    },
    {
      title: "TRICO – AI Virtual Family Companion",
      description:
        "Designed an AI-powered assistant using Google Gemini API, voice cloning, and QR-based personalization, achieving an 18% improvement in conversational accuracy.",
      tags: ["AI", "Google Gemini", "Flutter", "Node.js", "Voice AI"],
      achievement: "AI Engineer",
      icon: "🤖",
      link: "https://www.linkedin.com/in/yassinedhaya/details/projects/?locale=en_US",
      Trailer: "https://www.youtube.com/watch?v=CQ659lQ6ebk",
    },
    {
      title: "Whispers of the Enigma – VR Escape Game",
      description:
        "Developed the game logic and backend of a multiplayer VR escape experience using Unity, Mirror, and MongoDB with real-time analytics to optimize puzzle flow.",
      tags: ["Unity", "C#", "VR", "Netcode", "Node.js", "MongoDB"],
      achievement: "Game Architect",
      icon: "🎮",
      link: "https://www.linkedin.com/in/yassinedhaya/details/projects/?locale=en_US",
      Trailer: "https://www.youtube.com/watch?v=lBxNnFKvXoY",
      Test: "https://gamix-esprit.itch.io/whispers-of-the-enigma",
    },
  ];

  const handleAchievement = (index: number, achievement: string) => {
    if (!achievementsShown[index]) {
      toast.success(`🏆 Achievement Unlocked: ${achievement}`, {
        description: "Click on project links to explore more!",
      });
      setAchievementsShown((prev) => ({ ...prev, [index]: true }));
    }
  };

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
            A showcase of epic projects, legendary code, and achievements earned along the journey
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
              onMouseEnter={() => {
                setHoveredIndex(index);
                handleAchievement(index, project.achievement); // unique toast per project
              }}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent className="p-6 space-y-4 relative">
                {/* Achievement Badge */}
                {hoveredIndex === index && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold animate-achievement-pop flex items-center gap-1">
                    <Trophy className="w-3 h-3" />
                    {project.achievement}
                  </div>
                )}

                {/* Project Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed min-h-[100px]">
                  {project.description}
                </p>

                {/* Tags */}
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

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  {project.link && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/30 hover:bg-primary/10"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
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
                      Trailer
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
                      Download
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
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
