import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/tasks";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const addTask = async () => {
    if (!title) return;
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title })
    });
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>To-Do App 🚀</h1>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={addTask}>Agregar</button>
      <TaskList tasks={tasks} />
    </div>
  );
}
