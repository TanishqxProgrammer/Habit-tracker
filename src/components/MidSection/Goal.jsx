import React from "react";

const Goal = ({ habits, setHabits }) => {
  const handleGoalChange = (index, value) => {
    const copy = habits.map((habit) => ({
      ...habit,
      checks: [...habit.checks],
    }));

    copy[index].goal = Number(value);

    setHabits(copy);
  };

  return (
    <div className="border w-9">
      <div className="w-full h-26 border-b flex justify-center items-center">
        <p className="whitespace-pre-line font-bold font-serif text-center">
          {`G
O
A
L`}
        </p>
      </div>

      <div className="flex flex-col">
        {habits.map((habit, index) => (
          <input
            key={index}
            type="number"
            min="0"
            value={habit.goal}
            onChange={(e) =>
              handleGoalChange(
                index,

                e.target.value,
              )
            }
            className="h-7 w-full border-b text-center outline-none"
          />
        ))}
      </div>
    </div>
  );
};

export default Goal;
