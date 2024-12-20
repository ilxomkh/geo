import React from "react";
import Statistic from "./statistic";

const StatisticsSection = () => {
  const stats = [
    {
      value: "2,5",
      unit: "тыс. т золота",
      label: "Сухой Лог",
      svgPath: "M10 60 A50 50 0 0 1 110 60", // Полукруг
    },
    {
      value: "1,9",
      unit: "трлн м³ газа",
      label: "Ковыктинское",
      svgPath: "M10 60 A50 50 0 0 1 110 60", // Полукруг
    },
    {
      value: "3,1",
      unit: "млрд т нефти",
      label: "Тенгизское",
      svgPath: "M10 60 A50 50 0 0 1 110 60", // Полукруг
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {stats.map((stat, index) => (
          <Statistic
            key={index}
            value={stat.value}
            unit={stat.unit}
            label={stat.label}
            svgPath={stat.svgPath}
          />
        ))}
      </div>
    </div>
  );
};

export default StatisticsSection;
