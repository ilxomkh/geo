import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Timer from "./timer.jsx";
import aboutUsImg from "../images/aboutUsImg.webp";
import ex from "../images/ex.webp";
import partners from "../images/partners.webp";
import cons from "../images/cons.webp";
import tpi from "../images/tpi.webp";
import media from "../images/media.webp";

const YellowSection = () => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [dataIndex, setDataIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hovered, setHovered] = useState(false);

  const data = [
    { title: "КТО МЫ?", subtitle: "Мы предоставляем передовые геологоразведочные решения.", image: aboutUsImg, height: 300, link: "/aboutus" },
    { title: "ТПИ", subtitle: "Твердые полезные ископаемые и их разведка.", image: tpi, height: 350, link: "/tpi" },
    { title: "ЭКСПЕРТИЗА", subtitle: "Профессиональная оценка и рекомендации.", image: ex, height: 400, link: "/ex" },
    { title: "ПАРТНЕРСТВО", subtitle: "Совместное развитие и достижения.", image: partners, height: 350, link: "/partners" },
    { title: "КОНСАЛТИНГ", subtitle: "Консультации по разработке и геологоразведке.", image: cons, height: 300, link: "/cons" },
    { title: "МЕДИА", subtitle: "Новости и события нашей компании.", image: media, height: 270, link: "/media" },
  ];

  const handleTabClick = (index) => {
    setDataIndex(index);
    setIsPaused(true);
    setTimeLeft(10);
  };

  const handleTimerEnd = () => {
    setDataIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Фон с плавной анимацией и чёрной шторкой */}
      <div
        key={data[dataIndex].image}
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 opacity-100"
        style={{
          backgroundImage: `url(${data[dataIndex].image})`,
        }}
      >
        {/* Чёрная прозрачная шторка */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Жёлтая полупрозрачная секция */}
      <div
        className="absolute top-24 right-0 bg-yellow-400 bg-opacity-90 w-2/3 flex flex-col justify-center px-8 transition-all duration-700 ease-in-out"
        style={{ height: `${data[dataIndex].height}px` }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Верхнее меню */}
        <div className="absolute top-12 right-12 flex space-x-10 text-white text-xl uppercase font-medium">
          {["Кто мы?", "ТПИ", "Экспертиза", "Партнерство", "Консалтинг", "Медиа"].map((item, index) => (
            <span
              key={index}
              className={`cursor-pointer ${
                dataIndex === index
                  ? "font-bold border-b-2 border-white"
                  : "opacity-75"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Контент */}
        <div className="flex flex-col items-start justify-start px-8">
          <h1 className="text-4xl font-bold mt-8 leading-tight mb-4 text-white text-left">
            {data[dataIndex].title}
          </h1>
          <p className="text-lg font-medium text-white text-left">
            {data[dataIndex].subtitle}
          </p>
        </div>

        {/* Кнопка */}
        <div className="relative mt-4">
          <Link
            to={data[dataIndex].link}
            className={`flex items-center space-x-2 text-white font-medium transition-opacity duration-500 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
            style={{ position: "absolute", top: "40px", left: "380px" }}
          >
            <span className="text-sm uppercase">ПЕРЕЙТИ В РАЗДЕЛ</span>
          </Link>
        </div>

        {/* Таймер */}
        <div>
          <Timer
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
            onTimerEnd={handleTimerEnd}
            isPaused={isPaused}
          />
        </div>
      </div>
    </div>
  );
};

export default YellowSection;
