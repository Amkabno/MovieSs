"use client";
import React, { useRef, useState } from "react";
export const Task1 = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const handleClick = () => {
    if (inputRef.current) setValue(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick} className="w-fit h-fit bg-black text-white">
        {" "}
        click me{" "}
      </button>
      <p>{value.length}</p>
    </div>
  );
};
