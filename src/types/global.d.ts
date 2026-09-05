import type Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

declare module "vanta/dist/vanta.net.min";
declare module "vanta/dist/vanta.dots.min";
declare module "vanta/dist/vanta.halo.min";
declare module "vanta/dist/vanta.waves.min";

export {};
