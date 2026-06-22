import React from "react";

const Week1 = ({ habits, setHabits, calendarData }) => {
  const toggleBox = (row, col) => {
    const copy = habits.map((habit) => ({
      ...habit,
      checks: [...habit.checks],
    }));

    copy[row].checks[col] = !copy[row].checks[col];

    setHabits(copy);
  };
  return (
    <div className="border w-50">
      <div className="h-12 border-b flex justify-center p-2.5 font-bold text-center bg-cyan-300">
        <h1 className="font-serif">WEEK</h1>
      </div>
      <div className="grid grid-cols-7 h-7 border-b bg-cyan-200">
        {calendarData
          .slice(0, 7)
          .map((item, index) => <div key={index}>{item.day[0]}</div>)
          .map((day, index) => (
            <div
              key={index}
              className={`
        flex justify-center items-center
        font-bold font-serif text-sm
        ${index !== 6 ? "border-r border-gray-400" : ""}
      `}
            >
              {day}
            </div>
          ))}
      </div>

      <div className="grid grid-cols-7 h-7 border-b bg-cyan-100">
        {calendarData
          .slice(0, 7)
          .map((item, index) => <div key={index}>{item.date}</div>)
          .map((date, index) => (
            <div
              key={index}
              className={`
        flex justify-center items-center
        ${index !== 6 ? "border-r border-gray-400" : ""}
      `}
            >
              {date}
            </div>
          ))}
      </div>

      <div>
        {habits.map((habit, row) => (
          <div key={row} className="grid grid-cols-7">
            {habit.checks

              .slice(0, 7)

              .map((item, col) => (
                <div
                  key={col}
                  onClick={() => toggleBox(row, col)}
                  className={`

                h-7

                border

                border-gray-400

                cursor-pointer

                flex

                justify-center

                items-center

                ${item ? "bg-cyan-300" : "bg-cyan-50"}

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

export default Week1;
