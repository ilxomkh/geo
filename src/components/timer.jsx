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
          className="text-yellow-400"
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          r={radius}
          cx="18"
          cy="18"
        />
        {/* Заполняемый круг */}
        <circle
          className="text-white transition-all duration-1000"
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          r={radius}
          cx="18"
          cy="18"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 1s linear", // Плавная анимация
          }}
        />
      </svg>
      {/* Текст таймера */}
      <span className="absolute text-lg font-bold text-white">
        <svg 
        version="1.1" 
        id="Layer_1" 
        xmlns="http://www.w3.org/2000/svg" 
        x="0px" y="0px"
        className="w-4 h-4 fill-white"
        viewBox="0 0 122.88 122.88" enable-background="new 0 0 122.88 122.88"
        >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M61.438,0c33.93,0,61.441,27.512,61.441,61.441 c0,33.929-27.512,61.438-61.441,61.438C27.512,122.88,0,95.37,0,61.441C0,27.512,27.512,0,61.438,0L61.438,0z"/>
            </svg>
      </span>
    </div>
  );
};

export default Timer;
