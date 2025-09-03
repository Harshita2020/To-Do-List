import React from "react";
import ActionButton from "./ActionButton";

const TaskItem = ({ i, handleDelete, handleUpdate, tsk }) => {
  return (
    <div
      className="flex justify-between items-center text-center px-4 py-6 border-b-2 border-gray-400 mx-2 "
      key={i}
    >
      {tsk}
      <div className="w-[180px] flex justify-between">
        <ActionButton
          label="Update"
          color="blue"
          onClick={() => handleUpdate(i, tsk)}
        />
        <ActionButton
          label="Done"
          color="red"
          onClick={() => handleDelete(i)}
        />
      </div>
    </div>
  );
};

export default TaskItem;
