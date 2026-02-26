import { motion } from 'framer-motion';

const items = [
  'React', 'TypeScript', 'Node.js', 'Figma', 'Next.js',
  'Tailwind CSS', 'GraphQL', 'PostgreSQL', 'Vue.js', 'Docker', 'AWS', 'MongoDB',
];

export default function MarqueeStrip({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border/40 py-5 bg-card/20 backdrop-blur-sm">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-xs font-mono text-gray-500 tracking-[0.3em] uppercase inline-flex items-center gap-8"
          >
            {item}
            <span className="text-primary text-sm leading-none">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
