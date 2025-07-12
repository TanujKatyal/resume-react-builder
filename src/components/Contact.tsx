import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tanujkatyal123@gmail.com",
      href: "mailto:tanujkatyal123@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9067628520",
      href: "tel:+919067628520"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vellore, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/TanujKatyal",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/tanujkatyal",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project or discuss opportunities? Let's connect!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Start a Conversation</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, collaborating on interesting projects, 
                or simply connecting with fellow developers and tech enthusiasts. Whether you have a 
                project in mind, want to explore potential collaborations, or just want to chat about technology, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                    <contact.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{contact.label}</div>
                    <div className="text-muted-foreground">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Connect on Social</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 border border-primary/20 rounded-full hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:scale-110 transform ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-primary/20 hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john.doe@example.com"
                  className="border-primary/20 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="Project Collaboration"
                  className="border-primary/20 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  className="border-primary/20 focus:border-primary"
                />
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 transform hover:scale-[1.02]"
                size="lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Looking for a Developer?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm currently seeking full-time software engineering opportunities and am available for 
                freelance projects. Let's discuss how I can contribute to your team or project.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300"
              >
                Schedule a Call
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;