"use client";

import React, { useState } from "react";
import { DndContext, useSensor, useSensors, PointerSensor } from "@dnd-kit/core";
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

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  const handleDragEnd = (event) => {
    if (!event.over) return;
    const { active, over } = event;
    if (active.id !== over.id) {
      // Only reordering tasks within the sole column
      const tasks = data.columns["column-1"].taskIds;
      const oldIndex = tasks.indexOf(active.id);
      const newIndex = tasks.indexOf(over.id);
      const newTaskIds = arrayMove(tasks, oldIndex, newIndex);
      setData({
        ...data,
        columns: {
          ...data.columns,
          "column-1": { ...data.columns["column-1"], taskIds: newTaskIds },
        },
      });
    }
  };

  const addTask = () => {
    if (!newTask.trim()) return;
    const taskId = `task-${Date.now()}`;
    const newTaskObj = { id: taskId, content: newTask };
    const updatedTaskIds = [...data.columns["column-1"].taskIds, taskId];
    setData({
      ...data,
      tasks: { ...data.tasks, [taskId]: newTaskObj },
      columns: { ...data.columns, "column-1": { ...data.columns["column-1"], taskIds: updatedTaskIds } },
    });
    setNewTask("");
  };

  const deleteTask = (taskId) => {
    const newTasks = { ...data.tasks };
    delete newTasks[taskId];
    const newTaskIds = data.columns["column-1"].taskIds.filter((id) => id !== taskId);
    setData({
      ...data,
      tasks: newTasks,
      columns: { ...data.columns, "column-1": { ...data.columns["column-1"], taskIds: newTaskIds } },
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">{data.columns["column-1"].title}</h1>
      <div className="mb-4 flex gap-2">
        <Input
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button onClick={addTask}>Add Task</Button>
      </div>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd} ignoreContainerClipping={false}>
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
