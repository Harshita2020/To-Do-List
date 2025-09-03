import React from "react";
import TaskUpdate from "./TaskUpdate";
import TaskItem from "./TaskItem";

const Tasks = ({ tasks, isUpdateSelected, setIsUpdateSelected, setTasks }) => {
  const handleDelete = (id) => {
    // console.log("delete - " ,id)
    const filteredTask = tasks.filter((_, task_id) => id !== task_id);
    // console.log("first", filteredTask)
    setTasks(filteredTask);
  };

  const handleUpdate = (id, text) => {
    // mark which task is being edited
    setIsUpdateSelected({ id, text, status: true });
  };

  const handleSave = (id) => {
    // replace the task at `id` with new text
    const updatedTasks = tasks.map((tsk, idx) =>
      idx === id ? isUpdateSelected.text : tsk
    );
    setTasks(updatedTasks);

    // reset update state
    setIsUpdateSelected({ id: null, text: "", status: false });
  };

  return (
    <div className="w-1/2 mx-auto my-4 p-4 flex flex-col justify-center text-center">
      {tasks.length === 0 ? (
        <div>No task left!!🥳🥳</div>
      ) : (
        tasks.map((tsk, i) => {
          console.log("Length - ", i, " - ", tasks.length);
          return isUpdateSelected.status && isUpdateSelected.id === i ? (
            // EDIT MODE
            <TaskUpdate
            key={i}
              value={isUpdateSelected.text}
              onChange={(newText) =>
                setIsUpdateSelected((prev) => ({ ...prev, text: newText }))
              }
              handleDelete={() => handleDelete(i)}
              handleSave={() => handleSave(i)}
            />
          ) : (
            // NORMAL MODE
            <TaskItem key={i} tsk={tsk} handleDelete={() => handleDelete(i)} handleUpdate={() => handleUpdate(i)}/>
          );
        })
      )}
    </div>
  );
};

export default Tasks;
