import React, { useRef, useState } from "react";
import Input from "./Input";

function NewProject({onAdd}) {

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSubmit = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    // validation ..
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4s">
        <li>
          <button className="text-stone-800 hover:text-stone-950">CANCEL</button>
        </li>
        <li>
          <button onClick={handleSubmit} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">SAVE</button>
        </li>
      </menu>
      <div>
        <Input type='text' ref={title} label="Title" />
        <Input type='text' ref={description} label="Description" textarea />
        <Input  type='date' ref={dueDate} label="Due Date" />
      </div> 
    </div>
  );
}

export default NewProject;
