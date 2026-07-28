import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

import { HeroVisual, type HeroVisualVariant } from '@/components/marketing/HeroVisual';
import { ButtonLink } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';

interface PageHeroProps {
  actions?: ReactNode;
  description: string;
  eyebrow: string;
  title: ReactNode;
  visual: HeroVisualVariant;
}

const premiumEase = [0.16, 1, 0.3, 1] as const;

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.03,
      staggerChildren: 0.055,
    },
  },
};

const contentItemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: premiumEase,
    },
  },
};

export function PageHero({ actions, description, eyebrow, title, visual }: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion() === true;

  return (
    <section className="page-hero">
      <div className="app-container page-hero__inner">
        <motion.div
          animate="visible"
          className="page-hero__content"
          initial={shouldReduceMotion ? false : 'hidden'}
          variants={contentVariants}
        >
          <motion.p className="eyebrow" variants={contentItemVariants}>
            {eyebrow}
          </motion.p>
          <motion.h1 variants={contentItemVariants}>{title}</motion.h1>
          <motion.p className="page-hero__description" variants={contentItemVariants}>
            {description}
          </motion.p>
          <motion.div className="page-hero__actions" variants={contentItemVariants}>
            {actions ?? (
              <ButtonLink size="large" to={ROUTE_PATHS.demo}>
                Request a demo <ArrowRight aria-hidden="true" size={19} />
              </ButtonLink>
            )}
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          aria-hidden="true"
          className="page-hero__visual motion-hero-visual"
          initial={shouldReduceMotion ? false : { opacity: 0, x: 16 }}
          transition={{ delay: 0.08, duration: 0.66, ease: premiumEase }}
        >
          <HeroVisual variant={visual} />
        </motion.div>
      </div>
    </section>
  );
}
