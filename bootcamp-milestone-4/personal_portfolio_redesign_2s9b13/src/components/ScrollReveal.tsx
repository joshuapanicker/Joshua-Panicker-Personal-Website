import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
  className?: string;
  duration?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  duration = 0.85,
}: ScrollRevealProps) {
  const ref = useRef(null);
  // once: false → animates both on scroll down AND back up
  const inView = useInView(ref, { once: false, margin: '-8% 0px -8% 0px' });

  const hidden = {
    opacity: 0,
    ...(direction === 'up' && { y: 80 }),
    ...(direction === 'left' && { x: -80 }),
    ...(direction === 'right' && { x: 80 }),
    ...(direction === 'scale' && { scale: 0.85, y: 30 }),
  };

  const visible = {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden}
      animate={inView ? visible : hidden}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
