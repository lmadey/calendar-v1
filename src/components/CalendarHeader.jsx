import React from "react";

export const CalendarHeader = ({handleNavNext, handleNavBack, dateDisplay}) => {
    return(
        <div className="calendar-header">
            <button onClick={handleNavBack}><i className="fas fa-chevron-left"></i></button>
            <p>{dateDisplay}</p>
            <button onClick={handleNavNext}><i className="fas fa-chevron-right"></i></button>
        </div>
    )
}