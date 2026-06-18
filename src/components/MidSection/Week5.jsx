import React from "react";

const Week5 = ({ habits, setHabits }) => {
  const toggleBox = (row, col) => {

  const copy = habits.map(habit => ({
    ...habit,
    checks: [...habit.checks]
  }));

  copy[row].checks[col] =
    !copy[row].checks[col];

  setHabits(copy);

};

  return (
    <div className="border w-22">
      <div className="h-12 border-b flex justify-center items-center font-bold text-center bg-red-400">
        <h1 className="font-serif">WEEK</h1>
      </div>

      {/* Days */}

      <div className="grid grid-cols-3 h-7 border-b bg-red-300">
        {["S", "M", "T"].map((day, index) => (
          <div
            key={index}
            className={`

              flex

              justify-center

              items-center

              font-bold

              font-serif

              text-sm

              ${index !== 2 ? "border-r border-gray-400" : ""}

              `}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Dates */}

      <div className="grid grid-cols-3 h-7 border-b bg-red-200">
        {[29, 30, 31].map((date, index) => (
          <div
            key={index}
            className={`

              flex

              justify-center

              items-center

              ${index !== 2 ? "border-r border-gray-400" : ""}

              `}
          >
            {date}
          </div>
        ))}
      </div>

      {/* Checkboxes */}

      <div>
        {habits.map((habit, row) => (
          <div key={row} className="grid grid-cols-3">
            {habit.checks

              .slice(28, 31)

              .map((item, col) => (
                <div
                  key={col}
                  onClick={() =>
                    toggleBox(
                      row,

                      col + 28,
                    )
                  }
                  className={`

                    h-7

                    border

                    border-gray-400

                    cursor-pointer

                    flex

                    justify-center

                    items-center

                    ${item ? "bg-red-400" : "bg-red-100"}

                    `}
                >
                  {item ? "✓" : ""}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Week5;
