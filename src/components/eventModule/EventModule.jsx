import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetEvent } from "./SetEvent";
import { SetTime } from "./SetTime";
import { SetTimer } from "./SetTimer";
import { ModuleHeader } from "./ModuleHeader";
import { AddNewCategory } from "./AddNewCategory";

import { setIsEvent } from "../../actions/isEventAction";
import { createNewEvent } from "../../actions/EventElementsAction";
import { eventName } from "../../actions/eventName";

export const EventModule = ({ clickDate }) => {
    const dispatch = useDispatch();
    const eventTitle = useSelector(store => store.eventName);
    const color = useSelector(store => store.eventColor);
    
    const [eventsTypes, setEventsTypes] = useState(
        [
            {name: "HTML", color: "#FF5733"}, 
            {name: "CSS", color: "#2874A6"}, 
            {name: "JS", color: "#f1ed0f"}, 
            {name: "Java", color: "#E74C3C"}, 
            {name: "PHP", color: "#A569BD"}, 
            {name: "Phyton", color: "#F1C40F"}, 
            {name: "Ruby", color: "#A93226"}, 
            {name: "C#", color: "#6C3483"}, 
            {name: "C++", color: "#3498DB"}, 
            {name: "Kotlin", color: "#F39C12"}, 
            {name: "React", color: "#5DADE2"}
        ]);

    const [hours, setHours] = useState(0);
    const [timeError, setTimeError] = useState(false);
    const [isRunActive, setIsRunActive] = useState(false);
    const [isTimer, setIsTimer] = useState(false);
    const [isSetTime, setIsSetTime] = useState(false)
    console.log(hours);
    
    const handleNewEvent = () => {
        if(hours){
            dispatch(createNewEvent({name: eventTitle, time: hours / 3600 , date: clickDate, color: color}));
            dispatch(setIsEvent());
            dispatch(eventName("HTML"));
        }
        else{
            setTimeError(true);
        }
    }
    useEffect(() => {
        if(isRunActive){
            setIsTimer(true)
        }
    }, [isRunActive])

    return(
        <div className="event-module">
            <div className="event-module__container">
                <div className="event-module__form">
                    <button onClick={() => dispatch(setIsEvent())} className="exit-btn"><i className="fas fa-times"></i></button>
                    
                    <ModuleHeader 
                    clickDate={clickDate}/>

                    <SetEvent
                    eventsTypes={eventsTypes}/>

                    <AddNewCategory
                    eventsTypes={eventsTypes}
                    setEventsTypes={setEventsTypes} />

                    <SetTime 
                    setHours={setHours}
                    setIsSetTime={setIsSetTime}
                    hours={hours}
                    timeError={timeError}
                    isTimer={isTimer}
                    />

                    <SetTimer 
                    hours={hours}
                    setHours={setHours}
                    setIsRunActive={setIsRunActive}
                    isSetTime={isSetTime}
                    isRunActive={isRunActive}
                    />
                    <div className="event-module__add">

                        <button 
                        className="event-module__button event-module__button--add" 
                        onClick={handleNewEvent} type="submit">
                            <i className="far fa-calendar-plus"></i>Add
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}