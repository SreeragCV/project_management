import React from "react";
import Input from "./Input";

function NewProject() {
  return (
    <div>
        <menu className="flex items-center justify-end gap-4 my-4s">
            <button>CANCEL</button>
            <button>SAVE</button>
        </menu>
        <div>
            <Input label='Title' />
            <Input label='Description' textarea />
            <Input label='Due Date' />
        </div>
    </div>
  );
}

export default NewProject;
