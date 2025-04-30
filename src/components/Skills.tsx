
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
    <section id="skills" className="py-16">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-md animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl text-center">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {technicalSkills.map(skill => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.proficiency}%</span>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl text-center">Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map(skill => (
                  <div 
                    key={skill} 
                    className="flex items-center justify-center p-4 bg-secondary rounded-lg"
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
