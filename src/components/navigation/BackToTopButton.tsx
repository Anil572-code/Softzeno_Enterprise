import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const MINIMUM_SHOW_DISTANCE = 420;
const VIEWPORT_SHOW_RATIO = 0.58;

function getScrollMetrics() {
  const scrollTop = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollableDistance = Math.max(0, documentHeight - window.innerHeight);
  const progress =
    scrollableDistance > 0
      ? Math.round(Math.min(100, Math.max(0, (scrollTop / scrollableDistance) * 100)))
      : 0;

  return {
    progress,
    visible: scrollTop > Math.max(MINIMUM_SHOW_DISTANCE, window.innerHeight * VIEWPORT_SHOW_RATIO),
  };
}

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame = 0;

    const update = () => {
      animationFrame = 0;
      const next = getScrollMetrics();

      setVisible((current) => (current === next.visible ? current : next.visible));
      setProgress((current) => (current === next.progress ? current : next.progress));
    };

    const requestUpdate = () => {
      if (animationFrame !== 0) {
        return;
      }

      animationFrame = window.requestAnimationFrame(update);
    };

    update();

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);

      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const handleClick = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <button
      aria-hidden={!visible}
      aria-label="Back to top"
      className={`back-to-top${visible ? ' back-to-top--visible' : ''}`}
      onClick={handleClick}
      tabIndex={visible ? 0 : -1}
      title="Back to top"
      type="button"
    >
      <span aria-hidden="true" className="back-to-top__surface" />
      <svg
        aria-hidden="true"
        className="back-to-top__progress"
        viewBox="0 0 52 52"
      >
        <circle className="back-to-top__progress-track" cx="26" cy="26" r="24" />
        <circle
          className="back-to-top__progress-value"
          cx="26"
          cy="26"
          pathLength="100"
          r="24"
          strokeDasharray="100"
          strokeDashoffset={100 - progress}
        />
      </svg>
      <ArrowUp
        aria-hidden="true"
        className="back-to-top__icon"
        size={18}
        strokeWidth={2.15}
      />
    </button>
  );
}
