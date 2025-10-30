import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Vite", "Webpack", "npm/yarn", "REST APIs", "Redux", "React Query"],
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Agile/Scrum"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="space-y-4 p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <h3 className="text-xl font-semibold text-primary mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="text-sm py-2 px-4 bg-secondary hover:bg-primary/20 hover:text-primary border border-border hover:border-primary/50 transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;