import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Header from "../components/TopSection/Header";
import Middle from "../components/MidSection/Middle";
import Footer from "../components/BottomSection/Footer";

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
  const navigate = useNavigate();

  // 🔐 AUTH CHECK
  useEffect(() => {
    const user = localStorage.getItem("loggedIn");

    if (!user) {
      navigate("/");
    }
  }, []);

  // 🌙 DARK MODE STATE
  const [dark, setDark] = useState(false);

  // 📦 HABITS STATE
  const [allHabits, setAllHabits] = useState({});

  // 📅 DATE STATE
  const [selectedMonth, setSelectedMonth] = useState(
    new Date().getMonth()
  );

  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear()
  );

  const currentKey = `${selectedYear}-${selectedMonth}`;

  const habits = allHabits[currentKey] || createEmptyHabits();

  const setHabits = (newHabits) => {
    setAllHabits((prev) => ({
      ...prev,
      [currentKey]: newHabits,
    }));
  };

  // 📆 DAYS
  const totalDays = new Date(
    selectedYear,
    selectedMonth + 1,
    0
  ).getDate();

  const calendarData = [];

  for (let i = 1; i <= totalDays; i++) {
    const date = new Date(selectedYear, selectedMonth, i);

    calendarData.push({
      date: i,
      day: date.toLocaleString("en-US", {
        weekday: "short",
      }),
    });
  }

  return (
    <div>
      {/* NAVBAR */}
      <Navbar
        dark={dark}
        setDark={setDark}
        habits={habits}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
      />

      {/* HEADER */}
      <Header
        habits={habits}
        totalDays={totalDays}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />

      {/* MAIN */}
      <Middle
        habits={habits}
        setHabits={setHabits}
        totalDays={totalDays}
        calendarData={calendarData}
      />

      {/* FOOTER */}
      <Footer habits={habits} totalDays={totalDays} />
    </div>
  );
};

export default Page;