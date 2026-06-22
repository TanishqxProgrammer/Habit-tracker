import React from "react";

const Notes = () => {
  return (
    <div className="h-50 w-53 ml-3 border-2">
      <div>
        <h1 className="h-15 w-full flex justify-center text-center items-center text-xl border-b font-bold font-serif bg-purple-200">
          NOTES
        </h1>
      </div>

      <div>
        <input
          className="border-b w-full h-7 flex items-center px-2"
          type="text"
          placeholder="Enter Notes"
        />
        <input
          className="border-b w-full h-7 flex items-center px-2"
          type="text"
          placeholder="Enter Notes"
        />
        <input
          className="border-b w-full h-7 flex items-center px-2"
          type="text"
          placeholder="Enter Notes"
        />
        <input
          className="border-b w-full h-7 flex items-center px-2"
          type="text"
          placeholder="Enter Notes"
        />
        <input
          className="w-full h-7 flex items-center px-2"
          type="text"
          placeholder="Enter Notes"
        />
      </div>
    </div>
  );
};

export default Notes;
