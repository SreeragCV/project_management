import React, { forwardRef } from "react";

const Input = forwardRef(function Input({textarea, label, ...props}, ref) {

  const classes = `w-[45em] ${!textarea ? 'h-10' : undefined} p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600`

  return (
    <p className="flex flex-col gap-2 my-4">
      <label className="text-sm uppercase font-bold text-stone-500" htmlFor="">{label}</label>
      {textarea ? <textarea rows='6' ref={ref} className={classes} {...props} /> : <input ref={ref} className={classes} {...props} />}
    </p>
  );
});

export default Input;
