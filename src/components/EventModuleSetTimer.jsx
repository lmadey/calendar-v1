import React, { useState } from "react";

import { useTimer } from "../hooks/UseTimer"

export const EventModuleSetTimer = ({hours, setHours, isRunActive}) => {
    const [intervalId, setIntervalId] = useState();

    useTimer(setHours, setIntervalId, intervalId, isRunActive);
    return(
        <>
            <p>Or click start and turn on timer:</p>
            <p>{hours < 10 ? `0${Math.floor(hours)} h :` : `${Math.floor(hours)} h :`}{`${Math.floor(hours / 60)} m :`}{`${Math.floor(hours / 360)} s`}</p>
        </>
    )
}

