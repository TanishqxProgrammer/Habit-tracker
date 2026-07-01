import React, { useEffect, useState } from "react";

const Notes = () => {
  const noteCount = 5;

  // Load notes from localStorage on first render
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");

    return savedNotes ? JSON.parse(savedNotes) : Array(noteCount).fill("");
  });

  // Save notes whenever they change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleChange = (index, value) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = value;
    setNotes(updatedNotes);
  };

  return (
    <div className="h-50 w-55 border">
      {/* Header */}
      <div>
        <h1 className="h-15 w-full flex justify-center items-center text-xl font-bold font-serif border-b bg-purple-200">
          NOTES
        </h1>
      </div>

      {/* Notes */}
      <div>
        {Array.from({ length: noteCount }).map((_, index) => (
          <input
            key={index}
            type="text"
            value={notes[index]}
            placeholder={`Enter Note ${index + 1}`}
            onChange={(e) => handleChange(index, e.target.value)}
            className={`h-7 w-full px-2 outline-none ${
              index !== noteCount - 1 ? "border-b" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};
export default Notes;