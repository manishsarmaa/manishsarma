
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
      title: "Indian Startup Analysis Dashboard",
      description: "Analyzed Indian startup ecosystem data to uncover funding trends, investor activity, and sector performance. Developed an interactive Power BI dashboard with time-based filters to track investment trends, startup distribution by city, and success vs failure rates.",
      image: "/startup.pmg",
      tools: ["Excel", "Power BI", "DAX"],
      link: "https://github.com/manishsarmaa/India_Startup_powerbi"
    },
    {
      id: 2,
      title: "Crime Analysis In LA",
      description: "Conducted time-series analysis of Los Angeles crime data to examine shifts in crime patterns before, during, and after COVID-19. Used Pandas, NumPy, and Seaborn for trend analysis; implemented geographic heatmaps with Folium to visualize location-based crime intensity.",
      image: "/crime.png",
      tools: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
      link: "https://github.com/manishsarmaa/LA_crime"
    },
    {
      id: 3,
      title: "NIfty 50 Dashborad",
      description: "Designed an interactive Tableau dashboard to analyze Nifty 50 stock performance, providing insights into key financial metrics and market trends. Used ETL processes with Pandas and NumPy to clean and prepare market data for visualization.",
      image: "/stock.png",
      tools: ["SQL", "Power BI", "Python", "Excel"],
      link: "https://github.com/manishsarmaa/nifty50stock-anlaysis"
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
