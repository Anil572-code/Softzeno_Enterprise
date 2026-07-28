import type { Transition, Variants } from 'framer-motion';

import { MOTION_TOKENS } from '@/theme/motion';

const standardTransition = {
  duration: MOTION_TOKENS.duration.normal,
  ease: MOTION_TOKENS.ease.standard,
} satisfies Transition;

export const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: standardTransition },
} satisfies Variants;

export const slideUpVariants = {
  hidden: { opacity: 0, y: MOTION_TOKENS.distance.medium },
  visible: {
    opacity: 1,
    y: 0,
    transition: standardTransition,
  },
} satisfies Variants;

export const scaleVariants = {
  hidden: { opacity: 0, scale: MOTION_TOKENS.scale.reduced },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: MOTION_TOKENS.duration.fast,
      ease: MOTION_TOKENS.ease.standard,
    },
  },
} satisfies Variants;

export const revealVariants = {
  hidden: { opacity: 0, y: MOTION_TOKENS.distance.small },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...standardTransition,
      delay: index * MOTION_TOKENS.stagger,
    },
  }),
} satisfies Variants;

export const hoverVariants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -MOTION_TOKENS.distance.small / 2,
    scale: 1.01,
    transition: {
      duration: MOTION_TOKENS.duration.fast,
      ease: MOTION_TOKENS.ease.standard,
    },
  },
} satisfies Variants;

export const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -MOTION_TOKENS.distance.small, 0],
    transition: {
      duration: MOTION_TOKENS.duration.slow * 6,
      ease: 'easeInOut',
      repeat: Number.POSITIVE_INFINITY,
    },
  },
} satisfies Variants;

export const counterTransition = {
  duration: MOTION_TOKENS.duration.slow * 2,
  ease: MOTION_TOKENS.ease.standard,
} satisfies Transition;
