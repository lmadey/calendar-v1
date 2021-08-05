import React from "react";

export const SetTime = ({ hours, setHours, timeError, isTimer, setIsSetTime }) => {

    const handleHoursUp = () => {
        setHours(hours + 3600);
        setIsSetTime(true);
    }
    const handleHoursDown = () => {
        setHours(hours - 3600);
        setIsSetTime(true);
        if(hours <= 0){
            setHours(0);
        }
    }
    const handleMinutesUp = () => {
        setHours(hours + 300);
        setIsSetTime(true);
    }
    const handleMinutesDown = () => {
        setHours(hours - 300);
        setIsSetTime(true);
        if(hours <= 0){
            setHours(0);
        }
    }

    return(
        <>
        {!isTimer && <div className="set-time">
            <i className="fas fa-hourglass-half"></i>
            <p>Set time</p>

            <div className="set-time__buttons">
                <button 
                className="set-time__btn"
                onClick={handleHoursUp}>
                    <i className="fas fa-chevron-up arrow-up"></i>
                </button>

                <button 
                className="set-time__btn"
                onClick={handleHoursDown}>
                    <i className="fas fa-chevron-down arrow-down"></i>
                </button>
            </div>

            <p>{Math.floor(hours / 3600)} h</p>

            <div className="set-time__buttons">
                <button 
                className="set-time__btn"
                onClick={handleMinutesUp}>
                    <i className="fas fa-chevron-up arrow-up"></i>
                </button>

                <button 
                className="set-time__btn"
                onClick={handleMinutesDown}>
                    <i className="fas fa-chevron-down arrow-down"></i>
                </button>
            </div>

            <p>{(`0${Math.floor(hours / 60) % 60}`).slice(-2)} m</p>
            {timeError && <p className="time-error">You need to set the time first</p>}
        </div>}
        </>
    )
}

