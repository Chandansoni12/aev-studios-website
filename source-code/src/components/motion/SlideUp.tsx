'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';

interface SlideUpProps extends HTMLMotionProps<'div'> {
  delay?: number;
  duration?: number;
  distance?: number;
}

export function SlideUp({
  children,
  className,
  delay = 0,
  duration = 0.6,
  distance = 60,
  style,
  ...props
}: SlideUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
}
