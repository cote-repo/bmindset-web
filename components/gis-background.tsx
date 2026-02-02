"use client";

import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  type: "satellite" | "gps" | "data" | "signal" | "drone" | "marker";
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function GISBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const types: FloatingElement["type"][] = [
      "satellite",
      "gps",
      "data",
      "signal",
      "drone",
      "marker",
    ];
    const generatedElements: FloatingElement[] = [];

    for (let i = 0; i < 20; i++) {
      generatedElements.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 15,
        duration: Math.random() * 30 + 20,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.3 + 0.15,
      });
    }

    setElements(generatedElements);
  }, []);

  const renderElement = (el: FloatingElement) => {
    switch (el.type) {
      case "satellite":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-primary"
          >
            <path d="M13 7L9 3L5 7l4 4" />
            <path d="m17 11 4 4-4 4-4-4" />
            <path d="m8 12 4 4 6-6" />
            <path d="m16 8 3-3" />
            <path d="M9 21a6 6 0 0 0-6-6" />
          </svg>
        );
      case "gps":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-accent"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v4" />
            <path d="M12 18v4" />
            <path d="M2 12h4" />
            <path d="M18 12h4" />
            <circle cx="12" cy="12" r="8" strokeDasharray="4 4" />
          </svg>
        );
      case "data":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-primary"
          >
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        );
      case "signal":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-accent"
          >
            <path d="M2 20h.01" />
            <path d="M7 20v-4" />
            <path d="M12 20v-8" />
            <path d="M17 20V8" />
            <path d="M22 4v16" />
          </svg>
        );
      case "drone":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-primary"
          >
            <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0" />
            <path d="M2 6l3 3" />
            <path d="M22 6l-3 3" />
            <path d="M2 18l3-3" />
            <path d="M22 18l-3-3" />
            <circle cx="4" cy="4" r="2" />
            <circle cx="20" cy="4" r="2" />
            <circle cx="4" cy="20" r="2" />
            <circle cx="20" cy="20" r="2" />
          </svg>
        );
      case "marker":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-accent"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
        );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orbit rings */}
      <svg
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"
        viewBox="0 0 400 400"
      >
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="8 8"
          className="text-primary animate-[spin_60s_linear_infinite]"
        />
        <circle
          cx="200"
          cy="200"
          r="100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="text-accent animate-[spin_40s_linear_infinite_reverse]"
        />
      </svg>

      <svg
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] translate-x-1/2 translate-y-1/2 opacity-[0.04]"
        viewBox="0 0 400 400"
      >
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="12 6"
          className="text-primary animate-[spin_80s_linear_infinite]"
        />
        <circle
          cx="200"
          cy="200"
          r="120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="6 3"
          className="text-accent animate-[spin_50s_linear_infinite_reverse]"
        />
      </svg>

      {/* Animated connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]">
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="text-primary" stopColor="currentColor" stopOpacity="0" />
            <stop offset="50%" className="text-primary" stopColor="currentColor" stopOpacity="1" />
            <stop offset="100%" className="text-primary" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" className="text-accent" stopColor="currentColor" stopOpacity="0" />
            <stop offset="50%" className="text-accent" stopColor="currentColor" stopOpacity="1" />
            <stop offset="100%" className="text-accent" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,200 Q400,100 800,300 T1600,200"
          fill="none"
          stroke="url(#lineGrad1)"
          strokeWidth="2"
          className="animate-[dash_15s_linear_infinite]"
          strokeDasharray="20 10"
        />
        <path
          d="M0,400 Q300,200 600,400 T1200,300"
          fill="none"
          stroke="url(#lineGrad2)"
          strokeWidth="2"
          className="animate-[dash_20s_linear_infinite]"
          strokeDasharray="15 8"
        />
      </svg>

      {/* Floating GIS elements */}
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute animate-float"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            width: el.size,
            height: el.size,
            opacity: el.opacity,
            animation: `float ${el.duration}s ease-in-out infinite`,
            animationDelay: `${el.delay}s`,
          }}
        >
          {renderElement(el)}
        </div>
      ))}

      {/* Animated satellite path */}
      <div className="absolute w-8 h-8 animate-satellite-orbit">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-primary opacity-20"
        >
          <path d="M13 7L9 3L5 7l4 4" />
          <path d="m17 11 4 4-4 4-4-4" />
          <path d="m8 12 4 4 6-6" />
          <path d="m16 8 3-3" />
          <path d="M9 21a6 6 0 0 0-6-6" />
        </svg>
      </div>

      {/* Second satellite on different orbit */}
      <div
        className="absolute w-6 h-6 animate-satellite-orbit-2"
        style={{ animationDelay: "5s" }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-accent opacity-15"
        >
          <path d="M13 7L9 3L5 7l4 4" />
          <path d="m17 11 4 4-4 4-4-4" />
          <path d="m8 12 4 4 6-6" />
          <path d="m16 8 3-3" />
          <path d="M9 21a6 6 0 0 0-6-6" />
        </svg>
      </div>

      {/* GPS pulse effects */}
      <div className="absolute top-[20%] left-[15%]">
        <div className="w-3 h-3 bg-primary/20 rounded-full animate-ping" />
        <div className="absolute inset-0 w-3 h-3 bg-primary/30 rounded-full" />
      </div>
      <div className="absolute top-[60%] right-[20%]">
        <div className="w-2 h-2 bg-accent/20 rounded-full animate-ping" style={{ animationDelay: "1s" }} />
        <div className="absolute inset-0 w-2 h-2 bg-accent/30 rounded-full" />
      </div>
      <div className="absolute bottom-[30%] left-[40%]">
        <div className="w-2 h-2 bg-primary/15 rounded-full animate-ping" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 w-2 h-2 bg-primary/25 rounded-full" />
      </div>
      <div className="absolute top-[45%] right-[35%]">
        <div className="w-3 h-3 bg-accent/15 rounded-full animate-ping" style={{ animationDelay: "0.5s" }} />
        <div className="absolute inset-0 w-3 h-3 bg-accent/25 rounded-full" />
      </div>

      {/* Data stream particles */}
      <div className="absolute top-0 left-[30%] w-px h-full overflow-hidden opacity-10">
        <div className="w-full h-20 bg-gradient-to-b from-transparent via-primary to-transparent animate-data-stream" />
      </div>
      <div className="absolute top-0 right-[25%] w-px h-full overflow-hidden opacity-10">
        <div
          className="w-full h-16 bg-gradient-to-b from-transparent via-accent to-transparent animate-data-stream"
          style={{ animationDelay: "3s" }}
        />
      </div>
      <div className="absolute top-0 left-[60%] w-px h-full overflow-hidden opacity-10">
        <div
          className="w-full h-24 bg-gradient-to-b from-transparent via-primary to-transparent animate-data-stream"
          style={{ animationDelay: "6s" }}
        />
      </div>
    </div>
  );
}
