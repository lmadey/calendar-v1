import './style/App.css';
import React, { useState } from "react";
import { Login } from "./home/Home";
import { CreateAccount } from "./home/CreateAccount"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/home">
        <Login />
      </Route>
      <Route path="/create-account">
        <CreateAccount />
      </Route>
    </Router>
  );
}

export default App;
