import { useRef, useState, ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glowColor?: string;
}

export default function TiltCard({
  children,
  className = '',
  intensity = 7,
  glowColor = 'rgba(236, 72, 153, 0.13)',
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const rotateXBase = useMotionValue(0);
  const rotateYBase = useMotionValue(0);
  const rotateX = useSpring(rotateXBase, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(rotateYBase, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    rotateXBase.set((y - 0.5) * -intensity);
    rotateYBase.set((x - 0.5) * intensity);
    setGlowPos({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    rotateXBase.set(0);
    rotateYBase.set(0);
    setIsHovered(false);
  };

  return (
    <div className={className} style={{ perspective: '1000px' }}>
      <motion.div
        ref={ref}
        className="relative h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      >
        {/* Spotlight glow — rendered before children so card content sits on top */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, ${glowColor} 0%, transparent 65%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
        {children}
      </motion.div>
    </div>
  );
}
