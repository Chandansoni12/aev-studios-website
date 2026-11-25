'use client';

import { useRef, useEffect, type HTMLMotionProps } from 'react';
import { motion } from 'framer-motion';

interface MagneticProps extends HTMLMotionProps<'div'> {
  strength?: number;
}

export function Magnetic({
  children,
  className,
  strength = 0.3,
  style,
  ...props
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      el.style.transform = 'translate(' + deltaX + 'px, ' + deltaY + 'px)';
    };

    const handleMouseLeave = () => {
      el.style.transform = 'translate(0, 0)';
      el.style.transition = 'transform 0.5s ease';
    };

    const handleMouseEnter = () => {
      el.style.transition = 'transform 0.1s ease';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [strength]);

  return (
    <motion.div ref={ref} className={className} style={style} {...props}>
      {children}
    </motion.div>
  );
}
