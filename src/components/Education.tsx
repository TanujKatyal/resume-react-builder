import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const Education = () => {
  const education = {
    degree: "Bachelor of Technology - Computer Science Engineering",
    institution: "Vellore Institute of Technology",
    location: "Vellore, India",
    duration: "July 2021 - July 2025",
    cgpa: "8.91",
    status: "Present"
  };

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Maintained CGPA of 8.91 throughout the program",
      icon: Award
    },
    {
      title: "Research Publications",
      description: "Published papers in IEEE and other conferences",
      icon: BookOpen
    },
    {
      title: "Technical Leadership",
      description: "Led multiple technical projects and research initiatives",
      icon: GraduationCap
    }
  ];

  const certifications = [
    "Microsoft Azure AI-900: AI Fundamentals",
    "The Web Developer Bootcamp 2024",
    "Introduction to MongoDB",
    "AWS Cloud Practitioner (In Progress)"
  ];

  const relevantCoursework = [
    "Data Structures & Algorithms",
    "Object Oriented Programming",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Software Engineering",
    "Machine Learning",
    "Distributed Systems",
    "Cloud Computing",
    "Cybersecurity"
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education & Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strong academic foundation with continuous learning and professional development
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Main Education */}
          <Card className="hover:shadow-elegant transition-all duration-300 border-primary/20">
            <CardHeader>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2 text-foreground flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    {education.degree}
                  </CardTitle>
                  <h3 className="text-xl font-semibold text-primary mb-2">{education.institution}</h3>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {education.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      📍 {education.location}
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {education.status}
                    </Badge>
                  </div>
                </div>
                <div className="text-center lg:text-right">
                  <div className="text-4xl font-bold text-primary">{education.cgpa}</div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Achievements */}
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:scale-105 border-primary/20 text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full w-fit">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coursework and Certifications */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Relevant Coursework */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Relevant Coursework
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {relevantCoursework.map((course, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="text-xs justify-start hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Continuous Learning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Always eager to learn new technologies and methodologies. Currently exploring advanced topics in 
                  AI/ML, cloud-native development, and distributed systems architecture.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;