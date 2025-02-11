"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

function BlockchainAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Node class
    class Node {
      x: number;
      y: number;
      connections: Node[];
      speed: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.connections = [];
        this.speed = 0.2 + Math.random() * 0.3;
      }

      update() {
        this.x += Math.sin(Date.now() * 0.001 * this.speed) * 0.5;
        this.y += Math.cos(Date.now() * 0.001 * this.speed) * 0.5;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();

        // Draw connections
        this.connections.forEach(node => {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(node.x, node.y);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
          ctx.stroke();
        });
      }
    }

    // Create nodes
    const nodes: Node[] = [];
    for (let i = 0; i < 20; i++) {
      nodes.push(new Node(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }

    // Connect nodes
    nodes.forEach(node => {
      const nearestNodes = nodes
        .filter(n => n !== node)
        .sort((a, b) => {
          const distA = Math.hypot(a.x - node.x, a.y - node.y);
          const distB = Math.hypot(b.x - node.x, b.y - node.y);
          return distA - distB;
        })
        .slice(0, 3);
      
      node.connections = nearestNodes;
    });

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach(node => {
        node.update();
        node.draw();
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-70"
      style={{ filter: 'blur(1px)' }}
    />
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Blockchain animation background */}
      <BlockchainAnimation />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-grid-pattern animate-grid"
        style={{
          '--grid-color': 'rgba(255, 255, 255, 0.03)',
          'backgroundSize': '40px 40px',
          'backgroundPosition': 'center',
          'maskImage': 'linear-gradient(to bottom, transparent, 15%, white, 85%, transparent)',
          'WebkitMaskImage': 'linear-gradient(to bottom, transparent, 15%, white, 85%, transparent)',
        } as React.CSSProperties}
      />

      {/* Content */}
      <div className="container relative px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 animate-gradient bg-[size:200%_200%]">
            The Future of Blockchain Technology
          </h1>
          <p className="text-xl text-muted-foreground">
            Revolutionizing the digital landscape with secure, scalable, and innovative blockchain solutions.
            Build the future with Cubix.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 