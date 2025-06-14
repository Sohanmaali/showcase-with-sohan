"use client";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { store } from "../store/store";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import { useEffect, useRef } from "react";

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
        height: newSize,
      };
    };

    // Handle mouse down
    const onMouseDown = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform += " scale(0.8)";
      }
    };

    // Handle mouse up
    const onMouseUp = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          cursorRef.current.style.transform.replace(" scale(0.8)", "");
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
      const speedFactor = Math.min(0.5, 0.2 + distance * 0.002);

      positionRef.current = {
        x: positionRef.current.x + dx * speedFactor,
        y: positionRef.current.y + dy * speedFactor,
      };

      // Smooth size transition
      const currentSize = {
        width: sizeRef.current.width * 0.9 + 2,
        height: sizeRef.current.height * 0.9 + 2,
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
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      // ref={cursorRef}
      className="fixed rounded-full bg-white/10 backdrop-blur-sm border border-white/30 pointer-events-none z-50 transition-all duration-50 ease-linear flex items-center justify-center"
    >
      <div className="w-1 h-1 rounded-full bg-white/80 animate-pulse" />
    </div>
  );
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <Toaster />
      <CursorBubble />
      <div className="min-h-screen p-2 mx-auto lg:mt-4">
        <div className="flex flex-col lg:flex-row lg:gap-6 h-full">
          <div className="w-full lg:w-3/12 lg:sticky lg:top-2 lg:self-start">
            <LeftSidebar />
          </div>
          <div
            className="w-full lg:w-9/12 mt-2 lg:mt-0 rounded-3xl shadow-lg mb-28 lg:mb-0 relative z-10 flex flex-col overflow-hidden"
            style={{
              background:
                "radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(30, 30, 31, 0.95) 0%, #1a1a1a 100%)",
              transition: "background 0.3s ease-out",
              position: "relative",
              isolation: "isolate",
            }}
          >
            <div className="absolute inset-0 -z-10 opacity-30" />
            <div className="absolute inset-0 -z-20 opacity-20" />

            <div className="h-full w-full">
              <Navbar />
              <div className="p-4">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}
