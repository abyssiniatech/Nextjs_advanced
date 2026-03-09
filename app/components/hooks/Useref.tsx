import React, { useRef } from "react";

const Useref = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        className="p-4 rounded"
      />

      <button
        onClick={handleFocus}
        className="bg-pink-700 text-white rounded px-4 py-2 hover:bg-pink-600"
      >
        Focus
      </button>
    </div>
  );
};

export default Useref;