import { useState } from "react";
import LoginForm from "../components/LoginForm";
import '../App.css'

const Login = () => {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin",
  };

  const [error, setError] = useState("");

  const Log = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    )
      console.log("logged");
    else {
      setError("Email sau parola incorecte");
    }
  };

  return <LoginForm Login={Log} error={error}></LoginForm>;
};

export default Login;
