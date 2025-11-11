import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          IV.Dev
        </Link>
        <div className="hidden md:flex items-center space-x-1 bg-slate-50 rounded-lg px-2 py-1">
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
              className="rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
            >
              <Link to={item.path} className="capitalize px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600">
                {item.name}
              </Link>
            </Button>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant="default" 
            className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
