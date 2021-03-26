import { useState } from "react"
import Aside from "./home/Aside"

export default function Home() {

  let arr = [
    {
      title: "Friday Night Lights",
      sport: "soccer",
      date: "2021-06-21",
      athletes: "Tianna Ayers",
    },
    {
      title: "ESPN 30 for 30",
      sport: "basketball",
      date: "2021-07-21",
      athletes: "Briana Krause",
    },
    {
      title: "The League",
      sport: "tennis",
      date: "2021-07-23",
      athletes: "John-Paul Webb",
    },
    {
      title: "Playmakers",
      sport: "baseball",
      date: "2021-08-09",
      athletes: "Abdullah Reeve",
    },
    {
      title: "College Gameday",
      sport: "golf",
      date: "2021-08-18",
      athletes: "Chance Atherton",
    },
    {
      title: "Eastbound and Down",
      sport: "running",
      date: "2021-09-17",
      athletes: "Macy Randall",
    },
    {
      title: "Sports Night",
      sport: "volleyball",
      date: "2021-10-01",
      athletes: "Matilda Meza",
    },

  ]



  var d1 = new Date();
  var d2 = new Date(d1);
  var same = d1.getTime() === d2.getTime();
  var notSame = d1.getTime() !== d2.getTime();
  
  // console.log(d1)
  // console.log(d2)
  // console.log(same)
  // console.log(notSame)
  
  var d2 = Date.parse(d1);
  var d1 = Date.parse("2021-01-21");
  console.log(d1)
  console.log(d2)
  
  const [events, setEvents] = useState(arr)
  return (
    <main>
      <Aside></Aside>
      <div className="main-panel">
        <div className="card">
          <h3 className="card-title">card-title</h3>
          <div className="seperator"></div>
          <div className="card-table">

            <div className="table-conditions">
              <h6>Select</h6>
              <label><input type="checkbox"></input>Current Events</label>
            </div>
            <h6 className="table-title">Table Type</h6>
            <table className="table">
              <tbody>
                <tr>
                  <th>S#</th>
                  <th>Title</th>
                  <th>Sport</th>
                  <th>Date</th>
                  <th>Athletes</th>
                </tr>
                {events.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.title}</td>
                      <td>{data.sport}</td>
                      <td>{data.date}</td>
                      <td>{data.athletes}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

