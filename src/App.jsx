import React, { useEffect, useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(["jkfn", "lkdn"]);
  const [isUpdateSelected, setIsUpdateSelected] = useState({
    id: "",
    text: "",
    status: false,
  });

  // useEffect((e)=> {
  //   handleKeyDown(e)
  // },[task])

  const handleKeyDown = (e) => {
    // console.log(e)
    if (task.trim() !== "" && e.key == "Enter") {
      // console.log(e.key)
      setTasks((prev) => [...prev, task]);
      setTask("");
    }
  };
  const handleChange = (e) => {
    // console.log("event", e.target.value)
    setTask(e.target.value);
  };

  console.log("Length - ", tasks);
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
