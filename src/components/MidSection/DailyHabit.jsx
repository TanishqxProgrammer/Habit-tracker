import React, { useState } from "react";
import { motion } from "framer-motion";

const DailyHabit = ({
  habits,
  setHabits,
  highlightRow,
  totalDays,
  dragIndex,
  setDragIndex,
  moveHabit,
}) => {
  const [dropIndex, setDropIndex] = useState(null);

  const handleHabitChange = (index, value) => {
    const copy = habits.map((habit) => ({
      ...habit,
      checks: [...habit.checks],
    }));

    copy[index].name = value;

    if (value.trim() === "") {
      copy[index].goal = "";
      copy[index].checks = Array(copy[index].checks.length).fill(false);
    }

    setHabits(copy);
  };

  return (
    <div className="border-2 flex-shrink-0 w-[300px]">
      {/* HEADER */}
      <div className="h-[76px] flex justify-center items-center font-bold bg-purple-300 border-b">
        DAILY HABIT
      </div>

      {/* DAYS */}
      <div className="flex justify-center items-center bg-purple-100 h-7 border-b">
        <p>
          {totalDays}/{totalDays}
        </p>
      </div>

      {/* LIST */}
      <div>
        {habits.map((habit, index) => (
          <motion.div
            key={index}
            layout
            draggable
            onDragStart={() => setDragIndex(index)}
            onDragEnd={() => setDragIndex(null)}
            onDragOver={(e) => {
              e.preventDefault();
              setDropIndex(index);
            }}
            onDragLeave={() => setDropIndex(null)}
            onDrop={() => {
              moveHabit(dragIndex, index);
              setDropIndex(null);
            }}
            className={`h-7 flex items-center transition-all
              ${highlightRow === index ? "bg-red-50 border border-red-400" : ""}
              ${dragIndex === index ? "opacity-40 scale-[0.98]" : ""}
              ${dropIndex === index ? "bg-green-100" : ""}
              border-b
            `}
          >
            <input
              type="text"
              value={habit.name}
              onChange={(e) => handleHabitChange(index, e.target.value)}
              placeholder="Enter Habit"
              className="w-full h-full text-center outline-none bg-transparent"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DailyHabit;
