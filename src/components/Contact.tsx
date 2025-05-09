
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 relative">
      {/* Background data-driven visualization elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/5 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-blue-500/5 blur-xl"></div>
        <div className="hidden md:block absolute top-1/3 right-1/4 w-16 h-16 border border-primary/20 rounded-full"></div>
        <div className="hidden md:block absolute bottom-1/4 left-1/3 w-24 h-24 border border-blue-400/20 rounded-full"></div>
      </div>

      <div className="section-container relative z-10">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-md animate-fade-in bg-gradient-to-br from-card to-secondary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <a href="mailto:maniishsarmaa@gmail.com" aria-label="Email" className="hover:text-primary transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </a>
                  <span>maniishsarmaa@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://www.linkedin.com/in/manish-sharma-655499251/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </a>
                  <span>LinkedIn</span>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/manishsarmaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
                    <Github className="h-6 w-6 text-primary" />
                  </a>
                  <span>GitHub</span>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary transition-colors">
                    <Twitter className="h-6 w-6 text-primary" />
                  </a>
                  <span>Twitter</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-2">Open to:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Data analysis opportunities</li>
                  <li>Analytics projects</li>
                  <li>Remote collaboration</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md animate-fade-in bg-gradient-to-br from-card to-secondary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" className="bg-background/50 backdrop-blur-sm" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" className="bg-background/50 backdrop-blur-sm" />
                </div>
                <div>
                  <Input placeholder="Subject" className="bg-background/50 backdrop-blur-sm" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="min-h-32 bg-background/50 backdrop-blur-sm" />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary/80 to-blue-500/80 hover:from-primary hover:to-blue-500 transition-all duration-300">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
