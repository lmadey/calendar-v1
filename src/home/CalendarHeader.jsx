import React from "react";

export const CalendarHeader = ({handleNavNext, handleNavBack, dateDisplay}) => {
    return(
        <div className="calendar-header">
            <button onClick={handleNavBack}>back</button>
            <p>{dateDisplay}</p>
            <button onClick={handleNavNext}>next</button>
        </div>
    )
}