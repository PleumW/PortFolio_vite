import { useEffect, useRef } from 'react';

/**
 * Wraps children and fades/slides them in when they enter the viewport.
 *
 * Props:
 *   direction: 'up' | 'down' | 'left' | 'right' | 'none'  (default: 'up')
 *   delay: ms delay before animation starts                 (default: 0)
 *   duration: animation duration in ms                     (default: 600)
 *   threshold: 0-1, how much of element must be visible    (default: 0.15)
 *   className: extra classes on the wrapper div
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 600,
  threshold = 0.15,
  className = '',
}) {
  const ref = useRef(null);

  const getInitialTransform = () => {
    // Avoid horizontal translations on mobile screens to prevent overflow-x scroll
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      if (direction === 'left' || direction === 'right') {
        return 'translateY(24px)';
      }
    }
    switch (direction) {
      case 'up':    return 'translateY(28px)';
      case 'down':  return 'translateY(-28px)';
      case 'left':  return 'translateX(24px)';
      case 'right': return 'translateX(-24px)';
      default:      return 'none';
    }
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial hidden state
    el.style.opacity = '0';
    el.style.transform = getInitialTransform();
    el.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
    el.style.transitionDelay = `${delay}ms`;
    el.style.willChange = 'opacity, transform';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translate(0, 0)';
          observer.unobserve(el); // only animate once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
