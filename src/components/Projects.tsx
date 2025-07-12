import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Secure Scalable Collaborative Code Editor",
      description: "A web-based collaborative code editor for real-time coding with up to 50 users. Features comprehensive user and session management with JWT-SSL integration.",
      duration: "May 2025 - July 2025",
      technologies: ["React", "Node.js", "Socket.io", "JWT", "SSL", "Real-time Collaboration"],
      features: [
        "Real-time collaborative editing for up to 50 users",
        "Secure JWT-SSL authentication and session management",
        "Multi-language syntax highlighting and code execution",
        "Integrated chat and video calling features"
      ],
      status: "In Development",
      githuburl: "https://github.com/TanujKatyal/Codewith"
    },
    {
      title: "Custom C-like Language Compiler with Embedded Database",
      description: "Built a complete compiler for a C-like language with custom tokenizer, parser, and embedded database support for variable declarations and management.",
      duration: "Feb 2025 - May 2025",
      technologies: ["C++", "Compiler Design", "Database Management", "Parsing", "Tokenization"],
      features: [
        "Custom lexical analyzer and tokenizer",
        "Recursive descent parser implementation",
        "Embedded database for variable management",
        "Error handling and optimization features"
      ],
      status: "Completed",
      githuburl: "https://github.com/TanujKatyal/Compiler-Construction"
    },
    {
      title: "Traveling Salesman Problem - Parallel Processing",
      description: "Implemented genetic algorithm approach to the Traveling Salesman Problem, comparing serial and parallel executions using MapReduce for performance optimization.",
      duration: "Nov 2024 - Dec 2024",
      technologies: ["Python", "Genetic Algorithm", "MapReduce", "Parallel Processing", "Performance Optimization"],
      features: [
        "Genetic algorithm implementation for TSP optimization",
        "MapReduce framework for parallel processing",
        "Performance comparison between serial and parallel execution",
        "Visualization of solution paths and convergence"
      ],
      status: "Completed",
      githuburl: "https://github.com/TanujKatyal/TSP-using-genetics-algorithm"
    },
    {
      title: "Intrusion Detection and Mitigation Framework",
      description: "Developed a multi-level IoT security framework utilizing LSTM and GRU deep learning models achieving 98% detection accuracy on encrypted traffic.",
      duration: "Aug 2024 - Jan 2025",
      technologies: ["Python", "LSTM", "GRU", "IoT Security", "Deep Learning", "Encryption"],
      features: [
        "98% detection accuracy on encrypted IoT traffic",
        "Integrated SON NFV for mitigation at 40 Gbps",
        "Real-time threat detection and response",
        "Advanced machine learning model optimization"
      ],
      status: "Patent Published",
      githuburl: ""
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-500/20 text-green-700 border-green-500/30";
      case "In Development": return "bg-blue-500/20 text-blue-700 border-blue-500/30";
      case "Patent Published": return "bg-purple-500/20 text-purple-700 border-purple-500/30";
      default: return "bg-gray-500/20 text-gray-700 border-gray-500/30";
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions spanning web development, system design, and research
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] border-primary/20 h-full">
              <CardHeader>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <CardTitle className="text-xl leading-tight text-foreground">{project.title}</CardTitle>
                  <Badge className={`${getStatusColor(project.status)} shrink-0`}>
                    {project.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  {project.duration}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
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

                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary text-primary hover:bg-primary/10"
                    onClick={() => window.open(project.githuburl, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => window.open("https://github.com/TanujKatyal", "_blank")}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;