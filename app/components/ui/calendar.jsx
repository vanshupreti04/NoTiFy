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
  isToday, // Import isToday to check if it's the current date
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";  // Import icons

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
    <div className="flex justify-between items-center mb-2">
      <button
        onClick={prevMonth}
        aria-label="Previous month"
        className="p-1 rounded-md bg-gray-200 hover:bg-gray-300 text-[#2C1A47]"  // Purple color for the button
      >
        <ChevronLeft className="h-5 w-5 text-[#2C1A47]" />  {/* Use ChevronLeft icon */}
      </button>
      <div className="text-sm md:text-lg font-semibold mb-2 text-[#2C1A47]">
        {format(currentMonth, headerDateFormat)}
      </div>
      <button
        onClick={nextMonth}
        aria-label="Next month"
        className="p-1 rounded-md bg-gray-200 hover:bg-gray-300 text-[#2C1A47]"  // Purple color for the button
      >
        <ChevronRight className="h-5 w-5 text-[#2C1A47]" />  {/* Use ChevronRight icon */}
      </button>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEEEE";
    const startDate = startOfWeek(currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="flex-1 text-center font-medium text-gray-700 text-xs">
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
        const isTodayDate = isToday(day); // Check if the date is today

        days.push(
          <div
            key={day}
            role="gridcell"
            className={`flex-1 p-2 text-center border text-xs ${
              isCurrentMonth ? "text-gray-900" : "text-gray-400"
            } ${isTodayDate ? "bg-[#2C1A47] text-white rounded-full opacity-80" : ""}`}  // Apply styles to today
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
    <div role="application" className="p-4 border rounded shadow-md bg-white w-full max-w-xs mx-auto">
      {renderHeader()}
      <div role="grid">
        {renderDays()}
        {renderCells()}
      </div>
    </div>
  );
}
