import { useState } from "react";

type UnitModelCarouselProps = {
  unitInfos: {
    imagePath: string;
    factionIconPath: string;
  }[];
};

export default function UnitModelCarousel({
  unitInfos,
}: UnitModelCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? unitInfos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === unitInfos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {unitInfos.map((unitInfo, index) => (
          <div
            className="relative min-w-full flex items-center justify-center"
            key={index}
          >
            <img
              src={unitInfo.factionIconPath}
              className="w-8 h-8 absolute top-0 right-8"
            />
            <img
              src={unitInfo.imagePath}
              alt={`Slide ${index}`}
              className="w-full rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-between items-center mt-2">
        <button className="p-2 rounded-full" onClick={goToPrevious}>
          <img src="/assets/ui/arrow_left.png" className="w-8" />
        </button>
        <div className="flex">
          {unitInfos.map((_, index) => (
            <img
              src={
                currentIndex === index
                  ? "/assets/ui/dot_active.png"
                  : "/assets/ui/dot_inactive.png"
              }
              className="h-8 w-8 mx-1 rounded-full cursor-pointer"
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <button className="p-2 rounded-full" onClick={goToNext}>
          <img src="/assets/ui/arrow_right.png" className="w-8" />
        </button>
      </div>
    </div>
  );
}
