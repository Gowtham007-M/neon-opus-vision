import { Heart, Code, Zap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-glass-border/30 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          {/* Main Footer Content */}
          <div className="glass-card max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="text-2xl font-bold aurora-text">DEV ARENA 2025</div>
            </div>
            
            <p className="text-muted-foreground mb-4">
              Where innovation meets ambition. Join the ultimate 24-hour coding battlefield.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Code className="w-4 h-4 text-primary" />
                24 Hours
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-accent" />
                ₹1,00,000 Worth Prizes
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-secondary" />
                Oct 16-17, 2025
              </div>
            </div>
          </div>

          {/* Credits */}
          <div className="text-center space-y-2">
            <div className="text-sm text-muted-foreground">
              Organized by <span className="text-primary font-semibold">TECHSAAVY</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Easwari Engineering College - Department of Information Technology
            </div>
            <div className="text-xs text-muted-foreground/70">
              Challenges By TVSNext
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-glass-border/20">
            <p className="text-xs text-muted-foreground/60">
              © 2025 DEV ARENA. Built with passion for the future of technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};