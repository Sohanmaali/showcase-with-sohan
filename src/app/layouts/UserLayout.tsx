
"use client";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { store } from "../store/store";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import { useEffect, useRef } from "react";

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles: any[] = [];
  const particleCount = 120;
  let animationFrameId: number;
  let mouseX = 0;
  let mouseY = 0;
  let isMouseMoving = false;
  let lastMouseMove = Date.now();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
      lastMouseMove = Date.now();
    }; 
    
    // Add mouse leave handler
    const handleMouseLeave = () => {
      isMouseMoving = false;
      mouseX = window.innerWidth / 2;
      mouseY = window.innerHeight / 2;
    }; 
    
    // Add mouse enter handler
    const handleMouseEnter = () => {
      isMouseMoving = true;
      lastMouseMove = Date.now();
    }; 
    
    // Auto-hide cursor when not moving
    const checkMouseActivity = () => {
      const now = Date.now();
      if (now - lastMouseMove > 2000) {
        isMouseMoving = false;
      }
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    
    const mouseInterval = setInterval(checkMouseActivity, 100);
    resizeCanvas();

    // Create particles with more variety and different behaviors
    const colors = [
      'rgba(99, 102, 241, 0.8)',  // Indigo
      'rgba(168, 85, 247, 0.8)', // Purple
      'rgba(236, 72, 153, 0.8)', // Pink
      'rgba(59, 130, 246, 0.8)', // Blue
      'rgba(16, 185, 129, 0.8)'  // Emerald
    ];
    
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 5 + 2;
      const speed = Math.random() * 2 + 0.5;
      const angle = Math.random() * Math.PI * 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const type = Math.random() > 0.6 ? 'orbit' : 'float';
      
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: size,
        baseSize: size,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed,
        color: color,
        orbitRadius: Math.random() * 150 + 50,
        angle: Math.random() * Math.PI * 2,
        orbitSpeed: (Math.random() * 0.03) - 0.015,
        type: type,
        targetX: 0,
        targetY: 0,
        isActive: false,
        opacity: 0
      });
    }

    // Animation loop
    const animate = () => {
      // Create a subtle gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGradient.addColorStop(0, '#0f172a');
      bgGradient.addColorStop(1, '#1e1b4b');
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw interactive gradient overlay
      if (isMouseMoving) {
        const gradient = ctx.createRadialGradient(
          mouseX, mouseY, 0,
          mouseX, mouseY, 300
        );
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.3)');
        gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.15)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Fade in/out effect
        if (isMouseMoving) {
          p.opacity = Math.min(1, p.opacity + 0.05);
        } else {
          p.opacity = Math.max(0, p.opacity - 0.01);
        }
        
        if (p.opacity <= 0) continue;
        
        if (p.type === 'orbit') {
          // Orbiting particles with smooth following
          p.angle += p.orbitSpeed;
          
          // Calculate target position in orbit
          const targetX = mouseX + Math.cos(p.angle) * p.orbitRadius;
          const targetY = mouseY + Math.sin(p.angle) * p.orbitRadius;
          
          // Smooth movement to target
          p.x += (targetX - p.x) * 0.05;
          p.y += (targetY - p.y) * 0.05;
          
          // Pulsing effect with mouse interaction
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const pulse = Math.sin(Date.now() * 0.005) * 0.3 + 1;
          p.size = p.baseSize * pulse * (0.8 + (150 / (distance + 100))) * p.opacity;
        } else {
          // Floating particles with mouse repulsion
          if (isMouseMoving) {
            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 200) {
              // Repel from mouse
              const angle = Math.atan2(dy, dx);
              const force = (1 - distance / 200) * 5 * p.opacity;
              p.speedX -= Math.cos(angle) * force * 0.1;
              p.speedY -= Math.sin(angle) * force * 0.1;
            }
            
            // Add some random movement
            p.speedX += (Math.random() - 0.5) * 0.2;
            p.speedY += (Math.random() - 0.5) * 0.2;
          }
          
          // Apply friction
          p.speedX *= 0.98;
          p.speedY *= 0.98;
          
          // Update position
          p.x += p.speedX;
          p.y += p.speedY;
          
          // Wrap around edges
          if (p.x < -50) p.x = canvas.width + 50;
          if (p.x > canvas.width + 50) p.x = -50;
          if (p.y < -50) p.y = canvas.height + 50;
          if (p.y > canvas.height + 50) p.y = -50;
        }

        // Draw particle with glow and fade
        if (p.opacity > 0.1) {
          const gradient = ctx.createRadialGradient(
            p.x, p.y, 0,
            p.x, p.y, p.size * 2.5
          );
          
          // Adjust color opacity based on particle's opacity
          const color = p.color.replace('0.8', (0.8 * p.opacity).toString());
          gradient.addColorStop(0, color);
          gradient.addColorStop(1, 'rgba(0,0,0,0)');
          
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
          
          // Draw inner highlight
          const highlightGradient = ctx.createRadialGradient(
            p.x - p.size * 0.5, p.y - p.size * 0.5, 0,
            p.x, p.y, p.size * 0.5
          );
          highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
          highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = highlightGradient;
          ctx.fill();
        }

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150 && p.opacity > 0.2 && p2.opacity > 0.2) {
            const opacity = Math.min(p.opacity, p2.opacity) * (1 - distance / 150);
            if (opacity > 0.1) {
              ctx.beginPath();
              const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
              gradient.addColorStop(0, p.color.replace('0.8', (0.8 * opacity).toString()));
              gradient.addColorStop(1, p2.color.replace('0.8', (0.8 * opacity).toString()));
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 0.6 * opacity * (1 + Math.sin(Date.now() * 0.005) * 0.3);
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(mouseInterval);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-100 pointer-events-none transition-opacity duration-1000"
    />
  );
};

