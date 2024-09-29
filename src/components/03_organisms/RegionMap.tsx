import React, { useState, useEffect, useRef } from "react";
import TGA from "tga-js";
import { Pixel, processImageData } from "../../utils/processImageData";

export type RegionMapProps = {
  onClick: (rgb: { r: number; g: number; b: number }) => void;
  onHover: (rgb: { r: number; g: number; b: number }) => void;
  onLeftHover: () => void;
};

export default function RegionMap({
  onClick,
  onHover,
  onLeftHover,
}: RegionMapProps) {
  const [pixels, setPixels] = useState<Pixel[][]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || pixels.length === 0) return;

    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / scale);
    const y = Math.floor((e.clientY - rect.top) / scale);

    if (x >= 0 && x < 255 && y >= 0 && y < 156) {
      const pixel = pixels[y][x];
      onHover({ r: pixel.r, g: pixel.g, b: pixel.b });
    }
  };

  const handleCanvasMouseClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || pixels.length === 0) return;

    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / scale);
    const y = Math.floor((e.clientY - rect.top) / scale);

    if (x >= 0 && x < 255 && y >= 0 && y < 156) {
      const pixel = pixels[y][x];
      onClick({ r: pixel.r, g: pixel.g, b: pixel.b });
    }
  };

  useEffect(() => {
    const fetchTGA = async () => {
      const response = await fetch("/assets/maps/map_regions.tga");
      const arrayBuffer = await response.arrayBuffer();
      const tga = new TGA();
      tga.load(new Uint8Array(arrayBuffer));
      const image = tga.getImageData();

      const pixelData: Pixel[][] = processImageData(image.data, 255, 156, 1);
      setPixels(pixelData);
    };

    fetchTGA();
  }, []);

  useEffect(() => {
    const updateCanvasSize = () => {
      if (containerRef.current && canvasRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const newScale = containerWidth / 255;
        setScale(newScale);

        canvasRef.current.style.width = `${containerWidth}px`;
        canvasRef.current.style.height = `${156 * newScale}px`;
      }
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  useEffect(() => {
    if (pixels.length > 0 && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        canvas.width = 255;
        canvas.height = 156;

        const imageData = ctx.createImageData(255, 156);
        pixels.forEach((row, y) => {
          row.forEach((pixel, x) => {
            const index = (y * 255 + x) * 4;
            imageData.data[index] = pixel.r;
            imageData.data[index + 1] = pixel.g;
            imageData.data[index + 2] = pixel.b;
            imageData.data[index + 3] = pixel.a;
          });
        });
        ctx.putImageData(imageData, 0, 0);
      }
    }
  }, [pixels]);

  return (
    <div ref={containerRef} style={{ width: "100%" }}>
      <canvas
        className="cursor-pointer"
        width={255}
        height={156}
        ref={canvasRef}
        onMouseMove={handleCanvasMouseMove}
        onMouseDown={handleCanvasMouseClick}
        onMouseLeave={onLeftHover}
        style={{
          imageRendering: "pixelated",
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}
