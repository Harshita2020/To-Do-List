import React, { useEffect, useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(["Implement LocalStorage in Todo list app", "Work on context API", "Figure out AutoMailer"]);
  const [isUpdateSelected, setIsUpdateSelected] = useState({
    id: "",
    text: "",
    status: false,
  });

  const handleKeyDown = (e) => {
    if (task.trim() !== "" && e.key == "Enter") {
      setTasks((prev) => [...prev, task]);
      setTask("");
    }
  };
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <>
      <div className="my-8 mx-auto flex justify-center text-center w-1/2 ">
        <input
          type="text"
          name=""
          id=""
          value={task}
          placeholder="... add new task ..."
          className="w-full border p-4 text-lg font-bold rounded-xl  border-gray-400 text-center"
          onChange={(e) => handleChange(e)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Tasks
        tasks={tasks}
        setTasks={setTasks}
        task={task}
        setTask={setTask}
        isUpdateSelected={isUpdateSelected}
        setIsUpdateSelected={setIsUpdateSelected}
      />
    </>
  );
}

export default App;
