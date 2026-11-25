'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';

interface TextSplitProps extends HTMLMotionProps<'span'> {
  text: string;
  splitBy?: 'chars' | 'words' | 'lines';
  delay?: number;
  stagger?: number;
  duration?: number;
}

export function TextSplit({
  text,
  className,
  splitBy = 'chars',
  delay = 0,
  stagger = 0.04,
  duration = 0.3,
  style,
  ...props
}: TextSplitProps) {
  const splitText = splitBy === 'words'
    ? text.split(' ').map((w, i) => <span key={i} style={{ display: 'inline-block' }}>{w}</span>)
    : splitBy === 'lines'
      ? text.split('\n').map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)
      : text.split('').map((c, i) => <span key={i} style={{ display: 'inline-block' }}>{c === ' ' ? '\u00A0' : c}</span>);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration, ease: 'easeOut' } },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      style={style}
      {...props}
    >
      {splitText.map((span, i) => (
        <motion.span key={i} variants={child}>
          {span}
        </motion.span>
      ))}
    </motion.span>
  );
}
