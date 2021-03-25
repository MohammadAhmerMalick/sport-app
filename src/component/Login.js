import { BrowserRouter as Route, Link } from "react-router-dom"

export default function Login() {
  return (
    <div id="login-signup">
      <div className="form-container">
        <img className="logo" src={require('../images/logo.svg').default}></img>
        <form action="" method="">
          <div className="ahm-form-filed">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email"></input>
          </div>
          <div className="ahm-form-filed">
            <label htmlFor="email">Password</label>
            <input id="password" type="password" name="password"></input>
          </div>
          <div className="ahm-form-filed">
            <label><input type="checkbox" name="remember me"></input>remember me</label>
          </div>
          <div className="ahm-form-filed buttons-container">
            <input className="button" type="submit" value="Login"></input>
          </div>
        </form>
        <div className="signup-link"><p>i don't have an account yet</p><Link to="register">sign up</Link></div>
      </div>
    </div>
  )
}
