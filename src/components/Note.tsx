import React from "react";
import { MdDeleteForever } from "react-icons/md";

interface Props {
  id: string;
  text: string;
  date: string;
  handleDeleteNote: (id: string) => void;
}

const Note: React.FC<Props> = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
