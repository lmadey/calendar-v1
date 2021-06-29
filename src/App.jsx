import './style/App.css';
import React, { useState, useEffect } from "react";
import { Login } from "./login/Login";
import { CreateAccount } from "./login/CreateAccount"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Calendar } from "./home/Calendar";

function App() {
  const [nav, setNav] = useState(0);
  const [days, setDays] = useState([]);
  const [dateDisplay, setDateDisplay] =useState("");
  const [clickDay, setClickDay] = useState();

  const handleNavNext = () => {
    setNav(nav + 1);
  }
  const handleNavBack = () => {
    setNav(nav - 1);
  }

  useEffect(() => {
    const dt = new Date();
    
    
    if(nav !== 0){
      dt.setMonth(new Date().getMonth() + nav)
    }
    
    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();
    
    const firstDayMonth = new Date(year, month, 1)
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayMonth.toLocaleDateString("en-GB",{
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric" 
    })
    setDateDisplay(`${dt.toLocaleDateString("en-GB", {month: "long"})} ${year}`)
    const daysArr = [];
    const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);

    for(let i = 1; i <= paddingDays + daysInMonth; i++){
      const dayString = `${month + 1}/${i - paddingDays}/${year}`;
      if(i > paddingDays){
        daysArr.push({
          value: i - paddingDays,
          event: null,
          isCurrentDay: i - paddingDays === day && nav === 0,
          date: dayString
        })
      } else {
        daysArr.push({
          value: "padding",
          event: null,
          isCurrentDay: false,
          date: ""
        })
      }
    }

    setDays(daysArr);

  },[nav])


  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  return (
    <Router>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/create-account">
        <CreateAccount />
      </Route>
      <Route path="/home"> n 
        <Calendar days={days} setClickDay={setClickDay} handleNavBack={handleNavBack} handleNavNext={handleNavNext} dateDisplay={dateDisplay}/>
      </Route>
    </Router>
  );
}

export default App;
