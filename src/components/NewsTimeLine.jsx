import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewsTimeline = ({ news }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Активируем состояние наведения для конкретного элемента
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Деактивируем состояние наведения
  };

  return (
    <div className="relative flex flex-col items-start h-full max-h-60 overflow-hidden">
      {/* Контейнер с прокруткой */}
      <div className="relative h-full max-h-96 overflow-y-auto">
        {/* Линия шкалы */}
        <div className="absolute left-2 -top-10 bottom-0 w-px bg-yellow-400"></div>

        {/* Элементы новостей */}
        {news.map((item, index) => (
          <div
            key={index}
            className="relative mb-10 mt-8 pl-8"
            onMouseEnter={() => handleMouseEnter(index)} // Наведение мыши
            onMouseLeave={handleMouseLeave} // Уход мыши
          >
            {/* Точка на шкале */}
            <div
              className="absolute left-[5px] top-1.5 w-2 h-2 rounded-full bg-yellow-400"
              style={{
                transition: "transform 0.3s ease-in-out",
                transform: hoveredIndex === index ? "translateY(40px)" : "translateY(0)",
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
    </div>
  );
};

export default NewsTimeline;
