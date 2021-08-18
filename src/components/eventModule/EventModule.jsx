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

export const EventModule = ({ clickDate, eventsTypes, setEventsTypes }) => {
    const dispatch = useDispatch();
    const eventTitle = useSelector(store => store.eventName);
    const color = useSelector(store => store.eventColor);

    const [hours, setHours] = useState(0);
    const [timeError, setTimeError] = useState(false);
    const [isRunActive, setIsRunActive] = useState(false);
    const [isTimer, setIsTimer] = useState(false);
    const [isSetTime, setIsSetTime] = useState(false)

    
    const handleNewEvent = () => {
        if(hours){
            dispatch(createNewEvent({name: eventTitle, time: (Math.round(hours / 360) / 10), date: clickDate, color: color}));
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
    }, [isRunActive]);

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