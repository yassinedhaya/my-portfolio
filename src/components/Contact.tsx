import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Send, Github, Linkedin, Gitlab } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // -------------------------
  // Send Email via Web3Forms
  // -------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "e45b625c-f216-4ba4-be58-9a1af2be3205", // ← METTRE VOTRE ACCESS KEY
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("🎉 Message Sent!", {
          description:
            "Your message has been successfully delivered. I'll get back to you soon!",
        });

        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("❌ Failed to send message", {
          description: result.message,
        });
      }
    } catch (error) {
      toast.error("❌ Error sending message", {
        description: "Please check your internet connection and try again.",
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/yassinedhaya",
      color: "hover:text-primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/yassinedhaya",
      color: "hover:text-secondary",
    },
    {
      icon: Gitlab,
      label: "Gitlab",
      url: "https://gitlab.com/yassinedhaya",
      color: "hover:text-accent",
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-background/50">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">
              MULTIPLAYER MODE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Let's Connect!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Send me a message and let's
            build something amazing!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Contact Form */}
          <Card className="md:col-span-2 bg-card border-border">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hi!"
                    rows={7}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Links */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Connect With Me
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 bg-background/50 border border-border rounded-lg transition-all ${social.color} hover:border-current group`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">💼</div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Available for Hire
                </h3>
                <p className="text-sm text-muted-foreground">
                  I'm currently open to new opportunities and exciting projects!
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
