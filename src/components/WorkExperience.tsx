
import React from 'react';
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription 
} from "@/components/ui/card";
import { Briefcase } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      title: 'Data Analyst',
      company: 'Upwork',
      period: 'Nov 2024 - Present',
      description: 'Analyzed complex datasets to identify trends and patterns. Created interactive dashboards using Power BI,Tableau to visualize key metrics. Performed statistical analysis to derive actionable insights.',
      skills: ['SQL', 'Power BI', 'Excel', 'Data Cleaning', 'Python', 'Tableau']
    },
    {
      title: 'Data Analyst Intern',
      company: 'Ekaantik Software Solution',
      period: 'Jan 2025 - Present',
      description: 'Supported data collection and organization. Learned and applied data analysis techniques. Helped in creating basic visualizations of business metrics.',
      skills: ['Excel', 'Tableau', 'Data Cleaning','Data Visual', 'EDA']
    },
    ];

  return (
    <section id="experience" className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="section-container">
        <h2 className="section-title flex items-center justify-center gap-2">
          <Briefcase className="h-8 w-8 text-primary animate-pulse" />
          <span>Work Experience</span>
        </h2>
        
        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute top-2 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-primary to-primary/30 transform -translate-x-1/2 hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row gap-6 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="hidden md:flex md:justify-center md:items-start md:pt-6 flex-1">
                <div className="text-right font-medium text-gray-600 dark:text-gray-300">
                  {exp.period}
                </div>
              </div>
              
              <div className="relative flex justify-center md:block z-10">
                <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg relative">
                  <Briefcase className="h-6 w-6" />
                </div>
              </div>
              
              <div className="flex-1">
                <Card className="shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden transform transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <div className="md:hidden text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      {exp.period}
                    </div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription className="text-primary font-medium">{exp.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="bg-secondary px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
