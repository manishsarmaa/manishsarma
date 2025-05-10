
import React from 'react';
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Briefcase } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Excel', proficiency: 75 },
    { name: 'Power BI', proficiency: 85 },
    { name: 'SQL', proficiency: 90 },
    { name: 'Python', proficiency: 75 },
    { name: 'Tableau', proficiency: 80 },
    { name: 'Data Cleaning', proficiency: 85 },
    { name: 'Data Visualization', proficiency: 90 }
  ];
  
  const softSkills = [
    'Problem Solving',
    'Critical Thinking',
    'Communication',
    'Attention to Detail',
    'Adaptability',
    'Teamwork',
    'Leadership',
    'Time Management',
    'Project Management',
    'Analytical Thinking',
    'Decision Making',
    'Creativity'
  ];
  
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900 scroll-reveal">
      <div className="section-container">
        <h2 className="section-title flex items-center justify-center gap-2">
          <Briefcase className="h-8 w-8 text-primary animate-pulse" />
          <span>Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-md animate-fade-in border">
            <CardHeader>
              <CardTitle className="text-xl text-center">Technical Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className="space-y-2 transition-all duration-300 hover:translate-x-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.proficiency}%</span>
                    </div>
                    <Progress 
                      value={skill.proficiency} 
                      className="h-2 bg-gray-100 dark:bg-gray-800" 
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md animate-fade-in border">
            <CardHeader>
              <CardTitle className="text-xl text-center">Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={skill} 
                    className="flex items-center justify-center p-4 bg-secondary rounded-lg border border-transparent hover:border-primary/20 transition-all hover:shadow-md hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="font-medium text-center">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
