import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSubmit = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      return modal.current.open();
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal buttonCaption="OKAY" ref={modal}>
        <h2 className="text-red-600 mb-4">Invalid Input</h2>
        <p className="mb-4 text-stone-700">
          Oops..Looks like you forgot to enter a value
        </p>
        <p className="mb-4 text-stone-700">
          Please make sure you provid a valid value for the every input field
        </p>
      </Modal>
      <div className="w-[80em] flex flex-col items-center mt-16">
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input type="text" ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
        <menu className="flex mt-4 items-center justify-end gap-4 my-4s">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              CANCEL
            </button>
          </li>
          <li>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              SAVE
            </button>
          </li>
        </menu>
      </div>
    </>
  );
}

export default NewProject;
