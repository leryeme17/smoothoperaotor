import { motion } from 'motion/react';

export function AnimatedBackground() {
  const lines = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Horizontal lines */}
      {lines.map((i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
          style={{ top: `${(i / lines.length) * 100}%` }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 8 + (i % 5),
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.2,
          }}
        />
      ))}
      
      {/* Vertical lines */}
      {lines.slice(0, 10).map((i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-[2px] h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"
          style={{ left: `${(i / 10) * 100}%` }}
          animate={{
            y: ['-100%', '100%'],
          }}
          transition={{
            duration: 10 + (i % 4),
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Diagonal lines */}
      {lines.slice(0, 8).map((i) => (
        <motion.div
          key={`d-${i}`}
          className="absolute h-[1px] w-[200%] bg-gradient-to-r from-transparent via-red-600/20 to-transparent origin-center"
          style={{ 
            top: '50%',
            left: '-50%',
            transform: `rotate(${(i * 15) - 60}deg)`
          }}
          animate={{
            x: ['0%', '50%'],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12 + i,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  );
}
