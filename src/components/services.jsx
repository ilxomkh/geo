import React from "react";
import { useState } from "react";
import i2 from "../images/i2.svg";
import i3 from "../images/i3.svg";
import i4 from "../images/i4.svg";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    { title: "ГЕОЛОГОРАЗВЕДКА УВС | ТПИ", icon: i2 },
    { title: "КОНСАЛТИНГ И ПАРТНЕРСТВО", icon: i3 },
    { title: "ИССЛЕДОВАНИЯ И РАЗРАБОТКИ", icon: i4 },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Заголовок */}
      <div className="flex items-center mb-12 -mt-64">
        <div className="w-2 h-36 bg-yellow-500 mr-4 ml-2"></div>
        <div className="relative">
          <h3 className="text-4xl font-medium text-left font-oswald text-gray-800 leading-none">
            КОМПЛЕКС УСЛУГ
          </h3>
          {/* Стрелка */}
          <div className="flex items-center mt-8 group">
            <div className="h-px w-24 mt-2 bg-yellow-500 relative group-hover:translate-x-1 transform transition-transform duration-300 ease-in-out">
              <div className="absolute -top-6 -right-12 group-hover:translate-x-1 transform transition-transform duration-300 ease-in-out">
                <div className="rounded-full border border-yellow-500 w-12 h-12 flex items-center justify-center">
                  <span className="text-yellow-500 ">&rarr;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[500px] mr-24 -ml-22 text-left text-gray-600 text-lg max-w-3xl">
        <p>
          Росгеология предлагает комплексную услугу по воспроизводству ресурсной
          базы на всех этапах ГРР. Ведущие эксперты отрасли и уникальные базы
          данных обеспечивают научное сопровождение проектов любой сложности.
        </p>
      </div>
      </div>
      

      {/* Секция с услугами */}
      <div className="space-y-24">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative flex items-center space-x-8 transform transition-all duration-500 cursor-pointer hover:scale-105 group`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Иконка */}
            <div className="w-36 h-36 relative z-10">
              <img
                src={service.icon}
                alt="Icon"
                className="w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* Текст с анимацией */}
            <h3
              className={`text-2xl font-medium font-oswald text-gray-800 transition-all duration-700 ${
                hoveredIndex === index ? "text-yellow-500" : ""
              }`}
            >
              {service.title}
            </h3>

            {/* Анимация выезжающего текста */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-1/3 -z-10 transform transition-transform duration-700 ease-in-out ${
                hoveredIndex === index ? "translate-x-0" : "-translate-x-full"
              }`}
            ></div>
          </div>
        ))}
      </div>
      {/* Дополнительный текст */}
    </section>
  );
};

export default Services;
