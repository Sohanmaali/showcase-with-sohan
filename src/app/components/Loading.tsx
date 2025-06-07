'use client';

import { useEffect, useState, useRef } from 'react';

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
  }>>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate random particles
  useEffect(() => {
    const colors = [
      'rgba(99, 102, 241, 0.8)',  // indigo
      'rgba(139, 92, 246, 0.8)',  // purple
      'rgba(217, 70, 239, 0.8)',  // pink
      'rgba(236, 72, 153, 0.8)',  // pink-500
      'rgba(59, 130, 246, 0.8)',  // blue-500
    ];

    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 5 + 2,
      speedX: Math.random() * 2 - 1,
      speedY: Math.random() * 2 - 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setParticles(newParticles);
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const mouse = { x: 0, y: 0, radius: 100 };

    const animate = () => {
      if (!ctx) return;
      
      // Clear canvas with semi-transparent black for trail effect
      ctx.fillStyle = 'rgba(18, 18, 18, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update mouse position
      mouse.x = mousePos.x;
      mouse.y = mousePos.y;

      // Update and draw particles
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Move particle
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;
          
          // Bounce off edges
          if (newX > canvas.width || newX < 0) {
            particle.speedX *= -1;
            newX = particle.x;
          }
          if (newY > canvas.height || newY < 0) {
            particle.speedY *= -1;
            newY = particle.y;
          }

          // React to mouse
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            // Repel particles from mouse
            const angle = Math.atan2(dy, dx);
            const force = (1 - distance / 150) * 2;
            newX -= Math.cos(angle) * force * 2;
            newY -= Math.sin(angle) * force * 2;
          }

          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          
          // Draw glow
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 3
          );
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(1, 'transparent');
          
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );

      // Draw connections between particles
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.2)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${1 - distance / 100})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Set canvas size
    const resizeCanvas = () => {
      if (containerRef.current && canvasRef.current) {
        canvas.width = containerRef.current.clientWidth;
        canvas.height = containerRef.current.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Start animation
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mousePos, particles]);

  // Progress and dots animation
  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 15;
      });
    }, 200);

    // Loading dots animation
    const dotsInterval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return '';
        return prev + '.';
      });
    }, 300);

    return () => {
      clearInterval(progressInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  // Text animation variants
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-[#121212] flex flex-col items-center justify-center z-50 overflow-hidden"
    >
      {/* Interactive Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Animated Logo */}
      <div className="relative w-40 h-40 mb-8 z-10">
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 animate-pulse" />
        
        {/* Animated rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-full h-full rounded-full border-2 border-indigo-500/30 animate-spin" 
            style={{ animationDuration: '8s' }} />
          <div className="absolute w-4/5 h-4/5 rounded-full border-2 border-purple-500/30 animate-spin" 
            style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
          <div className="absolute w-3/5 h-3/5 rounded-full border-2 border-pink-500/30 animate-spin" 
            style={{ animationDuration: '15s' }} />
        </div>
        
        {/* Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            SM
          </div>
        </div>
      </div>
      
      {/* Loading Text */}
      <div className="text-3xl font-medium text-white mb-6 relative z-10">
        <span className="relative z-10">Loading{dots}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
          Loading{dots}
        </span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-64 h-2 bg-gray-800/50 rounded-full overflow-hidden mb-2 z-10">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out relative"
          style={{ width: `${Math.min(progress, 100)}%` }}
        >
          <div className="absolute inset-0 bg-white/30 animate-pulse" />
        </div>
      </div>
      
      {/* Status Text */}
      <div className="text-sm text-gray-300 mt-2 z-10">
        {progress < 20 && 'Initializing...'}
        {progress >= 20 && progress < 40 && 'Loading components...'}
        {progress >= 40 && progress < 60 && 'Optimizing experience...'}
        {progress >= 60 && progress < 80 && 'Finalizing...'}
        {progress >= 80 && progress < 100 && 'Almost there...'}
        {progress >= 100 && 'Ready!'}
      </div>
      
      {/* Progress Percentage */}
      <div className="text-xs text-gray-400 mt-2 z-10">
        {Math.min(Math.round(progress), 100)}%
      </div>
      
      
    </div>
  );
}
