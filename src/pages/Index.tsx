import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Hi, I'm <span className="text-blue-600">Igasubiza Vainqueur</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-600 mb-6">
                Software Developer
              </h2>
              <p className="text-slate-600 mb-8 text-lg">
                Full-stack developer passionate about creating innovative digital solutions with clean, efficient code.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="/contact">Hire Me</Link>
                </Button>
                <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                  <Link to="/projects">View Projects</Link>
                </Button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-slate-600">
                  <Mail className="w-5 h-5 mr-2 text-blue-500" />
                  <span>igasubizavainqueurfilosemaximi@gmail.com</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Phone className="w-5 h-5 mr-2 text-blue-500" />
                  <span>+250 796 018 772</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                  <span>Musanze, Rwanda</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 shadow-xl">
                <div className="aspect-square bg-blue-100 rounded-xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-blue-300">
                    <svg className="w-3/4 h-3/4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-md border border-slate-100">
                <span className="text-sm font-medium text-slate-700">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">My Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Technical Skills</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-slate-700 mb-2">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Dart', 'JavaScript', 'Python'].map((lang) => (
                        <span key={lang} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-700 mb-2">Frameworks & Libraries</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Flutter', 'React', 'Laravel', 'Node.js'].map((framework) => (
                        <span key={framework} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                          {framework}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-700 mb-2">Databases</h4>
                    <div className="flex flex-wrap gap-2">
                      {['MySQL', 'Firebase', 'SQLite'].map((db) => (
                        <span key={db} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                          {db}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Professional Skills</h3>
                <ul className="space-y-3">
                  {[
                    'Building APIs (Application Programming Interfaces)',
                    'Database design & management',
                    'Writing system documentation & project reports',
                    'Software testing & debugging',
                    'Using Git & GitHub for code management',
                    'IT support & system maintenance',
                    'Developing websites and web applications with design and database'
                  ].map((skill, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">My Projects</h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Projects Coming Soon</h3>
              <p className="text-slate-500 max-w-md mx-auto">I'm currently working on some exciting projects. Check back later to see my work!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5">
                  Send Message
                </Button>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Email me at</p>
                      <a href="mailto:igasubizavainqueurfilosemaximi@gmail.com" className="font-medium text-slate-800 hover:text-blue-600">
                        igasubizavainqueurfilosemaximi@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Call me at</p>
                      <a href="tel:+250796018772" className="font-medium text-slate-800 hover:text-blue-600">
                        +250 796 018 772
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">IV.Dev</h3>
              <p className="text-slate-500 text-sm mt-1">Creating innovative digital solutions</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.146 20.115 22 16.379 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-100 text-center text-sm text-slate-500">
            <p>© 2024 Igasubiza Vainqueur. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;