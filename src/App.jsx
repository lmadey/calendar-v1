import './style/App.css';
import React from "react";
import { Login } from "./components/Login";
import { CreateAccount } from "./components/CreateAccount"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./components/Home";

function App() {

  return (
    <Router>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/create-account">
        <CreateAccount />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
