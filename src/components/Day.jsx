import React from "react";
import { EventElement } from "./EventElement";
import { useSelector } from "react-redux";

export const Day = ({ onClick, day }) => {
    const eventElements = useSelector(store => store.setEvent)

    const className = `day ${day.value === "padding" ? "padding" : ""} ${day.isCurrentDay ? "current-day" : ""}`;
    return(
        <div onClick={onClick} className={className}>{day.value === "padding" ? "" : day.value}
            {day.event && <div className="events-container">
            {eventElements.filter((event) => event.date === day.date).map((eventElement, index) => (
                <EventElement 
                eventElement={eventElement}
                key={index}/>
            ))}
            </div>}
        </div>
    )
}