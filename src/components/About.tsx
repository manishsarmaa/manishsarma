
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800 scroll-reveal">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg animate-fade-in">
            <CardContent className="p-6 md:p-8">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm Manish Sharma, a data analyst transforming complex datasets into actionable business insights. With a background in Computer Science and strong technical skills in Python, SQL, and visualization tools (Tableau, Power BI), I specialize in cleaning data and building interactive dashboards that drive strategic decisions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">  
                My portfolio features the Nifty 50 Stock Analysis Dashboard with technical indicators and candlestick patterns, and a Startup Growth analysis tracking investor performance across sectors. Through these projects and my freelance work, I've developed expertise in extracting meaningful patterns from raw data and presenting clear visual narratives.
              </p>
              <p className="text-gray-600 dark:text-gray-300">  
                I combine technical proficiency with effective collaboration and project management skills, continuously expanding my capabilities through certifications in Data Analysis and SQL. I'm seeking opportunities in dynamic environments where I can apply my analytical mindset to solve complex business challenges through data-driven innovation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
