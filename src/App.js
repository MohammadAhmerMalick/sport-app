import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './scss/App.scss'
import Home from './component/Home'
import Login from './component/Login'
import Register from './component/Register'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/login"><Login></Login></Route>
          <Route path="/register"><Register></Register></Route>
        </Switch>
      </Router>
    </div>
  );
}
