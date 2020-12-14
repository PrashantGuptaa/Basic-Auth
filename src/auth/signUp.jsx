import React from "react";
import { history } from "react-router-dom";
export default function SignUp(props) {
  let [name, setName] = React.useState("");
  let [password, setpassword] = React.useState("");
  const handleSignUp = () => {
    const postData = { name, password };
    console.log("Signing Up");
    fetch("http://localhost:4000/signup", {
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
        alert("Length of UserName and Password should be greater than 5");
        else if(data.res === "Already Existed")
        alert("This User already Existed");
        else
        props.history.push("/home");
      });
  };

  const handlename = (event) => setName(event.target.value);
  const handlepassword = (event) => setpassword(event.target.value);
  console.log("History", props.history.location.pathname);
  return (
    <>
      <h1>Sign Up</h1>
      Name: <input type="text" onChange={handlename} />
      PassWord: <input type="password" onChange={handlepassword} />
      <button onClick={handleSignUp}>Sign Up</button>
    </>
  );
}
