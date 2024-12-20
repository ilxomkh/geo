import React, { useState } from "react";

const ExStatistics = ({ value, unit, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center mb-10 justify-start cursor-pointer"
      onMouseEnter={() => setIsHovered(true)} // Включаем анимацию при наведении на весь компонент
      onMouseLeave={() => setIsHovered(false)} // Отключаем анимацию при убирании мыши с компонента
    >
      {/* SVG-часть (Круг) */}
      <svg
        width="160"
        height="160"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -left-2 -top-5 translate-x-16"
      >
        {/* Полукруг */}
        <path
          d="M80 10 A70 70 0 1 1 20 120" // Дуга на 250 градусов
          stroke="#D8A846"
          strokeWidth="3"
          fill="none"
        />
        {/* Анимированная точка */}
        <circle
          cx="80"
          cy="10"
          r="5"
          fill="#D8A846"
          style={{
            transition: "transform 1s ease-in-out", // Плавная анимация
            transformOrigin: "80px 80px", // Центр круга
            transform: isHovered
              ? "rotate(200deg)" // Движение по кругу при наведении
              : "rotate(0deg)", // Возврат в начальное положение
          }}
        />
      </svg>

      {/* Текстовая часть */}
      <div className="pl-16">
        {/* Значение */}
        <div className="flex flex-col">
          <span className="text-4xl font-bold font-oswald text-yellow-400">{value}</span>
          <span className="text-md font-medium font-oswald text-white">{unit}</span>
        </div>

        {/* Описание */}
        <p className="text-sm text-gray-300 font-oswald mt-1">{label}</p>
      </div>
    </div>
  );
};

export default ExStatistics;
