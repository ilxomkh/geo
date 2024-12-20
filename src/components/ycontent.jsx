import React, { useState, useEffect } from "react";

const AnimatedText = ({ title, subtitle }) => {
  const [key, setKey] = useState(0); // Уникальный ключ для перезагрузки анимации

  useEffect(() => {
    setKey((prevKey) => prevKey + 1); // Изменяем ключ при изменении текста
  }, [title, subtitle]); // Перезапускаем при смене title или subtitle

  return (
    <div key={key} className="flex flex-col items-start justify-start px-8">
      <h1 className="text-4xl font-bold font-oswald mt-8 leading-tight mb-4 text-white text-left opacity-0 animate-fadeIn">
        {title}
      </h1>
      <p className="text-lg font-medium font-oswald text-black text-left opacity-0 animate-fadeIn">
        {subtitle}
      </p>
    </div>
  );
};

export default AnimatedText;
