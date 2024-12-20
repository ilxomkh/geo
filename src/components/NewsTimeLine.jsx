import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewsTimeline = ({ news }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true); // Активируем состояние наведения
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Деактивируем состояние наведения
  };

  return (
    <div className="relative flex flex-col items-start">
      {/* Линия шкалы */}
      <div className="absolute left-2 top-0 h-72 w-px bg-yellow-400"></div>

      {/* Элементы новостей */}
      {news.map((item, index) => (
        <div
          key={index}
          className="relative mb-10 mt-8 pl-8"
          onMouseEnter={handleMouseEnter} // Наведение мыши
          onMouseLeave={handleMouseLeave} // Уход мыши
        >
          {/* Точка на шкале */}
          <div
            className="absolute left-[5px] top-1.5 w-2 h-2 rounded-full bg-yellow-400"
            style={{
              transition: "transform 0.3s ease-in-out",
              transform: isHovered ? "translateY(40px)" : "translateY(0)",
            }}
          ></div>

          {/* Дата */}
          <p className="text-sm font-oswald text-left text-yellow-400">
            {item.date}
          </p>

          {/* Заголовок новости с линком */}
          <div className="text-left">
            <Link
              to={`/news/${item.id}`} // Ссылка на детальную страницу
              className="text-sm font-oswald text-white mt-1 leading-tight hover:text-yellow-400 hover:underline transition-colors"
            >
              {item.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsTimeline;
