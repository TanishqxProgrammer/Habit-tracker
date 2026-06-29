import React from "react";

const Progress = ({ habits }) => {
  const totalCompleted = habits.reduce(
    (sum, habit) => sum + habit.checks.filter((check) => check).length,

    0,
  );

  const totalGoals = habits.reduce(
    (sum, habit) => sum + Number(habit.goal || 0),

    0,
  );

  return (
    <div className="border-2 flex-shrink-0 w-[280px]">
      <div className="h-12 border-b flex justify-center items-center font-bold bg-purple-300">
        <h1 className="font-serif">PROGRESS</h1>
      </div>

      <div className="border-b h-7 flex justify-center items-center font-bold font-serif bg-purple-100">
        COMPLETED
      </div>

      <div className="border-b h-7 flex justify-center items-center bg-purple-100">
        {totalCompleted} / {totalGoals}
      </div>

      {/* Progress Rows */}

      {habits.map((habit, index) => {
        const completed = habit.checks.filter((check) => check).length;

        const total = Number(habit.goal || 0);

        const percentage = total > 0 ? (completed / total) * 100 : 0;
        return (
          <div
            key={index}
            className="flex items-center gap-2 px-2 border-b h-7"
          >
            {/* Progress Bar */}

            <div className="w-full h-4 bg-gray-100 overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${
                  completed >= total ? "bg-green-300" : "bg-purple-300"
                }`}
                style={{
                  width: `${Math.min(percentage, 100)}%`,
                }}
              ></div>
            </div>

            {/* Numbers */}

            <p className="text-xs whitespace-nowrap">
              {completed}/{total}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Progress;
