import React, { useState } from "react";
import { Link } from "react-router-dom";
import Timer from "./timer.jsx";
import aboutUsImg from "../images/aboutUsImg.jpg";
import ex from "../images/ex.jpg";
import partners from "../images/partners.jpg";
import cons from "../images/cons.jpg";
import tpi from "../images/tpi.jpg";
import media from "../images/media.jpg";
import StatisticsSection from "./StatisticSection.jsx";
import HighlightStatistic from "./HighlightStatistic.jsx";
import NewsTimeline from "./NewsTimeLine.jsx";
import ExStat from "./exStat.jsx";
import InfoColumns from "./partInfo.jsx";
import AnimatedText from "./ycontent.jsx";
import VerticalLineWithMovingDot from "./vLine.jsx";

const YellowSection = () => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [dataIndex, setDataIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hovered, setHovered] = useState(false);

  const data = [
    { title: "КТО МЫ?", subtitle: "Мы предоставляем передовые геологоразведочные решения.", image: aboutUsImg, height: 270, link: "/aboutus" },
    { title: "ТПИ", subtitle: "Твердые полезные ископаемые и их разведка.", image: tpi, height: 300, link: "/tpi" },
    { title: "ЭКСПЕРТИЗА", subtitle: "Профессиональная оценка и рекомендации.", image: ex, height: 330, link: "/ex" },
    { title: "ПАРТНЕРСТВО", subtitle: "Совместное развитие и достижения.", image: partners, height: 350, link: "/partners" },
    { title: "КОНСАЛТИНГ", subtitle: "Консультации по разработке и геологоразведке.", image: cons, height: 300, link: "/cons" },
    { title: "МЕДИА", subtitle: "Новости и события нашей компании.", image: media, height: 270, link: "/media" },
  ];

  const newsData = [
    {
      id: 1,
      date: "06.12.2024",
      title: "Росгеология выявила в Якутии прогнозные ресурсы рудного золота более 145 тонн",
    },
    {
      id: 2,
      date: "07.11.2024",
      title: "Глава Роснедра встретился с топ-менеджментом Росгеологии",
    },
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
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500] opacity-100"
        style={{
          backgroundImage: `url(${data[dataIndex].image})`,
        }}
      >
        {/* Чёрная прозрачная шторка */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Жёлтая полупрозрачная секция */}
      <div
        className="absolute top-28 right-0 bg-yellow-400 bg-opacity-90 w-2/3 flex flex-col justify-center px-8 transition-all duration-700 ease-in-out"
        style={{ height: `${data[dataIndex].height}px` }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Верхнее меню */}
        <div className="absolute top-10 right-28 flex space-x-10 text-white font-oswald text-xl uppercase font-medium">
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
        <div className="flex flex-col items-start mt-8 justify-start">
            <AnimatedText
            title={data[dataIndex].title}
            subtitle={data[dataIndex].subtitle}
          />

        </div>

        {/* Кнопка */}
        <div className="relative mt-4">
          <Link
            to={data[dataIndex].link}
            className={`flex items-center space-x-2 text-white font-oswald font-medium transition-opacity duration-500 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
            style={{ position: "absolute", top: "20px", left: "380px" }}
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
        <div className="p-10 w-80 absolute top-80 right-10">
      <h1 className="text-white text-lg font-bold font-oswald text-right mb-2 mt-2">НОВОСТИ</h1>
      <NewsTimeline news={newsData} />
    </div>
      </div>
      <div className="absolute top-3/4 left-20">
      <VerticalLineWithMovingDot />
    </div>


      {/* Статистика - отображается только для "Кто мы?" */}
      {data[dataIndex].title === "КТО МЫ?" && (
        <div
          className="absolute bottom-10 right-96 animate-fadeSlideUp"
          style={{ animationDuration: "1s" }}
        >
          <div className="absolute -top-40 -left-4">
            <HighlightStatistic />
          </div>
          <StatisticsSection />
        </div>
      )}

      {data[dataIndex].title === "ЭКСПЕРТИЗА" && (
        <div
          className="absolute bottom-10 right-60 animate-fadeIn"
          style={{ animationDuration: "1s" }}
        >
          <ExStat />
        </div>
      )}

      {data[dataIndex].title === "ПАРТНЕРСТВО" && (
        <div
          className="absolute bottom-10 right-60 animate-fadeSlideRight"
          style={{ animationDuration: "1s" }}
        >
          <InfoColumns />
        </div>
      )}

    </div>
  );
};

export default YellowSection;
