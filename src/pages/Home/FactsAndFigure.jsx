import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function FactsAndFigure() {
const canvasRef = useRef(null);

useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let animationId;

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  resizeCanvas();

  // Particle system
  const particles = [];
  const particleCount = 100;

  class Particle {
    constructor() {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 150 + 50;
      const baseX = window.innerWidth * 0.65;
      const baseY = window.innerHeight * 0.45;

      this.x = baseX + Math.cos(angle) * distance;
      this.y = baseY + Math.sin(angle) * distance;
      this.baseX = this.x;
      this.baseY = this.y;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.size = Math.random() * 1 + 0.5;
      this.opacity = Math.random() * 0.6 + 0.2;
      this.time = Math.random() * 100;
    }

    update() {
      this.time += 0.01;
      this.x += this.vx;
      this.y += this.vy;
      this.x += Math.sin(this.time * 0.03) * 0.2;
      this.y += Math.cos(this.time * 0.03) * 0.2;

      if (this.x > window.innerWidth + 100) this.x = -100;
      if (this.x < -100) this.x = window.innerWidth + 100;
      if (this.y > window.innerHeight + 100) this.y = -100;
      if (this.y < -100) this.y = window.innerHeight + 100;
    }

    draw(ctx) {
      ctx.fillStyle = `rgba(34, 197, 255, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Animate
  const animate = () => {
    ctx.fillStyle = "rgba(8, 25, 47, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.update();
      p.draw(ctx);
    });

    // Draw lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          ctx.strokeStyle = `rgba(34, 197, 255, ${0.08 * (1 - distance / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    animationId = requestAnimationFrame(animate);
  };

  animate();

  window.addEventListener("resize", resizeCanvas);

  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener("resize", resizeCanvas);
  };
}, []);


const stats = [
  {
    value: "10+ years",
    label: "Market experience",
  },
  {
    value: "300+",
    label: "Satisfied Clients",
  },
  {
    value: "400+",
    label: "Successful Projects",
  },
  {
    value: Globe,
    label: "International clients",
  },
];



  return (
    <div className="relative w-full h-screen bg-linear-to-br from-cyan-950 via-blue-950 to-cyan-950 overflow-hidden">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-50"
        style={{ mixBlendMode: "screen" }}
      />

      {/* SVG Accent Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearlinear id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
          </linearlinear>
          <linearlinear id="g2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.4" />
          </linearlinear>
        </defs>
        <path
          d="M 1200 -200 Q 900 200 600 500"
          stroke="url(#g1)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 800 0 Q 500 300 200 600"
          stroke="url(#g2)"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6">
        <div className="w-full max-w-6xl mx-auto space-y-5">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              The backbone for{" "}
              <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                global commerce
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-300">
              Moving money as easily as data. Built for modern global
              businesses.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => {
              const Icon = stat.value;

              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="border-l border-cyan-500/30 pl-4"
                >
                  <div className="text-2xl lg:text-3xl font-bold">
                    {typeof stat.value === "string" ? (
                      <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        {stat.value}
                      </span>
                    ) : (
                      <Icon className="w-7 h-7 text-cyan-400" />
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
