import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  "3+ years building full-stack applications serving 500+ daily users.",
  "Reduced API P95 latency by 25% and cut release lead time by ~30% through CI/CD automation.",
  "Maintained 99.9% uptime across 3 production services.",
  "Hands-on with on-device LLM integration (Gemma, LiteRT) and private AI workflows.",
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-xs tracking-[0.16em] uppercase text-primary font-medium">Summary</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Full-Stack Software Engineer based in Tunisia, open to EU relocation
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I build scalable web systems, AI-enabled products, and immersive experiences with a focus on delivery,
            reliability, and product impact.
          </p>
        </div>

        <Card className="border-border/80 bg-card/70 backdrop-blur-sm">
          <CardContent className="p-6 sm:p-8">
            <ul className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <span className="text-primary mr-2">●</span>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
