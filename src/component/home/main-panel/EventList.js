
import _ from "lodash"
import moment from "moment"

export default function EventList({ events, setEvents, arr, setActiveCard }) {
  const sortBy = (sortBy) => {
    var arr = _.sortBy(events, sortBy)
    setEvents(arr)
  }
  const currentEvent = (e) => {
    if (e.target.checked) {
      let current = Date.parse((Date()))
      var newEvents = events.filter(function (item) {
        return item.date >= current
      })
      setEvents(newEvents)
    } else { setEvents(arr) }
  }

  return (
    <div className="card">
      <h3 className="card-title">card-title</h3>
      <div className="seperator"></div>
      <div className="card-table">
        <div className="table-conditions">
          <h6>Select</h6>
          <label>
            <input
              type="checkbox"
              onChange={(e) => { currentEvent(e) }}>
            </input>
            Current Events</label>
        </div>
        <h6 className="table-title">Table Type</h6>
        <table className="table">
          <tbody>
            <tr>
              <th>S#</th>
              <th onClick={() => { sortBy("title") }}>Title</th>
              <th onClick={() => { sortBy("sport") }}>Sport</th>
              <th onClick={() => { sortBy("date") }}>Date</th>
              <th onClick={() => { sortBy("athletes") }}>Athletes</th>
            </tr>
            {events.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.title}</td>
                  <td>{data.sport}</td>
                  <td>{moment(data.date).format('DD-MM-YYYY')}</td>
                  <td>{data.athletes}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="actions">
        <button
          className="add"
          onClick={() => { setActiveCard({ addEvent: true }) }}>
          Add New Event</button>
      </div>
    </div>
  )
}
