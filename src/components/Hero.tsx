import { ArrowDown, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
// Images are now in the public folder
const heroBg = "/images/cc.jpg";
const profileImg = "/images/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, hsl(var(--background) / 0.9), hsl(var(--background) / 0.95)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Theme Toggle Button */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          <div className="text-center lg:text-left space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 max-w-2xl">
            <div className="inline-block px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-primary/20">
              <span className="text-sm text-primary font-medium">Available for Work</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Igasubiza Vainqueur Filose Maximilian
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              React.js Developer crafting beautiful, performant web experiences
            </p>
            
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              Specialized in building modern, responsive applications with React, TypeScript, and the latest web technologies.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/20 hover:bg-primary/10 hover:border-primary/30 transition-all"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4 justify-center pt-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:your.email@example.com"
                className="p-3 rounded-full bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Profile Photo */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl animate-in fade-in slide-in-from-right-10 duration-1000">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={profileImg}
                alt="Igasubiza Vainqueur Filose Maximilian"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  console.error('Error loading image:', e);
                  console.log('Profile image path:', profileImg);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </button>
    </section>
  );
};

export default Hero;