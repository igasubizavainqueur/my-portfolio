import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Download, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  // This ensures the theme state is synced across all pages
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme || 'light');
  }, [theme]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-100 dark:border-slate-800 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          IV.Dev
        </Link>
        
        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <div className="relative group">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-blue-600 dark:to-cyan-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
              aria-label="Hindura ibara ry'urubuga"
              title="Hindura ibara ry'urubuga"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Hindura ibara
            </span>
          </div>
        <div className="hidden md:flex items-center space-x-1 bg-slate-50 dark:bg-slate-800 rounded-lg px-2 py-1">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Skills', path: '/skills' },
            { name: 'Projects', path: '/projects' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <Button 
              key={item.path}
              asChild 
              variant="ghost"
              className="rounded-lg hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-700 dark:hover:text-white transition-colors duration-200"
            >
              <Link to={item.path} className="capitalize px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600">
                {item.name}
              </Link>
            </Button>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            asChild
            className="ml-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
