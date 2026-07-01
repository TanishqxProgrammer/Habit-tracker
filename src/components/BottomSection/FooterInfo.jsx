import React from "react";
import exportPDF from "../../utils/exportPDF";

const FooterInfo = ({ habits, totalDays, selectedMonth, selectedYear }) => {
  const handleExport = () => {
    exportPDF({
      habits,
      totalDays,
      selectedMonth,
      selectedYear,
    });
  };

  return (
    <div className="w-full mt-6 border-t border-gray-400 bg-gray-50 px-6 py-5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Left */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold tracking-wide text-gray-800">
            📈 Trackify
          </h2>
          <p className="text-sm text-gray-500">
            Build Better Habits, One Day at a Time.
          </p>
        </div>

        {/* Center */}
        <div className="flex-1 text-center">
          <p className="text-gray-600 text-sm">
            Developed with <span className="text-red-500 text-base">❤️</span> by{" "}
            <span className="font-semibold text-gray-800">Tanishq Mishra</span>
          </p>

          <p className="text-xs text-gray-400 mt-1">
            © 2026 All Rights Reserved
          </p>
        </div>

        {/* Right */}
        <div className="flex-1 flex justify-end">
          <button
            onClick={handleExport}
            className="
          flex items-center gap-2
          bg-gradient-to-r from-blue-600 to-indigo-600
          hover:from-blue-700 hover:to-indigo-700
          text-white
          px-5 py-2.5
          rounded-xl
          shadow-lg
          hover:shadow-xl
          hover:scale-105
          transition-all
          duration-300
        "
          >
            📄
            <span>Export PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
