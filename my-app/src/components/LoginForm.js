import React from "react";
import { useState, useEffect } from "react";
import './LoginForm.css'
import Home from "../pages/Home";



const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (event) => {
    event.preventDefault();

    Login(details);
  };

  const  redirect = () =>  {
    let url = "http://localhost:3000/home";
 }

 

  return (
    <form className="App" onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {(error != "") ? (<div className="error">{error}</div>) : ""}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(event) =>
              setDetails({ ...details, email: event.target.value })
            }
            value={details.name}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(event) =>
              setDetails({ ...details, password: event.target.value })
            }
            value={details.password}
          ></input>
        </div>
        <button onClick={redirect} value="Click" className='Button' type="submit">LOGIN</button>
       
        <div className="Forgot">
            <p>Forgot Password ?</p>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
