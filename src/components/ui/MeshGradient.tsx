"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { prefersReducedMotion } from "@/lib/motion";

type MeshGradientProps = {
  className?: string;
  colors?: [string, string, string, string];
  speed?: number;
};

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec3 u_a;
uniform vec3 u_b;
uniform vec3 u_c;
uniform vec3 u_d;

float hash(vec2 p){
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}
float noise(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}
float fbm(vec2 p){
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
  for (int i = 0; i < 5; i++){
    v += a * noise(p);
    p = rot * p * 2.02;
    a *= 0.5;
  }
  return v;
}
void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  vec2 p = uv - 0.5;
  p.x *= u_res.x / u_res.y;
  float t = u_time * 0.05;
  vec2 q = vec2(fbm(p * 1.3 + t * 0.25), fbm(p * 1.3 + vec2(5.2, 1.3) - t * 0.2));
  vec2 r = vec2(fbm(p * 1.6 + q * 1.6 + vec2(1.7, 9.2) + t * 0.12), fbm(p * 1.6 + q * 1.6 + vec2(8.3, 2.8) - t * 0.08));
  float f = fbm(p * 2.0 + r * 1.4);
  vec3 col = mix(u_a, u_b, smoothstep(-0.1, 0.7, f * 0.8 + r.x * 0.4));
  col = mix(col, u_c, smoothstep(0.35, 0.95, r.y));
  col = mix(col, u_d, smoothstep(0.6, 1.15, q.y * 1.1));
  float vig = smoothstep(1.35, 0.25, length(p * 1.25));
  col *= 0.35 + 0.75 * vig;
  gl_FragColor = vec4(col, 1.0);
}
`;

export function MeshGradient({ className, colors, speed = 1 }: MeshGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false });
    if (!gl) return;

    const reduced = prefersReducedMotion();
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let raf = 0;
    let running = true;
    let visible = true;

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return sh;
    };

    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}"));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(program);
    gl.useProgram(program);

    const posLoc = gl.getAttribLocation(program, "p");
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "u_res");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uColors = ["u_a", "u_b", "u_c", "u_d"].map((n) => gl.getUniformLocation(program, n));

    const defaultColors: MeshGradientProps["colors"] = ["#0a0c0f", "#2a0f12", "#0d2418", "#1a1206"];
    const palette = (colors ?? defaultColors).map(hexToRgb);

    uColors.forEach((loc, i) => gl.uniform3f(loc, palette[i][0] / 255, palette[i][1] / 255, palette[i][2] / 255));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width * dpr));
      const h = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
        gl.uniform2f(uRes, w, h);
      }
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    const start = performance.now();
    const render = (now: number) => {
      if (running && visible) {
        gl.uniform1f(uTime, ((now - start) / 1000) * speed);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
      raf = requestAnimationFrame(render);
    };

    if (reduced) {
      gl.uniform1f(uTime, 6);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      running = false;
    } else {
      raf = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [colors, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("block h-full w-full", className)}
      aria-hidden="true"
    />
  );
}
