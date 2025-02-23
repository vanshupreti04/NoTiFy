"use client";

import React, { useState } from "react";
import {
  DndContext,
  useSensor,
  useSensors,
  PointerSensor,
  closestCorners,
  DragOverlay,
  useDroppable,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { GripVertical, Save } from "lucide-react"; // Removed Trash2 icon
import { v4 as uuidv4 } from "uuid";

const initialData = {
  days: {
    "day-1": { id: "day-1", title: "Monday", mealIds: [] },
    "day-2": { id: "day-2", title: "Tuesday", mealIds: [] },
    "day-3": { id: "day-3", title: "Wednesday", mealIds: [] },
    "day-4": { id: "day-4", title: "Thursday", mealIds: [] },
    "day-5": { id: "day-5", title: "Friday", mealIds: [] },
    "day-6": { id: "day-6", title: "Saturday", mealIds: [] },
    "day-7": { id: "day-7", title: "Sunday", mealIds: [] },
  },
  meals: {},
  availableMeals: [],
};

function SortableItem({ id, children }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div ref={setNodeRef} style={style} className="relative group mb-1">
      <div className="flex items-center justify-between p-2 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow border border-gray-300 w-[140px]">
        <button
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing touch-none select-none"
        >
          <GripVertical className="h-4 w-4 text-gray-600 mr-2" />
        </button>
        <span className="flex-1 text-black truncate text-sm">{children}</span>
      </div>
    </div>
  );
}

function DayContainer({ day, meals }) {
  const { setNodeRef, isOver } = useDroppable({ id: day.id });
  const containerStyle = isOver
    ? "bg-blue-50 border-blue-300 scale-[1.02] shadow-lg"
    : "bg-black border-gray-700";

  return (
    <div
      ref={setNodeRef}
      className={`p-3 rounded-lg shadow-sm border-2 transition-all duration-200 w-[180px] h-[300px] flex flex-col ${containerStyle}`}
    >
      <h2 className="text-md font-semibold mb-2 text-white bg-purple-600 text-center py-1 rounded-md">
        {day.title}
      </h2>
      <div className="flex-1 min-h-[200px]">
        <SortableContext items={day.mealIds} strategy={verticalListSortingStrategy}>
          <div className="space-y-1">
            {day.mealIds.map((mealId) => (
              <SortableItem key={mealId} id={mealId}>
                {meals[mealId]?.content}
              </SortableItem>
            ))}
          </div>
        </SortableContext>
        {day.mealIds.length === 0 && (
          <p className="text-gray-400 text-xs text-center py-2">Drag meals here</p>
        )}
      </div>
    </div>
  );
}

