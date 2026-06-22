import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./TopSection/Header";
import Middle from "./MidSection/Middle";
import Footer from "./BottomSection/Footer";

const createEmptyHabits = () => {
  return Array(15)
    .fill()
    .map(() => ({
      name: "",

      goal: "",

      checks: Array(31).fill(false),
    }));
};

const Page = () => {
  const [allHabits, setAllHabits] = useState({});

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const currentKey = `${selectedYear}-${selectedMonth}`;

  const habits = allHabits[currentKey] || createEmptyHabits();

  const setHabits = (newHabits) => {
    setAllHabits((prev) => ({
      ...prev,

      [currentKey]: newHabits,
    }));
  };

  const totalDays = new Date(selectedYear, selectedMonth + 1, 0).getDate();

  const calendarData = [];

  for (let i = 1; i <= totalDays; i++) {
    const date = new Date(selectedYear, selectedMonth, i);

    calendarData.push({
      date: i,

      day: date.toLocaleString(
        "en-US",

        {
          weekday: "short",
        },
      ),
    });
  }

  const [dark, setDark] = useState(false);

  return (
    <div>
      <Navbar dark={dark} setDark={setDark} habits={habits} />

      <Header
        habits={habits}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />

      <Middle
        habits={habits}
        setHabits={setHabits}
        totalDays={totalDays}
        calendarData={calendarData}
      />

      <Footer habits={habits} />
    </div>
  );
};

export default Page;
