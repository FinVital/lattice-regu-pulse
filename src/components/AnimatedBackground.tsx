import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
}

interface AnimatedBackgroundProps {
  theme?: 'compliance' | 'regtech' | 'onboarding';
  nodeCount?: number;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  theme = 'compliance',
  nodeCount = 50 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Initialize nodes
    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: [],
      });
    }
    nodesRef.current = nodes;

    // Theme colors (HSL values)
    const getThemeColors = () => {
      switch (theme) {
        case 'regtech':
          return {
            node: 'hsla(145, 63%, 49%, 0.6)',
            connection: 'hsla(145, 63%, 49%, 0.2)',
            glow: 'hsla(145, 63%, 49%, 0.8)'
          };
        case 'onboarding':
          return {
            node: 'hsla(244, 58%, 67%, 0.6)',
            connection: 'hsla(244, 58%, 67%, 0.2)',
            glow: 'hsla(244, 58%, 67%, 0.8)'
          };
        default: // compliance
          return {
            node: 'hsla(221, 83%, 53%, 0.6)',
            connection: 'hsla(221, 83%, 53%, 0.2)',
            glow: 'hsla(221, 83%, 53%, 0.8)'
          };
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const colors = getThemeColors();

      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;

        // Keep within bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      });

      // Draw connections
      ctx.strokeStyle = colors.connection;
      ctx.lineWidth = 1;
      const maxDistance = 120;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = colors.connection.replace('0.2', `${opacity * 0.3}`);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(node => {
        // Node glow effect
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 8);
        gradient.addColorStop(0, colors.glow);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
        ctx.fill();

        // Node core
        ctx.fillStyle = colors.node;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme, nodeCount]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30"
      style={{ background: 'transparent' }}
    />
  );
};
