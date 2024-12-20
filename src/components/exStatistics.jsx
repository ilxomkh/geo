import React, { useState } from "react";

const ExStatistics = ({ value, unit, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center mb-10 justify-start cursor-pointer" // Уменьшено mb-10 → mb-6.67
      onMouseEnter={() => setIsHovered(true)} // Включаем анимацию при наведении на весь компонент
      onMouseLeave={() => setIsHovered(false)} // Отключаем анимацию при убирании мыши с компонента
    >
      {/* SVG-часть (Круг) */}
      <svg
        width="120.67" // Уменьшено на 1.5 раза
        height="120.67" // Уменьшено на 1.5 раза
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -left-1.33 -top-3.33 translate-x-10.67" // Пропорциональное уменьшение
      >
        {/* Полукруг */}
        <path
          d="M80 10 A70 70 0 1 1 19 120" // Дуга на 250 градусов
          stroke="#D8A846"
          strokeWidth="2" // Уменьшено с 3 до 2
          fill="none"
        />
        {/* Анимированная точка */}
        <circle
          cx="80"
          cy="10"
          r="3.33" // Уменьшено с 5 до 3.33
          fill="#D8A846"
          style={{
            transition: "transform 1s ease-in-out", // Плавная анимация
            transformOrigin: "79px 80px", // Центр круга
            transform: isHovered
              ? "rotate(200deg)" // Движение по кругу при наведении
              : "rotate(0deg)", // Возврат в начальное положение
          }}
        />
      </svg>

      {/* Текстовая часть */}
      <div className="pl-10.67 mr-20"> {/* Уменьшено pl-16 → pl-10.67 */}
        {/* Значение */}
        <div className="flex flex-col">
          <span className="text-3xl -mt-5 font-bold font-oswald text-yellow-400">{value} {unit}</span> {/* Уменьшено text-4xl → text-2.67xl */}
        </div>

        {/* Описание */}
        <p className="text-xs text-gray-300 font-oswald mt-0.67">{label}</p> {/* Уменьшено text-sm → text-xs */}
      </div>
    </div>
  );
};

export default ExStatistics;
