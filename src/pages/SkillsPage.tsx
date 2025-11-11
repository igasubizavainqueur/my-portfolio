import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Code, Cpu, Database, GitBranch, LayoutGrid, Smartphone, Server } from "lucide-react";

const SkillsPage = () => {
  const technicalSkills = [
    { name: 'Dart', icon: <Code className="w-5 h-5" />, level: 'Advanced' },
    { name: 'JavaScript', icon: <Code className="w-5 h-5" />, level: 'Advanced' },
    { name: 'Python', icon: <Code className="w-5 h-5" />, level: 'Intermediate' },
    { name: 'Flutter', icon: <Smartphone className="w-5 h-5" />, level: 'Advanced' },
    { name: 'React', icon: <LayoutGrid className="w-5 h-5" />, level: 'Advanced' },
    { name: 'Node.js', icon: <Cpu className="w-5 h-5" />, level: 'Intermediate' },
    { name: 'Laravel', icon: <Server className="w-5 h-5" />, level: 'Intermediate' },
    { name: 'MySQL', icon: <Database className="w-5 h-5" />, level: 'Intermediate' },
    { name: 'Firebase', icon: <Database className="w-5 h-5" />, level: 'Intermediate' },
    { name: 'Git', icon: <GitBranch className="w-5 h-5" />, level: 'Intermediate' },
  ];

  const professionalSkills = [
    'Building APIs (Application Programming Interfaces)',
    'Database design & management',
    'Writing system documentation & project reports',
    'Software testing & debugging',
    'Using Git & GitHub for code management',
    'IT support & system maintenance',
    'Developing websites and web applications with design and database'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">My Skills</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A showcase of my technical expertise and professional skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Technical Skills */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Code className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Technical Skills</h2>
              </div>
              
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="text-blue-500">{skill.icon}</div>
                        <span className="font-medium text-slate-800">{skill.name}</span>
                      </div>
                      <span className="text-sm text-slate-500">{skill.level}</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          skill.level === 'Advanced' ? 'bg-blue-600 w-5/6' : 
                          skill.level === 'Intermediate' ? 'bg-blue-500 w-2/3' : 
                          'bg-blue-400 w-1/2'
                        }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Skills */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Professional Skills</h2>
              </div>
              
              <ul className="space-y-4">
                {professionalSkills.map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-slate-600">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SkillsPage;
