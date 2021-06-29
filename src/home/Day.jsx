import React from "react";

export const Day = ({ day, onClick}) => {
    const className = `day ${day.value === "padding" ? "padding" : ""} ${day.isCurrentDay ? "current-day" : ""}`;
    return(
        <div className={className}>{day.value === "padding" ? "" : day.value}</div>
    )
}