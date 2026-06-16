import React from 'react'

import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  { value: 45 },
  { value: 55 },
  { value: 20 },
  { value: 65 },
  { value: 50 },
  { value: 35 },
  { value: 70 },
  { value: 30 },
  { value: 45 },
  { value: 55 },
  { value: 40 },
  { value: 50 },
  { value: 35 },
  { value: 60 },
  { value: 25 },
  { value: 55 },
  { value: 45 },
  { value: 30 },
  { value: 20 },
  { value: 25 },
  { value: 65 },
  { value: 15 },
  { value: 70 },
  { value: 35 },
];

export default function DailyProgress() {
  return (
    <div className="w-250 h-31 ml-2 border-2 p-2">

      <h3 className="text-center text-xs text-gray-600 mb-1">
        DAILY PROGRESS
      </h3>

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