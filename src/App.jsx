import './style/App.css';
import React from "react";
import { Login } from "./components/login/Login";
import { CreateAccount } from "./components/login/CreateAccount"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Calendar } from "./components/home/calendar/Calendar";

function App() {

  return (
    <Router>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/create-account">
        <CreateAccount />
      </Route>
      <Route path="/home"> n 
        <Calendar/>
      </Route>
    </Router>
  );
}

export default App;
