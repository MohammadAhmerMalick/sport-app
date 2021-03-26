import React, { useState } from 'react'

export default function Aside() {

  const [menu, setMenu] = useState("event")

  return (
    <aside className="side-panel">
      <div className="logo-container">
        <img alt="Logo" src={require("../../images/white-logo.svg").default}></img>
      </div>
      <div className="menus">
        <ul>
          <li className={`menu ${menu === "event" ? "active" : ""}`} onClick={() => { setMenu("event") }}>
            <img className="menu-icon" alt="Event Icon" src={require("../../images/icons/event-icon.svg").default}></img>
            <span className="title">Event</span>
          </li>
          <li className={`menu ${menu === "athlete" ? "active" : ""}`} onClick={() => { setMenu("athlete") }}>
            <img className="menu-icon" alt="Ethlete Icon" src={require("../../images/icons/athlete-icon.svg").default}></img>
            <span className="title">Athlete</span>
          </li>
        </ul>
      </div>
    </aside>
  )
}
