import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scrolling..."); // Проверка вызова обработчика
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Добавляем обработчик события прокрутки
    window.addEventListener("scroll", handleScroll);

    // Удаляем обработчик при размонтировании
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
    className={`fixed w-full z-20 transition-all duration-300 font-montserrat ${
      scrolled
        ? "top-0 bg-gray-600 border-gray-200 dark:bg-gray-900 dark:border-gray-600"
        : "top-12 bg-transparent border-transparent"
    }`}
  >
    <div className="max-w-screen-xl mx-auto flex justify-between items-center h-24 p-4">
      {/* Логотип */}
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/50" 
          alt="Logo"
          className="h-8"
        />
        <span className="text-xl text-white hover:text-gray-900 font-bold">
          РОСГЕОЛОГИЯ
        </span>
      </div>
  
      {/* Переключатель языков */}
      <div className="flex space-x-3 text-white text-sm">
        <button className="hover:text-gray-900">RU</button>
        <span>|</span>
        <button className="hover:text-gray-900">EN</button>
      </div>
  
      {/* Меню */}
      <ul className="hidden md:flex space-x-8 font-medium text-white">
        <li>
          <a href="#" className="hover:text-gray-900">
            О КОМПАНИИ
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-900">
            ЗАКУПКИ
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-900">
            ПРЕСС-ЦЕНТР
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-900">
            ВАКАНСИИ
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-900">
            МЕДИА
          </a>
        </li>
      </ul>
  
      {/* Контакты */}
      <div className="flex items-center space-x-6">
        <div className="hidden md:block text-sm">
          <a href="tel:+998912345678" className="hover:text-gray-900 text-white">
            + 998 91 234 56 78
          </a>
        </div>
        {/* Иконка поиска */}
        <button className="p-2 rounded-lg text-white hover:text-gray-900">
          {/* Ваша SVG иконка */}
        </button>
        {/* Меню */}
        <button>
          {/* Ваша SVG иконка */}
        </button>
      </div>
    </div>
  </nav>
  
  );
};

export default Navbar;
