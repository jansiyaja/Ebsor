
import React, { useEffect, useRef } from 'react';

export default function FactsAndFigure() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
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
      ctx.fillStyle = 'rgba(8, 25, 47, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
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

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const stats = [
    { value: '500M+', label: 'API requests per day, peaking at 13,000 requests a second.' },
    { value: '99.999%', label: 'Historical uptime for Stripe services.' },
    { value: '47+', label: 'Countries with local acquiring.' },
    { value: '135+', label: 'Currencies and payment methods supported.' }
  ];

  return (
    <div className="relative w-full min-h-screen bg-linear-to-br from-cyan-950 via-blue-950 to-cyan-950 overflow-hidden">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-50" style={{ mixBlendMode: 'screen' }} />

      {/* SVG Accent Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" preserveAspectRatio="none">
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
        <path d="M 1200 -200 Q 900 200 600 500" stroke="url(#g1)" strokeWidth="2" fill="none" />
        <path d="M 800 0 Q 500 300 200 600" stroke="url(#g2)" strokeWidth="2" fill="none" />
      </svg>

      {/* Content */}
      <div className="relative z-10 h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Section */}
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-block">
                <span className="px-3 sm:px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold">
                  Global scale
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight">
                The backbone for<br />
                <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  global commerce
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-lg">
                Stripe makes moving money as easy and programmable as moving data. Our teams are based in offices around the world and we process hundreds of billions of dollars each year for ambitious businesses of all sizes.
              </p>
            </div>

            {/* Right Decorative - Hidden on mobile */}
            <div className="hidden lg:block relative h-96" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="border-l-2 border-cyan-500/30 pl-6 sm:pl-8">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 sm:mb-3">
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-slate-400 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}