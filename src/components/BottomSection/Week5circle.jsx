import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Week2circle = ({ percentage, completedPerDay, incompletePerDay }) => {
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],

        backgroundColor: ["#FF6467", "#ffe2e2"],

        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "78%",

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="h-50 w-49 border flex flex-col items-center">
      {/* Donut */}
      <div className="relative h-28 w-28 mt-2">
        <Doughnut data={data} options={options} />

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-[#FF6467]">
            {percentage}%
          </span>
        </div>
      </div>

      {/* Bottom Boxes */} 
      {/* Bottom Boxes */}
      <div className="flex flex-col mt-[15px]">
        <div className="flex">
          {[0, 1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className="h-8 w-7 border-r border-t flex items-center justify-center"
            >
              {completedPerDay[index] ?? ""}
            </div>
          ))}
        </div>

        <div className="flex">
          {[0, 1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className="h-8 w-7 border-r border-t flex items-center justify-center"
            >
              {incompletePerDay[index] ?? ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Week2circle;
