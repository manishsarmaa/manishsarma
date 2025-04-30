
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
  const projects = [
    {
      id: 1,
      title: "Sales Data Analysis",
      description: "Analyzed 5 years of retail sales data to identify seasonal trends and customer buying patterns. Created a Power BI dashboard for real-time sales monitoring.",
      image: "/placeholder.svg",
      tools: ["Excel", "Power BI", "SQL"],
      link: "#"
    },
    {
      id: 2,
      title: "Customer Segmentation",
      description: "Used Python to perform customer segmentation based on purchasing behavior. Created visualizations to help marketing team target specific customer groups.",
      image: "/placeholder.svg",
      tools: ["Python", "Pandas", "Matplotlib"],
      link: "#"
    },
    {
      id: 3,
      title: "Inventory Management Dashboard",
      description: "Developed an inventory tracking system using SQL and Power BI that reduced stockouts by 15% and improved inventory turnover.",
      image: "/placeholder.svg",
      tools: ["SQL", "Power BI", "DAX"],
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
            Want to see more of my work? Check out my full project repository.
          </p>
          <Button variant="outline" asChild>
            <a href="#" className="flex items-center gap-2">
              <span>See All Projects</span>
              <ExternalLink size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
