import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { eventName } from "../../actions/eventName"
import { eventColor } from "../../actions/eventColor"
import { useEffect } from "react";

export const SetEvent = ({ eventsTypes }) => {
    
    const dispatch = useDispatch();
    const eventTitle = useSelector(store => store.eventName)
    
    useEffect(() => {
        const color = eventsTypes.filter(item => item.name === eventTitle).map(item => item.color)
        dispatch(eventColor(color))
    }, [eventTitle])
    
    const handleEventTitle = (e) => {
        dispatch(eventName(e.target.value))
    }

    return(
        <div className="set-event">
            <i className="far fa-calendar-check"></i>
            <p>Choose category</p>
            <select value={eventTitle} onChange={handleEventTitle} name="languages">
                {eventsTypes.map((type, index) => (
                    <option color={type.color} name={type} key={index}>{type.name}</option>
                ))}
            </select>
        </div>
    )
}