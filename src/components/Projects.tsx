
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  // You can add your projects here
  const projects = [
    {
      id: 1,
      title: "E-commerce Sales Analysis",
      description: "Analyzed 3 years of e-commerce data to identify customer buying patterns and seasonal trends. Created interactive Power BI dashboard for monitoring KPIs and sales performance.",
      image: "/placeholder.svg",
      tools: ["Excel", "Power BI", "SQL"],
      link: "#"
    },
    {
      id: 2,
      title: "Customer Segmentation Analysis",
      description: "Implemented RFM analysis and K-means clustering to segment customers based on purchasing behavior. Created visualizations to help marketing team target specific customer groups efficiently.",
      image: "/placeholder.svg",
      tools: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
      link: "#"
    },
    {
      id: 3,
      title: "Supply Chain Optimization",
      description: "Built a predictive model to forecast inventory needs and optimize order quantities. Reduced stockouts by 18% and improved inventory turnover by analyzing historical data patterns.",
      image: "/placeholder.svg",
      tools: ["SQL", "Power BI", "Python", "Excel"],
      link: "#"
    },
    {
      id: 4,
      title: "HR Analytics Dashboard",
      description: "Developed comprehensive HR analytics dashboard to track employee performance, attrition rates, and department efficiency. Provided actionable insights leading to 15% reduction in turnover.",
      image: "/placeholder.svg",
      tools: ["Power BI", "Excel", "DAX"],
      link: "#"
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <Card key={project.id} className="shadow-md overflow-hidden flex flex-col animate-fade-in">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tools.map(tool => (
                    <Badge key={tool} variant="secondary">{tool}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-sm text-gray-600">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <a href={project.link} className="flex items-center justify-center gap-2">
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Want to see more of my work? Contact me for additional project examples.
          </p>
          <Button variant="outline" asChild>
            <a href="#contact" className="flex items-center gap-2">
              <span>Contact Me</span>
              <ExternalLink size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
