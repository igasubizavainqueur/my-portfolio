import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with cart functionality, payment integration, and admin dashboard.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team workspaces, and progress tracking.",
      tech: ["React", "Redux", "Firebase", "Material-UI"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location search, 7-day forecast, and beautiful data visualizations.",
      tech: ["React", "Next.js", "Chart.js", "OpenWeather API"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with smooth animations, responsive design, and contact form integration.",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work and side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] group"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="border-primary/30 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border hover:border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;