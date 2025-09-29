import { Calendar, Trophy, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Futuristic tech background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/90" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-accent/20 blur-3xl animate-float animate-delay-200" />
        <div className="absolute top-1/2 left-10 w-24 h-24 rounded-full bg-secondary/20 blur-2xl animate-float animate-delay-400" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Logo/Title */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 aurora-text">
            DEV ARENA
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-2">
            TECHSAAVY Presents
          </div>
          <div className="text-lg text-primary/80">
            Easwari Engineering College - Department of IT
          </div>
        </div>

        {/* Subtitle */}
        <div className="mb-12 animate-slide-up animate-delay-200">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-glow">
            24-Hour Hackathon
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join the ultimate coding battlefield where innovation meets ambition. 
            Build, compete, and win in the most anticipated hackathon of 2025.
          </p>
        </div>

        {/* Key Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up animate-delay-300">
          <div className="glass-card text-center animate-glow-pulse">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-lg font-semibold text-primary">October 16-17</div>
            <div className="text-sm text-muted-foreground">2025</div>
          </div>
          
          <div className="glass-card text-center animate-glow-pulse animate-delay-100">
            <Trophy className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-lg font-semibold text-accent">₹5,00,000</div>
            <div className="text-sm text-muted-foreground">Worth Prizes</div>
          </div>
          
          <div className="glass-card text-center animate-glow-pulse animate-delay-200">
            <Zap className="w-8 h-8 text-secondary mx-auto mb-3" />
            <div className="text-lg font-semibold text-secondary">24 Hours</div>
            <div className="text-sm text-muted-foreground">Non-Stop Coding</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-400">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold glow transition-all duration-300 hover:scale-105"
          >
            <Users className="w-5 h-5 mr-2" />
            Register Now
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
          >
            Learn More
          </Button>
        </div>

        {/* Partners */}
        <div className="mt-16 animate-slide-up animate-delay-500">
          <div className="text-sm text-muted-foreground mb-4">Powered by</div>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-lg font-bold text-foreground/80">ORACLE</div>
            <div className="text-lg font-bold text-foreground/80">TVSNext</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};