import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let lenisInstance: Lenis | null = null;

export function initLenis(options?: {
  duration?: number;
  easing?: (t: number) => number;
  direction?: 'vertical' | 'horizontal';
  smooth?: boolean;
  smoothTouch?: boolean;
  touchMultiplier?: number;
}) {
  lenisInstance = new Lenis({
    duration: options?.duration || 1.2,
    easing: options?.easing || ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
    direction: options?.direction || 'vertical',
    smooth: options?.smooth !== false,
    smoothTouch: options?.smoothTouch || false,
    touchMultiplier: options?.touchMultiplier || 2,
  });

  lenisInstance.on('scroll', ScrollTrigger.update);
  
  gsap.ticker.add((time) => {
    lenisInstance?.raf(time * 1000);
  });
  
  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}

export function destroyLenis() {
  lenisInstance?.destroy();
  lenisInstance = null;
}