const CursorBubble = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const sizeRef = useRef({ width: 20, height: 20 });

  useEffect(() => {
    if (!cursorRef.current) return;

    // Handle mouse movement
    const onMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
      
      // Slightly increase size when moving fast
      const speed = Math.sqrt(
        Math.pow(e.movementX, 2) + Math.pow(e.movementY, 2)
      );
      
      const newSize = Math.min(40, 20 + speed * 0.5);
      sizeRef.current = { 
        width: newSize, 
        height: newSize 
      };
    };

    // Handle mouse down
    const onMouseDown = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform += ' scale(0.8)';
      }
    };

    // Handle mouse up
    const onMouseUp = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = cursorRef.current.style.transform.replace(' scale(0.8)', '');
      }
    };

    // Animation loop
    const animate = () => {
      if (!cursorRef.current) return;
      
      // Faster follow effect with dynamic speed based on distance
      const dx = targetPosition.current.x - positionRef.current.x;
      const dy = targetPosition.current.y - positionRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Dynamic speed factor (faster for larger distances)
      const speedFactor = Math.min(0.5, 0.2 + (distance * 0.002));
      
      positionRef.current = {
        x: positionRef.current.x + dx * speedFactor,
        y: positionRef.current.y + dy * speedFactor
      };
      
      // Smooth size transition
      const currentSize = {
        width: sizeRef.current.width * 0.9 + 2,
        height: sizeRef.current.height * 0.9 + 2
      };

      // Apply transformations
      cursorRef.current.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px) translate(-50%, -50%)`;
      cursorRef.current.style.width = `${currentSize.width}px`;
      cursorRef.current.style.height = `${currentSize.height}px`;
      
      // Add subtle rotation based on movement
      const rotation = (targetPosition.current.x - positionRef.current.x) * 0.5;
      cursorRef.current.style.transform += ` rotate(${rotation}deg)`;
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Add event listeners
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    
    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed rounded-full bg-white/10 backdrop-blur-sm border border-white/30 pointer-events-none z-50 transition-all duration-50 ease-linear flex items-center justify-center"
      style={{
        width: '16px',
        height: '16px',
        left: 0,
        top: 0,
        transform: 'translate(-50%, -50%)',
        willChange: 'transform',
        transition: 'transform 0.03s linear, width 0.1s ease-out, height 0.1s ease-out'
      }}
    >
      <div className="w-1 h-1 rounded-full bg-white/80 animate-pulse" />
    </div>
  );
};

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Toaster />
      <InteractiveBackground />
      <CursorBubble />
      <div className="min-h-screen p-2 mx-auto lg:mt-4">
        <div className="flex flex-col lg:flex-row lg:gap-6 h-full">
          <div className="w-full lg:w-3/12 lg:sticky lg:top-2 lg:self-start">
            <LeftSidebar />
          </div>
          <div 
            className="w-full lg:w-9/12 mt-2 lg:mt-0 rounded-3xl shadow-lg mb-28 lg:mb-0 relative z-10 flex flex-col overflow-hidden"
            style={{
              background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(30, 30, 31, 0.95) 0%, #1a1a1a 100%)',
              transition: 'background 0.3s ease-out',
              position: 'relative',
              isolation: 'isolate',
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              const y = ((e.clientY - rect.top) / rect.height) * 100;
              e.currentTarget.style.setProperty('--x', `${x}%`);
              e.currentTarget.style.setProperty('--y', `${y}%`);
            }}
          >
            <div 
              className="absolute inset-0 -z-10 opacity-30"
              style={{
                background: `
                  radial-gradient(
                    circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
                    rgba(99, 102, 241, 0.5) 0%,
                    rgba(139, 92, 246, 0.35) 20%,
                    rgba(236, 72, 153, 0.25) 40%,
                    rgba(253, 186, 116, 0.2) 60%,
                    transparent 80%
                  )`,
                transition: 'background 0.25s ease-out',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                boxShadow: '0 0 40px rgba(168, 85, 247, 0.2)',
              }}
            />
            <div 
              className="absolute inset-0 -z-20 opacity-20"
              style={{
                background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)',
                animation: 'gradientShift 15s ease infinite',
                backgroundSize: '200% 200%',
              }}
            />
            <style jsx global>{`
              @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
            `}</style>
            <div 
              className="h-full w-full"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
              }}
            >
              <Navbar />
              <div className="p-4">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}
