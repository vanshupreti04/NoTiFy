import React, { useState } from "react";
import { Plus, Trash2, Edit, ListChecks, ClipboardList, Loader2, CheckSquare, FilePlus, Save } from "lucide-react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemType = "TASK";

const initialTasks = {
  todo: [],
  doing: [{ id: "1", content: "📞 Call mom" }],
  done: [],
};

// Task Item Component (Draggable)
const TaskItem = ({ task, column, removeTask, renameTask }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { id: task.id, column },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.content);

  const handleRenameSubmit = (e) => {
    if (e.key === "Enter" && newName.trim() !== "") {
      renameTask(task.id, column, newName);
      setIsEditing(false);
    }
  };

  return (
    <div
      ref={ref}
      className="p-3 bg-black text-white shadow-md rounded-md mb-3 flex justify-between items-center border border-white min-h-[60px]"
    >
      {isEditing ? (
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          onKeyDown={handleRenameSubmit}
          autoFocus
          className="text-white px-2 py-1 rounded outline-none border-none bg-transparent w-full"
          onBlur={() => setIsEditing(false)}
        />
      ) : (
        <span>{task.content}</span>
      )}

      <div className="flex gap-2">
        <Edit
          size={18}
          className="text-blue-400 cursor-pointer hover:text-blue-500"
          onClick={() => setIsEditing(true)}
        />
        <Trash2
          size={18}
          className="text-red-500 cursor-pointer hover:text-red-600"
          onClick={() => removeTask(task.id, column)}
        />
      </div>
    </div>
  );
};

// Column Component (Droppable)
const Column = ({ title, column, tasks, moveTask, removeTask, renameTask }) => {
  const [, ref] = useDrop({
    accept: ItemType,
    drop: (item) => moveTask(item.id, item.column, column),
  });

  const getColumnIcon = () => {
    switch (column) {
      case "todo":
        return <FilePlus size={22} className="text-white" />;
      case "doing":
        return <Loader2 size={22} className="text-white animate-spin" />;
      case "done":
        return <CheckSquare size={22} className="text-white" />;
      default:
        return null;
    }
  };

  return (
    <div ref={ref} className="p-4 rounded-lg shadow-md min-h-[350px] bg-black text-white border border-white w-80">
      <h2 className="text-lg font-bold text-center bg-purple-700 py-2 rounded-t-lg flex items-center justify-center gap-2">
        {getColumnIcon()} {title}
      </h2>
      <div className="mt-4 px-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} column={column} removeTask={removeTask} renameTask={renameTask} />
        ))}
      </div>
    </div>
  );
};

// Task Manager Component
const TaskManager = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  // Move Task Between Columns
  const moveTask = (taskId, fromColumn, toColumn) => {
    if (fromColumn === toColumn) return;

    const taskToMove = tasks[fromColumn].find((task) => task.id === taskId);
    if (!taskToMove) return;

    setTasks((prevTasks) => ({
      ...prevTasks,
      [fromColumn]: prevTasks[fromColumn].filter((task) => task.id !== taskId),
      [toColumn]: [...prevTasks[toColumn], taskToMove],
    }));
  };

  // Add New Task
  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    const newTaskObj = { id: Date.now().toString(), content: newTask };
    setTasks((prevTasks) => ({
      ...prevTasks,
      todo: [...prevTasks.todo, newTaskObj],
    }));
    setNewTask("");
  };

  // Remove Task
  const removeTask = (taskId, column) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [column]: prevTasks[column].filter((task) => task.id !== taskId),
    }));
  };

  // Rename Task
  const renameTask = (taskId, column, newName) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [column]: prevTasks[column].map((task) =>
        task.id === taskId ? { ...task, content: newName } : task
      ),
    }));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-[#2C1A47] min-h-screen p-10 flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-6xl font-extrabold text-white mb-4 tracking-wide flex items-center gap-4">
          <ListChecks size={60} className="text-white" />
          Task Manager
        </h1>
        <p className="text-gray-300 text-2xl text-center mb-8">
          Organize your tasks efficiently 🚀
        </p>

        {/* Task Input */}
        <div className="flex gap-3 mb-10">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task..."
            className="p-3 border rounded-md w-96 bg-black text-white outline-none border-white"
          />
          <button
            onClick={handleAddTask}
            className="bg-purple-500 text-white px-5 py-3 rounded-md flex items-center gap-2 transition duration-300 hover:bg-purple-700 transform hover:scale-105"
          >
            <Plus size={20} className="text-white" />
            New Task
          </button>
          <button
            className="bg-purple-500 text-white px-5 py-3 rounded-md flex items-center gap-2 transition duration-300 hover:bg-purple-700 transform hover:scale-105 ml-4"
          >
            <Save size={20} className="text-white" />
            Save
          </button>
        </div>

        {/* Task Board */}
        <div className="grid grid-cols-3 gap-8 w-full max-w-5xl">
          <Column title="To Do" column="todo" tasks={tasks.todo} moveTask={moveTask} removeTask={removeTask} renameTask={renameTask} />
          <Column title="Doing" column="doing" tasks={tasks.doing} moveTask={moveTask} removeTask={removeTask} renameTask={renameTask} />
          <Column title="Done" column="done" tasks={tasks.done} moveTask={moveTask} removeTask={removeTask} renameTask={renameTask} />
        </div>
      </div>
    </DndProvider>
  );
};

export default TaskManager;
