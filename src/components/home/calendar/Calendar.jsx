import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Day } from "./Day";
import { CalendarHeader } from "./CalendarHeader";
import { UseDate } from "../../../hooks/UseDate";

export const Calendar = () => {

    const [nav, setNav] = useState(0);
    const [days, setDays] = useState([]);
    const [dateDisplay, setDateDisplay] = useState("");
    const [clickDay, setClickDay] = useState();
    // const [events, setEvents] = useState(localStorage.getItem("events") ? JSON.parse(localStorage.getItem("events")) : []);
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  
    const handleNavNext = () => {
      setNav(nav + 1);
    }
    const handleNavBack = () => {
      setNav(nav - 1);
    }

    UseDate(nav, setDays, weekdays, setDateDisplay);

    return(
        <div className="main-container">
            <div className="login-header"><h2>Welcome Nobody</h2></div>
            <div className="calendar-container">
                <CalendarHeader 
                    handleNavBack={handleNavBack} 
                    handleNavNext={handleNavNext}
                    dateDisplay={dateDisplay}
                />
                <div className="week">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                </div>
                <div className="week deskop">
                    <div>Monday</div>
                    <div>Tuesday</div>
                    <div>Wednesday</div>
                    <div>Thursday</div>
                    <div>Friday</div>
                    <div>Saturday</div>
                    <div>Sunday</div>
                </div>
                <div className="days">
                    {days.map((day, index) => (
                        <Day
                        day={day}
                        key={index}
                        onClick={() => {
                            if(day.value !== "padding"){
                                setClickDay(day.date)
                            }
                        }} />
                    ))}
                </div>
            </div>
        </div>
    );
}