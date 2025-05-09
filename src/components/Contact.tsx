
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, FileDown, Link as LinkIcon } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-md animate-fade-in">
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
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/manishsarmaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
                    <Github className="h-6 w-6 text-primary" />
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://drive.google.com/file/d/your-resume-file-id/view" target="_blank" rel="noopener noreferrer" aria-label="Resume" className="hover:text-primary transition-colors">
                    <LinkIcon className="h-6 w-6 text-primary" />
                  </a>
                  <span>View Resume on Drive</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-2">Open to:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Full-time opportunities</li>
                  <li>Freelance projects</li>
                  <li>Remote collaboration</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md animate-fade-in">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Input placeholder="Subject" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="min-h-32" />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
