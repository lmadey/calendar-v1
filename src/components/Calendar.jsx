import React, { useState } from "react";
import { setIsEvent } from "../actions/isEventAction";
import { useDispatch } from "react-redux";
import { Day } from "./Day";
import { CalendarHeader } from "./CalendarHeader";
import { UseDate } from "../hooks/UseDate";

export const Calendar = ({ setClickDate, setLastDays, lastDays, days, setDays }) => {
    const dispatch = useDispatch();

    const [nav, setNav] = useState(0);
    
    const [dateDisplay, setDateDisplay] = useState("");
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  
    const handleNavNext = () => {
      setNav(nav + 1);
    }
    const handleNavBack = () => {
      setNav(nav - 1);
    }

    UseDate(nav, setDays, weekdays, setDateDisplay, setLastDays, lastDays);
    return(
        <div className="calendar-container">
            <CalendarHeader 
                handleNavBack={handleNavBack} 
                handleNavNext={handleNavNext}
                dateDisplay={dateDisplay}
                />
            <div className="week">
                {weekdaysShort.map((day) => (
                    <div>{day}</div>
                ))}
            </div>
            <div className="week deskop">
                {weekdays.map((day) => (
                    <div>{day}</div>
                ))}
            </div>
            <div className="days">
                {days.map((day, index) => (
                    <Day
                    day={day}
                    key={index}
                    onClick={() => {
                        dispatch(setIsEvent());
                        if(day.value !== "padding"){
                            setClickDate(day.date)
                        }
                    }}/>
                ))}
            </div>
        </div>
    );
}