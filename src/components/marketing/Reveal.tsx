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
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      transition={{ delay, duration: 0.56, ease: premiumEase }}
      viewport={{ amount: 0.08, margin: '0px 0px -5% 0px', once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
