import { DESIGN_TOKENS } from '@/theme/tokens';

export const MOTION_TOKENS = {
  duration: {
    fast: DESIGN_TOKENS.motion.durationMs.fast / 1000,
    normal: DESIGN_TOKENS.motion.durationMs.normal / 1000,
    slow: DESIGN_TOKENS.motion.durationMs.slow / 1000,
  },
  distance: DESIGN_TOKENS.motion.distance,
  scale: DESIGN_TOKENS.motion.scale,
  stagger: DESIGN_TOKENS.motion.staggerMs / 1000,
  ease: {
    standard: [...DESIGN_TOKENS.motion.easing.standard] as [number, number, number, number],
  },
} as const;
