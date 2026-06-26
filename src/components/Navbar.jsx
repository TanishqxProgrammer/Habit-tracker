import React from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = ({ dark, setDark, habits = [] }) => {
  const date = new Date();

  const monthYear = date.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  const totalHabits = habits.filter(
  (habit) => habit.name.trim() !== "").length;
  const MAX_HABITS = 15;
  return (
    <nav
      className="sticky top-0 z-50 h-13 px-6 flex justify-between items-center border-b dark:border-zinc-700 bg-purple-200">
      {/* Left */}

      <div>
        <h1 className="text-2xl font-bold">Habit Tracker</h1>

        <p className="text-sm mb-1 text-gray-500 dark:text-gray-400">
          {monthYear}
        </p>
      </div>

      {/*Right*/}

      <div className="flex items-center gap-5">
        <button onClick={() => setDark(!dark)} className="cursor-pointer hover:scale-105 transition">
          <div
            className=" w-10  rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-800 transition duration-200"
          >
            {dark ? <Sun size={22} /> : <Moon size={22} />}
          </div>
        </button>

        <div className="text-right">
          <h2 className="font-semibold">Tanishq</h2>

          <p className="text-sm mb-1 text-gray-500 dark:text-gray-400">
            {totalHabits} / {MAX_HABITS} Habits
          </p>
        </div>

        <div
          className="
          w-10
          h-10

          rounded-full

          bg-green-300

          flex
          items-center
          justify-center

          font-bold
          "
        >
          {(habits?.[0]?.name?.[0] || "T").toUpperCase()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
