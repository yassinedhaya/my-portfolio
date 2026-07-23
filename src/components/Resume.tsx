import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const experience = [
  {
    title: "Associate Instructor — Software Engineering Track",
    company: "ESPRIT — Higher School of Engineering & Technology",
    period: "Dec 2023 – Present",
    bullets: [
      "Engineered full-stack applications (Angular, Spring Boot, Node.js, MongoDB) serving 500+ students as the sole engineer on two production systems.",
      "Cut administrative processing by 40% while maintaining 99.9% uptime across 3 live services.",
      "Led 7 student Agile squads as technical lead; 5 of 7 teams shipped to production (72% vs 35% departmental average).",
      "Introduced GitHub Actions CI/CD and Docker for 3 services, reducing release lead time by ~30%.",
      "Integrated AI coding agents to accelerate sprint velocity by 20–30%.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "CONTYFIND",
    period: "Jul 2023 – Sep 2023",
    bullets: [
      "Built Spring Boot microservices on a regulated multi-tenant maritime platform.",
      "Reduced API P95 latency by 25% (800ms to 600ms) via MongoDB optimization and Angular caching.",
      "Implemented JWT authentication, RBAC with Spring Security, and request interceptors for logging.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "E-Surveys",
    period: "Aug 2022 – Oct 2022",
    bullets: [
      "Built Angular + Ionic frontend and contributed to Spring Boot / Node.js backend features in an Agile team.",
      "Identified and resolved two load-related bottlenecks during QA before production deployment.",
    ],
  },
];

const Resume = () => {
  const handleDownload = () => {
    window.open(`${import.meta.env.BASE_URL}2026Resume-YD.pdf`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 bg-card/20">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <p className="text-xs tracking-[0.16em] uppercase text-primary font-medium">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl">
            Building production software across education and maritime platforms, with consistent impact on performance,
            reliability, and delivery speed.
          </p>
          <Button size="lg" onClick={handleDownload} className="shadow-sm shadow-primary/30">
            <Download className="w-4 h-4 mr-2" />
            View Resume
          </Button>
        </div>

        <div className="space-y-6">
          {experience.map((job) => (
            <Card key={`${job.company}-${job.period}`} className="border-border/80 bg-card/70">
              <CardContent className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{job.title}</h3>
                    <p className="text-muted-foreground">{job.company}</p>
                  </div>
                  <p className="text-xs uppercase tracking-[0.12em] text-primary">{job.period}</p>
                </div>

                <ul className="space-y-2">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      <span className="text-primary mr-2">●</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
