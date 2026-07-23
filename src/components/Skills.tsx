import { Card, CardContent } from "@/components/ui/card";

const skillGroups = [
  {
    title: "Frontend",
    items: ["Angular", "React", "React Native", "TypeScript", "RxJS", "NGXS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Spring Boot", "Spring Security", "Node.js", "Express.js", "FastAPI", "GraphQL", "Microservices"],
  },
  {
    title: "Data & DevOps",
    items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "GitHub Actions", "AWS CodePipeline", "CI/CD"],
  },
  {
    title: "AI & XR",
    items: ["LiteRT", "Gemini API", "Ollama", "LLM Integration", "Unity", "MRTK", "Prompt Engineering"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-xs tracking-[0.16em] uppercase text-primary font-medium">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Technical Toolbox</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core technologies used across production web platforms, AI products, and immersive experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.title} className="border-border/80 bg-card/70 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs sm:text-sm text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
