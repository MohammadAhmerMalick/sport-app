import { useState } from "react"
import EventList from "./home/main-panel/EventList"
import AddEvent from "./home/main-panel/AddEvent"
import Aside from "./home/Aside"

export default function Home() {

  let arr = [
    {
      title: "Playmakers",
      sport: "baseball",
      date: 1628467200000,
      athletes: "Abdullah Reeve",
    },
    {
      title: "Friday Night Lights",
      sport: "soccer",
      date: 1592697591000,
      athletes: "Tianna Ayers",
    },
    {
      title: "ESPN 30 for 30",
      sport: "basketball",
      date: 1595289600000,
      athletes: "Briana Krause",
    },
    {
      title: "The League",
      sport: "tennis",
      date: 1626998400000,
      athletes: "John-Paul Webb",
    },
    {
      title: "College Gameday",
      sport: "golf",
      date: 1629244800000,
      athletes: "Chance Atherton",
    },
    {
      title: "Eastbound and Down",
      sport: "running",
      date: 1631836800000,
      athletes: "Macy Randall",
    },
    {
      title: "Sports Night",
      sport: "volleyball",
      date: 1633046400000,
      athletes: "Matilda Meza",
    },

  ]
  const [events, setEvents] = useState(arr)

  const [activeCard, setActiveCard] = useState({
    addEvent: false,
    editEvent: true,
  })

  return (
    <main>
      <Aside></Aside>
      <div className="main-panel">
        <EventList
          events={events}
          setEvents={setEvents}
          arr={arr}
          setActiveCard={setActiveCard}>
        </EventList>
        <AddEvent
          events={events}
          setEvents={setEvents}
          activeCard={activeCard}>
        </AddEvent>







        <div className={`card ${activeCard.editEvent ? "" : "minimize"}`}>
          <h3 className="card-title">Add New Event</h3>
          <div className="seperator"></div>
          <div className="divide-in-two">
            <div className="one">
              <div className="card-form">
                <div className="ahm_form-group">
                  <label>Title</label>
                  <input
                    // className={`${valueError.title ? "error" : ""}`}
                    type="text"
                  // value={newEvent.title}
                  // onChange={(e) => addNewEventValies(e, "title")}
                  ></input>
                </div>
              </div>
              <div className="card-form">
                <div className="ahm_form-group">
                  <label>Sport</label>
                  <input
                    // className={`${valueError.sport ? "error" : ""}`}
                    type="text"
                  // value={newEvent.sport}
                  // onChange={(e) => addNewEventValies(e, "sport")}
                  ></input>
                </div>
              </div>
            </div>
            <div className="spacing"></div>
            <div className="two">
              <div className="card-form">
                <div className="ahm_form-group">
                  <label>Athletes</label>
                  <input
                    // className={`${valueError.athletes ? "error" : ""}`}
                    type="text"
                  // value={newEvent.athletes}
                  // onChange={(e) => addNewEventValies(e, "athletes")}
                  ></input>
                </div>
              </div>
              <div className="card-form">
                <div className="ahm_form-group">
                  <label>Date</label>
                  <input
                    // className={`${valueError.date ? "error" : ""}`}
                    type="date"
                  // value={moment(newEvent.date).format("YYYY-MM-DD")}
                  // onChange={(e) => addNewEventValies(e, "date")}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="actions">
            <button
              className="reset"
              // onClick={() => { setNewEvent({ title: "", sport: "", date: "", athletes: "" }) }}
            >reset</button>
            <button
              className="add"
              // onClick={() => { addNewEvent() }}
            >submit</button>
          </div>
        </div>







      </div>
    </main>
  )
}

