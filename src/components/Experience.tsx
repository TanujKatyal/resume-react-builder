import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Brillopedia Technologies",
      location: "Hyderabad, India",
      duration: "May 2024 - July 2024",
      type: "Internship",
      responsibilities: [
        "Developed Proxmox VE on a physical server with 6 RVM VMs and 2 LXC containers",
        "Engineered Virtualization utilizing OPNsense Firewalls implementing SaaS, Frappe, MariaDB integrations reducing configuration time by 90%",
        "Optimized Development processes and Integrated a German LLM-based chatbot using an API key, LangChain, and custom documentation, increasing user engagement by 40% and query resolution efficiency by 35%",
        "Monitoring and Logging: Engineered performance monitoring with average response under 300 ms; tested 150 custom APIs for reliability"
      ],
      technologies: ["Proxmox", "LangChain", "API Development", "System Monitoring", "Virtualization"]
    },
    {
      title: "Web Developer Intern",
      company: "Basil Drugs & Pharmaceuticals",
      location: "Mumbai, India",
      duration: "June 2024 - July 2024",
      type: "Internship",
      responsibilities: [
        "Built and deployed applications using Node and React, increasing load speed by 40%",
        "SEO and Performance: Improved server-side rendering and metadata, boosting load speed by 30% and SEO by 40%",
        "Real-Time Communication: Set up live communication portals with WebSocket",
        "Security and Speed: Reduced response time by 35% with SSL, TLS and smart caching"
      ],
      technologies: ["Node.js", "React", "WebSocket", "SEO", "SSL/TLS", "Performance Optimization"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-on experience in software development, system optimization, and full-stack web development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 border-primary/20">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 text-foreground flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <h3 className="text-lg font-semibold text-primary mb-2">{exp.company}</h3>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Responsibilities & Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="text-xs hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Looking for Opportunities</h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently seeking full-time software engineering roles where I can apply my skills in 
                full-stack development, system design, and emerging technologies to create impactful solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;