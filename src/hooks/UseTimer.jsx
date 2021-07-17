import React, { useEffect } from "react";

export const useTimer = ( setHours, setIntervalId, intervalId, isRunActive ) => {
    
    useEffect(() => {
        if(isRunActive){
            setIntervalId(
                setInterval(() => {
                    setHours(hour => hour + 1/360)
                }, 10)
            )
        }else{
            clearInterval(intervalId);
        }
    }, [isRunActive])
}
