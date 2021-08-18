import React, { useState } from "react";
import { Day } from "./Day";
import { CalendarHeader } from "./CalendarHeader";
import { UseDate } from "../../hooks/UseDate";

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

export const Calendar = ({ setClickDate, days, setDays }) => {
    
    const [nav, setNav] = useState(0);
    const [dateDisplay] = UseDate(nav, setDays, weekdays);

    const handleNavNext = () => {
      setNav(nav + 1);
    }
    const handleNavBack = () => {
      setNav(nav - 1);
    }

    return(
        <div className="calendar">
            <div className="calendar__container">
                
                <CalendarHeader 
                    handleNavBack={handleNavBack} 
                    handleNavNext={handleNavNext}
                    dateDisplay={dateDisplay}
                    />

                <div className="calendar__week">
                    {weekdaysShort.map((day) => (
                        <div>{day}</div>
                    ))}
                </div>

                <div className="calendar__week calendar__week--deskop">
                    {weekdays.map((day) => (
                        <div>{day}</div>
                    ))}
                </div>

                <div className="calendar__days-container">
                    {days.map((day, index) => (
                        <Day
                        day={day}
                        key={index}
                        setClickDate={setClickDate}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}