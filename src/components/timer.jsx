import React, { useEffect } from "react";

const Timer = ({ timeLeft, setTimeLeft, onTimerEnd, isPaused }) => {
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    if (timeLeft === 0) {
      onTimerEnd();
      setTimeLeft(10); // Сброс таймера
    }

    return () => clearInterval(interval);
  }, [timeLeft, isPaused, onTimerEnd, setTimeLeft]);

  const radius = 16; // Радиус круга
  const circumference = 2 * Math.PI * radius; // Окружность
  const offset = circumference - (timeLeft / 10) * circumference; // Смещение для заполнения

  return (
    <div className="absolute top-0 -left-28 bg-yellow-400 bg-opacity-90 w-28 h-28 flex items-center justify-center">
      {/* SVG для таймера */}
      <svg
        className="w-16 h-16 transform -rotate-90"
        viewBox="0 0 36 36"
      >
        {/* Фон круга */}
        <circle
          className="text-gray-300"
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          r={radius}
          cx="18"
          cy="18"
        />
        {/* Заполняемый круг */}
        <circle
          className="text-yellow-600 transition-all duration-1000"
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          r={radius}
          cx="18"
          cy="18"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      {/* Текст таймера */}
      <span className="absolute text-lg font-bold text-white">
        {timeLeft}s
      </span>
    </div>
  );
};

export default Timer;
