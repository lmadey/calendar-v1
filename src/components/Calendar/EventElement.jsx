import React from "react";

export const EventElement = ({ eventElement }) => {
    return(
        <>
            <div style={{backgroundColor: eventElement.color}} className="event-element">
                <p>{eventElement.name}</p>
            </div>
        </>
    )
}