export function MealPlanner() {
  const [data, setData] = useState(initialData);
  const [newMeal, setNewMeal] = useState("");
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
        tolerance: { x: 10, y: 10 },
      },
    })
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const activeContainer = findContainer(active.id);
    const overContainer = findContainer(over.id);

    if (activeContainer !== overContainer) {
      setData((prev) => moveMeal(prev, active.id, activeContainer, overContainer));
    } else {
      setData((prev) => reorderMeal(prev, active.id, over.id, activeContainer));
    }
  };

  const findContainer = (id) => {
    if (id in data.days) return id;
    if (data.availableMeals.includes(id)) return "available";
    return Object.keys(data.days).find((dayId) => data.days[dayId].mealIds.includes(id));
  };

  const moveMeal = (prev, mealId, from, to) => {
    const newData = { ...prev };

    // Remove from source
    if (from === "available") {
      newData.availableMeals = newData.availableMeals.filter((id) => id !== mealId);
    } else {
      newData.days[from].mealIds = newData.days[from].mealIds.filter((id) => id !== mealId);
    }

    // Add to target
    if (to === "available") {
      if (!newData.availableMeals.includes(mealId)) {
        newData.availableMeals.push(mealId);
      }
    } else {
      if (!newData.days[to].mealIds.includes(mealId)) {
        newData.days[to].mealIds = [...newData.days[to].mealIds, mealId];
      }
    }

    return newData;
  };

  const reorderMeal = (prev, activeId, overId, container) => {
    const mealIds = container === "available"
      ? [...prev.availableMeals]
      : [...prev.days[container].mealIds];

    const oldIndex = mealIds.indexOf(activeId);
    const newIndex = mealIds.indexOf(overId);

    const newMealIds = arrayMove(mealIds, oldIndex, newIndex);

    return {
      ...prev,
      days: container === "available" ? prev.days : {
        ...prev.days,
        [container]: { ...prev.days[container], mealIds: newMealIds },
      },
      availableMeals: container === "available" ? newMealIds : prev.availableMeals,
    };
  };

  const addMeal = () => {
    if (!newMeal.trim()) return;

    let mealId;
    do {
      mealId = `meal-${uuidv4()}`;
    } while (data.meals[mealId] || data.availableMeals.includes(mealId));

    setData((prev) => ({
      ...prev,
      meals: {
        ...prev.meals,
        [mealId]: { id: mealId, content: newMeal.trim() },
      },
      availableMeals: [...prev.availableMeals, mealId],
    }));
    setNewMeal("");
  };

  const deleteMeal = (mealId) => {
    setData((prev) => ({
      ...prev,
      meals: Object.fromEntries(Object.entries(prev.meals).filter(([id]) => id !== mealId)),
      days: Object.fromEntries(Object.entries(prev.days).map(([dayId, day]) => ({
        ...day,
        mealIds: day.mealIds.filter((id) => id !== mealId),
      }))),
      availableMeals: prev.availableMeals.filter((id) => id !== mealId),
    }));
  };

  const saveMealPlan = () => {
    alert("Meal plan saved!");
    // Add your save logic here
  };

  return (
    <div className="min-h-screen bg-[#2C1A47] p-4">
      <div className="rounded-lg shadow-md w-[1300px] mx-auto">
        <div className="text-center mb-6 mt-4">
          <h1 className="text-5xl font-bold text-white">Meal Planner</h1>
          <p className="text-gray-300 text-lg mt-2">Plan your weekly meals effortlessly!</p>
        </div>
        <div className="flex gap-2 items-center mb-4 justify-center">
          <Input
            placeholder="Enter meal name..."
            value={newMeal}
            onChange={(e) => setNewMeal(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addMeal()}
            className="rounded-md border-gray-300 focus-visible:ring-2 w-[15vw] text-white bg-black"
          />
          <Button onClick={addMeal} className="mr-5 ml-5 bg-purple-600 hover:bg-purple-700 text-white px-4">
            Add Meal
          </Button>
          <Button onClick={saveMealPlan} className="bg-green-600 hover:bg-green-700 text-white px-4">
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
        </div>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {/* Meal Library */}
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-black rounded-lg border border-gray-700 w-[300px]">
              <h2 className="text-lg font-medium mb-2 text-white">Meal Library</h2>
              <SortableContext items={data.availableMeals} strategy={verticalListSortingStrategy}>
                <div className="flex flex-wrap gap-1">
                  {data.availableMeals.map((mealId) => (
                    <SortableItem key={mealId} id={mealId}>
                      {data.meals[mealId]?.content}
                    </SortableItem>
                  ))}
                </div>
              </SortableContext>
            </div>
          </div>

          {/* Days Grid */}
          <div className="flex gap-3 justify-center">
            {Object.values(data.days).map((day) => (
              <DayContainer
                key={day.id}
                day={day}
                meals={data.meals}
              />
            ))}
          </div>

          <DragOverlay>
            {activeId ? (
              <div className="p-2 bg-white rounded-md shadow-lg border border-blue-200 text-xs transform rotate-1 scale-105 w-[140px]">
                {data.meals[activeId]?.content}
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  );
}
export default MealPlanner;