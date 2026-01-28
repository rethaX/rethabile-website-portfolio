import { motion } from 'motion/react';
import { Code2, Database, Cloud, Cpu, Terminal, Zap, GitBranch, Layers } from 'lucide-react';

const icons = [
  { Icon: Code2, delay: 0, duration: 20, x: '10%', y: '20%' },
  { Icon: Database, delay: 2, duration: 25, x: '80%', y: '30%' },
  { Icon: Cloud, delay: 4, duration: 22, x: '15%', y: '70%' },
  { Icon: Cpu, delay: 1, duration: 24, x: '85%', y: '60%' },
  { Icon: Terminal, delay: 3, duration: 23, x: '50%', y: '10%' },
  { Icon: Zap, delay: 5, duration: 21, x: '25%', y: '45%' },
  { Icon: GitBranch, delay: 2.5, duration: 26, x: '70%', y: '80%' },
  { Icon: Layers, delay: 4.5, duration: 19, x: '40%', y: '85%' },
];

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay, duration, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            y: [-20, 20, -20],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon className="w-16 h-16 text-purple-500/20" />
        </motion.div>
      ))}
    </div>
  );
}
