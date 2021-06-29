import React from "react";
import { Link } from "react-router-dom";
import { Day } from "./Day";
import { CalendarHeader } from "./CalendarHeader";

export const Calendar = ({ days, setClickDay, handleNavBack, handleNavNext, dateDisplay }) => {

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