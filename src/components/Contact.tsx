import { MapPin, Phone, Mail, Globe, QrCode, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import qrCode from "@/assets/qr-code.png";
import { GeometricShapes, DataStream, CodeParticles } from "@/components/AnimatedElements";

export const Contact = () => {
  const organizers = [
    {
      name: "Dr. N. Ananthi",
      role: "HOD/IT",
      department: "Head of Department"
    },
    {
      name: "Dr. K. Sundar",
      role: "AP/IT",
      department: "Associate Professor"
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Contact Person",
      value: "Cyril Jude Victor",
      subvalue: "+91 7305157724"
    },
    {
      icon: Globe,
      label: "Website",
      value: "techsaavy.in",
      subvalue: "Official Website"
    },
    {
      icon: Instagram,
      label: "Social Media",
      value: "@techsaavyitcc",
      subvalue: "Follow us for updates"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background Effects */}
      <GeometricShapes />
      <DataStream />
      <CodeParticles />
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-accent/10 blur-2xl animate-float animate-delay-300" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 aurora-text animate-hologram">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-glow-pulse animate-delay-500">
            Ready to join the ultimate coding experience? Here's how to reach us and register.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Location */}
            <Card className="glass-card border-none animate-slide-up hover:animate-tech-pulse transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary animate-hologram">
                  <MapPin className="w-6 h-6 animate-float" />
                  Event Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="font-semibold text-lg animate-glow-pulse">Easwari Engineering College</div>
                <div className="text-muted-foreground animate-matrix-glow">Department of Information Technology</div>
                <div className="text-muted-foreground animate-matrix-glow animate-delay-200">Ramapuram, Chennai</div>
                <div className="text-muted-foreground animate-matrix-glow animate-delay-300">Tamil Nadu, India</div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4 border-primary/50 hover:bg-primary/10 animate-hologram hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('https://maps.google.com/?q=Easwari+Engineering+College+Ramapuram', '_blank')}
                >
                  <MapPin className="w-4 h-4 mr-2 animate-float" />
                  View on Maps
                </Button>
              </CardContent>
            </Card>

            {/* Organizers */}
            <Card className="glass-card border-none animate-slide-up animate-delay-200 hover:animate-tech-pulse transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-secondary animate-hologram">Event Organizers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {organizers.map((organizer, index) => (
                  <div key={index} className={`p-4 rounded-lg bg-muted/30 backdrop-blur-sm animate-glow-pulse animate-delay-${(index + 1) * 200} hover:scale-105 transition-all duration-300`}>
                    <div className="font-semibold text-lg animate-hologram">{organizer.name}</div>
                    <div className="text-sm text-primary animate-matrix-glow">{organizer.role}</div>
                    <div className="text-xs text-muted-foreground animate-matrix-glow animate-delay-100">{organizer.department}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className={`glass-card border-none animate-slide-up hover:animate-tech-pulse hover:scale-105 transition-all duration-300 animate-delay-${(index + 3) * 200}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-accent/20 animate-glow-pulse">
                        <contact.icon className="w-6 h-6 text-accent animate-float" />
                      </div>
                      <div>
                        <div className="font-semibold animate-hologram">{contact.value}</div>
                        <div className="text-sm text-muted-foreground animate-matrix-glow">{contact.subvalue}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* QR Code Registration */}
          <div className="flex flex-col items-center justify-center">
            <Card className="glass-card border-none max-w-md w-full animate-scale-in hover:animate-tech-pulse transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-3 text-primary text-2xl animate-hologram">
                  <QrCode className="w-8 h-8 animate-float" />
                  Quick Registration
                </CardTitle>
                <CardDescription className="text-lg animate-glow-pulse">
                  Scan to register instantly for DEV ARENA 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="relative group">
                  <img 
                    src={qrCode} 
                    alt="Registration QR Code" 
                    className="w-64 h-64 mx-auto rounded-xl glow transition-all duration-300 group-hover:scale-110 animate-tech-pulse"
                  />
                  <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-hologram" />
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground animate-matrix-glow">
                    Point your camera at the QR code above to open the registration form
                  </p>
                  
                  <div className="flex flex-col gap-3">
                    <a href="https://forms.gle/PCYYvAmgmmtSpmze7" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground glow w-full animate-glow-pulse hover:scale-105 transition-all duration-300"
                      >
                        Register Online
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Solve TVSNext Challenge */}
            <div className="mt-8 text-center animate-slide-up animate-delay-400">
              <div className="glass-card p-6 max-w-md hover:animate-tech-pulse transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-accent mb-2 animate-hologram">Special Challenge</h3>
                <p className="text-muted-foreground mb-4 animate-matrix-glow">
                  Solve TVSNext Challenges for exciting additional rewards!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};