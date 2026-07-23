import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCaseStudy {
  title: string;
  period: string;
  problem: string;
  built: string;
  stack: string[];
  outcome: string;
  links?: { label: string; href: string; type: "repo" | "external" }[];
}

const projectCaseStudies: ProjectCaseStudy[] = [
  {
    title: "LocalMind",
    period: "2026",
    problem: "Need private AI assistance on Android without sending user data to external servers.",
    built:
      "Built an on-device AI Android app with chat, PDF Q&A, voice STT/TTS, and a React Native ↔ Kotlin TurboModule bridge running local LLM inference via LiteRT.",
    stack: ["React Native", "Kotlin", "Google AI Edge LiteRT", "Gemma"],
    outcome: "Delivered zero-network-call local inference for privacy-first AI workflows.",
    links: [{ label: "Repository", href: "https://github.com/yassinedhaya/LocalMind", type: "repo" }],
  },
  {
    title: "Auto-Post",
    period: "2026",
    problem: "Job seekers needed one workflow to discover roles, optimize applications, and track progress.",
    built:
      "Built a full-stack SaaS with 30+ REST endpoints, JWT authentication, and integrations across 7 job sources with Docker-based local orchestration.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Docker", "TypeScript"],
    outcome: "Shipped a production-ready multi-source pipeline with strict TypeScript and automated tests.",
    links: [{ label: "Repository", href: "https://github.com/yassinedhaya/Auto-Post", type: "repo" }],
  },
  {
    title: "Metaxpo",
    period: "2025",
    problem: "Virtual events required a scalable 3D platform with responsive backend performance under concurrent load.",
    built: "Delivered an end-to-end immersive events platform spanning architecture, backend, frontend, and infrastructure.",
    stack: ["React", "TypeScript", "Unity", "Node.js", "MongoDB"],
    outcome: "Reduced API response time by 35% under concurrent load using query batching and Redis caching.",
    links: [{ label: "Project Story", href: "https://www.linkedin.com/in/yassinedhaya/details/projects/", type: "external" }],
  },
  {
    title: "TRICO — AI Virtual Companion",
    period: "2025",
    problem: "A family-assistant concept needed more natural multi-session conversations and personalization.",
    built:
      "Implemented prompt engineering and conversation state management, with voice cloning and QR-based user personalization.",
    stack: ["Flutter", "Node.js", "Google Gemini API"],
    outcome: "Improved conversational response accuracy by 18%.",
    links: [{ label: "Project Story", href: "https://www.linkedin.com/in/yassinedhaya/details/projects/", type: "external" }],
  },
  {
    title: "CV-Maker Local",
    period: "2026",
    problem: "Users needed a private local-first workflow for resume tailoring and ATS compatibility.",
    built:
      "Built a multi-component platform combining FastAPI, Electron, React, local Ollama models, and a Manifest V3 Chrome extension.",
    stack: ["FastAPI", "Electron", "React", "Ollama", "Chrome Extension"],
    outcome: "Delivered hybrid ATS scoring across Workday, Greenhouse, Lever, Taleo, and iCIMS with 7-language support.",
    links: [{ label: "Repository", href: "https://github.com/yassinedhaya/CV-Maker-Local", type: "repo" }],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-xs tracking-[0.16em] uppercase text-primary font-medium">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected Case Studies</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Representative product work with clear context, implementation details, and measurable outcomes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projectCaseStudies.map((project) => (
            <Card key={project.title} className="border-border/80 bg-card/70 transition-colors hover:border-primary/35">
              <CardContent className="p-6 sm:p-8 space-y-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                  <span className="text-xs uppercase tracking-[0.14em] text-primary">{project.period}</span>
                </div>

                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <span className="text-foreground font-medium">Problem:</span> {project.problem}
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Built:</span> {project.built}
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Outcome:</span> {project.outcome}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>

                {project.links && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.links.map((link) => (
                      <Button
                        key={link.href}
                        size="sm"
                        variant="outline"
                        className="border-primary/30 hover:bg-primary/10"
                        onClick={() => window.open(link.href, "_blank", "noopener,noreferrer")}
                      >
                        {link.type === "repo" ? <Github className="w-4 h-4 mr-2" /> : <ExternalLink className="w-4 h-4 mr-2" />}
                        {link.label}
                      </Button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
