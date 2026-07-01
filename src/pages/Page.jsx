import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Header from "../components/TopSection/Header";
import Middle from "../components/MidSection/Middle";
import Footer from "../components/BottomSection/Footer";
import FooterInfo from "../components/BottomSection/FooterInfo";

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

  // AUTH CHECK
  useEffect(() => {
    const user = localStorage.getItem("loggedIn");
    if (!user) {
      navigate("/");
    }
  }, [navigate]);

  // HABITS STATE
  const [allHabits, setAllHabits] = useState(() => {
    const savedHabits = localStorage.getItem("allHabits");

    return savedHabits ? JSON.parse(savedHabits) : {};
  });

  useEffect(() => {
    localStorage.setItem("allHabits", JSON.stringify(allHabits));
  }, [allHabits]);

  // DATE STATE
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

  // CALENDAR DATA
  const totalDays = new Date(selectedYear, selectedMonth + 1, 0).getDate();

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
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Navbar */}

      <Navbar
        habits={habits}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
      />

      {/* Header */}

      <Header
        habits={habits}
        totalDays={totalDays}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />

      {/* Middle */}

      <div className="w-full overflow-x-auto">
        <div className="min-w-max">
          <Middle
            habits={habits}
            setHabits={setHabits}
            totalDays={totalDays}
            calendarData={calendarData}
          />
        </div>
      </div>

      {/* Footer */}

      <Footer habits={habits} totalDays={totalDays} />

      <FooterInfo
        habits={habits}
        totalDays={totalDays}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
      />
    </div>
  );
};

export default Page;
