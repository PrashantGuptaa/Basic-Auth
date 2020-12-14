
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Login(props) {
  let [name, setName] = React.useState("");
  let [password, setpassword] = React.useState("");

  const handleLogin = () => {
    const postData = { name, password };
    console.log("Signing Up");
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.res === "Rejected")
        alert("Invalid Username or Password");
        else
        props.history.push("/home");
      }).catch((err) => console.log("Error Occured")) ;
  };

  const handlename = (event) => setName(event.target.value);
  const handlepassword = (event) => setpassword(event.target.value);

  console.log("Logger Details: ",props.logger);
  return (
    <>
      <h1>Login Page</h1>
      Name: <input type="text" onChange={handlename} />
      PassWord: <input type="password" onChange={handlepassword} />
      <button onClick={handleLogin}>Login</button>

        <p><Link to = '/signup'>Don't have an Account? Sign Up </Link></p>
        </>
    )
}