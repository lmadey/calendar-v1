import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EventModuleSetEvent } from "./EventModuleSetEvent";
import { EventModuleSetTime } from "./EventModuleSetTime";
import { EventModuleSetTimer } from "./EventModuleSetTimer";

import { setIsEvent } from "../actions/isEventAction";
import { createNewEvent } from "../actions/EventElementsAction";
import { eventName } from "../actions/eventName";

export const EventModule = ({ clickDate }) => {
    const dispatch = useDispatch()
    const eventTitle = useSelector(store => store.eventName)
    
    const eventsTypesArr = ["HTML", "CSS", "JS", "Java", "PHP", "Phyton", "Ryby", "C#", "C++", "Kotlin", "React"]
    const [hours, setHours] = useState(0);
    const [isRunActive, setIsRunActive] = useState(false);
    
    const handleIsRunActive = () => {
        setIsRunActive(!isRunActive)
    }
    
    const handleNewEvent = () => {
        dispatch(createNewEvent({name: eventTitle, time: Math.floor(hours), date: clickDate}))
        dispatch(setIsEvent())
        dispatch(eventName("HTML"))
    }

    return(
        <div className="event-module">
            <div className="event-container">
                <button onClick={() => dispatch(setIsEvent())} className="exit-btn"><i className="fas fa-times"></i></button>
                <div className="event-form">

                    <EventModuleSetEvent
                    eventsTypesArr={eventsTypesArr}/>

                    <EventModuleSetTime 
                    hours={hours}
                    setHours={setHours}/>

                    <EventModuleSetTimer 
                    hours={hours}
                    setHours={setHours}
                    isRunActive={isRunActive}/>

                    <button className="main-btn" onClick={handleIsRunActive}>{isRunActive ? "stop" : "start"}</button>
                    <button className="main-btn add" onClick={handleNewEvent} type="submit">Add</button>
                </div>
            </div>
        </div>
    )
}