import React, { useState, ChangeEvent } from "react";

interface AddNoteProps {
  handleAddNote: (note: string) => void;
}

const AddNote: React.FC<AddNoteProps> = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState<string>("");
  const characterLimit = 200;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows={8}
        cols={10}
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      />
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
