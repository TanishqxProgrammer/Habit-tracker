import React from "react";

const Goal = ({ habits, setHabits, totalDays }) => {
  const handleGoalChange = (index, value) => {
    const copy = habits.map((habit) => ({
      ...habit,
      checks: [...habit.checks],
    }));

    copy[index].goal = value === "" ? "" : Number(value);

    setHabits(copy);
  };

  return (
    <div className="border w-8">
      {/* Header */}
      <div className="w-full h-26 border-b flex justify-center items-center">
        <p className="whitespace-pre-line font-bold font-serif text-center">
          {`G
O
A
L`}
        </p>
      </div>

      {/* Inputs */}
      <div className="flex flex-col">
        {habits.map((habit, index) => (
          <input
            key={index}
            type="number"
            min="0"
            max={totalDays}
            value={habit.goal || ""}
            disabled={!habit.name || habit.name.trim() === ""}
            onChange={(e) => {
              let val = Number(e.target.value);

              if (val > totalDays) val = totalDays;

              handleGoalChange(index, val);
            }}
            placeholder={
              !habit.name || habit.name.trim() === ""
                ? "Add habit first"
                : ` ${totalDays}`
            }
            className={`h-7 w-full border-b text-center outline-none ${
              !habit.name || habit.name.trim() === ""
                ? "bg-gray-100 cursor-not-allowed"
                : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Goal;
