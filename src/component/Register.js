import { BrowserRouter as Route, Link } from "react-router-dom"
import React from 'react';
import axios from 'axios';
// import api from '../api';

const Register = () => {

  let [data, setData] = React.useState({
    email: '',
    name: '',
    password: '',
    signup_code: ''
  });

  const _handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  const _handleSubmit = async () => {
    try {
      if (data.signup_code === 'code') {
        let body = {
          email: data.email,
          name: data.name,
          password: data.password,
          signup_code: data.signup_code
        }
        let res = await axios.post('/auth/signup', body);
        console.log(res.data);
      } else {
        alert('Invalid Code');
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div id="login-signup">
      <div className="form-container">
        <img className="logo" alt="Logo" src={require('../images/logo.svg').default}></img>
        <div className="form" action="/auth" method="post">
          <div className="ahm-form-filed">
            <label htmlFor="text">Name</label>
            <input id="name" type="text" name="name" value={data.name} onChange={_handleChange}></input>
          </div>
          <div className="ahm-form-filed">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" value={data.email} onChange={_handleChange}></input>
          </div>
          <div className="ahm-form-filed">
            <label htmlFor="email">Password</label>
            <input id="password" type="password" name="password" value={data.password} onChange={_handleChange}></input>
          </div>
          <div className="ahm-form-filed">
            <label htmlFor="text">SignUp Code</label>
            <input id="signup_code" type="text" name="signup_code" value={data.signup_code} onChange={_handleChange}></input>
          </div>
          <div className="ahm-form-filed buttons-container">
            <div className="button" onClick={_handleSubmit}>Register</div>
          </div>
        </div>
        <div className="signup-link"><p>i already have an account</p><Link to="login">login</Link></div>
      </div>
    </div>
  )
}

export default Register;
