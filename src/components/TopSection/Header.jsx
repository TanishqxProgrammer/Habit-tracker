import React from "react";
import Habit from "./Habit";
import Month from "./Month";
import ProgressCircle from "./ProgressCircle";
import DailyProgress from "./DailyProgress";

const Header = ({
  habits,
  selectedMonth,
  setSelectedMonth,
  selectedYear,
  setSelectedYear,
}) => {
  return (
    <div className="p-2 flex gap-3 border">
      <div className="flex flex-col">
        <Habit />
        <Month
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
      </div>

      <div className="w-250px">
        <DailyProgress habits={habits} />
      </div>

      <div className="w-50px">
        <ProgressCircle habits={habits} />
      </div>
    </div>
  );
};
export default Header;
