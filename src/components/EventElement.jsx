import React from "react";

export const EventElement = ({ eventElement }) => {
    return(
        <>
            <div className={`event ${eventElement.text} ${eventElement.text === "C#" ? "CSharp" : ""}${eventElement.text === "C++" ? "C" : ""}`}>
                <p>{eventElement.text}</p>
                <p>{eventElement.time}h</p>    
            </div>
        </>
    )
}