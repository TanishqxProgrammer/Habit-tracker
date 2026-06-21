import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./TopSection/Header";
import Middle from "./MidSection/Middle";
import Footer from "./BottomSection/Footer";

const Page = () => {
  const [habits, setHabits] = useState(
    Array(15)
      .fill()
      .map(() => ({
        name: "",

        goal: "",

        checks: Array(31).fill(false),
      })),
  );
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  //const currentKey = `${selectedYear}-${selectedMonth}`;
  const totalDays = new Date(selectedYear, selectedMonth + 1, 0).getDate();
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

      <Middle habits={habits} setHabits={setHabits} totalDays={totalDays} />
      <Footer habits={habits} />
    </div>
  );
};

export default Page;
