import React from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Month = ({
  selectedMonth,
  setSelectedMonth,
  selectedYear,
  setSelectedYear,
}) => {
  return (
    <div className="w-70 h-17  border-2">
      {/* Headings */}
      <div className="grid grid-cols-2 border-b border-gray-500">
        <div className="text-center font-bold py-1 border-r border-gray-500">
          MONTH
        </div>

        <div className="text-center font-bold py-1">YEAR</div>
      </div>

      {/* Select Boxes */}
      <div className="grid grid-cols-2">
        <div className="border-r border-gray-500">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
            className="w-full text-center py-1 outline-none bg-transparent"
          >
            {months.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="w-full text-center py-1 outline-none bg-transparent"
          >
            {[2024, 2025, 2026, 2027].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Month;
