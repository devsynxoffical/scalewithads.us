"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Hero3DCanvasProps = {
  className?: string;
};

// Canvas-based texture generator for ultra-crisp 3D glass/metal data cards
function createCardTexture({
  title,
  value,
  badge,
  icon,
  isRedAccent = false,
}: {
  title: string;
  value: string;
  badge?: string;
  icon?: string;
  isRedAccent?: boolean;
}): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    // Dark metallic glass background
    const bgGradient = ctx.createLinearGradient(0, 0, 512, 256);
    bgGradient.addColorStop(0, "rgba(18, 18, 22, 0.95)");
    bgGradient.addColorStop(1, "rgba(9, 9, 11, 0.98)");
    ctx.fillStyle = bgGradient;
    ctx.beginPath();
    ctx.roundRect(8, 8, 496, 240, 24);
    ctx.fill();

    // Border highlight
    ctx.lineWidth = 4;
    const borderGradient = ctx.createLinearGradient(0, 0, 512, 256);
    if (isRedAccent) {
      borderGradient.addColorStop(0, "rgba(237, 28, 36, 0.9)");
      borderGradient.addColorStop(1, "rgba(237, 28, 36, 0.3)");
    } else {
      borderGradient.addColorStop(0, "rgba(255, 255, 255, 0.35)");
      borderGradient.addColorStop(0.5, "rgba(255, 255, 255, 0.1)");
      borderGradient.addColorStop(1, "rgba(237, 28, 36, 0.4)");
    }
    ctx.strokeStyle = borderGradient;
    ctx.beginPath();
    ctx.roundRect(8, 8, 496, 240, 24);
    ctx.stroke();

    // Red accent corner glow line
    if (isRedAccent) {
      ctx.fillStyle = "#ed1c24";
      ctx.shadowColor = "#ed1c24";
      ctx.shadowBlur = 15;
      ctx.fillRect(32, 24, 60, 6);
      ctx.shadowBlur = 0;
    }

    // Top icon/badge
    if (badge) {
      ctx.font = "bold 20px system-ui, sans-serif";
      ctx.fillStyle = isRedAccent ? "#ed1c24" : "#a1a1aa";
      ctx.fillText(badge.toUpperCase(), 36, 54);
    }

    if (icon) {
      ctx.font = "32px system-ui, sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.fillText(icon, 430, 58);
    }

    // Title
    ctx.font = "600 24px system-ui, sans-serif";
    ctx.fillStyle = "#e4e4e7";
    ctx.fillText(title, 36, 105);

    // Value / Main Stat
    ctx.font = "bold 56px system-ui, sans-serif";
    ctx.fillStyle = isRedAccent ? "#ff333a" : "#ffffff";
    ctx.shadowColor = isRedAccent ? "rgba(237, 28, 36, 0.6)" : "transparent";
    ctx.shadowBlur = isRedAccent ? 20 : 0;
    ctx.fillText(value, 36, 185);
    ctx.shadowBlur = 0;

    // Small sparkline visual
    ctx.beginPath();
    ctx.moveTo(360, 190);
    ctx.lineTo(390, 170);
    ctx.lineTo(420, 180);
    ctx.lineTo(460, 135);
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#ed1c24";
    ctx.stroke();

    // Dot at end of line
    ctx.beginPath();
    ctx.arc(460, 135, 6, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// Custom 3D Arrow Geometry Generator
function create3DArrowGeometry(): THREE.BufferGeometry {
  const shape = new THREE.Shape();
  // Arrow profile pointing UP
  shape.moveTo(0, 1.2);       // Arrow tip
  shape.lineTo(0.7, 0.1);     // Right wing outer
  shape.lineTo(0.35, 0.1);    // Right stem inner
  shape.lineTo(0.35, -1.2);   // Bottom right stem
  shape.lineTo(-0.35, -1.2);  // Bottom left stem
  shape.lineTo(-0.35, 0.1);   // Left stem inner
  shape.lineTo(-0.7, 0.1);    // Left wing outer
  shape.closePath();

  const extrudeSettings = {
    steps: 1,
    depth: 0.28,
    bevelEnabled: true,
    bevelThickness: 0.06,
    bevelSize: 0.05,
    bevelSegments: 4,
  };

  const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  geom.center();
  return geom;
}

// Custom 3D Meta Loop (Infinity Ribbon) Geometry
function createMetaLoopGeometry(): THREE.BufferGeometry {
  // Parametric curve for 3D infinity loop
  class InfinityCurve extends THREE.Curve<THREE.Vector3> {
    scale: number;
    constructor(scale = 1) {
      super();
      this.scale = scale;
    }
    getPoint(t: number, optionalTarget = new THREE.Vector3()) {
      const u = t * Math.PI * 2;
      const x = (Math.cos(u) / (1 + Math.sin(u) * Math.sin(u))) * this.scale * 2.2;
      const y = ((Math.sin(u) * Math.cos(u)) / (1 + Math.sin(u) * Math.sin(u))) * this.scale * 1.5;
      const z = Math.sin(u * 2) * 0.45;
      return optionalTarget.set(x, y, z);
    }
  }

  const path = new InfinityCurve(1.1);
  return new THREE.TubeGeometry(path, 128, 0.18, 24, true);
}

export function Hero3DCanvas({ className }: Hero3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduce = prefersReducedMotion();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070709, 0.035);

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(0, 0, 12);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(dpr);
    renderer.setSize(1, 1);
    container.appendChild(renderer.domElement);

    const resize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();

    // Mouse Tracking for Parallax
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouse.targetX = x * 2;
      mouse.targetY = -y * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    /* ========================================================================
       LIGHTING (Cinematic Dark + Red Glow Specular Highlights)
       ======================================================================== */
    const ambientLight = new THREE.AmbientLight(0x16161a, 1.2);
    
    // Key Light - White Specular highlight on dark metal edges
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(-6, 8, 10);

    // Rim Light - Red Atmospheric backlight
    const redRimLight = new THREE.PointLight(0xed1c24, 12, 22);
    redRimLight.position.set(5, 2, -2);

    // Dynamic Arrow Light (Follows profit arrow, illuminating floating cards)
    const arrowLight = new THREE.PointLight(0xff2b34, 18, 8);
    
    scene.add(ambientLight, keyLight, redRimLight, arrowLight);

    /* ========================================================================
       MATERIALS (75% Dark Metal, 15% White Specular, 10% Red Glow)
       ======================================================================== */
    const darkMetalMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x121215,
      metalness: 0.9,
      roughness: 0.22,
      clearcoat: 0.5,
      clearcoatRoughness: 0.1,
      reflectivity: 0.8,
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1a1a20,
      metalness: 0.1,
      roughness: 0.15,
      transmission: 0.8,
      opacity: 0.9,
      transparent: true,
      ior: 1.4,
    });

    const redGlowMaterial = new THREE.MeshStandardMaterial({
      color: 0xed1c24,
      emissive: 0xed1c24,
      emissiveIntensity: 2.2,
      roughness: 0.15,
      metalness: 0.4,
    });

    const whiteHighlightMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveIntensity: 0.3,
      metalness: 0.8,
      roughness: 0.1,
    });

    /* ========================================================================
       RIGHT-SIDE ECOSYSTEM GROUP (Z-Depth parallax layers)
       ======================================================================== */
    const ecosystemGroup = new THREE.Group();
    ecosystemGroup.position.set(3.6, 0.2, 0); // Positioned on right side (~55%)
    scene.add(ecosystemGroup);

    // 1. Central 3D Meta Infinity Ribbon
    const metaLoopGeo = createMetaLoopGeometry();
    const metaLoopMesh = new THREE.Mesh(metaLoopGeo, darkMetalMaterial);
    metaLoopMesh.scale.setScalar(1.25);
    ecosystemGroup.add(metaLoopMesh);

    // Embedded Red Glowing Core Strand
    const metaInnerGeo = new THREE.TorusKnotGeometry(1.65, 0.04, 128, 16, 2, 3);
    const metaInnerMesh = new THREE.Mesh(metaInnerGeo, redGlowMaterial);
    ecosystemGroup.add(metaInnerMesh);

    // 2. Concentric Orbital Rings
    const orbitalRingGeo1 = new THREE.TorusGeometry(3.2, 0.025, 16, 100);
    const orbitalRing1 = new THREE.Mesh(orbitalRingGeo1, whiteHighlightMaterial);
    orbitalRing1.rotation.x = Math.PI / 3;
    ecosystemGroup.add(orbitalRing1);

    const orbitalRingGeo2 = new THREE.TorusGeometry(4.1, 0.02, 16, 100);
    const orbitalRing2 = new THREE.Mesh(orbitalRingGeo2, darkMetalMaterial);
    orbitalRing2.rotation.y = Math.PI / 4;
    ecosystemGroup.add(orbitalRing2);

    /* ========================================================================
       FLOATING 3D SOCIAL & ADVERTISING MESHS
       ======================================================================== */
    const floatingObjects: Array<{
      mesh: THREE.Object3D;
      rotSpeedX: number;
      rotSpeedY: number;
      rotSpeedZ: number;
      floatSpeed: number;
      floatAmp: number;
      baseY: number;
    }> = [];

    // Helper to add floating mesh
    const addFloatingObject = (
      mesh: THREE.Object3D,
      x: number,
      y: number,
      z: number,
      scale = 1
    ) => {
      mesh.position.set(x, y, z);
      mesh.scale.setScalar(scale);
      scene.add(mesh);

      floatingObjects.push({
        mesh,
        rotSpeedX: (Math.random() - 0.5) * 0.008,
        rotSpeedY: (Math.random() - 0.5) * 0.012,
        rotSpeedZ: (Math.random() - 0.5) * 0.006,
        floatSpeed: 0.8 + Math.random() * 0.8,
        floatAmp: 0.15 + Math.random() * 0.15,
        baseY: y,
      });
    };

    // Instagram 3D Badge (Extruded Box + Lens Ring)
    const instaGroup = new THREE.Group();
    const instaBoxGeo = new THREE.BoxGeometry(0.8, 0.8, 0.2);
    const instaBox = new THREE.Mesh(instaBoxGeo, darkMetalMaterial);
    const instaRingGeo = new THREE.TorusGeometry(0.22, 0.05, 16, 32);
    const instaRing = new THREE.Mesh(instaRingGeo, redGlowMaterial);
    instaRing.position.z = 0.12;
    const instaDotGeo = new THREE.SphereGeometry(0.06, 16, 16);
    const instaDot = new THREE.Mesh(instaDotGeo, whiteHighlightMaterial);
    instaDot.position.set(0.24, 0.24, 0.12);
    instaGroup.add(instaBox, instaRing, instaDot);
    addFloatingObject(instaGroup, 2.2, 2.5, 1.2, 0.95);

    // Facebook 3D Badge
    const fbGroup = new THREE.Group();
    const fbBoxGeo = new THREE.BoxGeometry(0.8, 0.8, 0.2);
    const fbBox = new THREE.Mesh(fbBoxGeo, glassMaterial);
    // Extruded "f" bar
    const fbBar1 = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.55, 0.25), redGlowMaterial);
    fbBar1.position.set(0.08, -0.05, 0.05);
    const fbBar2 = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.14, 0.25), redGlowMaterial);
    fbBar2.position.set(0.08, 0.08, 0.05);
    fbGroup.add(fbBox, fbBar1, fbBar2);
    addFloatingObject(fbGroup, 5.2, -1.8, 0.8, 0.9);

    // 3D Audience Target Reticle (Concentric Rings + Laser Dot)
    const targetGroup = new THREE.Group();
    const tRing1 = new THREE.Mesh(new THREE.TorusGeometry(0.65, 0.02, 16, 32), redGlowMaterial);
    const tRing2 = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.02, 16, 32), whiteHighlightMaterial);
    const tCenter = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 16), redGlowMaterial);
    targetGroup.add(tRing1, tRing2, tCenter);
    addFloatingObject(targetGroup, 5.5, 2.0, -0.8, 1.1);

    // 3D Conversion Funnel Mesh
    const funnelGeo = new THREE.CylinderGeometry(0.7, 0.15, 1.0, 24, 1, true);
    const funnelMesh = new THREE.Mesh(funnelGeo, darkMetalMaterial);
    const funnelInnerGeo = new THREE.CylinderGeometry(0.5, 0.05, 0.95, 24);
    const funnelInner = new THREE.Mesh(funnelInnerGeo, redGlowMaterial);
    const funnelGroup = new THREE.Group();
    funnelGroup.add(funnelMesh, funnelInner);
    addFloatingObject(funnelGroup, 1.2, -2.8, 0.5, 0.85);

    // Abstract Chrome Spheres & Dark Torus Nodes
    for (let i = 0; i < 6; i++) {
      const sphereGeo = new THREE.SphereGeometry(0.25 + Math.random() * 0.2, 32, 32);
      const sphereMat = Math.random() > 0.4 ? darkMetalMaterial : redGlowMaterial;
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      const px = 1.0 + (Math.random() - 0.2) * 5.5;
      const py = -3.5 + Math.random() * 7.0;
      const pz = -2.5 + Math.random() * 4.0;
      addFloatingObject(sphere, px, py, pz, 0.7 + Math.random() * 0.5);
    }

    /* ========================================================================
       PROFIT DATA CARDS (Activated by ascending Profit Arrow!)
       ======================================================================== */
    type ProfitCardNode = {
      mesh: THREE.Mesh;
      baseScale: number;
      targetScale: number;
      currentScale: number;
      baseY: number;
      glowIntensity: number;
      position: THREE.Vector3;
      material: THREE.MeshStandardMaterial;
    };

    const profitCardNodes: ProfitCardNode[] = [];

    const createProfitCardMesh = (
      title: string,
      value: string,
      badge: string,
      x: number,
      y: number,
      z: number,
      isRed = false
    ) => {
      const texture = createCardTexture({ title, value, badge, isRedAccent: isRed });
      const cardGeo = new THREE.BoxGeometry(1.6, 0.8, 0.06);
      const cardMat = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        roughness: 0.2,
        metalness: 0.5,
        emissive: isRed ? 0xed1c24 : 0xffffff,
        emissiveIntensity: isRed ? 0.4 : 0.05,
      });

      const mesh = new THREE.Mesh(cardGeo, cardMat);
      mesh.position.set(x, y, z);
      scene.add(mesh);

      const node: ProfitCardNode = {
        mesh,
        baseScale: 1.0,
        targetScale: 1.0,
        currentScale: 1.0,
        baseY: y,
        glowIntensity: isRed ? 0.4 : 0.05,
        position: new THREE.Vector3(x, y, z),
        material: cardMat,
      };

      profitCardNodes.push(node);
      return node;
    };

    // Data cards placed along the ascending trajectory
    createProfitCardMesh("CAMPAIGN ROAS", "4.8x", "PERFORMANCE", 2.2, -3.2, 1.2, true);
    createProfitCardMesh("MONTHLY LEADS", "+127", "CONVERSIONS", 4.5, -1.8, 0.4, false);
    createProfitCardMesh("CONVERSION RATE", "+38%", "GROWTH NODE", 2.6, 0.2, 1.5, true);
    createProfitCardMesh("AD REVENUE", "$12.4K", "PROFIT TARGET", 5.0, 1.2, -0.2, true);
    createProfitCardMesh("ACCOUNT REVENUE", "+71%", "SCALE METRIC", 3.2, 3.0, 0.8, true);

    /* ========================================================================
       MAJOR 3D PROFIT GROWTH ARROW (Ascending Animation Storytelling)
       ======================================================================== */
    const arrowGeo = create3DArrowGeometry();
    const arrowMesh = new THREE.Mesh(arrowGeo, redGlowMaterial);
    scene.add(arrowMesh);

    // 3D Ascending Curve Trajectory Spline
    const arrowCurvePoints = [
      new THREE.Vector3(1.5, -4.5, 1.0),
      new THREE.Vector3(2.5, -2.5, 1.5),
      new THREE.Vector3(3.8, 0.0, 1.2),
      new THREE.Vector3(4.8, 2.2, 0.2),
      new THREE.Vector3(5.8, 4.2, -1.0),
    ];
    const arrowCurve = new THREE.CatmullRomCurve3(arrowCurvePoints);

    // Arrow Trail Particles
    const trailParticleCount = 120;
    const trailGeo = new THREE.BufferGeometry();
    const trailPositions = new Float32Array(trailParticleCount * 3);

    for (let i = 0; i < trailParticleCount; i++) {
      trailPositions[i * 3] = 0;
      trailPositions[i * 3 + 1] = -100;
      trailPositions[i * 3 + 2] = 0;
    }

    trailGeo.setAttribute("position", new THREE.BufferAttribute(trailPositions, 3));
    const trailMat = new THREE.PointsMaterial({
      color: 0xff333a,
      size: 0.12,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const trailParticles = new THREE.Points(trailGeo, trailMat);
    scene.add(trailParticles);

    /* ========================================================================
       REAL 3D REVENUE GROWTH GRAPH (TubeGeometry Growth Curve)
       ======================================================================== */
    const graphCurvePoints = [
      new THREE.Vector3(1.0, -3.2, -1.0),
      new THREE.Vector3(2.2, -2.6, -0.8),
      new THREE.Vector3(3.5, -1.2, -0.5),
      new THREE.Vector3(4.6, 0.8, -0.2),
      new THREE.Vector3(6.0, 2.8, -0.6),
    ];
    const graphCurve = new THREE.CatmullRomCurve3(graphCurvePoints);
    const graphGeo = new THREE.TubeGeometry(graphCurve, 64, 0.06, 12, false);
    const graphMesh = new THREE.Mesh(graphGeo, redGlowMaterial);
    scene.add(graphMesh);

    // Milestone Data Spheres on Graph ($2K -> $20K)
    const graphNodes = [
      { pos: new THREE.Vector3(1.0, -3.2, -1.0), label: "$2K" },
      { pos: new THREE.Vector3(2.2, -2.6, -0.8), label: "$5K" },
      { pos: new THREE.Vector3(3.5, -1.2, -0.5), label: "$8K" },
      { pos: new THREE.Vector3(4.6, 0.8, -0.2), label: "$12K" },
      { pos: new THREE.Vector3(6.0, 2.8, -0.6), label: "$20K" },
    ];

    graphNodes.forEach((node) => {
      const nodeGeo = new THREE.SphereGeometry(0.14, 16, 16);
      const nodeMesh = new THREE.Mesh(nodeGeo, whiteHighlightMaterial);
      nodeMesh.position.copy(node.pos);
      scene.add(nodeMesh);
    });

    /* ========================================================================
       BACKGROUND & ATMOSPHERIC PARTICLE SYSTEM (1,200 Particles)
       ======================================================================== */
    const particleCount = 1200;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.4) * 22;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 12 - 2;

      // Color distribution: 60% white/gray, 30% charcoal, 10% red
      const rand = Math.random();
      if (rand > 0.9) {
        particleColors[i * 3] = 0.93; // R
        particleColors[i * 3 + 1] = 0.11; // G
        particleColors[i * 3 + 2] = 0.14; // B
      } else if (rand > 0.3) {
        particleColors[i * 3] = 0.8;
        particleColors[i * 3 + 1] = 0.8;
        particleColors[i * 3 + 2] = 0.85;
      } else {
        particleColors[i * 3] = 0.25;
        particleColors[i * 3 + 1] = 0.25;
        particleColors[i * 3 + 2] = 0.3;
      }
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    /* ========================================================================
       3D LINE CONNECTIONS & LIVE PULSES
       ======================================================================== */
    const connectionPoints = [
      new THREE.Vector3(1.2, -2.8, 0.5),  // Funnel
      new THREE.Vector3(2.2, -3.2, 1.2),  // ROAS Card
      new THREE.Vector3(3.6, 0.2, 0.0),   // Meta Core
      new THREE.Vector3(5.5, 2.0, -0.8),  // Target Reticle
      new THREE.Vector3(5.0, 1.2, -0.2),  // Revenue Card
    ];

    const lineGeo = new THREE.BufferGeometry().setFromPoints(connectionPoints);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xed1c24,
      transparent: true,
      opacity: 0.35,
    });
    const connectionLine = new THREE.Line(lineGeo, lineMat);
    scene.add(connectionLine);

    // Dynamic pulse sphere traveling along lines
    const pulseGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const pulseMesh = new THREE.Mesh(pulseGeo, redGlowMaterial);
    scene.add(pulseMesh);

    /* ========================================================================
       MAIN ANIMATION LOOP (Continuous 60FPS WebGL Render)
       ======================================================================== */
    let rafId = 0;
    let running = true;
    let visible = true;
    const clock = new THREE.Clock();

    let arrowProgress = 0;
    let pulseProgress = 0;

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(container);

    const render = () => {
      if (running && visible && !document.hidden) {
        const elapsedTime = clock.getElapsedTime();

        // 1. Lerp Camera Position (Smooth Mouse Parallax)
        mouse.x += (mouse.targetX - mouse.x) * 0.04;
        mouse.y += (mouse.targetY - mouse.y) * 0.04;

        camera.position.x = mouse.x * 0.8;
        camera.position.y = mouse.y * 0.5;
        camera.lookAt(1.5, 0, 0);

        // 2. Animate Main Ecosystem & Orbital Rings
        ecosystemGroup.rotation.y = elapsedTime * 0.15;
        metaLoopMesh.rotation.z = Math.sin(elapsedTime * 0.5) * 0.1;
        orbitalRing1.rotation.z = elapsedTime * 0.25;
        orbitalRing2.rotation.z = -elapsedTime * 0.18;

        // 3. Animate Floating 3D Objects
        floatingObjects.forEach((obj) => {
          obj.mesh.rotation.x += obj.rotSpeedX;
          obj.mesh.rotation.y += obj.rotSpeedY;
          obj.mesh.rotation.z += obj.rotSpeedZ;
          obj.mesh.position.y =
            obj.baseY + Math.sin(elapsedTime * obj.floatSpeed) * obj.floatAmp;
        });

        // 4. Animate Profit Arrow Trajectory (Bottom -> Top loop)
        arrowProgress = (arrowProgress + 0.0035) % 1.0;
        const currentArrowPos = arrowCurve.getPoint(arrowProgress);
        const tangent = arrowCurve.getTangent(arrowProgress);

        arrowMesh.position.copy(currentArrowPos);

        // Orient Arrow along tangent vector
        const axis = new THREE.Vector3(0, 1, 0);
        arrowMesh.quaternion.setFromUnitVectors(axis, tangent.normalize());

        // Scale Arrow from 0.8 -> 1.18 during flight
        const arrowScale = 0.8 + Math.sin(arrowProgress * Math.PI) * 0.38;
        arrowMesh.scale.setScalar(arrowScale);

        // Position Dynamic Red Light at arrow tip
        arrowLight.position.copy(currentArrowPos);

        // 5. Arrow Proximity Activation on Profit Data Cards
        profitCardNodes.forEach((node) => {
          const dist = currentArrowPos.distanceTo(node.position);
          if (dist < 1.6) {
            node.targetScale = 1.15;
            node.material.emissiveIntensity = 1.2;
            node.mesh.position.y = node.baseY + (1.6 - dist) * 0.2;
          } else {
            node.targetScale = node.baseScale;
            node.material.emissiveIntensity +=
              (node.glowIntensity - node.material.emissiveIntensity) * 0.05;
            node.mesh.position.y += (node.baseY - node.mesh.position.y) * 0.08;
          }

          // Smooth lerp scale
          node.currentScale += (node.targetScale - node.currentScale) * 0.1;
          node.mesh.scale.setScalar(node.currentScale);
        });

        // 6. Arrow Particle Trail
        const posAttr = trailGeo.attributes.position as THREE.BufferAttribute;
        const posArray = posAttr.array as Float32Array;

        // Shift particles back
        for (let i = trailParticleCount - 1; i > 0; i--) {
          posArray[i * 3] = posArray[(i - 1) * 3];
          posArray[i * 3 + 1] = posArray[(i - 1) * 3 + 1];
          posArray[i * 3 + 2] = posArray[(i - 1) * 3 + 2];
        }
        // Emit new particle at arrow tip
        posArray[0] = currentArrowPos.x + (Math.random() - 0.5) * 0.15;
        posArray[1] = currentArrowPos.y + (Math.random() - 0.5) * 0.15;
        posArray[2] = currentArrowPos.z + (Math.random() - 0.5) * 0.15;
        posAttr.needsUpdate = true;

        // 7. Background Particles Drift
        particles.rotation.y = elapsedTime * 0.02;
        particles.rotation.x = Math.sin(elapsedTime * 0.01) * 0.05;

        // 8. Connection Line Energy Pulse
        pulseProgress = (pulseProgress + 0.006) % 1.0;
        const lineSegmentIndex = Math.floor(pulseProgress * (connectionPoints.length - 1));
        const subT = (pulseProgress * (connectionPoints.length - 1)) % 1.0;
        if (lineSegmentIndex < connectionPoints.length - 1) {
          const p1 = connectionPoints[lineSegmentIndex];
          const p2 = connectionPoints[lineSegmentIndex + 1];
          pulseMesh.position.lerpVectors(p1, p2, subT);
        }

        renderer.render(scene, camera);
      }
      rafId = requestAnimationFrame(render);
    };

    if (reduce) {
      renderer.render(scene, camera);
      running = false;
    } else {
      rafId = requestAnimationFrame(render);
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      io.disconnect();
      resizeObserver.disconnect();

      // Clean up geometries & materials
      metaLoopGeo.dispose();
      metaInnerGeo.dispose();
      orbitalRingGeo1.dispose();
      orbitalRingGeo2.dispose();
      instaBoxGeo.dispose();
      instaRingGeo.dispose();
      instaDotGeo.dispose();
      fbBoxGeo.dispose();
      targetGroup.clear();
      funnelGeo.dispose();
      funnelInnerGeo.dispose();
      arrowGeo.dispose();
      trailGeo.dispose();
      graphGeo.dispose();
      particleGeo.dispose();
      lineGeo.dispose();
      pulseGeo.dispose();

      darkMetalMaterial.dispose();
      glassMaterial.dispose();
      redGlowMaterial.dispose();
      whiteHighlightMaterial.dispose();
      trailMat.dispose();
      particleMat.dispose();

      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 select-none overflow-hidden z-0",
        className
      )}
    />
  );
}
