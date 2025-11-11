import { Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "igasubizavainqueurfilosemaximi@gmail.com",
      href: "mailto:your.email@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+250 796 018 772",
      href: "null",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "RWANDA,Musanze ",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((item, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)] group text-center"
            >
              {item.href ? (
                <a href={item.href} className="block space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.label}</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            hura nenge unyuze kuri zi mbuga...
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="https://github.com/igasubizavainqueurfilosemaximi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
 <span className="text-muted-foreground">•</span>
            <a

            href="https://instagram.com/vain_queu_r"
            target="_blank"
            rel="noonpener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            >
               
              instagram</a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="https://twitter.com/igasubizvainqueurfilosemaximi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;