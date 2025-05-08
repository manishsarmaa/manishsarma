
import React from 'react';
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: 'Excel', proficiency: 90 },
    { name: 'Power BI', proficiency: 85 },
    { name: 'SQL', proficiency: 80 },
    { name: 'Python', proficiency: 75 },
    { name: 'Data Cleaning', proficiency: 85 },
    { name: 'Data Visualization', proficiency: 90 }
  ];
  
  const softSkills = [
    'Problem Solving',
    'Critical Thinking',
    'Communication',
    'Attention to Detail',
    'Adaptability',
    'Teamwork'
  ];
  
  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-md animate-fade-in border border-blue-100 dark:border-blue-900/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
            <CardHeader className="relative z-10">
              <CardTitle className="text-xl text-center">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className="space-y-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.proficiency}%</span>
                    </div>
                    <Progress 
                      value={skill.proficiency} 
                      className="h-2 bg-blue-100 dark:bg-blue-900/30" 
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md animate-fade-in border border-purple-100 dark:border-purple-900/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
            <CardHeader className="relative z-10">
              <CardTitle className="text-xl text-center">Soft Skills</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={skill} 
                    className="flex items-center justify-center p-4 bg-secondary rounded-lg border border-transparent hover:border-primary/20 transition-all hover:shadow-md"
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
