import React from "react";
import antiFraudImage from "../images/image.png"; // Adjust the path as necessary

const AntiFraudBanner = () => {
  return (
    <div className="flex items-center py-2 justify-center bg-yellow-100 border-t border-b border-yellow-300 relative">
      {/* Chevron Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-chevron"></div>

      {/* Content */}
      <div className="relative flex items-center px-4">
        {/* Icon */}
        <div className="w-8 h-8 flex items-center justify-center rounded-full border border-red-500 bg-white">
          <img
            src={antiFraudImage} // Use the imported image variable
            alt="Anti-fraud"
            className="w-6 h-6"
          />
        </div>
        {/* Text */}
        <button className="ml-3 text-sm font-medium text-gray-800 hover:text-blue-500 hover:underline">
          Противодействие мошенничеству
        </button>
      </div>
    </div>
  );
};

export default AntiFraudBanner;
