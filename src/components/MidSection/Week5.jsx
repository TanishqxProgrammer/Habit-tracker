import React from "react";

const Week5 = ({
  habits,
  setHabits,
  totalDays,
  calendarData,
  setHighlightRow,
}) => {
  const remainingDays = Math.max(0, totalDays - 28);
  const toggleBox = (row, col) => {
    const copy = habits.map((habit) => ({
      ...habit,
      checks: [...habit.checks],
    }));

    copy[row].checks[col + 28] = !copy[row].checks[col + 28];

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
                  onClick={() => {
                    if (habit.name.trim() !== "") {
                      toggleBox(row, col);
                    } else {
                      setHighlightRow(row);

                      setTimeout(() => {
                        setHighlightRow(null);
                      }, 1500);
                    }
                  }}
                  className={`h-7 border border-gray-400 flex justify-center items-center ${
                    habit.name.trim() === ""
                      ? "cursor-not-allowed bg-gray-100"
                      : "cursor-pointer"
                  } ${
                    item
                      ? "bg-red-400"
                      : habit.name.trim() === ""
                        ? "bg-gray-100"
                        : "bg-red-100"
                  }`}
                >
                  {item ? (
                    <span className="flex items-center justify-center w-full h-full text-sm">
                      ✓
                    </span>
                  ) : null}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Week5;
