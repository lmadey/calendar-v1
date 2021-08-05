import React, { useEffect } from "react";

export const useTimer = ( setHours, setIntervalId, intervalId, isRunActive ) => {

    useEffect(() => {
        if(isRunActive){
            setIntervalId(
                setInterval(() => {
                    setHours(hour => hour + 1)
                }, 1000)
                )
        }else{
            clearInterval(intervalId);
        }
    }, [isRunActive])
}
