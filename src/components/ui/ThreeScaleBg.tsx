"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ThreeScaleBgProps = {
  className?: string;
};

/**
 * WebGL (three.js) ambient background: a slowly rotating, breathing
 * (scaling) 3D icosahedron wrapped in a red wireframe, a faint counter-
 * spinning torus knot, and drifting particles. Sits behind site content —
 * pointer-events are disabled and the canvas is transparent.
 */
export function ThreeScaleBg({ className }: ThreeScaleBgProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduce = prefersReducedMotion();
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x070709, 12, 32);

    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.set(0, 0, 9);

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

    /* ---- Lights ---- */
    const ambient = new THREE.AmbientLight(0xffffff, 0.45);
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
    keyLight.position.set(3, 4, 6);
    const rimLight = new THREE.PointLight(0xed1c24, 14, 24);
    rimLight.position.set(-4, -2, 3);
    scene.add(ambient, keyLight, rimLight);

    /* ---- Breathing 3D core object ---- */
    const coreGroup = new THREE.Group();

    const coreGeo = new THREE.IcosahedronGeometry(1.7, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xed1c24,
      metalness: 0.35,
      roughness: 0.35,
      transparent: true,
      opacity: 0.28,
      emissive: 0xed1c24,
      emissiveIntensity: 0.35,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xff4d52,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const wire = new THREE.Mesh(coreGeo, wireMat);
    wire.scale.setScalar(1.06);

    const innerGeo = new THREE.IcosahedronGeometry(0.55, 1);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xff575d,
      metalness: 0.5,
      roughness: 0.2,
      transparent: true,
      opacity: 0.9,
      emissive: 0xed1c24,
      emissiveIntensity: 0.6,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);

    coreGroup.add(core, wire, inner);
    scene.add(coreGroup);

    /* ---- Counter-rotating torus knot halo ---- */
    const knotGeo = new THREE.TorusKnotGeometry(3.1, 0.045, 180, 24);
    const knotMat = new THREE.MeshBasicMaterial({
      color: 0xff575d,
      transparent: true,
      opacity: 0.22,
    });
    const knot = new THREE.Mesh(knotGeo, knotMat);
    knot.rotation.x = 1.2;
    scene.add(knot);

    /* ---- Particle field ---- */
    const count = 900;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 7 + Math.random() * 22;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi) - 4;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xff4d52,
      size: 0.055,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    /* ---- Animation loop ---- */
    let raf = 0;
    let running = true;
    let visible = true;
    const clock = new THREE.Clock();

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(container);

    const onVisibility = () => {
      if (document.hidden) {
        clock.stop();
      } else {
        clock.start();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    const render = () => {
      if (running && visible && !document.hidden) {
        const t = clock.getElapsedTime();

        // Smooth scaling / breathing
        const s = 0.78 + 0.3 * (0.5 + 0.5 * Math.sin(t * 0.85));
        coreGroup.scale.setScalar(s);

        coreGroup.rotation.x += 0.0022;
        coreGroup.rotation.y += 0.0036;

        wire.rotation.z = t * 0.12;
        inner.rotation.y -= 0.01;

        knot.rotation.y = -t * 0.045;
        knot.rotation.z += 0.0015;

        particles.rotation.y = t * 0.008;

        rimLight.position.x = Math.sin(t * 0.4) * 4;
        rimLight.position.y = Math.cos(t * 0.3) * 3;

        renderer.render(scene, camera);
      }
      raf = requestAnimationFrame(render);
    };

    if (reduce) {
      renderer.render(scene, camera);
      running = false;
    } else {
      raf = requestAnimationFrame(render);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      coreGeo.dispose();
      coreMat.dispose();
      wireMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      knotGeo.dispose();
      knotMat.dispose();
      pGeo.dispose();
      pMat.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 select-none overflow-hidden",
        className
      )}
    />
  );
}
