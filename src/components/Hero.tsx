
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
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden scroll-reveal">
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
              <span className="transition-colors duration-300 hover:text-primary">Manish Sharma</span>
              <span className="block gradient-text mt-2 transition-all duration-300 hover:scale-105">Data Analyst</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl animate-fade-in transition-colors duration-300 hover:text-primary/80">
              Welcome to my portfolio showcasing how I transform raw data into meaningful business insights with Excel, Tableau, Power BI, SQL, and Python.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in">
              <Button size="lg" asChild className="shadow-lg transition-all hover:scale-110 hover:shadow-xl bg-gradient-light dark:bg-primary group relative overflow-hidden hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black">
                <a href="https://www.upwork.com/freelancers/~0126ec4c395a39f793" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <span className="z-10 relative transition-transform group-hover:translate-x-1">Hire Me</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity transform -skew-x-12 -z-0"></span>
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="shadow-sm transition-all hover:scale-105 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="secondary" size="lg" className="shadow-lg transition-all hover:scale-105 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black flex gap-2" asChild>
                <a href="https://drive.google.com/file/d/1Gv6YkQuitYzm3jwnhMFCsbDYlTGZolfa/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <FileDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                  <span className="transition-colors">Download Resume</span>
                </a>
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE: Avatar */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="relative group transition-transform hover:scale-105 duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-400 rounded-full opacity-75 blur-sm group-hover:opacity-100 transition duration-300"></div>
              <Avatar className="h-56 w-56 sm:h-64 sm:w-64 rounded-full border-4 border-primary/50 shadow-lg relative">
                <AvatarImage src="/avatar.jpg" alt="Manish Sharma" className="object-cover" />
                <AvatarFallback className="bg-primary text-primary-foreground text-4xl">MS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      {/* Light theme decoration - floating bubbles */}
      <div className="floating-bubble bubble-1 hidden dark:hidden"></div>
      <div className="floating-bubble bubble-2 hidden dark:hidden"></div>
      <div className="floating-bubble bubble-3 hidden dark:hidden"></div>
    </section>
  );
};

export default Hero;
