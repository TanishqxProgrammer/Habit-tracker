import React from "react";
import WeeklyProgress from "./WeeklyProgress";
import Week1circle from "./Week1circle";
import Week2circle from "./Week2circle";
import Week3circle from "./Week3circle";
import Week4circle from "./Week4circle";
import Week5circle from "./Week5circle";
import Notes from "./Notes";

const Footer = ({ habits, totalDays }) => {
  const getWeekStats = (startDay, endDay) => {
    let completed = 0;

    const completedPerDay = [];
    const incompletePerDay = [];

    for (let day = startDay; day < endDay; day++) {
      let completedToday = 0;

      habits.forEach((habit) => {
        if (habit.name.trim() !== "") {
          if (habit.checks[day]) {
            completedToday++;
            completed++;
          }
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
    const incomplete = totalBoxes - completed;
    const percentage =
      totalBoxes === 0 ? 0 : Math.round((completed / totalBoxes) * 100);
    return {
      completed,
      incomplete,
      percentage,
      completedPerDay,
      incompletePerDay,
    };
  };
  const week1 = getWeekStats(0, 7);
  const week2 = getWeekStats(7, 14);
  const week3 = getWeekStats(14, 21);
  const week4 = getWeekStats(21, 28);
  const week5 = getWeekStats(28, totalDays);

  return (
    <div className="w-full overflow-x-auto m-2">
      <div className="flex min-w-max border-2">
        <WeeklyProgress />
        <Week1circle
          percentage={week1.percentage}
          completedPerDay={week1.completedPerDay}
          incompletePerDay={week1.incompletePerDay}
        />

        <Week2circle
          percentage={week2.percentage}
          completedPerDay={week2.completedPerDay}
          incompletePerDay={week2.incompletePerDay}
        />

        <Week3circle
          percentage={week3.percentage}
          completedPerDay={week3.completedPerDay}
          incompletePerDay={week3.incompletePerDay}
        />

        <Week4circle
          percentage={week4.percentage}
          completedPerDay={week4.completedPerDay}
          incompletePerDay={week4.incompletePerDay}
        />

        <Week5circle
          percentage={week5.percentage}
          completedPerDay={week5.completedPerDay}
          incompletePerDay={week5.incompletePerDay}
        />
        <Notes />
      </div>
    </div>
  );
};

export default Footer;
