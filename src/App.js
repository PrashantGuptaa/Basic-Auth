import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./home";
import Login from "../src/auth/login";
import SignUp from "../src/auth/signUp";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Home} />
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;
