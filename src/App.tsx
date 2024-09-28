import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import Header from "./components/Header";
import "./styles.css";

interface Note {
  id: string;
  text: string;
  date: string;
}

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "21/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "20/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my new note",
      date: "30/04/2021",
    },
  ]);

  const [searchText, setSearchText] = useState<string>("");

  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem("react-notes-app-data") || "null"
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text: string) => {
    const date = new Date();
    const newNote: Note = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  // Change id type to string since note ids are strings
  const deleteNote = (id: string) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode ? "dark-mode" : ""}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
