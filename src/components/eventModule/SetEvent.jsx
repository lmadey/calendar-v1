import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { eventName } from "../../actions/eventName"
import { eventColor } from "../../actions/eventColor"
import { useEffect } from "react";

export const SetEvent = ({ eventsTypes }) => {
    
    const dispatch = useDispatch();
    const eventTitle = useSelector(store => store.eventName);
    const [isSelectActive, setIsSelectActive] = useState(false);
    const [eventsTypesLength, setEventsTypesLength] = useState(1);

    useEffect(() => {
        if(isSelectActive){
            setEventsTypesLength(eventsTypes.length);
        }else{
            setEventsTypesLength(1);
        }
    }, [isSelectActive])

    return(
        <div className="set-event">
            <i className="far fa-calendar-check"></i>
            <p>Choose category</p>
            <div 
            className={!isSelectActive ? "set-event__select" : "set-event__select set-event__select--active"}
            style={{height: eventsTypesLength * 22 + "px"}}
            onClick={() => (
                setIsSelectActive(!isSelectActive)
            )}>
                <div className="set-event__select__option set-event__select__option--title"><p>{eventTitle}</p><i className="fas fa-chevron-down"></i></div>
                {eventsTypes.map(type => (
                    <div 
                    className="set-event__select__option"
                    onClick={() => {
                        dispatch(eventName(type.name));
                        dispatch(eventColor(type.color));
                    }}>
                        <p>{type.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}