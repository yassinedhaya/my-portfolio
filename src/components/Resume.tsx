import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Briefcase, GraduationCap, Award, Shield } from "lucide-react";
import { toast } from "sonner";

const Resume = () => {
  const handleDownload = () => {
    toast.success("📄 Resume Downloaded!", {
      description: "Your resume has been downloaded successfully.",
    });

    // Add your online resume link here
    window.open("/yassinedhaya-Resume.pdf", "_blank");
  };

  // ---------------------------
  // EXPERIENCE FROM REAL RESUME
  // ---------------------------
  const experience = [
    {
      title: "Technical Instructor & Software Developer",
      company: "ESPRIT",
      period: "Dec 2023 – Present",
      achievements: [
        "Designed project roadmaps aligned with user & business outcomes",
        "Mentored 100+ engineering students in full-stack & XR development",
        "Coached 7+ final-year students across 5+ deployed projects",
        "Organized hackathons & workshops with 50+ participants",
        "Increased team efficiency by 30% through optimized workflows",
      ],
      level: 90,
    },
    {
      title: "Software Developer",
      company: "CONTYFIND",
      period: "Jul 2023 – Sep 2023",
      achievements: [
        "Built maritime data management web application with Angular, Ionic & Node.js",
        "Reduced data access time by 25% for 100+ users",
        "Ensured secure data storage and optimized UX flow",
      ],
      level: 70,
    },
    {
      title: "Software Developer",
      company: "E-Surveys",
      period: "Aug 2022 – Oct 2022",
      achievements: [
        "Developed maritime data storage platform with Angular & Node.js",
        "Improved system efficiency for 50+ daily active users",
        "Optimized backend ensuring smoother data operations",
      ],
      level: 60,
    },
  ];

  // ---------------------------
  // EDUCATION (REAL DATA)
  // ---------------------------
  const education = [
    {
      degree: "Engineering Degree in Computer Science (Master’s Equivalent)",
      school: "ESPRIT",
      period: "2021 – 2024",
      honor: "Graduated with Honors • Top of Class Twice",
    },
    {
      degree: "Bachelor's Degree in Electrical Engineering",
      school: "ISET Bizerte",
      period: "2017 – 2020",
      honor: "Completed Successfully",
    },
  ];

  // ---------------------------
  // CERTIFICATIONS (REAL DATA)
  // ---------------------------
  const certifications = [
    "Fusion AI Agent Studio – Foundations Associate (Oracle, 2025)",
        "Hashgraph Developer (Hashgraph Association, 2025)",
    "Data Analytics Essentials (Cisco, 2025)",
    "English Certificate – Proficient Level (EF SET, 2025)",
  ];

  return (
    <section id="resume" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ---------------------- HEADER ---------------------- */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">CHARACTER PROFILE</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Career Progression
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Leveling up through professional experience, education, and continuous growth.
          </p>

          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30"
            onClick={handleDownload}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Full Resume
          </Button>
        </div>

        {/* ---------------------- EXPERIENCE ---------------------- */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-secondary" />
            <h3 className="text-2xl font-bold text-foreground">Work Experience</h3>
          </div>

          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-secondary/50 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-1">{job.title}</h4>
                      <p className="text-secondary font-medium">{job.company}</p>
                    </div>

                    <div className="text-right">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/30 rounded-full">
                        <span className="text-xs font-bold text-accent">
                          LEVEL {job.level}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{job.period}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ---------------------- EDUCATION + CERTIFICATIONS ---------------------- */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Education */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Education</h3>
              </div>

              {education.map((edu, index) => (
                <div key={index} className="space-y-2 mb-6">
                  <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                  <p className="text-primary font-medium">{edu.school}</p>

                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                    <Badge className="bg-accent text-accent-foreground">
                      {edu.honor}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-background/50 border border-border rounded-lg hover:border-accent/50 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    
  );
};

export default Resume;
