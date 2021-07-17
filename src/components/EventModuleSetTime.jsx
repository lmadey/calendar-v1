import React from "react";

export const EventModuleSetTime = ({ hours, setHours }) => {

    const handleHoursUp = () => {
        setHours(hours + 1)
    }
    const handleHoursDown = () => {
        setHours(hours - 1)
    }

    return(
        <div>
            <p>Set time: </p>
            <div>
                <button onClick={handleHoursUp}>+</button>
                <button onClick={handleHoursDown}>-</button>
                <p>{hours}</p>
            </div>
        </div>
    )
}

