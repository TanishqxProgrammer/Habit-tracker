import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ habits = [], selectedMonth, selectedYear }) => {
  const navigate = useNavigate();

  const safeMonth = Number(selectedMonth ?? 0);
  const safeYear = Number(selectedYear ?? new Date().getFullYear());

  const monthName = new Date(safeYear, safeMonth, 1).toLocaleString("default", {
    month: "long",
  });

  const userEmail = localStorage.getItem("userEmail") || "";
  const firstLetter = userEmail.charAt(0).toUpperCase();

  const totalHabits = habits.filter((habit) => habit.name.trim() !== "").length;

  const MAX_HABITS = 15;

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-purple-200 border-b border-gray-300 px-4 py-3">
      {/* Desktop */}
      <div className="hidden sm:flex justify-between items-center">

        {/* Left */}

        <div>
          <h1 className="text-2xl font-bold font-serif">📈 Trackify</h1>
          <p className="text-sm text-gray-600">
            {monthName} {safeYear}
          </p>
        </div>

        {/* Right */}

        <div className="flex items-center gap-5">
          <div className="text-right">
            <h2 className="font-semibold">User</h2>
            <p className="text-sm text-gray-600">
              {totalHabits} / {MAX_HABITS} Habits
            </p>
          </div>

          <div className="w-10 h-10 rounded-full bg-green-300 flex items-center justify-center font-bold">
            {firstLetter || "U"}
          </div>

          <button
            onClick={handleLogout}
            className="px-3 py-2 rounded-lg bg-white hover:bg-red-600 hover:text-white transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Mobile */}

      <div className="sm:hidden">

        {/* Top Row */}

        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold font-serif">Trackify</h1>
            <p className="text-sm text-gray-600">
              {monthName} {safeYear}
            </p>
          </div>

          <div className="w-10 h-10 rounded-full bg-green-300 flex items-center justify-center font-bold">
            {firstLetter || "U"}
          </div>
        </div>

        {/* Bottom Row */}
        
        <div className="flex justify-between items-end mt-3">
          <div>
            <h2 className="font-semibold">User</h2>
            <p className="text-sm text-gray-600">
              {totalHabits} / {MAX_HABITS} Habits
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="px-3 py-2 text-sm rounded-lg bg-white hover:bg-red-600 hover:text-white transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
