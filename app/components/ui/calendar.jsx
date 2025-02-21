"use client";

import React, { useState, useCallback } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
} from "date-fns";

export function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const headerDateFormat = "MMMM yyyy";

  const nextMonth = useCallback(() => {
    setCurrentMonth((prev) => addMonths(prev, 1));
  }, []);

  const prevMonth = useCallback(() => {
    setCurrentMonth((prev) => subMonths(prev, 1));
  }, []);

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-4">
      <button
        onClick={prevMonth}
        aria-label="Previous month"
        className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700"
      >
        ◀
      </button>
      <div className="text-lg font-semibold">{format(currentMonth, headerDateFormat)}</div>
      <button
        onClick={nextMonth}
        aria-label="Next month"
        className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700"
      >
        ▶
      </button>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEEEE";
    const startDate = startOfWeek(currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="flex-1 text-center font-medium text-gray-700">
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="flex border-b pb-2">{days}</div>;
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
        const isCurrentMonth = isSameMonth(day, monthStart);
        days.push(
          <div
            key={day}
            role="gridcell"
            className={`flex-1 p-3 text-center border ${
              isCurrentMonth ? "text-gray-900" : "text-gray-400"
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

  return (
    <div role="application" className="p-4 border rounded shadow-md bg-white">
      {renderHeader()}
      <div role="grid">
        {renderDays()}
        {renderCells()}
      </div>
    </div>
  );
}
