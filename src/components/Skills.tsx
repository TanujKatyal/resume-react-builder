import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages & Frameworks",
      skills: [
        "JavaScript", "TypeScript", "Python", "Java", "C++", "C",
        "React", "Node.js", "Express", "Socket.io", "Frappe"
      ]
    },
    {
      icon: Database,
      title: "Databases & Storage",
      skills: [
        "MySQL", "MongoDB", "SQLplus", "LangChain"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        "AWS", "Docker", "Proxmox", "Git/GitHub", "Wireshark"
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: [
        "Postman", "Arduino IDE", "ERP/Next", "Arduino"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:scale-105 border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full w-fit">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Core Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Full Stack Development", "React.js", "Node.js", "Python", 
              "AWS Cloud", "Database Design", "API Development", "DevOps"
            ].map((skill, index) => (
              <Badge 
                key={index} 
                className="px-6 py-2 text-sm bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;