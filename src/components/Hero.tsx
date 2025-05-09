import React from 'react';
import { Button } from "@/components/ui/button";
import { FileDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-grid-primary dark:bg-grid-primary [mask-image:linear-gradient(0deg,transparent,black)]" />
        </div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400/30 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-yellow-300/20 rounded-full filter blur-3xl opacity-30 animate-pulse hidden dark:hidden sm:block"></div>
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-green-300/20 rounded-full filter blur-3xl opacity-20 animate-pulse hidden dark:hidden sm:block"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 text-left">
          {/* LEFT SIDE: Text */}
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 animate-fade-in">
              <span>Manish Sharma</span>
              <span className="block gradient-text mt-2">Data Analyst</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl animate-fade-in">
              Welcome to my portfolio showcasing how I transform raw data into meaningful business insights with Excel, Tableau, Power BI, SQL, and Python.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in">
              <Button onClick={scrollToProjects} size="lg" className="shadow-lg transition-all hover:scale-105 bg-gradient-light dark:bg-primary">
                View My Projects
              </Button>
              <Button variant="outline" size="lg" asChild className="shadow-sm transition-all hover:scale-105">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="secondary" size="lg" className="shadow-lg transition-all hover:scale-105 flex gap-2" asChild>
                <a href="https://drive.google.com/file/d/1Gv6YkQuitYzm3jwnhMFCsbDYlTGZolfa/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <FileDown className="h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE: Avatar */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <Avatar className="h-65 w-48 rounded-full border-4 border-primary/50 shadow-lg">
              <AvatarImage src="/avatar.jpg" alt="Manish Sharma" />
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl">MS</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
