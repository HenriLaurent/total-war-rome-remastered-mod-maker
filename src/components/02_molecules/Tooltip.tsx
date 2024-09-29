import { useState, useEffect, ReactNode } from "react";

type TooltipProps = {
  children: ReactNode;
  isVisible: boolean;
};

export default function Tooltip({ children, isVisible }: TooltipProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    if (isVisible) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="min-w-56"
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-100%, -100%)", // Position the bottom-right corner at the cursor
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "8px",
        zIndex: 1000,
        pointerEvents: "none",
        whiteSpace: "nowrap", // Prevent text wrapping
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      {children}
    </div>
  );
}
