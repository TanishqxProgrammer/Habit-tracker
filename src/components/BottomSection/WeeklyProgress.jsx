import React from "react";

const WeeklyProgress = () => {
  return (
    <div className="h-50 w-74 border">
      <div className="h-34 border-b flex justify-center text-center items-center">
        <h1 className="font-bold font-serif">WEEKLY PROGRESS</h1>
      </div>
      <div className="h-8 flex border-b justify-center items-center">
        Habits Completed
      </div>

      <div className="flex justify-center items-center">Habits Incompleted</div>
    </div>
  );
};

export default WeeklyProgress;
