import { Code2, Rocket, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams and stakeholders",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate developer focused on creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a React.js developer with a passion for building elegant, user-friendly web applications. 
              With expertise in modern JavaScript frameworks and a keen eye for design, I create solutions 
              that are both functional and beautiful.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines technical excellence with creative problem-solving, ensuring every project 
              meets the highest standards of quality and user experience.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)] group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;