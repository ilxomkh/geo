import React, { useState } from "react";

const Statistic = ({ value, unit, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center mb-5 justify-start cursor-pointer"
      onMouseEnter={() => setIsHovered(true)} // Включаем анимацию при наведении на весь компонент
      onMouseLeave={() => setIsHovered(false)} // Отключаем анимацию при убирании мыши с компонента
    >
      {/* SVG-часть (Круг) */}
      <svg
        width="100"
        height="100"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -left-2 translate-x-8"
      >
        {/* Полукруг */}
        <path
          d="M10 80 A70 70 0 1 1 150 80" // Дуга открыта вправо
          stroke="#D8A846"
          strokeWidth="2"
          fill="none"
        />
        {/* Анимированная точка */}
        <circle
          cx="10"
          cy="80"
          r="3"
          fill="#D8A846"
          style={{
            transition: "transform 1s ease-in-out", // Плавная анимация
            transformOrigin: "80px 80px", // Центр круга
            transform: isHovered
              ? "rotate(180deg)" // Движение по кругу
              : "rotate(0deg)", // Возврат в начальное положение
          }}
        />
      </svg>

      {/* Текстовая часть */}
      <div className="pl-10">
        {/* Значение */}
        <div className="flex flex-col">
          <span className="text-3xl font-bold font-oswald text-yellow-400">{value}</span>
          <span className="text-sm font-medium font-oswald text-white">{unit}</span>
        </div>

        {/* Описание */}
        <p className="text-xs text-gray-300 font-oswald mt-0.5">{label}</p>
      </div>
    </div>
  );
};

export default Statistic;
