import React from "react";

const Week5 = ({ habits, setHabits, totalDays, calendarData }) => {
  const remainingDays = Math.max(0, totalDays - 28);
  const toggleBox = (row, col) => {
    const copy = habits.map((habit) => ({
      ...habit,
      checks: [...habit.checks],
    }));

    copy[row].checks[col] = !copy[row].checks[col];

    setHabits(copy);
  };

  return (
    <div className="border w-22">
      <div className="h-12 border-b flex justify-center items-center font-bold text-center bg-red-400">
        <h1 className="font-serif">WEEK</h1>
      </div>

      {/* Days */}

      <div
        className="grid h-7 border-b bg-red-300"
        style={{
          gridTemplateColumns: `repeat(${Math.max(1, remainingDays)}, 1fr)`,
        }}
      >
        {calendarData.slice(28).map((item, index) => (
          <div
            key={index}
            className={`

        flex

        justify-center

        items-center

        font-bold

        font-serif

        text-sm

        ${index !== remainingDays - 1 ? "border-r border-gray-400" : ""}

        `}
          >
            {item.day[0]}
          </div>
        ))}
      </div>

      {/* Dates */}
      
      <div
        className="grid h-7 border-b bg-red-300"
        style={{
          gridTemplateColumns: `repeat(${Math.max(1, remainingDays)}, 1fr)`,
        }}
      >
        {calendarData.slice(28).map((item, index) => (
          <div
            key={index}
            className={`
        flex
        justify-center
        items-center

        ${index !== remainingDays - 1 ? "border-r border-gray-400" : ""}

        `}
          >
            {item.date}
          </div>
        ))}
      </div>

      {/* Checkboxes */}

      <div>
        {habits.map((habit, row) => (
          <div
            key={row}
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${Math.max(1, remainingDays)}, 1fr)`,
            }}
          >
            {habit.checks

              .slice(28, 28 + remainingDays)

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
