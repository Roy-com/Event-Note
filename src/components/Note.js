import { MdDeleteForever } from "react-icons/md";
import "./Note.css";
const Note = ({
  id,
  year,
  title,
  text,
  date,
  time,
  duration,
  datex,
  month,
  handleDeleteNote,
}) => {
  return (
    <div className="Home_note_container">
      {/* <span>{text}</span> */}
      {/* <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div> */}
      <div className="HomeCalender">
        <div className="Homeevent-container">
          <h3 className="Home-year">{year}</h3>

          <div className="Home-event">
            <div className="Home_event-left">
              <div className="Home_event-date">
                <div className="date">{datex}</div>
                <div className="month">{month}</div>
              </div>
            </div>

            <div className="Home_event-right">
              <h3 className="Home-event-title">{title}</h3>

              <div className="Home-event-description">{text}</div>

              <div className="Home-event-timing">
                <img src={process.env.PUBLIC_URL + "/image/time.png"} alt="" />{" "}
                {duration}
              </div>
            </div>
          </div>
        </div>
        <div className="Home-footer-event">
          <small>Updated Date: {date}</small>{" "}
          <small>Updated Time: {time}</small>
          <div>
            <small>
              {" "}
              <MdDeleteForever
                onClick={() => handleDeleteNote(id)}
                className="delete-icon HomeDeleteButton "
                size="1.3em"
                title="Delete this event"
              />
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
