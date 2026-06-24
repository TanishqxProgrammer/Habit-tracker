import React from "react";

const Week3 = ({ habits, setHabits, calendarData, setHighlightRow }) => {
  const toggleBox = (row, col) => {
    const copy = habits.map((habit) => ({
      ...habit,
      checks: [...habit.checks],
    }));

    copy[row].checks[col + 14] = !copy[row].checks[col + 14];

    setHabits(copy);
  };

  return (
    <div className="border w-50">
      <div className="h-12 border-b flex justify-center p-2.5 font-bold text-center bg-pink-300">
        <h1 className="font-serif">WEEK</h1>
      </div>
      <div className="grid grid-cols-7 h-7 border-b bg-pink-200">
        {calendarData.slice(14, 21).map((item, index) => (
          <div
            key={index}
            className={`
        flex justify-center items-center
        font-bold font-serif text-sm
        ${index !== 6 ? "border-r border-gray-400" : ""}
      `}
          >
            {item.day[0]}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 h-7 border-b bg-pink-100">
        {calendarData.slice(14, 21).map((item, index) => (
          <div
            key={index}
            className={`
        flex justify-center items-center
        ${index !== 6 ? "border-r border-gray-400" : ""}
      `}
          >
            {item.date}
          </div>
        ))}
      </div>

      <div>
        {habits.map((habit, row) => (
          <div key={row} className="grid grid-cols-7">
            {habit.checks

              .slice(14, 21)

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
                  className={` h-7 border border-gray-400 flex justify-center items-center

                   ${
                     habit.name.trim() === ""
                       ? "cursor-not-allowed bg-gray-100"
                       : "cursor-pointer"
                   }

                  ${
                    item
                      ? "bg-pink-300"
                      : habit.name.trim() === ""
                        ? "bg-gray-100"
                        : "bg-pink-50"
                  }

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

export default Week3;
