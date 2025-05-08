
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];
  
  const handleScroll = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-primary">
            <span className="gradient-text">Manish Sharma</span>
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <div className="flex space-x-8 mr-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.href.substring(1))}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === link.href.substring(1) ? 'text-primary' : 'text-foreground/70'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
          <ThemeToggle />
        </div>
        
        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleScroll(link.href.substring(1))}
                    className="px-4 py-2 text-base font-medium transition-colors hover:text-primary"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
