import React from "react";

const Week = ({
  title,
  habits,
  setHabits,
  calendarData,
  setHighlightRow,
  start,
  end,
  headerColor,
  daysColor,
  datesColor,
  checkedColor,
  uncheckedColor,
}) => {
  const totalColumns = end - start;

  const toggleBox = (row, col) => {
    const copy = habits.map((habit) => ({
      ...habit,
      checks: [...habit.checks],
    }));

    copy[row].checks[start + col] = !copy[row].checks[start + col];

    setHabits(copy);
  };

  const highlight = (row) => {
    setHighlightRow(row);

    setTimeout(() => {
      setHighlightRow(null);
    }, 1500);
  };

  return (
    <div
      className={`border flex-shrink-0 ${totalColumns === 7 ? "w-50" : "w-22"}`}
    >
      {/* Header */}

      <div
        className={`h-12 border-b flex justify-center items-center font-bold text-center ${headerColor}`}
      >
        <h1 className="font-serif">{title}</h1>
      </div>

      {/* Days */}

      <div
        className={`grid h-7 border-b ${daysColor}`}
        style={{
          gridTemplateColumns: `repeat(${totalColumns},1fr)`,
        }}
      >
        {calendarData.slice(start, end).map((item, index) => (
          <div
            key={index}
            className={`flex justify-center items-center font-bold font-serif text-sm ${
              index !== totalColumns - 1 ? "border-r border-gray-400" : ""
            }`}
          >
            {item.day[0]}
          </div>
        ))}
      </div>

      {/* Dates */}

      <div
        className={`grid h-7 border-b ${datesColor}`}
        style={{
          gridTemplateColumns: `repeat(${totalColumns},1fr)`,
        }}
      >
        {calendarData.slice(start, end).map((item, index) => (
          <div
            key={index}
            className={`flex justify-center items-center ${
              index !== totalColumns - 1 ? "border-r border-gray-400" : ""
            }`}
          >
            {item.date}
          </div>
        ))}
      </div>

      {/* Checkboxes */}

      <div>
        {habits.map((habit, row) => {
          const disabled = habit.name.trim() === "";

          return (
            <div
              key={row}
              className="grid"
              style={{
                gridTemplateColumns: `repeat(${totalColumns},1fr)`,
              }}
            >
              {habit.checks.slice(start, end).map((checked, col) => (
                <div
                  key={col}
                  title={disabled ? "Enter Habit First" : ""}
                  onClick={() => {
                    if (disabled) {
                      highlight(row);
                    } else {
                      toggleBox(row, col);
                    }
                  }}
                  className={`
                    h-7
                    border
                    border-gray-400
                    flex
                    justify-center
                    items-center
                    transition-colors
                    duration-200
                    ${
                      disabled
                        ? "cursor-not-allowed bg-gray-100"
                        : "cursor-pointer"
                    }
                    ${
                      checked
                        ? checkedColor
                        : disabled
                          ? "bg-gray-100"
                          : uncheckedColor
                    }
                  `}
                >
                  {checked ? "✓" : ""}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Week;
