import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { GraduationCap, Target, Code, BookOpen } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-200">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">About Me</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Learn more about my education, experience, and what drives me as a software developer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 dark:bg-slate-800 p-6 rounded-xl transition-colors duration-200">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Education</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Level 5 in Software Development (L5SOD) from CSAMZ TSS (2025–2026) under Rwanda TVET Board (RTB)
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-slate-800 p-6 rounded-xl transition-colors duration-200">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Mission</h3>
              <p className="text-slate-600 dark:text-slate-300">
                To create innovative digital solutions that solve real-world problems with clean, efficient code.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-slate-800 p-6 rounded-xl transition-colors duration-200">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Expertise</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Full-stack development with expertise in Flutter, React, Node.js, and modern web technologies.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm transition-colors duration-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Career Goal</h2>
            </div>
            <blockquote className="text-lg text-slate-700 dark:text-slate-300 italic border-l-4 border-blue-500 pl-6 py-2">
              "To become a full-stack developer who creates innovative digital solutions that make a positive impact on people's lives."
            </blockquote>
            <div className="mt-6">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
