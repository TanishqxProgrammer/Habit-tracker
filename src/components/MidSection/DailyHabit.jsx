import React from "react";

const DailyHabit = ({ habits, setHabits }) => {
  const handleHabitChange = (index, value) => {
    const copy = [...habits];
    copy[index].name = value;
    setHabits(copy);
  };

  return (
    <div className="border-2 w-75">
      <div className="h-12 border-b flex justify-center p-2.5 font-bold text-center bg-purple-300">
        <h1 className="font-serif">DAILY HABIT</h1>
      </div>
      <div>
        <h1 className="border-b h-7 w-full flex justify-center font-bold font-serif bg-purple-100">
          Days
        </h1>
      </div>
      <div className="flex justify-center items-center border-b bg-purple-100 h-7 w-full">
        <p>31/31</p>
      </div>
      <div>
        {habits.map((habit, index) => (
          <input
            key={index}
            type="text"
            value={habit.name}
            onChange={(e) =>
              handleHabitChange(
                index,

                e.target.value,
              )
            }
            className="h-7 border-b w-full"
            placeholder="Enter Habit"
          />
        ))}
      </div>
    </div>
  );
};

export default DailyHabit;
