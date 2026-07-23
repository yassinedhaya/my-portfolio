import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    degree: "Engineering Degree (Master’s Equivalent) — Computer Science",
    school: "ESPRIT — Higher School of Engineering & Technology",
    period: "Sep 2021 – Jul 2024",
    detail:
      "Specialization: Software Systems & Extended Reality. Graduated with honors, ranked top of class twice.",
  },
  {
    degree: "Bachelor’s Degree — Electrical Engineering",
    school: "ISET Bizerte",
    period: "Sep 2017 – Jul 2020",
    detail: "Specialization: Industrial Automation & Information Technology.",
  },
];

const certifications = [
  "Fusion AI Agent Studio — Foundations Associate (Oracle, 2025)",
  "Hashgraph Developer (Hashgraph Association, 2025)",
  "Data Analytics Essentials (Cisco, 2025)",
  "English Certificate — Proficient Level (EF SET, 2025)",
];

const languages = ["English (C1)", "French (Professional)", "Arabic (Native)", "German (A1, targeting B2 by end of 2026)"];

const Education = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 bg-card/20">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-xs tracking-[0.16em] uppercase text-primary font-medium">Education</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Foundations & Continuous Learning</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border/80 bg-card/70">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-xl font-semibold">Education</h3>
              {education.map((item) => (
                <div key={item.degree} className="space-y-2">
                  <p className="font-medium leading-snug">{item.degree}</p>
                  <p className="text-sm text-muted-foreground">{item.school}</p>
                  <p className="text-xs uppercase tracking-wide text-primary">{item.period}</p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/80 bg-card/70">
            <CardContent className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Certifications</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {certifications.map((cert) => (
                    <li key={cert} className="leading-relaxed">• {cert}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Languages</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {languages.map((language) => (
                    <li key={language}>• {language}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
