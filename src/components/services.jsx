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
          <div className="flex items-center mt-8 group">
            <div className="h-px w-24 mt-2 mb-36 bg-yellow-500 relative group-hover:translate-x-1 transform transition-transform duration-300 ease-in-out">
              <div className="absolute -top-6 -right-12 group-hover:translate-x-1 transform transition-transform duration-300 ease-in-out">
                <div className="rounded-full border border-yellow-500 w-12 h-12 flex items-center justify-center">
                  <span className="text-yellow-500 ">&rarr;</span>
                </div>
              </div>
            </div>
          </div>
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
