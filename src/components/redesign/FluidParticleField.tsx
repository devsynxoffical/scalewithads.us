"use client";

import React, { useEffect, useRef } from "react";

interface FluidParticleFieldProps {
  children?: React.ReactNode;
  className?: string;
  particleCount?: number;
}

export function FluidParticleField({
  children,
  className = "",
  particleCount = 750,
}: FluidParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let animationFrame: number;
    let particles: Particle[] = [];

    const mouse = {
      x: -1000,
      y: -1000,
      previousX: -1000,
      previousY: -1000,
      vx: 0,
      vy: 0,
      active: false,
    };

    let time = 0;

    // Configuration
    const CONFIG = {
      particleCount,
      // Mouse interaction
      interactionRadius: 190,
      interactionStrength: 2.4,
      // Water / ripple
      waveStrength: 1.8,
      waveFrequency: 0.035,
      waveSpeed: 0.09,
      // Physics
      friction: 0.88,
      spring: 0.018,
      // Particle movement
      idleMovement: 0.14,
      // Center text clear zone
      centerX: 0.5,
      centerY: 0.44,
      centerRadiusX: 0.28,
      centerRadiusY: 0.22,
    };

    // Colors (Exact Lusion Studio Palette)
    const COLORS = [
      "#111111",
      "#202020",
      "#303030",
      "#4A4A4A",
      "#686868",
      "#8A8A8A",
      "#2563EB", // Royal Blue
      "#22C55E", // Neon Green
      "#EC4899", // Magenta Pink
      "#9333EA", // Purple
      "#EF4444", // Red
      "#F59E0B", // Yellow
    ];

    const SHAPES = [
      "circle",
      "triangle",
      "square",
      "diamond",
      "hexagon",
      "cross",
      "bar",
    ];

    const random = (min: number, max: number) => Math.random() * (max - min) + min;
    const clamp = (value: number, min: number, max: number) =>
      Math.max(min, Math.min(max, value));

    function isInsideCenter(x: number, y: number) {
      const cx = width * CONFIG.centerX;
      const cy = height * CONFIG.centerY;
      const dx = (x - cx) / (width * CONFIG.centerRadiusX);
      const dy = (y - cy) / (height * CONFIG.centerRadiusY);
      return dx * dx + dy * dy < 1;
    }

    function getParticlePosition() {
      let x: number;
      let y: number;
      let attempts = 0;
      do {
        x = random(0, width);
        const bottomBias = Math.pow(Math.random(), 1.7);
        y = height * (0.32 + bottomBias * 0.75);

        if (Math.random() < 0.35) {
          if (Math.random() < 0.5) {
            x = random(0, width * 0.28);
          } else {
            x = random(width * 0.72, width);
          }
          y = random(height * 0.2, height);
        }
        attempts++;
      } while (isInsideCenter(x, y) && attempts < 20);

      return {
        x: clamp(x, 0, width),
        y: clamp(y, 0, height),
      };
    }

    class Particle {
      x: number;
      y: number;
      originalX: number;
      originalY: number;
      vx: number;
      vy: number;
      size: number;
      shape: string;
      color: string;
      alpha: number;
      rotation: number;
      rotationSpeed: number;
      noiseOffset: number;
      depth: number;
      targetSize: number;

      constructor() {
        const position = getParticlePosition();
        this.x = position.x;
        this.y = position.y;
        this.originalX = this.x;
        this.originalY = this.y;
        this.vx = 0;
        this.vy = 0;
        this.size = random(2.5, 7.5);
        this.shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];

        const accentChance = Math.random();
        if (accentChance < 0.18) {
          this.color = COLORS[Math.floor(random(6, COLORS.length))];
        } else {
          this.color = COLORS[Math.floor(random(0, 6))];
        }

        this.alpha = random(0.5, 0.95);
        this.rotation = random(0, Math.PI * 2);
        this.rotationSpeed = random(-0.025, 0.025);
        this.noiseOffset = random(0, 1000);
        this.depth = random(0.5, 1.4);
        this.targetSize = this.size;
      }

      update() {
        // Idle organic movement
        const idleX =
          Math.sin(time * 0.002 + this.noiseOffset + this.originalY * 0.01) *
          CONFIG.idleMovement *
          this.depth;
        const idleY =
          Math.cos(time * 0.0018 + this.noiseOffset + this.originalX * 0.008) *
          CONFIG.idleMovement *
          this.depth;

        // Spring force toward original position
        const targetX = this.originalX + idleX;
        const targetY = this.originalY + idleY;
        this.vx += (targetX - this.x) * CONFIG.spring;
        this.vy += (targetY - this.y) * CONFIG.spring;

        // Mouse fluid water interaction
        if (mouse.active) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distanceSquared = dx * dx + dy * dy;
          const radius = CONFIG.interactionRadius * this.depth;

          if (distanceSquared < radius * radius) {
            const distance = Math.sqrt(distanceSquared) || 0.001;
            const normalizedX = dx / distance;
            const normalizedY = dy / distance;
            const normalizedDistance = distance / radius;
            const falloff = Math.pow(1 - normalizedDistance, 2.2);

            // Main repulsion
            const force = falloff * CONFIG.interactionStrength * this.depth;
            this.vx += normalizedX * force;
            this.vy += normalizedY * force;

            // Tangential water swirling force
            const tangentX = -normalizedY;
            const tangentY = normalizedX;
            const swirl = falloff * 0.7 * this.depth;
            this.vx += tangentX * swirl;
            this.vy += tangentY * swirl;

            // Radial wave ripple
            const wave = Math.sin(
              distance * CONFIG.waveFrequency - time * CONFIG.waveSpeed
            );
            const waveFalloff = Math.pow(1 - normalizedDistance, 2);
            const waveForce = wave * waveFalloff * CONFIG.waveStrength;
            this.vx += normalizedX * waveForce;
            this.vy += normalizedY * waveForce;

            // Mouse directional fluid motion
            this.vx += mouse.vx * falloff * 0.03;
            this.vy += mouse.vy * falloff * 0.03;

            // Particle size pulse
            this.targetSize = this.size * (1 + falloff * 0.8);
          }
        }

        // Smooth size animation
        this.size += (this.targetSize - this.size) * 0.12;
        this.targetSize = this.targetSize * 0.96 + this.size * 0.04;

        // Friction
        this.vx *= CONFIG.friction;
        this.vy *= CONFIG.friction;

        // Position update
        this.x += this.vx;
        this.y += this.vy;

        // Rotation update
        this.rotation += this.rotationSpeed;

        // Screen boundaries
        const margin = 20;
        if (this.x < -margin) {
          this.x = -margin;
          this.vx *= -0.5;
        }
        if (this.x > width + margin) {
          this.x = width + margin;
          this.vx *= -0.5;
        }
        if (this.y < -margin) {
          this.y = -margin;
          this.vy *= -0.5;
        }
        if (this.y > height + margin) {
          this.y = height + margin;
          this.vy *= -0.5;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        const s = this.size;

        switch (this.shape) {
          case "circle":
            ctx.beginPath();
            ctx.arc(0, 0, s * 0.55, 0, Math.PI * 2);
            ctx.fill();
            break;
          case "triangle":
            ctx.beginPath();
            ctx.moveTo(0, -s);
            ctx.lineTo(s, s);
            ctx.lineTo(-s, s);
            ctx.closePath();
            ctx.fill();
            break;
          case "square":
            ctx.fillRect(-s * 0.7, -s * 0.7, s * 1.4, s * 1.4);
            break;
          case "diamond":
            ctx.beginPath();
            ctx.moveTo(0, -s);
            ctx.lineTo(s * 0.7, 0);
            ctx.lineTo(0, s);
            ctx.lineTo(-s * 0.7, 0);
            ctx.closePath();
            ctx.fill();
            break;
          case "hexagon":
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
              const angle = (Math.PI / 3) * i;
              const px = Math.cos(angle) * s;
              const py = Math.sin(angle) * s;
              if (i === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.fill();
            break;
          case "cross":
            ctx.fillRect(-s * 0.25, -s, s * 0.5, s * 2);
            ctx.fillRect(-s, -s * 0.25, s * 2, s * 0.5);
            break;
          case "bar":
            ctx.fillRect(-s * 1.5, -s * 0.3, s * 3, s * 0.6);
            break;
        }
        ctx.restore();
      }
    }

    function resize() {
      if (!container || !canvas || !ctx) return;
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < CONFIG.particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function updateMouse(x: number, y: number) {
      mouse.vx = x - mouse.previousX;
      mouse.vy = y - mouse.previousY;
      mouse.previousX = x;
      mouse.previousY = y;
      mouse.x = x;
      mouse.y = y;
      mouse.active = true;
    }

    function handleMouseMove(event: MouseEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      updateMouse(event.clientX - rect.left, event.clientY - rect.top);
    }

    function handleMouseLeave() {
      mouse.active = false;
      mouse.vx = 0;
      mouse.vy = 0;
    }

    function handleTouchMove(event: TouchEvent) {
      if (!event.touches.length || !canvas) return;
      const touch = event.touches[0];
      const rect = canvas.getBoundingClientRect();
      updateMouse(touch.clientX - rect.left, touch.clientY - rect.top);
    }

    function handleTouchEnd() {
      mouse.active = false;
    }

    function drawMouseRipple() {
      if (!mouse.active || !ctx) return;
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        CONFIG.interactionRadius
      );
      gradient.addColorStop(0, "rgba(147, 51, 234, 0.04)");
      gradient.addColorStop(0.5, "rgba(147, 51, 234, 0.015)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, CONFIG.interactionRadius, 0, Math.PI * 2);
      ctx.fill();
    }

    function animate() {
      if (!ctx) return;
      time++;
      ctx.clearRect(0, 0, width, height);

      // Background Studio Fill
      ctx.fillStyle = "#FDFBF7";
      ctx.fillRect(0, 0, width, height);

      drawMouseRipple();

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      mouse.vx *= 0.85;
      mouse.vy *= 0.85;
      animationFrame = requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true });
    canvas.addEventListener("touchend", handleTouchEnd);

    resize();
    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
    };
  }, [particleCount]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full min-h-[580px] overflow-hidden bg-[#FDFBF7] select-none ${className}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block z-0" />
      <div className="relative z-10 w-full min-h-[580px] flex items-center justify-center pointer-events-auto">
        {children}
      </div>
    </div>
  );
}
