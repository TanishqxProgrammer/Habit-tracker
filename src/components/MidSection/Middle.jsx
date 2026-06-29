import React, { useState } from "react";
import DailyHabit from "./DailyHabit";
import Week1 from "./Week1";
import Week2 from "./Week2";
import Week3 from "./Week3";
import Week4 from "./Week4";
import Week5 from "./Week5";
import Goal from "./Goal";
import Progress from "./Progress";
import { motion } from "framer-motion";

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

  return (
    <motion.div
      layout
      className="w-full border-2 p-2"
    >
      {/* SCROLL WRAPPER */}
      <div
        className="
          flex
          w-max md:w-full
          overflow-x-auto md:overflow-x-hidden
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

        <Week1 habits={habits} setHabits={setHabits} calendarData={calendarData} setHighlightRow={setHighlightRow} />
        <Week2 habits={habits} setHabits={setHabits} calendarData={calendarData} setHighlightRow={setHighlightRow} />
        <Week3 habits={habits} setHabits={setHabits} calendarData={calendarData} setHighlightRow={setHighlightRow} />
        <Week4 habits={habits} setHabits={setHabits} calendarData={calendarData} setHighlightRow={setHighlightRow} />

        <Week5
          habits={habits}
          setHabits={setHabits}
          totalDays={totalDays}
          calendarData={calendarData}
          setHighlightRow={setHighlightRow}
        />

        <Goal habits={habits} setHabits={setHabits} totalDays={totalDays} />

        <Progress habits={habits} />

      </div>
    </motion.div>
  );
};

export default Middle;