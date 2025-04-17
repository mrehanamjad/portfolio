"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface BackgroundLayoutProps {
  children: React.ReactNode;
}

const BackgroundLayout: React.FC<BackgroundLayoutProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Initial window size
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const blurSpots = [
    { color: "bg-purple-700", size: "w-96 h-96", position: "-translate-y-40 -translate-x-40", opacity: "opacity-20", delay: 0 },
    { color: "bg-blue-700", size: "w-96 h-96", position: "translate-y-full -translate-x-20", opacity: "opacity-20", delay: 0.2 },
    { color: "bg-indigo-600", size: "w-80 h-80", position: "translate-y-1/4 translate-x-full", opacity: "opacity-10", delay: 0.5 },
    { color: "bg-violet-800", size: "w-64 h-64", position: "translate-y-3/4 -translate-x-20", opacity: "opacity-15", delay: 0.7 },
    { color: "bg-blue-500", size: "w-72 h-72", position: "translate-y-2/3 translate-x-3/4", opacity: "opacity-10", delay: 1 },
    { color: "bg-purple-600", size: "w-40 h-40", position: "translate-y-1/2 translate-x-1/3", opacity: "opacity-15", delay: 0.3 },
  ];

  return (
    <div className="relative min-h-screen bg-gray-950">
      {/* Fixed background elements */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black -z-30" />

        {/* Subtle grid overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5 -z-30" />

        {/* Blur Spots with Parallax Effect */}
        {windowSize.width > 0 &&
          blurSpots.map((spot, index) => {
            const parallaxX = (mousePosition.x - windowSize.width / 2) * 0.005 * (index % 2 === 0 ? 1 : -1);
            const parallaxY = (mousePosition.y - windowSize.height / 2) * 0.005 * (index % 2 === 0 ? 1 : -1);
            const scrollY = scrollPosition * 0.03 * (index % 3 === 0 ? -1 : 1);

            return (
              <motion.div
                key={index}
                className={`absolute -z-30 ${spot.color} ${spot.size} rounded-full filter blur-3xl ${spot.opacity} ${spot.position}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.3, scale: [0.8, 1.1, 1] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: spot.delay,
                  ease: "easeInOut",
                }}
                style={{
                  left: index % 3 === 0 ? "10%" : index % 3 === 1 ? "50%" : "70%",
                  top: index % 2 === 0 ? `${(index * 20) % 100}%` : `${(index * 15 + 30) % 100}%`,
                  transform: `translateX(${parallaxX}px) translateY(${parallaxY + scrollY}px)`,
                }}
              />
            );
          })}

        {/* Glow light following the mouse */}
        <div
          className="pointer-events-none fixed inset-0 -z-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.03), transparent 200px)`,
          }}
        />

        {/* Vignette effect */}
        <div className="absolute -z-30 inset-0 bg-radial-at-center from-transparent via-black/20 to-black/50 pointer-events-none" />
      </div>

      {/* Page content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundLayout;
