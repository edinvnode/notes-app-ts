import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

interface Note {
  id: string;
  text: string;
  date: string;
}

interface Props {
  notes: Note[];
  handleAddNote: (text: string) => void;
  handleDeleteNote: (id: string) => void;
}

const NotesList: React.FC<Props> = ({
  notes,
  handleAddNote,
  handleDeleteNote,
}) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
