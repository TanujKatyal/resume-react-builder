import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Award, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech in Computer Science Engineering at VIT with CGPA 8.91"
    },
    {
      icon: Code,
      title: "Experience",
      description: "Software Development Intern with hands-on experience in full-stack development"
    },
    {
      icon: Award,
      title: "Research",
      description: "Published research papers and IEEE publications in technology"
    },
    {
      icon: Target,
      title: "Focus",
      description: "Specialized in web development, DevOps, and scalable system design"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate Computer Science student with a strong foundation in software development 
            and a keen interest in emerging technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Tanuj Katyal, a final-year Computer Science Engineering student at Vellore Institute of Technology 
              with a CGPA of 8.91. I have a strong passion for software development, particularly in web technologies 
              and system design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech has led me to work on diverse projects ranging from collaborative code editors 
              to intrusion detection systems. I enjoy solving complex problems and building scalable solutions 
              that make a real impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently exploring advanced topics in AI/ML, distributed systems, and cloud computing while 
              contributing to open-source projects and publishing research papers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:scale-105 border-primary/20">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">8.91</div>
              <div className="text-sm text-muted-foreground">CGPA</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-3xl font-bold text-primary">2+</div>
              <div className="text-sm text-muted-foreground">Years Coding</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;