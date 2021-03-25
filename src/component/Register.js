import { BrowserRouter as Route, Link } from "react-router-dom"

export default function Register() {
  return (
    <div id="login-signup">
      <div className="form-container">
        <img className="logo" src={require('../images/logo.svg').default}></img>
        <form action="" method="">
          <div className="ahm-form-filed">
            <label htmlFor="text">Name</label>
            <input id="name" type="text" name="mame"></input>
          </div>
          <div className="ahm-form-filed">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email"></input>
          </div>
          <div className="ahm-form-filed">
            <label htmlFor="email">Password</label>
            <input id="password" type="password" name="password"></input>
          </div>
          <div className="ahm-form-filed">
            <label htmlFor="email">Confirm Password</label>
            <input id="confirm-password" type="password" name="confirm-password"></input>
          </div>
          <div className="ahm-form-filed">
            <label htmlFor="text">SignUp Code</label>
            <input id="signup-code" type="text" name="signup-code"></input>
          </div>
          <div className="ahm-form-filed buttons-container">
            <input className="button" type="submit" value="Register"></input>
          </div>
        </form>
        <div className="signup-link"><p>i already have an account</p><Link to="login">login</Link></div>
      </div>
    </div>
  )
}
