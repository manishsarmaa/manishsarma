
import React from 'react';
import { Button } from "@/components/ui/button";

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
          <div className="absolute inset-0 bg-grid-primary/[0.2] [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-secondary/[0.2]" />
        </div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 animate-fade-in">
            <span className="block"> Hii, I'm Manish Sharma👋</span>
            <span className="block gradient-text mt-2">Data Analyst </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300 animate-fade-in">
            Welcome to my portfolio showcasing how I transform raw data into meaningful business insights with Excel, Tableau, Power BI, SQL, and Python.
          </p>
          <div className="mt-10 flex justify-center gap-4 animate-fade-in">
            <Button onClick={scrollToProjects} size="lg" className="shadow-lg transition-all hover:scale-105">
              View My Projects
            </Button>
            <Button variant="outline" size="lg" asChild className="shadow-sm transition-all hover:scale-105">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
