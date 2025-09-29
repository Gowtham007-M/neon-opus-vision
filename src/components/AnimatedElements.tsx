import { useEffect, useState } from "react";

// Floating Code Particles
export const CodeParticles = () => {
  const codeSnippets = ["{ }", "< />", "=>", "&&", "||", "console.log()", "npm run", "git push"];
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-primary/20 font-mono text-xs animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
        </div>
      ))}
    </div>
  );
};

// Animated Circuit Lines
export const CircuitLines = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 1000 600">
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Animated circuit paths */}
        <path
          d="M0,100 L200,100 L200,200 L400,200 L400,100 L600,100"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M1000,300 L800,300 L800,400 L600,400 L600,300 L400,300"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <path
          d="M0,500 L300,500 L300,350 L700,350 L700,500 L1000,500"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        
        {/* Circuit nodes */}
        <circle cx="200" cy="100" r="4" fill="hsl(var(--primary))" className="animate-glow-pulse" />
        <circle cx="400" cy="200" r="4" fill="hsl(var(--accent))" className="animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
        <circle cx="800" cy="300" r="4" fill="hsl(var(--secondary))" className="animate-glow-pulse" style={{ animationDelay: "1s" }} />
        <circle cx="300" cy="500" r="4" fill="hsl(var(--primary))" className="animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      </svg>
    </div>
  );
};

// Animated Data Stream
export const DataStream = () => {
  const [streams, setStreams] = useState<Array<{ id: number; delay: number }>>([]);

  useEffect(() => {
    const newStreams = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      delay: Math.random() * 2,
    }));
    setStreams(newStreams);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {streams.map((stream) => (
        <div
          key={stream.id}
          className="absolute w-px bg-gradient-to-b from-transparent via-primary to-transparent opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            height: "100%",
            animation: `dataStream 3s linear infinite`,
            animationDelay: `${stream.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

// Pulsing Orbs
export const PulsingOrbs = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 blur-xl animate-glow-pulse" />
      <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-accent/25 blur-lg animate-glow-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-40 w-28 h-28 rounded-full bg-secondary/20 blur-xl animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-20 right-20 w-36 h-36 rounded-full bg-primary/15 blur-2xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
    </div>
  );
};

// Rotating Tech Icons
export const RotatingIcons = () => {
  const techIcons = ["⚡", "🚀", "💻", "🔥", "⭐", "🎯"];
  
  return (
    <div className="absolute inset-0 pointer-events-none">
      {techIcons.map((icon, i) => (
        <div
          key={i}
          className="absolute text-2xl opacity-30 animate-float"
          style={{
            left: `${15 + (i * 15)}%`,
            top: `${20 + Math.sin(i) * 30}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + Math.random() * 2}s`,
          }}
        >
          <div className="animate-spin" style={{ animationDuration: "8s" }}>
            {icon}
          </div>
        </div>
      ))}
    </div>
  );
};

// Matrix Rain Effect
export const MatrixRain = () => {
  const [drops, setDrops] = useState<Array<{ id: number; left: string; delay: number }>>([]);

  useEffect(() => {
    const newDrops = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
    }));
    setDrops(newDrops);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute top-0 text-primary/30 font-mono text-xs"
          style={{
            left: drop.left,
            animation: `matrixDrop 4s linear infinite`,
            animationDelay: `${drop.delay}s`,
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-4">
              {Math.random() > 0.5 ? "1" : "0"}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// Animated Background Geometric Shapes
export const GeometricShapes = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-primary/30 rotate-45 animate-spin" style={{ animationDuration: "20s" }} />
      <div className="absolute top-3/4 right-1/4 w-12 h-12 border-2 border-accent/30 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-secondary/30 rounded-full animate-pulse" />
      <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-primary/20 rotate-45 animate-bounce" style={{ animationDuration: "3s" }} />
    </div>
  );
};