import React, { useState } from "react";
import img1 from "../images/news1.jpg"; // Подставьте свои изображения
import img2 from "../images/news2.jpg";
import img3 from "../images/news3.jpg";
import img4 from "../images/news4.jpg";

const PressCenter = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const newsItems = [
    {
      date: "06.12.2024",
      title: "Росгеология выявила в Якутии прогнозные ресурсы рудного золота более 145 тонн",
      image: img1,
    },
    {
      date: "07.11.2024",
      title: "Глава Роснедра встретился с топ-менеджментом Росгеологии",
      image: img2,
    },
    {
      date: "31.10.2024",
      title: "Росгеология подтвердила лидерство в Антикоррупционном рейтинге РСПП",
      image: img3,
    },
    {
      date: "15.10.2024",
      title: "Информационное сообщение",
      image: img4,
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16">
      {/* Заголовок */}
      <div className="flex items-center">
        <div className="w-px h-36 bg-yellow-500 mr-4 ml-2 mb-12"></div>
        <div className="relative">
          <h3 className="text-4xl font-medium text-left font-oswald text-gray-800 leading-none ">
            ПРЕСС-ЦЕНТР
          </h3>
          {/* Стрелка */}
          <div className="flex items-center mt-8 group">
            <div className="h-px w-24 mt-2 mb-2 bg-yellow-500 relative group-hover:translate-x-1 transform transition-transform duration-300 ease-in-out">
              <div className="absolute -top-6 -right-12 group-hover:translate-x-1 transform transition-transform duration-300 ease-in-out">
                <div className="rounded-full border border-yellow-500 w-12 h-12 flex items-center justify-center">
                  <span className="text-yellow-500 ">&rarr;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Новости */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="group relative cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Изображение */}
            <img
              src={item.image}
              alt={`News ${index}`}
              className="w-full h-60 object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            {/* Текст */}
            <div className="mt-4 text-left">
              <p className="text-gray-500 text-sm">{item.date}</p>
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-yellow-500 transition-colors duration-700">
                {item.title}
              </h3>
            </div>
            {/* Стрелка */}
            <div className="absolute bottom-4 right-4 transform transition-transform duration-700 group-hover:translate-x-2">
              <span className="text-yellow-500">&rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PressCenter;
