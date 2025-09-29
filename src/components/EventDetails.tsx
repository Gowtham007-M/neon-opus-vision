import { Clock, MapPin, Award, Code, Lightbulb, Rocket, Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PulsingOrbs, CodeParticles, RotatingIcons } from "@/components/AnimatedElements";

export const EventDetails = () => {
  const timeline = [
    { time: "Day 1 - 9:00 AM", event: "Registration & Team Formation", icon: MapPin },
    { time: "Day 1 - 10:00 AM", event: "Opening Ceremony & Problem Statement", icon: Lightbulb },
    { time: "Day 1 - 11:00 AM", event: "Hackathon Begins - Start Coding!", icon: Code },
    { time: "Day 2 - 9:00 AM", event: "Final Submission Deadline", icon: Rocket },
    { time: "Day 2 - 11:00 AM", event: "Project Presentations & Judging", icon: Award },
    { time: "Day 2 - 4:00 PM", event: "Award Ceremony & Closing", icon: Award },
  ];

  const challenges = [
    {
      title: "AI & Machine Learning",
      description: "Build intelligent solutions using cutting-edge AI technologies",
      color: "primary"
    },
    {
      title: "Web Development",
      description: "Create responsive and innovative web applications",
      color: "secondary"
    },
    {
      title: "Mobile Apps",
      description: "Develop cross-platform mobile solutions",
      color: "accent"
    },
    {
      title: "Blockchain & Crypto",
      description: "Innovate with decentralized technologies",
      color: "primary"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background Effects */}
      <PulsingOrbs />
      <CodeParticles />
      <RotatingIcons />
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-secondary/10 blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-accent/10 blur-2xl animate-float animate-delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 aurora-text animate-hologram">
            Event Details
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-glow-pulse animate-delay-500">
            Everything you need to know about the most exciting 24-hour coding marathon
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-glow animate-tech-pulse">
            <Clock className="w-8 h-8 inline mr-3 text-primary animate-float" />
            Event Timeline
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`glass-card hover:shadow-glow transition-all duration-300 animate-slide-up animate-delay-${(index + 1) * 100} hover:animate-tech-pulse hover:scale-105`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/20 mt-1 animate-glow-pulse">
                    <item.icon className="w-5 h-5 text-primary animate-float" />
                  </div>
                  <div>
                    <div className="text-sm text-primary font-semibold mb-1 animate-matrix-glow">
                      {item.time}
                    </div>
                    <div className="text-foreground font-medium animate-hologram">
                      {item.event}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge Categories */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-glow animate-tech-pulse animate-delay-500">
            <Code className="w-8 h-8 inline mr-3 text-secondary animate-float animate-delay-300" />
            Challenge Categories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <Card 
                key={index}
                className={`glass-card border-none hover:shadow-glow transition-all duration-300 animate-slide-up animate-delay-${(index + 1) * 200} hover:animate-tech-pulse hover:scale-105`}
              >
                <CardHeader>
                  <CardTitle className={`text-xl text-${challenge.color} flex items-center gap-2`}>
                    <div className={`w-3 h-3 rounded-full bg-${challenge.color} animate-glow-pulse`} />
                    <span className="animate-hologram">{challenge.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base animate-matrix-glow">
                    {challenge.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Prize Info */}
        <div className="mt-20 text-center">
          <div className="glass-card max-w-2xl mx-auto animate-scale-in hover:animate-tech-pulse transition-all duration-300">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Trophy className="w-12 h-12 text-accent animate-glow-pulse animate-float" />
              <div>
                <div className="text-4xl font-bold aurora-text animate-hologram">₹5,00,000</div>
                <div className="text-lg text-muted-foreground animate-matrix-glow">Total Prize Pool</div>
              </div>
            </div>
            <p className="text-muted-foreground animate-hologram animate-delay-500">
              Winner takes it all! Plus exciting consolation prizes and certificates for all participants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};