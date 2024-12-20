import React, { useState } from "react";

const HighlightStatistic = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex ml-16 items-center justify-start"
      onMouseEnter={() => setIsHovered(true)} // Включаем анимацию при наведении
      onMouseLeave={() => setIsHovered(false)} // Отключаем анимацию при убирании мыши
    >
      {/* SVG-часть (Круг) */}
      <svg
        width="133.33" // Уменьшено на 1.2 раза
        height="108.33" // Уменьшено на 1.2 раза
        viewBox="0 0 10 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-4 -translate-x-14" // Корректировка отступов
      >
        {/* Полукруг в другую сторону */}
        <path
          d="M70 10 A60 60 0 1 0 30 120" // Дуга в противоположном направлении
          stroke="#D8A846"
          strokeWidth="2.5" // Уменьшено на 1.2 раза
          fill="none"
        />
        {/* Анимированная точка */}
        <circle
          cx="70"
          cy="10"
          r="3.33" // Уменьшено на 1.2 раза
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
      <div className="pl-16.67"> {/* Уменьшено на 1.2 раза */}
        {/* Заголовок */}
        <p className="text-base text-white font-oswald">
          Предприятиями холдинга открыто
        </p>
        {/* Значение */}
        <div className="flex items-baseline">
          <span className="text-4xl font-oswald font-bold text-yellow-400">1000+</span> {/* Уменьшено */}
          <span className="text-lg font-oswald font-bold text-white ml-0.83">месторождений</span> {/* Уменьшено */}
        </div>
      </div>
    </div>
  );
};

export default HighlightStatistic;
