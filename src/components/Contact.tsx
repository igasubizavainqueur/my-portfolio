import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically make an API call to your backend
      console.log('Form submitted:', formData);
      
      // Show success message
      toast.success('Message sent successfully!');
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
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

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="contact" className="w-full bg-white dark:bg-slate-900 py-12 min-h-[calc(100vh-80px)] flex items-center">
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
            Contact <span className="text-pink-500 dark:text-pink-400">Information</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((item, index) => (
            <Card 
              key={index}
              className="p-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-pink-300 dark:hover:border-pink-500/50 transition-all hover:shadow-lg group text-center rounded-xl shadow-sm"
            >
              {item.href ? (
                <a href={item.href} className="block space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-pink-50 dark:bg-pink-900/30 group-hover:bg-pink-100 dark:group-hover:bg-pink-900/50 flex items-center justify-center transition-colors">
                    <item.icon className="w-6 h-6 text-pink-500 dark:text-pink-400" />
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
                    <item.icon className="w-6 h-6 text-pink-500 dark:text-pink-400" />
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

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-muted-foreground mb-4">
            Hura n'umutekano w'amakuru yawe. Ntabwo tuzabigabanya nabandi.
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

        {/* Contact Form */}
        <div className="w-full max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 border border-slate-100 dark:border-slate-700 my-8">
          <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white">Send me a message</h3>
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Your Name
                </label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  className="w-full"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email Address
                </label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Your Message
              </label>
              <Textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi there! I'd like to talk about a project..."
                rows={5}
                className="w-full"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="mt-2 bg-pink-500 hover:bg-pink-600 text-white"
              disabled={isSubmitting}
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;