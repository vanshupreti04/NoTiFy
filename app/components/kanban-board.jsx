"use client";

import React, { useState } from "react";
import { DndContext, useSensor, useSensors, PointerSensor, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Task One" },
    "task-2": { id: "task-2", content: "Task Two" },
  },
  columns: {
    "column-1": { id: "column-1", title: "To Do", taskIds: ["task-1", "task-2"] },
  },
  columnOrder: ["column-1"],
};

export function KanbanBoard() {
  const [data, setData] = useState(initialData);
  const [newTask, setNewTask] = useState("");

  // Improved sensor for better drag interaction
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 3 }, // Reduces accidental drag issues
    })
  );

  // Handles drag and drop sorting
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const tasks = [...data.columns["column-1"].taskIds];
    const oldIndex = tasks.indexOf(active.id);
    const newIndex = tasks.indexOf(over.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      const newTaskIds = arrayMove(tasks, oldIndex, newIndex);
      setData((prevData) => ({
        ...prevData,
        columns: {
          ...prevData.columns,
          "column-1": { ...prevData.columns["column-1"], taskIds: newTaskIds },
        },
      }));
    }
  };

  // Adds a new task
  const addTask = () => {
    if (!newTask.trim()) return;
    
    const taskId = `task-${Date.now()}`;
    const newTaskObj = { id: taskId, content: newTask.trim() };

    setData((prevData) => ({
      ...prevData,
      tasks: { ...prevData.tasks, [taskId]: newTaskObj },
      columns: {
        ...prevData.columns,
        "column-1": {
          ...prevData.columns["column-1"],
          taskIds: [...prevData.columns["column-1"].taskIds, taskId],
        },
      },
    }));

    setNewTask("");
  };

  // Deletes a task
  const deleteTask = (taskId) => {
    setData((prevData) => {
      const newTasks = { ...prevData.tasks };
      delete newTasks[taskId];

      const newTaskIds = prevData.columns["column-1"].taskIds.filter((id) => id !== taskId);

      return {
        ...prevData,
        tasks: newTasks,
        columns: {
          ...prevData.columns,
          "column-1": { ...prevData.columns["column-1"], taskIds: newTaskIds },
        },
      };
    });
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h1 className="text-lg font-semibold mb-4">{data.columns["column-1"].title}</h1>

      {/* Add Task Input */}
      <div className="flex gap-2 mb-4">
        <Input
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1"
        />
        <Button onClick={addTask} className="shrink-0">Add</Button>
      </div>

      {/* Drag-and-Drop Context */}
      <DndContext 
        sensors={sensors} 
        onDragEnd={handleDragEnd} 
        collisionDetection={closestCorners} // Improves drop accuracy
      >
        <SortableContext 
          items={data.columns["column-1"].taskIds} 
          strategy={verticalListSortingStrategy}
        >
          {data.columns["column-1"].taskIds.map((taskId) => {
            const task = data.tasks[taskId];
            return (
              <SortableItem key={taskId} id={taskId} onDelete={() => deleteTask(taskId)}>
                {task.content}
              </SortableItem>
            );
          })}
        </SortableContext>
      </DndContext>
    </div>
  );
}
