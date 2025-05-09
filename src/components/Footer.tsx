
import React from 'react';
import { Mail, Linkedin, Github, FileDown } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold gradient-text">Manish Portfolio</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="mailto:maniishsarmaa@gmail.com" className="hover:text-primary transition-colors" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/manish-sharma-655499251/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/manishsarmaa" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://drive.google.com/file/d/your-resume-file-id/view" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Resume">
              <FileDown className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {currentYear} Manish Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
