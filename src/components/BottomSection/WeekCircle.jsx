import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const WeekCircle = ({
  percentage,
  completedPerDay,
  incompletePerDay,
  color,
  lightColor,
}) => {
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [color, lightColor],
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
      {/* Donut Chart */}
      <div className="relative h-28 w-28 mt-2">
        <Doughnut data={data} options={options} />

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold" style={{ color }}>
            {percentage}%
          </span>
        </div>
      </div>

      {/* Statistics */}
      <div className="flex flex-col mt-[15px]">
        {/* Completed */}
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

        {/* Incomplete */}
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

export default WeekCircle;
