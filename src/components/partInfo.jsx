import React from "react";

const InfoColumns = () => {
  const data = [
    {
      title: "ПАРТНЕРСКИЕ ПРОГРАММЫ",
      description: "Совместные проекты по изучению недр",
    },
    {
      title: "ФИНАНСИРОВАНИЕ ГРР",
      description: "Биржевые механизмы и юниорные компании",
    },
    {
      title: "ИННОВАЦИОННЫЕ МЕХАНИЗМЫ",
      description: "Совместные проекты по цифровизации ГРР",
    },
  ];

  return (
    <div className="w-2/3 mx-auto grid grid-cols-1 mb-10 mr-24 md:grid-cols-3 gap-10">
      {data.map((item, index) => (
        <div key={index} className="text-left font-oswald md:text-left">
          {/* Заголовок */}
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>

          {/* Описание */}
          <p className="text-sm text-gray-300">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoColumns;
