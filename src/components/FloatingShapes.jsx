import { useMemo } from "react";

const SHAPES = ["◇", "△", "▢", "⧫", "⋯", "╱", "╲"];

export default function FloatingShapes({
  count = 7,
  color = "rgba(194,168,120,0.18)",
}) {
  // Generate shapes ONCE
  const shapes = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const shape = SHAPES[i % SHAPES.length];

      return {
        id: i,
        char: shape,
        top: Math.random() * 90,
        left: Math.random() * 90,
        size: Math.random() * 20 + 10,
        duration: 6 + Math.random() * 4,
        x: Math.random() * 20 - 10,
        y: Math.random() * 50 - 25,
      };
    });
  }, [count]);

  return (
    <>
      {/* Floating shapes */}
      {shapes.map((s) => (
        <div
          key={s.id}
          className="absolute pointer-events-none"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            fontSize: `${s.size}px`,
            color,
            animation: `float-${s.id} ${s.duration}s ease-in-out infinite alternate`,
          }}
        >
          {s.char}
        </div>
      ))}

      {/* Keyframes */}
      <style>
        {shapes
          .map(
            (s) => `
          @keyframes float-${s.id} {
            0% { transform: translate(0, 0); }
            50% { transform: translate(${s.x}px, ${s.y}px); }
            100% { transform: translate(0, 0); }
          }
        `
          )
          .join("")}
      </style>
    </>
  );
}
