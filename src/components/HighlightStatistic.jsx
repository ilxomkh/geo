import React, { useState } from "react";

const HighlightStatistic = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center justify-start"
      onMouseEnter={() => setIsHovered(true)} // Включаем анимацию при наведении
      onMouseLeave={() => setIsHovered(false)} // Отключаем анимацию при убирании мыши
    >
      {/* SVG-часть (Круг) */}
      <svg
        width="160"
        height="130"
        viewBox="0 0 10 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-4 translate-x-2"
      >
        {/* Полукруг в другую сторону */}
        <path
          d="M70 10 A60 60 0 1 0 30 120" // Дуга в противоположном направлении
          stroke="#D8A846"
          strokeWidth="3"
          fill="none"
        />
        {/* Анимированная точка */}
        <circle
          cx="70"
          cy="10"
          r="4"
          fill="#D8A846"
          style={{
            transition: "transform 1s ease-in-out", // Плавная анимация
            transformOrigin: "37px 60px", // Центр круга
            transform: isHovered
              ? "rotate(-180deg)" // Движение по кругу в противоположную сторону
              : "rotate(0deg)", // Возврат в начальное положение
          }}
        />
      </svg>

      {/* Текстовая часть */}
      <div className="pl-20">
        {/* Заголовок */}
        <p className="text-lg text-white font-oswald">
          Предприятиями холдинга открыто
        </p>
        {/* Значение */}
        <div className="flex items-baseline">
          <span className="text-4xl font-oswald font-bold text-yellow-400">1000+</span>
          <span className="text-xl font-oswald font-bold text-white ml-1">месторождений</span>
        </div>
      </div>
    </div>
  );
};

export default HighlightStatistic;
