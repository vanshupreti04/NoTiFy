"use client";

import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth
} from "date-fns";

export function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const headerDateFormat = "MMMM yyyy";

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-2">
      <button onClick={prevMonth} className="text-gray-600 px-2">Prev</button>
      <div className="text-lg font-semibold">{format(currentMonth, headerDateFormat)}</div>
      <button onClick={nextMonth} className="text-gray-600 px-2">Next</button>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEEEE";
    const startDate = startOfWeek(currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="flex-1 text-center font-medium">
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="flex">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, "d");
        days.push(
          <div
            key={day}
            className={`flex-1 border p-2 text-center ${
              !isSameMonth(day, monthStart) ? "text-gray-400" : "text-gray-800"
            }`}
          >
            {formattedDate}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day} className="flex">
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  function nextMonth() {
    setCurrentMonth(addMonths(currentMonth, 1));
  }

  function prevMonth() {
    setCurrentMonth(subMonths(currentMonth, 1));
  }

  return (
    <div className="p-4 border rounded shadow-md">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
}
