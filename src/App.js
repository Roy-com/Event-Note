import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      year: "2020",
      title: "Chritsmas",
      text: "Join the Christmas Meeting",
      date: "11/12/2021",
      time: "10:47",
      duration: "10:00 AM",
      datex: "25",
      month: "Dec",
    },
    {
      id: nanoid(),
      year: "2021",
      title: "New Year",
      text: "Join the New Year Meeting",
      date: "11/12/2021",
      time: "14:50",
      duration: "3:05 PM",
      datex: "01",
      month: "Jan",
    },
  ]);

  // const [searchText, setSearchText] = useState("");

  const addNote = (text, title, year, duration, datex, month) => {
    const today = new Date();
    const Currentdate =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    const Currenttime =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // const dateTime = date + "      " + time;
    const newNote = {
      id: nanoid(),
      year: year,
      title: title,
      text: text,
      date: Currentdate,
      time: Currenttime,
      duration: duration,
      datex: datex,
      month: month,

      // date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div>
      <div className="container">
        <h2 className="heading_event_note"> Event-Note</h2>
        <NotesList
          // notes={notes.filter((note) =>
          //   note.text.toLowerCase().includes(searchText)
          // )}
          notes={notes}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
