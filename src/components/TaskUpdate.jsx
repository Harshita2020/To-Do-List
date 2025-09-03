import React from "react";
import ActionButton from "./ActionButton";

const TaskUpdate = ({ i, handleDelete, handleSave, onChange, value }) => {
  return (
    <div
      className="flex justify-between items-center text-center px-4 py-6 border-b-2 border-gray-400 mx-2 "
      //   key={i}
    >
      {/* {tsk} */}
      <input
        type="text"
        name=""
        id=""
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="p-4 bg-blue-100 rounded-xl focus:outline-0 flex-1 mr-4"
      />
      <div className="w-[180px] flex justify-between">
        <ActionButton
          label="Save"
          color="green"
          onClick={() => handleSave(i)}
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

export default TaskUpdate;
