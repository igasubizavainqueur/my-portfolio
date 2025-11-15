import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Code, ExternalLink, Github } from "lucide-react";

const ProjectsPage = () => {
  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product catalog, and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder-project.jpg",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      tags: ["Flutter", "Firebase", "Dart"],
      image: "/placeholder-project.jpg",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my projects and skills. Features dark/light mode, project showcases, skills section, and contact form.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Router"],
      image: "/images/bgimag.jpg.png",
      github: "https://github.com/igasubizavainqueur/hello-dev-show",
      demo: "https://igasubizavainqueur.github.io/hello-dev-show"
    },
    // Add more projects as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-200">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">My Projects</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A collection of my recent work and personal projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300">
                <div className="h-48 bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                  <Code className="w-12 h-12 text-slate-300 dark:text-slate-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3 pt-2">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center text-sm"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-600 dark:text-slate-300 mb-6">Interested in working together?</p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
