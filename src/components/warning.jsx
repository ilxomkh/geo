import React from "react";
import antiFraudImage from "../images/image.svg"; // Adjust the path as necessary

const AntiFraudBanner = () => {
  return (
    <div className="flex items-center py-2 justify-center bg-gray-50 border-t-2 border-b-2 border-yellow-500 relative">
      {/* Chevron Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-chevron"
        style={{
          backgroundRepeat: "repeat",
          backgroundSize: "30px 51px", // Размер повторения SVG
        }}
      ></div>

      {/* Content */}
      <div className="relative flex items-center px-4">
        {/* Icon */}
          <img
            src={antiFraudImage} // Use the imported image variable
            alt="Anti-fraud"
            className="w-8 h-8"
          />
        {/* Text */}
        <button className="ml-3 text-sm font-medium text-gray-800 hover:text-blue-500 hover:underline">
          Противодействие мошенничеству
        </button>
      </div>
    </div>
  );
};

export default AntiFraudBanner;
