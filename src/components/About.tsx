
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg animate-fade-in border-0 overflow-hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-30 dark:opacity-20"></div>
            <CardContent className="p-6 md:p-8 relative z-10">
              <h3 className="text-xl font-bold mb-4 gradient-text">Manish Sharma</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm an aspiring Data Analyst with a strong foundation in Excel, Power BI, SQL, and Python—tools I use to turn raw data into clear, actionable insights. With a Bachelor's degree in Computer Engineering, I discovered my passion for data analysis while exploring patterns, trends, and stories hidden in numbers.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">  
                Though I haven't worked in a formal corporate setting yet, I've completed multiple business-focused data projects, which you'll find in my portfolio below. Each one showcases my ability to solve real-world problems through data, whether it's cleaning datasets, building dashboards, or drawing strategic conclusions.
              </p>
              <p className="text-gray-600 dark:text-gray-300">  
                I'm now looking to bring my skills, curiosity, and problem-solving mindset into a dynamic team where I can grow and make a real impact through data.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
