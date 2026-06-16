import React from 'react'

const Month = () => {
  return (
    <div className="w-70 h-17  border-2">

      {/* Headings */}
      <div className="grid grid-cols-2 border-b border-gray-500">
        <div className="text-center font-bold py-1 border-r border-gray-500">
          MONTH
        </div>

        <div className="text-center font-bold py-1">
          YEAR
        </div>
      </div>

      {/* Select Boxes */}
      <div className="grid grid-cols-2">

        <div className="border-r border-gray-500">
          <select className="w-full text-center py-1 outline-none bg-transparent">
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
        </div>

        <div>
          <select className="w-full text-center py-1 outline-none bg-transparent">
            {[2024, 2025, 2026, 2027].map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
        </div>

      </div>
    </div>
  );
};

export default Month;
