import React, { useState } from "react";
import img1 from "../images/news1.jpg"; // Подставьте свои изображения
import img2 from "../images/news2.jpg";
import img3 from "../images/news3.jpg";
import img4 from "../images/news4.jpg";

const PressCenter = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);


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
      {
        date: "07.11.2024",
        title: "Глава Роснедра встретился с топ-менеджментом Росгеологии",
        image: img2,
      },
  ];
  const itemsPerPage = 4;
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);

    // Получаем новости для текущей страницы
    const currentNews = newsItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
    
      // Функции для переключения страниц
      const nextPage = () => {
        setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
      };
    
      const prevPage = () => {
        setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
      };
      

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
          <button className="mb-14">
            <div className="absolute right-4 overflow-hidden">
            <div className="relative w-48 h-4 group">
                {/* Линия */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 120"
                    className="absolute top-0 left-2 w-full h-full text-yellow-500"
                    fill="currentColor"
                >
                    <line
                    x1="0"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    stroke="currentColor"
                    strokeWidth="5"
                    />
                </svg>


                {/* Стрелка на конце */}
                <div className="absolute top-1/2 right-3 -translate-y-1/2 transform scale-75 text-yellow-500">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    viewBox="0 0 267 512.43"
                    stroke="currentColor"
                    strokeWidth="5"
                    className="w-5 h-5"
                    >
                    <path
                        fill="currentColor"
                        fillRule="nonzero"
                        d="M3.22 18.9c-4.28-4.3-4.3-11.31-.04-15.64s11.2-4.35 15.48-.04l245.12 245.16c4.28 4.3 4.3 11.31.04 15.64L18.66 509.22a10.874 10.874 0 0 1-15.48-.05c-4.26-4.33-4.24-11.33.04-15.63L240.5 256.22 3.22 18.9z"
                    />
                    </svg>
                </div>
                <div
                className={`absolute top-1/2 left-8 -translate-y-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full transform transition-transform duration-500 ease-out group-hover:translate-x-24`}
                ></div>
                </div>
                </div>
                </button>
        </div>
      </div>
      <div className="flex justify-end mb-5">
        <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-3 py-3 rounded-full ${
            currentPage === 1 ? "bg-gray-200" : "bg-yellow-500 hover:bg-yellow-600"
            } text-white font-medium mr-1 transition`}
        >
            {/* Левая стрелка */}
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
            >
            <path d="M15 18l-6-6 6-6" />
            </svg>
        </button>

        <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-3 rounded-full ${
            currentPage === totalPages
                ? "bg-gray-200"
                : "bg-yellow-500 hover:bg-yellow-600"
            } text-white font-medium ml-1 transition`}
        >
            {/* Правая стрелка */}
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
            >
            <path d="M9 18l6-6-6-6" />
            </svg>
        </button>
        </div>

      {/* Новости */}
        <div className="relative overflow-hidden">
        <div
            key={currentPage} // Обновление ключа перерисовывает блок с анимацией
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-500 ease-in-out transform opacity-100"
            style={{
            opacity: 1,
            }}
        >
            {currentNews.map((item, index) => (
            <div
                key={index}
                className="group bg-gray-50 relative cursor-pointer hover:shadow-xl hover:bg-gray-50 transition-all duration-500"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
            {/* Изображение */}
            <img
              src={item.image}
              alt={`News ${index}`}
              className="w-full h-60 object-cover"
            />
            {/* Текст */}
            <div className="mt-4 text-left px-8 py-4">
              <p className="text-gray-500 mb-2 text-sm">{item.date}</p>
              <h3 className="text-md font-medium text-gray-800 group-hover:text-gray-500 transition-colors duration-500">
                {item.title}
              </h3>
            </div>
            {/* Стрелка */}
            <button>
            <div className="absolute bottom-4 right-4 overflow-hidden">
            <div className="relative w-48 h-4 group">
                {/* Линия */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 600 120"
                    className="absolute top-0 left-10 w-full h-full text-yellow-500"
                    fill="currentColor"
                >
                    <line
                    x1="0"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    stroke="currentColor"
                    strokeWidth="5"
                    />
                </svg>

                {/* Стрелка на конце */}
                <div className="absolute top-1/2 right-2 -translate-y-1/2 transform scale-75 text-yellow-500">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    viewBox="0 0 267 512.43"
                    stroke="currentColor"
                    strokeWidth="5"
                    className="w-5 h-5"
                    >
                    <path
                        fill="currentColor"
                        fillRule="nonzero"
                        d="M3.22 18.9c-4.28-4.3-4.3-11.31-.04-15.64s11.2-4.35 15.48-.04l245.12 245.16c4.28 4.3 4.3 11.31.04 15.64L18.66 509.22a10.874 10.874 0 0 1-15.48-.05c-4.26-4.33-4.24-11.33.04-15.63L240.5 256.22 3.22 18.9z"
                    />
                    </svg>
                </div>
                <div
                className={`absolute top-1/2 left-24 -translate-y-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full transform transition-transform duration-500 ease-out group-hover:translate-x-12`}
                ></div>
                </div>
                </div>
                </button>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default PressCenter;

