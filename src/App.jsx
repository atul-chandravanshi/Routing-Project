// import { useState } from 'react'

// function App() {
  
//   return (
//     <>
//     <h1>Hey cls</h1>

//     </>
//   )
// }

// export default App

import { useState } from "react";

function App() {
  // state for tasks
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // add task
  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask(""); // reset input
  };

  // delete task
  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">✅ To-Do List</h1>

      {/* Input Box */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task..."
          className="border p-2 rounded"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <ul className="w-full max-w-md">
        {todos.map((t, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-2 mb-2 rounded shadow"
          >
            {t}
            <button onClick={() => deleteTask(index)} className="text-red-500">
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
