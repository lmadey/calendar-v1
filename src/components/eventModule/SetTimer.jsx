import React, { useState } from "react";

import { useTimer } from "../../hooks/UseTimer"

export const SetTimer = ({hours, setHours, setIsRunActive, isRunActive, isSetTime }) => {
    const [intervalId, setIntervalId] = useState();
    

    const handleIsRunActive = () => {
        setIsRunActive(!isRunActive)
    }

    useTimer(setHours, setIntervalId, intervalId, isRunActive);
    return(
        <>
            {!isSetTime && <div className="timer">

                <i className="fas fa-stopwatch"></i>
                <p>Turn on timer</p>
                <p>{(`0${Math.floor(hours / 3600)}`).slice(-2)} : </p>
                <p>{(`0${Math.floor(hours / 60) % 60}`).slice(-2)} : </p>
                <p>{(`0${hours % 60}`).slice(-2)}</p>

                <button 
                className="timer__btn"
                onClick={handleIsRunActive}>
                    {isRunActive ? <i className="far fa-pause-circle"></i> : <i class="far fa-play-circle"></i>}
                </button>
            </div>}
        </>
    )
}

