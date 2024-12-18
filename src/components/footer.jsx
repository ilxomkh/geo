import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Левая колонка */}
        <div className="text-left">
          <h4 className="text-lg font-semibold mb-4">АО «Росгео»</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">📍</span>
              117246, Россия, г.Москва, Херсонская улица, д.43 корп. 3, бизнес-центр «Газойл Сити»
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">📞</span>
              +7 (495) 988-58-07, +7 (495) 988-58-09
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">📠</span>
              +7 (499) 271-97-60
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">✉️</span>
              info@rusgeology.ru
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">⚠️</span>
              Направить резюме в Росгео
            </li>
          </ul>
        </div>

        {/* Центральная колонка */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-4 text-gray-600">
            Мы в социальных сетях
          </h4>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-yellow-500 text-2xl">VK</a>
            <a href="#" className="text-yellow-500 text-2xl">✚</a>
            <a href="#" className="text-yellow-500 text-2xl">✈️</a>
            <a href="#" className="text-yellow-500 text-2xl">OK</a>
          </div>
        </div>

        {/* Правая колонка */}
        <div className="text-right">
          <h4 className="text-lg font-semibold mb-4 text-gray-600">
            Горячая линия
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center justify-end">
              <span className="text-yellow-500 mr-2">📞</span>
              8-800-777-19-19
            </li>
            <li className="flex items-center justify-end">
              <span className="text-yellow-500 mr-2">✉️</span>
              hotline@rusgeology.ru
            </li>
            <li className="flex items-center justify-end">
              <span className="text-yellow-500 mr-2">⚠️</span>
              Правовая информация
            </li>
            <li className="flex items-center justify-end">
              <span className="text-gray-500 mr-2">⛓️</span>
              Карта сайта
            </li>
          </ul>
        </div>
      </div>

      {/* Нижний текст */}
      <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm text-gray-500">
        <p>Copyright © 2024 АО «Росгео»</p>
        <p>Все права защищены</p>
        <p className="mt-2">
          Раскрытие информации АО «Росгео» на странице ООО «Интерфакс-ЦРКИ»
        </p>
      </div>
    </footer>
  );
};

export default Footer;
