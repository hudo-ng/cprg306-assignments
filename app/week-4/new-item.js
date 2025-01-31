"use client";

import { useState } from "react";

export default function NewItem() {
  const [value, setValue] = useState(1);

  function handleAdd() {
    value < 20 && setValue(value + 1);
  }
  function handleSubtract() {
    value > 1 && setValue(value - 1);
  }

  return (
    <div className="bg-black w-96 flex flex-row justify-between items-center">
      <p className="p-2 text-1xl text-white">Current value: {value}</p>
      <div>
        <button
          onClick={handleAdd}
          disabled={value == 20}
          className="bg-blue-400 p-2 m-2 rounded-sm hover:bg-blue-700 text-white disabled:bg-gray-500"
        >
          Add
        </button>
        <button
          onClick={handleSubtract}
          disabled={value == 1}
          className="bg-blue-400 p-2 m-2 rounded-sm hover:bg-blue-700 text-white disabled:bg-gray-500"
        >
          Subtract
        </button>
      </div>
    </div>
  );
}
