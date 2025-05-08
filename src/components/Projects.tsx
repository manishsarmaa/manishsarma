
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
import { ExternalLink, Image as ImageIcon } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  // Featured projects to display in the carousel
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        {/* Featured Projects Carousel */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center">Featured Work</h3>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {featuredProjects.map(project => (
                <CarouselItem key={`featured-${project.id}`}>
                  <div className="p-1">
                    <Card className="overflow-hidden border-0 shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 aspect-video flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                          {project.image ? (
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="flex flex-col items-center justify-center h-full text-gray-400">
                              <ImageIcon className="h-16 w-16 mb-2" />
                              <span>Project Image</span>
                            </div>
                          )}
                        </div>
                        <div className="md:w-1/2 p-6 flex flex-col">
                          <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tools.map(tool => (
                              <Badge key={tool} variant="secondary">{tool}</Badge>
                            ))}
                          </div>
                          <CardDescription className="text-base flex-grow">
                            {project.description}
                          </CardDescription>
                          <Button variant="default" asChild className="mt-4">
                            <a href={project.link} className="flex items-center justify-center gap-2">
                              <span>View Project</span>
                              <ExternalLink size={16} />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static xl:absolute" />
              <CarouselNext className="relative static xl:absolute" />
            </div>
          </Carousel>
        </div>
        
        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <Card key={project.id} className="shadow-md overflow-hidden flex flex-col animate-fade-in transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-video overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full bg-gray-100 dark:bg-gray-700 text-gray-400">
                    <ImageIcon className="h-10 w-10 mb-2" />
                    <span>Project Image</span>
                  </div>
                )}
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
                <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
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
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to see more of my work? Contact me for additional project examples.
          </p>
          <Button variant="outline" asChild className="shadow-sm transition-all hover:scale-105">
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
