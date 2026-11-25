'use client';

import { motion } from 'framer-motion';

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  rotate?: number;
}

export function HoverCard({ children, className, scale = 1.02, rotate = 0 }: HoverCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale, rotate, transition: { duration: 0.25, ease: 'easeOut' } }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}
