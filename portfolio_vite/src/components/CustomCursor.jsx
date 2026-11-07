import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [dot, setDot] = useState({ x: -100, y: -100 });
  const [isHover, setIsHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    let animFrame;
    let cursorX = -100, cursorY = -100;

    const onMouseMove = (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      // Dot follows immediately
      setDot({ x: e.clientX, y: e.clientY });
    };

    // Ring lags behind slightly
    const lerp = (a, b, t) => a + (b - a) * t;
    let ringX = -100, ringY = -100;
    const animate = () => {
      ringX = lerp(ringX, cursorX, 0.12);
      ringY = lerp(ringY, cursorY, 0.12);
      setPos({ x: ringX, y: ringY });
      animFrame = requestAnimationFrame(animate);
    };
    animFrame = requestAnimationFrame(animate);

    // Hover detection on interactive elements
    const addHover = () => setIsHover(true);
    const removeHover = () => setIsHover(false);

    const interactiveEls = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, label, [tabindex]'
    );
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    document.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(animFrame);
      document.removeEventListener('mousemove', onMouseMove);
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring - lags behind */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full border-2 border-black dark:border-white transition-all duration-150"
        style={{
          left: pos.x,
          top: pos.y,
          width: isHover ? 44 : 32,
          height: isHover ? 44 : 32,
          transform: 'translate(-50%, -50%)',
          opacity: isHover ? 0.5 : 0.7,
          mixBlendMode: 'difference',
        }}
      />
      {/* Inner dot - instant */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full bg-black dark:bg-white"
        style={{
          left: dot.x,
          top: dot.y,
          width: isHover ? 6 : 6,
          height: isHover ? 6 : 6,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
}
