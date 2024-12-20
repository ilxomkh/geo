import React, { useState, useEffect } from "react";

const VerticalArrowWithAnimation = () => {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev >= 70) {
          setDirection(-1); // Движение вниз
        } else if (prev <= 0) {
          setDirection(1); // Движение вверх
        }
        return prev + direction * 2; // Скорость движения точки
      });
    }, 30);

    return () => clearInterval(interval);
  }, [direction]);

  const handleScroll = () => {
    // Скролл на 1/2 высоты окна
    window.scrollBy({
      top: window.innerHeight / 1,
      behavior: "smooth", // Плавный скролл
    });
  };

  return (
    <button
      className="flex flex-col items-center"
      onClick={handleScroll} // Скролл при нажатии
    >
      {/* Линия */}
      <div className="relative w-px h-32 bg-yellow-500">
        {/* Точка */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-500 rounded-full"
          style={{
            top: `${position}%`,
          }}
        ></div>
      </div>

      {/* Кончик стрелки */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 512 266.77"
        className="w-4 h-4 text-yellow-500 -mt-[11px]" // Соединение стрелки с линией
        fill="currentColor"
      >
        <path
          fillRule="nonzero"
          d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"
        />
      </svg>
    </button>
  );
};

export default VerticalArrowWithAnimation;
