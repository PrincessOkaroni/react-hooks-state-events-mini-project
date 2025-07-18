import React, { useState } from "react";

function NewTaskForm({ categories = [], onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories.find(c => c !== "All") || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !category) return;

    const newTask = {
      text,
      category,
    };

    onTaskFormSubmit(newTask);
    setText(""); 
    setCategory(categories.find(c => c !== "All") || ""); 
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
  <label htmlFor="task-text">Details</label>
  <input
    id="task-text"
    type="text"
    name="text"
    placeholder="New task details"
    value={text}
    onChange={(e) => setText(e.target.value)}
  />

  <label htmlFor="task-category">Category</label>
  <select
    id="task-category"
    name="category"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
  >
    {categories
      .filter((cat) => cat !== "All")
      .map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
  </select>

  <button type="submit">Add task</button>
</form>

  );
}

export default NewTaskForm;
