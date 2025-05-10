
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };
    
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    const animatedSections = document.querySelectorAll('.scroll-reveal');
    animatedSections.forEach(item => {
      item.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(item);
    });
    
    return () => {
      animatedSections.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-radial">
      {/* Light theme decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/20 rounded-full filter blur-3xl opacity-30 animate-float hidden dark:hidden"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-green-200/20 rounded-full filter blur-3xl opacity-20 animate-float hidden dark:hidden"></div>
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-yellow-200/20 rounded-full filter blur-3xl opacity-25 animate-float hidden dark:hidden"></div>
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
