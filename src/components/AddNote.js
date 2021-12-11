import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [noteYear, setNoteYear] = useState("");
  const [noteDuration, setNoteDuration] = useState("");
  const [noteDatex, setNoteDatex] = useState("");
  const [noteMonth, setNoteMonth] = useState("");
  const characterLimit = 200;

  const handleChangetext = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const handleChangetitle = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteTitle(event.target.value);
    }
  };
  const handleChangeyear = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteYear(event.target.value);
    }
  };
  const handleChangeduration = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteDuration(event.target.value);
    }
  };
  const handleChangedatex = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteDatex(event.target.value);
    }
  };
  const handleChangemonth = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteMonth(event.target.value);
    }
  };
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(
        noteText,
        noteTitle,
        noteYear,
        noteDuration,
        noteDatex,
        noteMonth
      );

      setNoteText("");
      setNoteTitle("");
      setNoteYear("");
      setNoteDuration("");
      setNoteDatex("");
      setNoteMonth("");
    }
  };

  return (
    <div className="HomeCalender">
      <h4 className="heading_edit_event">
        Please enter the following information for the future event: "Year,
        Month, Date, Time, Title, Description" in the text area below:
      </h4>
      <div className="Homeevent-container">
        <h3 className="Home-year">
          {" "}
          <textarea
            rows="1"
            cols="30"
            placeholder="Type to add Year"
            value={noteYear}
            onChange={handleChangeyear}
          ></textarea>
        </h3>
        <div className="Home-event">
          <div className="Home_event-left">
            <div className="Home_event-date">
              <div className="date">
                {" "}
                <textarea
                  rows="1"
                  cols="10"
                  placeholder="Date"
                  value={noteDatex}
                  onChange={handleChangedatex}
                ></textarea>
              </div>
              <div className="month">
                {" "}
                <textarea
                  rows="1"
                  cols="10"
                  placeholder="Month"
                  value={noteMonth}
                  onChange={handleChangemonth}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="Home_event-right">
            <h3 className="Home-event-title">
              {" "}
              <textarea
                rows="1"
                cols="22"
                placeholder="Type to add title"
                value={noteTitle}
                onChange={handleChangetitle}
              ></textarea>
            </h3>

            <div className="Home-event-description">
              <textarea
                rows="1"
                cols="22"
                placeholder="Type to add a note..."
                value={noteText}
                onChange={handleChangetext}
              ></textarea>
            </div>

            <div className="Home-event-timing">
              <img src={process.env.PUBLIC_URL + "/image/time.png"} alt="" />{" "}
              <textarea
                rows="1"
                cols="30"
                placeholder="Time"
                value={noteDuration}
                onChange={handleChangeduration}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="note-footer">
          {/* <small>{characterLimit - noteText.length} Remaining</small> */}
          <button className="AddEventButton" onClick={handleSaveClick}>
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
