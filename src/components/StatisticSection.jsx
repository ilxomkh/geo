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
    <div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
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
