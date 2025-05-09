
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 relative overflow-hidden">
      {/* Background data visualization elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 left-1/4 w-12 h-12 rounded-full border border-blue-400"></div>
        <div className="absolute bottom-8 left-1/3 w-16 h-16 rounded-full border border-primary"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full border border-primary"></div>
        <div className="absolute bottom-4 right-1/3 w-8 h-8 rounded-full border border-blue-400"></div>
        <div className="bg-grid-secondary absolute inset-0 z-0"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side */}
          <div>
            <p className="text-sm font-medium">Designed and Developed with 🖤</p>
          </div>
          
          {/* Middle - Social links */}
          <div className="flex space-x-6">
            <a href="https://github.com/manishsarmaa" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://x.com/manishsarmaa" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/manishsarmaa/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          {/* Right side */}
          <div>
            <p className="text-sm font-medium">© {currentYear} Manish Sharma</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
