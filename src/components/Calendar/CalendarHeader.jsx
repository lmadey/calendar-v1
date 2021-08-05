import React from "react";

export const CalendarHeader = ({handleNavNext, handleNavBack, dateDisplay}) => {
    return(
        <div className="calendar-header">

            <button
            onClick={handleNavBack}
            className="calendar-header__btn">
                <i className="fas fa-chevron-left"></i>
            </button>

            <p>{dateDisplay}</p>

            <button 
            onClick={handleNavNext}
            className="calendar-header__btn">
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    )
}