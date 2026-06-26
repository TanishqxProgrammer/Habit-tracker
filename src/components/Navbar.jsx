import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  dark,
  setDark,
  habits = [],
  selectedMonth,
  selectedYear,
}) => {
  const navigate = useNavigate();

  // SAFE fallback (IMPORTANT FIX)
  const safeMonth = Number(selectedMonth ?? 0);
  const safeYear = Number(selectedYear ?? new Date().getFullYear());

  const monthName = new Date(
    safeYear || new Date().getFullYear(),
    safeMonth || 0,
    1,
  ).toLocaleString("default", { month: "long" });

  // user email first letter
  const userEmail = localStorage.getItem("userEmail") || "";
  const firstLetter = userEmail.charAt(0).toUpperCase();

  // habits count
  const totalHabits = habits.filter((habit) => habit.name.trim() !== "").length;

  const MAX_HABITS = 15;

  // logout
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 h-13 px-6 flex justify-between items-center border-b dark:border-zinc-700 bg-purple-200">
      {/* LEFT SIDE */}
      <div>
        <h1 className="text-2xl font-bold font-serif">Habit Tracker</h1>

        <p className="text-sm mb-1 text-gray-500 dark:text-gray-400">
          {monthName} {safeYear}
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-5">
        {/* HABIT INFO */}
        <div className="text-right">
          <h2 className="font-semibold">User</h2>

          <p className="text-sm mb-1 text-gray-500 dark:text-gray-400">
            {totalHabits} / {MAX_HABITS} Habits
          </p>
        </div>

        {/* AVATAR */}
        <div className="w-10 h-10 rounded-full bg-green-300 flex items-center justify-center font-bold">
          {firstLetter || "U"}
        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="text-sm px-3 py-1 rounded-lg bg-white text-black hover:bg-red-600 hover:text-white transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
