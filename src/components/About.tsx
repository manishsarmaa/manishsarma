
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
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm Manish Sharma, a data analyst passionate about transforming complex datasets into actionable business insights. With a strong foundation in Computer Science and Engineering, I combine analytical thinking with practical experience to deliver impactful data-driven solutions. My technical expertise spans Python (Pandas, NumPy, Matplotlib), SQL database management, and visualization tools like Tableau and Power BI, enabling me to clean large datasets and develop interactive dashboards that support strategic decision-making.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">  
                My professional journey includes hands-on experience with real-time data analysis projects and freelance work where I've consistently delivered actionable insights for diverse clients. My portfolio showcases projects like the Nifty 50 Stock Analysis Dashboard featuring interactive technical indicators and candlestick patterns, and the Startup Growth in India analysis with dynamic investor tracking and sector-wise performance metrics. These projects demonstrate my ability to identify meaningful patterns within data and present them as clear visual narratives.
              </p>
              <p className="text-gray-600 dark:text-gray-300">  
                Beyond technical skills, I excel in cross-functional collaboration, project management, and maintain a commitment to continuous learning through certifications in Data Analysis and SQL programming. I thrive on the challenge of extracting meaningful patterns from data chaos and using those insights to create tangible business impact. I'm currently seeking opportunities to leverage my analytical skills in a dynamic environment where data drives innovation and decision-making. Let's connect and explore how my data expertise can help solve your business challenges.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
