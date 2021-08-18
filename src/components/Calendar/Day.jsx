import React from "react";
import { EventElement } from "./EventElement";
import { useDispatch, useSelector } from "react-redux";
import { setEventCards } from "../../actions/setEventCards"
import { setIsEvent } from "../../actions/isEventAction"

export const Day = ({ setClickDate, day }) => {
    const eventElements = useSelector(store => store.setEvent);
    const dispatch = useDispatch();
    
    const handleClickOnDay = () => {
        if(day.event.length > 0){
            dispatch(setEventCards())
        }
        else{
            dispatch(setIsEvent())
        }
        if(day.value !== "padding"){
            setClickDate(day.date)
        }
    }

    const className = `day ${day.value === "padding" ? "day--padding" : ""} ${day.isCurrentDay ? "day--current" : ""}`;
    return(
        <div onClick={handleClickOnDay} className={className}>{day.value === "padding" ? "" : day.value}

            <div className="day__event-container">
                {eventElements.filter((event) => event.date === day.date).slice(0, 2).map((eventElement, index) => (
                    <EventElement 
                    eventElement={eventElement}
                    key={index}/>
                ))}
                
                {day.event.length > 2 ? <div className="event-element event-element--more-events">+ {day.event.length - 2} more</div> : ""}
            
            </div>
        </div>
    )
}