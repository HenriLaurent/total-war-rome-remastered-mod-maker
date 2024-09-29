export type Pixel = {
  r: number;
  g: number;
  b: number;
  a: number;
};

export function processImageData(
  data: Uint8ClampedArray,
  width: number,
  height: number,
  scale: number = 2
): Pixel[][] {
  const pixels: Pixel[][] = [];

  for (let y = 0; y < height * scale; y++) {
    const row: Pixel[] = [];
    for (let x = 0; x < width * scale; x++) {
      const originalX = Math.floor(x / scale);
      const originalY = Math.floor(y / scale);
      const i = (originalY * width + originalX) * 4;
      row.push({
        r: data[i],
        g: data[i + 1],
        b: data[i + 2],
        a: data[i + 3],
      });
    }
    pixels.push(row);
  }

  return pixels;
}
