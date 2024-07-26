import React from "react";

const WeeklyForecast: React.FC = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="flex items-center justify-between w-full">
      {days.map((day) => (
        <div key={day} className="flex-grow text-center">
          {day}
        </div>
      ))}
    </div>
  );
};

export default WeeklyForecast;
