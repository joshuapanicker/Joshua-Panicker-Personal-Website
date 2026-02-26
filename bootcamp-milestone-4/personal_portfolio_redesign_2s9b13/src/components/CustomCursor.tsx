import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFine, setIsFine] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Dot: follows mouse directly — no spring lag at all
  // Ring: high-mass spring → smooth momentum deceleration, no rubber band
  const ringX = useSpring(mouseX, { stiffness: 165, damping: 22, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 165, damping: 22, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    setIsFine(fine);
    if (!fine) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        !!target.closest('a, button, [data-cursor-hover], input, textarea, select, label')
      );
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  if (!isFine) return null;

  return (
    <>
      {/* Dot — pinned directly to mouse, zero lag */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{ left: mouseX, top: mouseY, x: '-50%', y: '-50%' }}
        animate={{ scale: isHovering ? 0 : 1, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.12 }}
      >
        <div className="w-2 h-2 rounded-full bg-primary" />
      </motion.div>

      {/* Ring — trails with momentum, decelerates smoothly */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{ left: ringX, top: ringY, x: '-50%', y: '-50%' }}
        animate={{ scale: isHovering ? 1.8 : 1, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="w-9 h-9 rounded-full border border-primary/60"
          style={{
            boxShadow: isHovering ? '0 0 18px rgba(236, 72, 153, 0.55)' : 'none',
            transition: 'box-shadow 0.2s',
          }}
        />
      </motion.div>
    </>
  );
}
