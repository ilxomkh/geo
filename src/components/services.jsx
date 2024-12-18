import React, { useState } from "react";
import i2 from "../images/i2.svg";
import i3 from "../images/i3.svg";
import i4 from "../images/i4.svg";
import img1 from "../images/image1.jpg"; // Фото для первой секции
import img2 from "../images/image2.jpg"; // Фото для второй секции
import img3 from "../images/image3.jpg"; // Фото для третьей секции

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    { title: "ГЕОЛОГОРАЗВЕДКА УВС | ТПИ", icon: i2, image: img1 },
    { title: "КОНСАЛТИНГ И ПАРТНЕРСТВО", icon: i3, image: img2 },
    { title: "ИССЛЕДОВАНИЯ И РАЗРАБОТКИ", icon: i4, image: img3 },
  ];

  return (
    <section className="relative max-w-screen-xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
 {/* Заголовок */}
 <div className="flex items-center mb-10 -mt-64">
        <div className="w-px h-36 bg-yellow-500 mr-4 ml-2 mb-36"></div>
        <div className="relative">
          <h3 className="text-4xl font-medium text-left font-oswald text-gray-800 leading-none ">
            КОМПЛЕКС УСЛУГ
          </h3>
          {/* Стрелка */}
          <button className="mb-36">
            <div className="absolute right-0 overflow-hidden">
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
        <div className="mt-[750px] mr-24 -ml-20 text-left text-gray-600 text-md max-w-3xl">
        <p className="container flex bg-white px-6 py-4">
          Росгеология предлагает комплексную услугу по воспроизводству ресурсной
          базы на всех этапах ГРР. Ведущие эксперты отрасли и уникальные базы
          данных обеспечивают научное сопровождение проектов любой сложности.
        </p>
      </div>
      </div>

      {/* Фоновые изображения */}
      <div className="absolute inset-0 -z-10 w-2/5 h-80">
  {services.map((service, index) => (
    <img
      key={index}
      src={service.image}
      alt={`Background ${index}`}
      className={`absolute top-96 -left-20 w-full h-full object-cover transition-all duration-[1400ms] ease-in-out
        ${
          hoveredIndex === index
            ? "translate-x-16 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
    />
  ))}
</div>




      {/* Секция с услугами */}
      <div className="space-y-24 relative z-10">
  {services.map((service, index) => (
    <div
      key={index}
      className="relative flex items-center space-x-8 transform transition-all duration-[1000ms] cursor-pointer hover:scale-105 group"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Иконка */}
      <div className="w-44 h-44 relative z-10">
        <img
          src={service.icon}
          alt="Icon"
          className="w-full h-full object-contain transition-transform duration-[1000ms] ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Текст */}
      <h3
        className={`text-2xl font-medium font-oswald text-gray-800 transition-all duration-[1000ms] ease-in-out ${
          hoveredIndex === index ? "text-yellow-500" : ""
        }`}
      >
        {service.title}
      </h3>
    </div>
  ))}
</div>

    </section>
  );
};

export default Services;
