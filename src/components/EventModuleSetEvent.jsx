import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { eventName } from "../actions/eventName"

export const EventModuleSetEvent = ({ eventsTypesArr }) => {
    
    const dispatch = useDispatch();
    const eventTitle = useSelector(store => store.eventName)

    const handleEventTitle = (e) => {
        dispatch(eventName(e.target.value))
    }

    return(
        <div>
            <p>Choose category:</p>
            <select value={eventTitle} onChange={handleEventTitle} className="select" name="languages">
                {eventsTypesArr.map((type) => (
                    <option name={type}>{type}</option>
                ))}
            </select>
        </div>
    )
}