import React from "react";

export default function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map(t => (
        <li key={t.id}>
          {t.title} {t.completed ? "✅" : "❌"}
        </li>
      ))}
    </ul>
  );
}
