
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
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            <span className="block">Data Analyst Portfolio</span>
            <span className="block gradient-text mt-2">Turning Data into Insights</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Welcome to my portfolio showcasing how I transform raw data into meaningful business insights with Excel, Power BI, SQL, and Python.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button onClick={scrollToProjects} size="lg">
              View My Projects
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
