import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  description: string;
  icon: LucideIcon;
  title: string;
}

export function FeatureCard({ description, icon: Icon, title }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <span className="feature-card__icon">
        <Icon aria-hidden="true" size={24} strokeWidth={1.8} />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
