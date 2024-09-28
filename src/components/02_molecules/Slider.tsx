import React, { useRef } from "react";

type SliderProps = {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
};

export default function Slider({ min, max, value, onChange }: SliderProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const cursorWidth = -18;

  const handleMouseDown = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const rect = slider.getBoundingClientRect();
      const x = moveEvent.clientX - rect.left + cursorWidth / 2;
      const percent = Math.max(0, Math.min(1, x / rect.width));
      const newValue = min + percent * (max - min);

      onChange(newValue);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const x = event.clientX - rect.left + cursorWidth / 2;
    const percent = Math.max(0, Math.min(1, x / rect.width));
    const newValue = min + percent * (max - min);

    onChange(newValue);
  };

  return (
    <div className="flex items-center">
      {/* Left arrow */}
      <img
        src="/assets/ui/arrow_left.png"
        alt="Left Arrow"
        className="w-4 h-4 cursor-pointer"
        onClick={() => onChange(Math.max(min, value - 1))}
      />

      {/* Slider */}
      <div
        ref={sliderRef}
        className="relative w-72 h-[2px] bg-gray-800 cursor-pointer"
        onMouseDown={handleMouseDown}
        onClick={handleClick}
      >
        <div
          className="absolute -top-2 w-4 h-4 bg-cover bg-no-repeat bg-center rounded-full"
          style={{
            left: `${((value - min) / (max - min)) * 100}%`,
            backgroundImage: `url("/assets/ui/cursor.png")`,
          }}
        />
      </div>

      {/* Right arrow */}
      <img
        src="/assets/ui/arrow_right.png"
        alt="Right Arrow"
        className="w-4 h-4 cursor-pointer"
        onClick={() => onChange(Math.min(max, value + 1))}
      />
    </div>
  );
}
