import { useEffect, useState } from "react";

export default function QuillCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!isTouch && !prefersReducedMotion) {
      setEnabled(true);
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onHover = () => setHover(true);
    const offHover = () => setHover(false);

    window.addEventListener("mousemove", move);

    document.querySelectorAll("a, button, .cursor-hover").forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", offHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button, .cursor-hover").forEach((el) => {
        el.removeEventListener("mouseenter", onHover);
        el.removeEventListener("mouseleave", offHover);
      });
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none transition-transform duration-150 ease-out"
      style={{
        transform: `
          translate(${pos.x}px, ${pos.y}px)
          translate(-10%, -10%)
          rotate(${hover ? "-15deg" : "-25deg"})
          scale(${hover ? 1.15 : 1})
        `,
      }}
    >
      {/* Quill Nib */}
      <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
        <path
          d="M32 2
             C20 14, 14 28, 12 42
             C11 48, 16 54, 22 52
             L32 42
             L42 52
             C48 54, 53 48, 52 42
             C50 28, 44 14, 32 2Z"
          fill="url(#goldGradient)"
          stroke="rgba(255,215,160,0.6)"
          strokeWidth="1"
        />
        <circle cx="32" cy="38" r="2" fill="#5c4a2a" />
        <defs>
          <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f5e6b8" />
            <stop offset="50%" stopColor="#c2a878" />
            <stop offset="100%" stopColor="#7d6236" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
