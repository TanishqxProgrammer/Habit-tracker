import React from "react";
import Habit from "./Habit";
import Month from "./Month";
import ProgressCircle from "./ProgressCircle";
import DailyProgress from "./DailyProgress";

const Header = ({
  habits,
  totalDays,
  selectedMonth,
  setSelectedMonth,
  selectedYear,
  setSelectedYear,
}) => {
  return (
    <div className="border p-3">
      <div className="flex flex-col lg:flex-row gap-4 items-stretch">
        <div className="flex flex-col">
          <Habit />
          <Month
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />
        </div>

        <div className="flex-1 min-w-[320px]">
          <DailyProgress habits={habits} />
        </div>

        <div className="flex justify-center lg:justify-end">
          <ProgressCircle habits={habits} totalDays={totalDays} />
        </div>
      </div>
    </div>
  );
};

export default Header;
