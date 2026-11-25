'use client';

import { AnimatePresence, motion, type HTMLMotionProps } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps extends HTMLMotionProps<'main'> {
  children: React.ReactNode;
}

export function PageTransition({ children, className, style, ...props }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode='wait'>
      <motion.main
        key={pathname}
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={style}
        {...props}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
