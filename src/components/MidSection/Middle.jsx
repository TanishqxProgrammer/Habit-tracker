import React, { useState } from "react";
import { motion } from "framer-motion";

import DailyHabit from "./DailyHabit";
import Week from "./Week";
import Goal from "./Goal";
import Progress from "./Progress";

const Middle = ({ habits, setHabits, totalDays, calendarData }) => {
  const [highlightRow, setHighlightRow] = useState(null);
  const [dragIndex, setDragIndex] = useState(null);

  const moveHabit = (from, to) => {
    if (from === null || from === to) return;

    const copy = [...habits];
    const [removed] = copy.splice(from, 1);
    copy.splice(to, 0, removed);

    setHabits(copy);
    setDragIndex(null);
  };

  const weeks = [
    {
      title: "WEEK 1",
      start: 0,
      end: 7,
      headerColor: "bg-cyan-300",
      daysColor: "bg-cyan-200",
      datesColor: "bg-cyan-100",
      checkedColor: "bg-cyan-300",
      uncheckedColor: "bg-cyan-50",
    },
    {
      title: "WEEK 2",
      start: 7,
      end: 14,
      headerColor: "bg-green-300",
      daysColor: "bg-green-200",
      datesColor: "bg-green-100",
      checkedColor: "bg-green-300",
      uncheckedColor: "bg-green-50",
    },
    {
      title: "WEEK 3",
      start: 14,
      end: 21,
      headerColor: "bg-pink-300",
      daysColor: "bg-pink-200",
      datesColor: "bg-pink-100",
      checkedColor: "bg-pink-300",
      uncheckedColor: "bg-pink-50",
    },
    {
      title: "WEEK 4",
      start: 21,
      end: 28,
      headerColor: "bg-yellow-300",
      daysColor: "bg-yellow-200",
      datesColor: "bg-yellow-100",
      checkedColor: "bg-yellow-300",
      uncheckedColor: "bg-yellow-50",
    },
    {
      title: "WEEK 5",
      start: 28,
      end: totalDays,
      headerColor: "bg-red-400",
      daysColor: "bg-red-300",
      datesColor: "bg-red-300",
      checkedColor: "bg-red-400",
      uncheckedColor: "bg-red-100",
    },
  ];

  return (
    <motion.div layout className="w-full border-2 p-2">
      <div
        className="
          flex
          w-max
          md:w-full
          overflow-x-auto
          md:overflow-x-hidden
        "
      >
        <DailyHabit
          habits={habits}
          setHabits={setHabits}
          highlightRow={highlightRow}
          setHighlightRow={setHighlightRow}
          totalDays={totalDays}
          dragIndex={dragIndex}
          setDragIndex={setDragIndex}
          moveHabit={moveHabit}
        />

        {weeks.map((week) => (
          <Week
            key={week.title}
            {...week}
            habits={habits}
            setHabits={setHabits}
            calendarData={calendarData}
            setHighlightRow={setHighlightRow}
          />
        ))}

        <Goal habits={habits} setHabits={setHabits} totalDays={totalDays} />

        <Progress habits={habits} />
      </div>
    </motion.div>
  );
};

export default Middle;
