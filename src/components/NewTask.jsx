import React, { useRef, useState } from "react";

function NewTask({ onAdd }) {
  const [enteredtask, setEnteredtask] = useState("");

  function handleChange(e) {
    setEnteredtask(e.target.value);
  }

  function handleClick() {
    onAdd(enteredtask);
    setEnteredtask("");
  }

  return (
    <div>
      <div className="flex items-center gap-4 my-3">
        <input
          value={enteredtask}
          onChange={handleChange}
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          type="text"
        />
        <button
          onClick={handleClick}
          className="text-stone-700 hover:text-red-950"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default NewTask;
