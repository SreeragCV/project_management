import React from "react";

function Input({textarea, label, ...props}) {
  return (
    <p>
      <label htmlFor="">{label}</label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}

export default Input;
