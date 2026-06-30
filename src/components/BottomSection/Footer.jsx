import React from "react";
import WeeklyProgress from "./WeeklyProgress";
import WeekCircle from "./WeekCircle";
import Notes from "./Notes";

const Footer = ({ habits, totalDays }) => {
  const getWeekStats = (startDay, endDay) => {
    let completed = 0;

    const completedPerDay = [];
    const incompletePerDay = [];

    for (let day = startDay; day < endDay; day++) {
      let completedToday = 0;

      habits.forEach((habit) => {
        if (habit.name.trim() !== "" && habit.checks[day]) {
          completedToday++;
          completed++;
        }
      });

      completedPerDay.push(completedToday);

      const activeHabits = habits.filter(
        (habit) => habit.name.trim() !== "",
      ).length;

      incompletePerDay.push(activeHabits - completedToday);
    }

    const activeHabits = habits.filter(
      (habit) => habit.name.trim() !== "",
    ).length;

    const totalBoxes = activeHabits * (endDay - startDay);

    const percentage =
      totalBoxes === 0 ? 0 : Math.round((completed / totalBoxes) * 100);

    return {
      percentage,
      completedPerDay,
      incompletePerDay,
    };
  };

  const weeks = [
    {
      ...getWeekStats(0, 7),
      color: "#78d0d6",
      lightColor: "#dff0f2",
    },
    {
      ...getWeekStats(7, 14),
      color: "#7bf1a8",
      lightColor: "#dcfce7",
    },
    {
      ...getWeekStats(14, 21),
      color: "#fda5d5",
      lightColor: "#fce7f3",
    },
    {
      ...getWeekStats(21, 28),
      color: "#fff085",
      lightColor: "#fef9c2",
    },
    {
      ...getWeekStats(28, totalDays),
      color: "#FF6467",
      lightColor: "#ffe2e2",
    },
  ];

  return (
    <div className="w-full overflow-x-auto m-2">
      <div className="flex min-w-max border-2">
        <WeeklyProgress />

        {weeks.map((week, index) => (
          <WeekCircle
            key={index}
            percentage={week.percentage}
            completedPerDay={week.completedPerDay}
            incompletePerDay={week.incompletePerDay}
            color={week.color}
            lightColor={week.lightColor}
          />
        ))}

        <Notes />
      </div>
    </div>
  );
};

export default Footer;