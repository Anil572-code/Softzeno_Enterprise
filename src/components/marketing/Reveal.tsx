import { motion, useReducedMotion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

import { cn } from '@/utils/cn';

interface RevealProps extends PropsWithChildren {
  className?: string;
  delay?: number;
}

const premiumEase = [0.16, 1, 0.3, 1] as const;

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion() === true;

  return (
    <motion.div
      className={cn('motion-reveal', className)}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      transition={{ delay, duration: 0.52, ease: premiumEase }}
      viewport={{ amount: 0.16, margin: '0px 0px -5% 0px', once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
