import React from "react";
import ExStatistics from "./exStatistics";


const ExStat = () => {
  const stats = [
    {
      value: "500",
      unit: "тб",
      label: "Морская геофизика",
      svgPath: "M10 60 A50 50 0 0 1 110 60", // Полукруг
    },
    {
      value: "50",
      unit: "лет",
      label: "Геология нефти и газа",
      svgPath: "M10 60 A50 50 0 0 1 110 60", // Полукруг
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <ExStatistics
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

export default ExStat;
