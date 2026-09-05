"use client";

import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import Link from "next/link";

interface CustomBody extends Matter.Body {
  shapeInfo?: {
    type:
      | "facebook"
      | "meta"
      | "instagram"
      | "whatsapp"
      | "tiktok"
      | "youtube"
      | "google"
      | "linkedin"
      | "pinterest"
      | "reddit"
      | "snapchat"
      | "twitter"
      | "threads"
      | "discord"
      | "telegram"
      | "spotify"
      | "shopify"
      | "roas";
    r: number;
    color: string;
    bgGradient?: [string, string];
    label?: string;
    emoji?: string;
  };
}

interface WaterRipple {
  x: number;
  y: number;
  r: number;
  maxR: number;
  opacity: number;
}

export function LusionEndSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const stage = containerRef.current;
    const canvas = canvasRef.current;
    if (!stage || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = stage.clientWidth || window.innerWidth;
    let H = 640;

    canvas.width = W;
    canvas.height = H;

    const { Engine, Bodies, Body, Composite, Mouse, MouseConstraint, Events, Runner } = Matter;

    // 1. Physics Engine Setup (Liquid Fluid Feel)
    const engine = Engine.create({
      gravity: { x: 0, y: 0.85 },
    });
    const world = engine.world;

    // 2. Boundaries
    const wallOpts = { isStatic: true, restitution: 0.5, friction: 0.15, render: { visible: false } };
    let ground: Matter.Body, leftWall: Matter.Body, rightWall: Matter.Body, ceiling: Matter.Body;

    function buildBounds() {
      if (ground) Composite.remove(world, [ground, leftWall, rightWall, ceiling]);
      const t = 120;
      ground = Bodies.rectangle(W / 2, H + t / 2 - 4, W * 2, t, wallOpts);
      leftWall = Bodies.rectangle(-t / 2, H / 2, t, H * 3, wallOpts);
      rightWall = Bodies.rectangle(W + t / 2, H / 2, t, H * 3, wallOpts);
      ceiling = Bodies.rectangle(W / 2, -t / 2 - 400, W * 2, t, wallOpts);
      Composite.add(world, [ground, leftWall, rightWall, ceiling]);
    }
    buildBounds();

    // 3. Platform Icon Spawners
    const shapes: CustomBody[] = [];

    function addBody(body: CustomBody, info: NonNullable<CustomBody["shapeInfo"]>) {
      body.shapeInfo = info;
      body.restitution = 0.8;
      body.friction = 0.08;
      body.frictionAir = 0.012; // Fluid resistance feel
      shapes.push(body);
      Composite.add(world, body);
    }

    const platformCreators = [
      (x: number, y: number, r: number) => {
        const b = Bodies.circle(x, y, r, {}) as CustomBody;
        addBody(b, { type: "facebook", r, color: "#1877F2", bgGradient: ["#0064E0", "#1877F2"], label: "Facebook" });
      },
      (x: number, y: number, r: number) => {
        const b = Bodies.circle(x, y, r, {}) as CustomBody;
        addBody(b, { type: "meta", r, color: "#0064E0", bgGradient: ["#0052CC", "#2563EB"], label: "Meta" });
      },
      (x: number, y: number, r: number) => {
        const b = Bodies.circle(x, y, r, {}) as CustomBody;
        addBody(b, { type: "instagram", r, color: "#E1306C", bgGradient: ["#F59E0B", "#E1306C"], label: "Instagram" });
      },
      (x: number, y: number, r: number) => {
        const b = Bodies.circle(x, y, r, {}) as CustomBody;
        addBody(b, { type: "whatsapp", r, color: "#25D366", bgGradient: ["#10B981", "#059669"], label: "WhatsApp" });
      },
      (x: number, y: number, r: number) => {
        const b = Bodies.circle(x, y, r, {}) as CustomBody;
        addBody(b, { type: "tiktok", r, color: "#000000", bgGradient: ["#18181B", "#000000"], label: "TikTok" });
      },
      (x: number, y: number, r: number) => {
        const b = Bodies.circle(x, y, r, {}) as CustomBody;
        addBody(b, { type: "youtube", r, color: "#FF0000", bgGradient: ["#DC2626", "#FF0000"], label: "YouTube" });
      },
      (x: number, y: number, r: number) => {
        const b = Bodies.circle(x, y, r, {}) as CustomBody;
        addBody(b, { type: "google", r, color: "#EA4335", bgGradient: ["#FFFFFF", "#F8FAFC"], label: "Google" });
      },
      (x: number, y: number, r: number) => {
        const b = Bodies.circle(x, y, r, {}) as CustomBody;
        addBody(b, { type: "linkedin", r, color: "#0A66C2", bgGradient: ["#0284C7", "#0369A1"], label: "LinkedIn" });
      },
      (x: number, y: number, r: number) => {
        const b = Bodies.circle(x, y, r, {}) as CustomBody;
        addBody(b, { type: "pinterest", r, color: "#E60023", bgGradient: ["#EF4444", "#B91C1C"], label: "Pinterest" });
      },
      (x: number, y: number, r: number) => {
        const b = Bodies.circle(x, y, r, {}) as CustomBody;
        addBody(b, { type: "reddit", r, color: "#FF4500", bgGradient: ["#F97316", "#C2410C"], label: "Reddit" });
      },
      (x: number, y: number, r: number) => {
        const b = Bodies.circle(x, y, r, {}) as CustomBody;
        addBody(b, { type: "snapchat", r, color: "#FFFC00", bgGradient: ["#FFFF00", "#EAB308"], label: "Snapchat" });
      },
      (x: number, y: number, r: number) => {
        const b = Bodies.circle(x, y, r, {}) as CustomBody;
        addBody(b, { type: "twitter", r, color: "#000000", bgGradient: ["#27272A", "#09090B"], label: "X" });
      },
      (x: number, y: number, r: number) => {
        const b = Bodies.circle(x, y, r, {}) as CustomBody;
        addBody(b, { type: "threads", r, color: "#111827", bgGradient: ["#1F2937", "#111827"], label: "Threads" });
      },
      (x: number, y: number, r: number) => {
        const b = Bodies.circle(x, y, r, {}) as CustomBody;
        addBody(b, { type: "discord", r, color: "#5865F2", bgGradient: ["#6366F1", "#4F46E5"], label: "Discord" });
      },
      (x: number, y: number, r: number) => {
        const b = Bodies.circle(x, y, r, {}) as CustomBody;
        addBody(b, { type: "telegram", r, color: "#24A1DE", bgGradient: ["#0EA5E9", "#0284C7"], label: "Telegram" });
      },
      (x: number, y: number, r: number) => {
        const b = Bodies.circle(x, y, r, {}) as CustomBody;
        addBody(b, { type: "spotify", r, color: "#1DB954", bgGradient: ["#22C55E", "#15803D"], label: "Spotify" });
      },
      (x: number, y: number, r: number) => {
        const b = Bodies.circle(x, y, r, {}) as CustomBody;
        addBody(b, { type: "shopify", r, color: "#95BF47", bgGradient: ["#84CC16", "#65A30D"], label: "Shopify" });
      },
      (x: number, y: number, r: number) => {
        const b = Bodies.circle(x, y, r, {}) as CustomBody;
        const emojis = ["🚀", "📈", "💰", "⚡", "🎯", "💥", "🔥", "🏆", "💎", "🌟", "👑", "💧"];
        const randEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        const grads: [string, string][] = [
          ["#38BDF8", "#0284C7"], // Watery Cyan
          ["#A855F7", "#7E22CE"],
          ["#EC4899", "#BE185D"],
          ["#3B82F6", "#1D4ED8"],
          ["#10B981", "#047857"],
        ];
        const chosenGrad = grads[Math.floor(Math.random() * grads.length)];
        addBody(b, { type: "roas", r, color: chosenGrad[0], bgGradient: chosenGrad, emoji: randEmoji });
      },
    ];

    function spawnField(count: number) {
      for (let i = 0; i < count; i++) {
        const x = 30 + Math.random() * (W - 60);
        const y = -1500 + Math.random() * 1450;
        const r = 18 + Math.random() * 16;
        const creator = platformCreators[i % platformCreators.length];
        creator(x, y, r);
      }
    }

    const COUNT = W < 700 ? 120 : 240;
    spawnField(COUNT);

    // 4. Mouse & Interactive Water Ripples
    const ripples: WaterRipple[] = [];
    const mouse = Mouse.create(canvas);
    mouse.pixelRatio = window.devicePixelRatio || 1;

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.25, damping: 0.12, render: { visible: false } },
    });
    Composite.add(world, mouseConstraint);

    function addWaterRipple(x: number, y: number) {
      ripples.push({
        x,
        y,
        r: 5,
        maxR: 90 + Math.random() * 50,
        opacity: 0.7,
      });
    }

    const handleMouseDown = (e: MouseEvent) => {
      canvas.classList.add("grabbing");
      const rect = canvas.getBoundingClientRect();
      addWaterRipple(e.clientX - rect.left, e.clientY - rect.top);
    };
    const handleMouseUp = () => canvas.classList.remove("grabbing");

    canvas.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const pointer = { x: -9999, y: -9999, active: false, px: -9999, py: -9999 };

    function updatePointer(clientX: number, clientY: number) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      pointer.px = pointer.x;
      pointer.py = pointer.y;
      pointer.x = clientX - rect.left;
      pointer.y = clientY - rect.top;
      pointer.active = true;

      // Spawn subtle water motion ripples on drag
      if (Math.hypot(pointer.x - pointer.px, pointer.y - pointer.py) > 12 && Math.random() < 0.3) {
        addWaterRipple(pointer.x, pointer.y);
      }
    }

    const handleMouseMove = (e: MouseEvent) => updatePointer(e.clientX, e.clientY);
    const handleMouseLeave = () => { pointer.active = false; };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) updatePointer(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Water Repulsion Field
    const REPEL_RADIUS = 240;

    Events.on(engine, "beforeUpdate", () => {
      if (!pointer.active) return;
      const vx = pointer.x - pointer.px;
      const vy = pointer.y - pointer.py;
      const speed = Math.min(1.5, Math.hypot(vx, vy) / 25);

      for (const b of shapes) {
        const dx = b.position.x - pointer.x;
        const dy = b.position.y - pointer.y;
        const dist = Math.hypot(dx, dy);

        if (dist < REPEL_RADIUS && dist > 0.001) {
          const falloff = Math.pow(1 - dist / REPEL_RADIUS, 1.8);
          const forceX = (dx / dist) * falloff * 0.028 * (0.6 + speed);
          const forceY = (dy / dist) * falloff * 0.028 - falloff * 0.012 * (0.8 + speed);

          Body.applyForce(b, b.position, { x: forceX, y: forceY });
          Body.setAngularVelocity(b, b.angularVelocity + (Math.random() - 0.5) * 0.25);
        }
      }
    });

    // 5. Render Loop with Animated Water Waves & Physics Badges
    let waveTime = 0;

    function drawWaterWaves() {
      if (!ctx) return;
      waveTime += 0.03;

      // Draw Expanding Water Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i];
        rip.r += 2.2;
        rip.opacity -= 0.015;

        if (rip.opacity <= 0 || rip.r >= rip.maxR) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56, 189, 248, ${rip.opacity})`;
        ctx.lineWidth = 3;
        ctx.shadowColor = "rgba(56, 189, 248, 0.4)";
        ctx.shadowBlur = 10;
        ctx.stroke();
        ctx.restore();
      }

      // Draw Dynamic Water Liquid Sine Waves at Bottom Surface
      ctx.save();
      const waveY = H - 80;

      // Wave Layer 1 (Teal Water Translucent)
      ctx.beginPath();
      ctx.moveTo(0, H);
      for (let x = 0; x <= W; x += 15) {
        const y = waveY + Math.sin(x * 0.015 + waveTime) * 12 + Math.cos(x * 0.008 + waveTime * 1.2) * 8;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(W, H);
      ctx.closePath();
      ctx.fillStyle = "rgba(56, 189, 248, 0.12)";
      ctx.fill();

      // Wave Layer 2 (Purple Aqua Water Wave)
      ctx.beginPath();
      ctx.moveTo(0, H);
      for (let x = 0; x <= W; x += 15) {
        const y = waveY + 10 + Math.sin(x * 0.02 - waveTime * 1.4) * 10 + Math.sin(x * 0.01 + waveTime) * 6;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(W, H);
      ctx.closePath();
      ctx.fillStyle = "rgba(168, 85, 247, 0.1)";
      ctx.fill();

      ctx.restore();
    }

    function drawShape(b: CustomBody) {
      if (!ctx || !b.shapeInfo) return;
      const info = b.shapeInfo;
      const r = info.r;

      ctx.save();
      ctx.translate(b.position.x, b.position.y);
      ctx.rotate(b.angle);

      // Radial Drop Shadow
      ctx.shadowColor = "rgba(15, 15, 17, 0.2)";
      ctx.shadowBlur = 10;
      ctx.shadowOffsetY = 4;

      // Gradient Fill
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);

      if (info.bgGradient) {
        const grad = ctx.createLinearGradient(-r, -r, r, r);
        grad.addColorStop(0, info.bgGradient[0]);
        grad.addColorStop(1, info.bgGradient[1]);
        ctx.fillStyle = grad;
      } else {
        ctx.fillStyle = info.color;
      }
      ctx.fill();

      // Dark Border
      ctx.shadowBlur = 0;
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = "#16171A";
      ctx.stroke();

      // Icon Graphics
      ctx.fillStyle = info.type === "google" || info.type === "snapchat" ? "#16171A" : "#FFFFFF";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      if (info.type === "facebook") {
        ctx.font = `900 ${Math.round(r * 1.25)}px Arial, sans-serif`;
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("f", 0, r * 0.04);
      } else if (info.type === "meta") {
        ctx.font = `bold ${Math.round(r * 1.15)}px sans-serif`;
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("∞", 0, 0);
      } else if (info.type === "google") {
        ctx.font = `900 ${Math.round(r * 1.0)}px Arial, sans-serif`;
        ctx.fillStyle = "#16171A";
        ctx.fillText("G", 0, 0);
      } else if (info.type === "tiktok") {
        ctx.font = `bold ${Math.round(r * 0.95)}px sans-serif`;
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("♪", 0, 0);
      } else if (info.type === "youtube") {
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        const s = r * 0.55;
        ctx.moveTo(-s * 0.4, -s);
        ctx.lineTo(s * 0.85, 0);
        ctx.lineTo(-s * 0.4, s);
        ctx.closePath();
        ctx.fill();
      } else if (info.type === "instagram") {
        const s = r * 0.45;
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        if (typeof ctx.roundRect === "function") {
          ctx.roundRect(-s, -s, s * 2, s * 2, s * 0.4);
        } else {
          ctx.rect(-s, -s, s * 2, s * 2);
        }
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, s * 0.45, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(s * 0.5, -s * 0.5, s * 0.12, 0, Math.PI * 2);
        ctx.fill();
      } else if (info.type === "whatsapp") {
        ctx.font = `bold ${Math.round(r * 0.95)}px sans-serif`;
        ctx.fillText("💬", 0, 0);
      } else if (info.type === "linkedin") {
        ctx.font = `900 ${Math.round(r * 0.9)}px Arial, sans-serif`;
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("in", 0, -r * 0.05);
      } else if (info.type === "pinterest") {
        ctx.font = `900 ${Math.round(r * 1.05)}px Arial, sans-serif`;
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("P", 0, 0);
      } else if (info.type === "reddit") {
        ctx.font = `bold ${Math.round(r * 0.85)}px sans-serif`;
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("r/", 0, 0);
      } else if (info.type === "snapchat") {
        ctx.font = `${Math.round(r * 0.9)}px sans-serif`;
        ctx.fillText("👻", 0, 0);
      } else if (info.type === "twitter") {
        ctx.font = `bold ${Math.round(r * 0.85)}px sans-serif`;
        ctx.fillText("𝕏", 0, 0);
      } else if (info.type === "threads") {
        ctx.font = `bold ${Math.round(r * 0.95)}px sans-serif`;
        ctx.fillText("@", 0, 0);
      } else if (info.type === "discord") {
        ctx.font = `${Math.round(r * 0.9)}px sans-serif`;
        ctx.fillText("👾", 0, 0);
      } else if (info.type === "telegram") {
        ctx.font = `${Math.round(r * 0.9)}px sans-serif`;
        ctx.fillText("✈", 0, 0);
      } else if (info.type === "spotify") {
        ctx.font = `bold ${Math.round(r * 0.9)}px sans-serif`;
        ctx.fillText("🟢", 0, 0);
      } else if (info.type === "shopify") {
        ctx.font = `${Math.round(r * 0.9)}px sans-serif`;
        ctx.fillText("🛍️", 0, 0);
      } else if (info.type === "roas") {
        ctx.font = `${Math.round(r * 1.05)}px sans-serif`;
        ctx.fillText(info.emoji || "🚀", 0, 0);
      }

      ctx.restore();
    }

    let animId: number;
    function renderLoop() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      for (const b of shapes) drawShape(b);
      drawWaterWaves();
      animId = requestAnimationFrame(renderLoop);
    }

    const runner = Runner.create();
    Runner.run(runner, engine);
    renderLoop();

    function onResize() {
      if (!stage || !canvas) return;
      W = stage.clientWidth || window.innerWidth;
      canvas.width = W;
      canvas.height = H;
      buildBounds();
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      Runner.stop(runner);
      Composite.clear(world, false);
      Engine.clear(engine);
    };
  }, []);

  return (
    <section id="end-section" className="py-24 px-4 bg-[#E9EAEE] text-stone-900 border-t border-stone-300 relative overflow-hidden select-none min-h-[640px] flex items-center justify-center">
      
      {/* SVG Water Ripple Turbulence & Liquid Distortion Filter */}
      <svg className="hidden">
        <defs>
          <filter id="water-wave-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="3" result="noise" seed="5">
              <animate attributeName="baseFrequency" dur="10s" values="0.012 0.02; 0.022 0.035; 0.012 0.02" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Container Stage & Canvas with Water Filter Effect */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block cursor-grab active:cursor-grabbing z-0"
          style={{ filter: "url(#water-wave-filter)" }}
        />
      </div>

      {/* Ambient Water Reflection Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-purple-500/5 to-transparent pointer-events-none z-0" />

      {/* DevTools DOM Structure matching Lusion.co/projects #end-section */}
      <div id="end-section-outer" className="w-full max-w-6xl mx-auto text-center relative z-10 pointer-events-none">
        <div id="end-section-inner" className="relative">
          
          {/* Corner Plus Crosses (+) matching Lusion layout */}
          <div id="end-section-content-crosses" className="absolute inset-0 pointer-events-none flex justify-between items-start px-4 sm:px-12 pt-2">
            <span className="text-2xl text-stone-400 font-light font-mono">+</span>
            <span className="text-2xl text-stone-400 font-light font-mono">+</span>
          </div>

          <div id="end-section-content" className="pt-2">
            
            {/* Subtitle */}
            <div id="end-section-subtitle" className="mb-6">
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-purple-700 uppercase bg-purple-100 px-4 py-1.5 rounded-full border border-purple-200 inline-block shadow-sm">
                ✦ READY TO BUILD A PREDICTABLE CLIENT ACQUISITION SYSTEM?
              </span>
            </div>

            {/* Title with Heavy Underlines */}
            <div id="end-section-title" className="inline-block group cursor-pointer pointer-events-auto">
              <Link href="/contact" className="block">
                <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[115px] font-black text-purple-600 tracking-tight leading-[0.92] uppercase font-hero">
                  <span className="block border-b-6 sm:border-b-8 md:border-b-[10px] border-purple-600 pb-2 sm:pb-4 group-hover:text-purple-800 group-hover:border-purple-800 transition-colors">
                    LET&apos;S WORK
                  </span>
                  <span className="block border-b-6 sm:border-b-8 md:border-b-[10px] border-purple-600 pt-2 pb-2 sm:pb-4 group-hover:text-purple-800 group-hover:border-purple-800 transition-colors">
                    TOGETHER!
                  </span>
                </h1>
              </Link>
            </div>

          </div>

          {/* Lower boundary crosses */}
          <div className="flex justify-between px-8 pt-16 text-stone-400 font-mono text-xl pointer-events-none">
            <span>+</span>
            <span>+</span>
          </div>

        </div>
      </div>
    </section>
  );
}
