
import { useState, useEffect } from "react"
import moment from "moment"

export default function AddEvent({ events, setEvents, activeCard }) {

  const [newEvent, setNewEvent] = useState({
    title: "",
    sport: "",
    date: "",
    athletes: "",
  })

  const [valueError, setValueError] = useState({
    title: false,
    sport: false,
    date: false,
    athletes: false,
  })

  const addNewEventValies = (e, field) => {
    let title = newEvent.title
    let sport = newEvent.sport
    let date = newEvent.date
    let athletes = newEvent.athletes

    if (field === "title") title = e.target.value
    else if (field === "sport") sport = e.target.value
    else if (field === "date") date = Date.parse((e.target.value))
    else if (field === "athletes") athletes = e.target.value

    setNewEvent({ title, sport, date, athletes })
  }

  const valueErrorChrck = () => {
    let title = false
    let sport = false
    let date = false
    let athletes = false
    let valid = true

    if (newEvent.title === "") {
      title = true
      valid = false
    } else { title = false }
    if (newEvent.sport === "") {
      sport = true
      valid = false
    } else { sport = false }
    if (newEvent.date === "") {
      date = true
      valid = false
    } else { date = false }
    if (newEvent.athletes === "") {
      athletes = true
      valid = false
    } else { athletes = false }

    setValueError({
      title,
      sport,
      date,
      athletes,
    })
    return valid
  }
  const addNewEvent = () => {
    if (valueErrorChrck())
      setEvents(events => [...events, newEvent])
  }

  useEffect(() => {
    setNewEvent({
      title: "",
      sport: "",
      date: "",
      athletes: "",
    })
  }, [events]);

  return (
    <div className={`card ${activeCard.addEvent ? "" : "minimize"}`}>
      <h3 className="card-title">Add New Event</h3>
      <div className="seperator"></div>
      <div className="divide-in-two">
        <div className="one">
          <div className="card-form">
            <div className="ahm_form-group">
              <label>Title</label>
              <input
                className={`${valueError.title ? "error" : ""}`}
                type="text"
                value={newEvent.title}
                onChange={(e) => addNewEventValies(e, "title")}>
              </input>
            </div>
          </div>
          <div className="card-form">
            <div className="ahm_form-group">
              <label>Sport</label>
              <input
                className={`${valueError.sport ? "error" : ""}`}
                type="text"
                value={newEvent.sport}
                onChange={(e) => addNewEventValies(e, "sport")}>
              </input>
            </div>
          </div>
        </div>
        <div className="spacing"></div>
        <div className="two">
          <div className="card-form">
            <div className="ahm_form-group">
              <label>Athletes</label>
              <input
                className={`${valueError.athletes ? "error" : ""}`}
                type="text"
                value={newEvent.athletes}
                onChange={(e) => addNewEventValies(e, "athletes")}>
              </input>
            </div>
          </div>
          <div className="card-form">
            <div className="ahm_form-group">
              <label>Date</label>
              <input
                className={`${valueError.date ? "error" : ""}`}
                type="date"
                value={moment(newEvent.date).format("YYYY-MM-DD")}
                onChange={(e) => addNewEventValies(e, "date")}>
              </input>
            </div>
          </div>
        </div>
      </div>
      <div className="actions">
        <button
          className="reset"
          onClick={() => { setNewEvent({ title: "", sport: "", date: "", athletes: "" }) }}>
          reset</button>
        <button
          className="add"
          onClick={() => { addNewEvent() }}>
          submit</button>
      </div>
    </div>
  )
}
