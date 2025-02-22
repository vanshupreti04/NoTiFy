import React, { useState, useRef } from "react";
import { FaPlus, FaEllipsisH } from "react-icons/fa"; // Import the plus icon and three-dot icon
import Editor from "./Editor"; // Import your Editor component

const Notes = ({ handlePrevious, handleNext }) => {
  const [isCreatingNote, setIsCreatingNote] = useState(false);
  const [noteTitle, setNoteTitle] = useState(""); // Start with an empty string for the title
  const [savedNoteTitle, setSavedNoteTitle] = useState(null); // Store the saved note title
  const [savedNotes, setSavedNotes] = useState([]); // State to hold multiple saved notes
  const [isEditorOpen, setIsEditorOpen] = useState(false); // State to track if the editor should open
  const inputRef = useRef(null); // Reference for the input field

  // Handle "New Note" button click
  const handleNewNoteClick = () => {
    setIsCreatingNote(true);
    setNoteTitle(""); // Reset the title field
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  // Handle "Cancel" button click
  const handleCancel = () => {
    setIsCreatingNote(false);
    setNoteTitle("");
  };

  // Handle note saving
  const handleSave = () => {
    if (noteTitle.trim() !== "") {
      setSavedNoteTitle(noteTitle); // Update the heading with the saved note title
      setSavedNotes([...savedNotes, noteTitle]); // Add the new note to history
      setIsCreatingNote(false);
      setIsEditorOpen(true); // Open the Editor component
    }
  };

  // Handle "Enter" key press to save the note
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && noteTitle.trim() !== "") {
      handleSave();
    }
  };

  return (
    <div className="bg-[#2C1A47] text-white min-h-screen flex flex-col items-center pt-12 px-8">
      {/* Heading: Update to saved note title when available */}
      <h1 className="text-5xl font-extrabold mb-4 tracking-wide text-center font-serif">
        {savedNoteTitle ? savedNoteTitle : "Notes"}
      </h1>

      {/* Tagline: Hide after saving a note */}
      {!savedNoteTitle && (
        <p className="text-gray-300 text-xl font-light mb-12 text-center">
          Start your day by capturing your thoughts. Let's create something meaningful!
        </p>
      )}

      {/* Show Editor when a note is saved */}
      {isEditorOpen ? (
        <Editor /> // Editor component opens after saving a note
      ) : (
        <div className="flex gap-40 mt-10 w-full justify-center">
          {/* Create New Note Section */}
          <div className="bg-white text-black p-8 rounded-lg shadow-xl w-full md:w-1/2 lg:w-1/3">
            <h2 className="text-4xl font-extrabold text-center mb-8">Create a New Note</h2>

            {/* New Note Button */}
            {!isCreatingNote ? (
              <div className="flex justify-center">
                <button
                  onClick={handleNewNoteClick}
                  className="bg-[#2C1A47] text-white py-3 px-6 rounded-md shadow-md hover:bg-[#573085] flex items-center gap-2"
                >
                  <FaPlus className="text-lg" />
                  New Note
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                {/* Input field for note title */}
                <input
                  ref={inputRef}
                  type="text"
                  value={noteTitle}
                  onChange={(e) => setNoteTitle(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="bg-[#6A3D9B] text-white p-3 rounded-md mb-4 w-full "
                  placeholder="Enter note title..."
                />

                {/* Save and Cancel buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={handleSave}
                    className="bg-[#2C1A47] text-white py-2 px-6 rounded-md shadow-md hover:bg-[#573085]"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-300 text-black py-2 px-6 rounded-md shadow-md hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* History Section */}
          <div className="bg-white text-black p-8 rounded-lg shadow-xl w-full md:w-1/2 lg:w-1/3">
            <h2 className="text-4xl font-extrabold text-center mb-8">History</h2>

            {/* No saved notes */}
            {savedNotes.length === 0 ? (
              <div className="text-center text-gray-400">
                <p className="mt-6 text-xl">No notes yet</p>
              </div>
            ) : (
              <div>
                {savedNotes.map((note, index) => (
                  <div key={index} className="flex items-center justify-between text-center mb-4">
                    <h3 className="text-2xl font-semibold">{note}</h3>
                    <FaEllipsisH className="text-2xl cursor-pointer" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;
