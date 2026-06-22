import React from "react";

import { AreaChart, Area, ResponsiveContainer } from "recharts";

export default function DailyProgress({ habits }) {
  const data = [];

  for (let day = 0; day < 31; day++) {
    let completed = 0;

    habits.forEach((habit) => {
      if (habit.checks[day]) {
        completed++;
      }
    });

    data.push({
      day: day + 1,

      value: completed,
    });
  }

  return (
    <div className="w-250 h-31 ml-2 border-2 p-2">
      <h3 className="text-center text-xs text-gray-600 mb-1">DAILY PROGRESS</h3>

      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={data}>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#b7adc9"
            strokeWidth={2}
            fill="#e8e2f0"
            fillOpacity={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
