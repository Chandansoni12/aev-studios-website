import { Variants } from 'framer-motion';

/**
 * Comprehensive animation variants library
 * Use with Framer Motion components
 */

// Fade variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Scale variants
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const scaleInSpring: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 180, damping: 12 } },
};

// Slide variants
export const slideUp: Variants = {
  hidden: { y: 60 },
  visible: { y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const slideDown: Variants = {
  hidden: { y: -60 },
  visible: { y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const slideLeft: Variants = {
  hidden: { x: -60 },
  visible: { x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const slideRight: Variants = {
  hidden: { x: 60 },
  visible: { x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

export const staggerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

// Item variants for stagger
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const staggerItemScale: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

// Page transitions
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeInOut' } },
};

// Hover effects
export const hoverScale: Variants = {
  hover: { scale: 1.02, transition: { duration: 0.2, ease: 'easeOut' } },
};

export const hoverScaleRotate: Variants = {
  hover: { scale: 1.05, rotate: 2, transition: { duration: 0.3, ease: 'easeOut' } },
};

export const hoverLift: Variants = {
  hover: { y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)', transition: { duration: 0.3, ease: 'easeOut' } },
};

export const tapScale: Variants = {
  tap: { scale: 0.97 },
};

// Text reveal variants
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const textRevealClip: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.8, ease: 'easeOut' } },
};

// Viewport triggers
export const viewportOnce = { once: true, margin: '-100px' };
export const viewportRepeat = { once: false, margin: '-100px' };

// Spring configs
export const springGentle = { type: 'spring', stiffness: 120, damping: 14 };
export const springWobbly = { type: 'spring', stiffness: 180, damping: 8 };
export const springStiff = { type: 'spring', stiffness: 260, damping: 20 };
