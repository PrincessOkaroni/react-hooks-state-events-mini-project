import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";

const CATEGORIES = ["All", "Code", "Food", "Money", "Misc"];
const INITIAL_TASKS = [
  { id: 1, text: "Build a todo app", category: "Code" },
  { id: 2, text: "Buy rice", category: "Food" },
];


function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

const handleTaskFormSubmit = (task) => {
  const newTask = {
    id: Date.now(), 
    ...task,
  };
  setTasks((prev) => [...prev, newTask]);
};



  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;


