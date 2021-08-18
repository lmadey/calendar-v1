import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

export const UseDate = ( nav, setDays, weekdays ) => {

    const [dateDisplay, setDateDisplay] = useState("")
    const eventElements = useSelector(store => store.setEvent)
    const eventDay = (date) => eventElements.filter(event => event.date === date);
    
    useEffect(() => {

        const dt = new Date();
        
        if(nav !== 0){
            dt.setMonth(new Date().getMonth() + nav)
        }
        
        const day = dt.getDate();
        const month = dt.getMonth();
        const year = dt.getFullYear();
        
        const firstDayMonth = new Date(year, month, 1)
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        const dateString = firstDayMonth.toLocaleDateString("en-GB",{
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric" 
        })
        setDateDisplay(`${dt.toLocaleDateString("en-GB", {month: "long"})} ${year}`);
        const daysArr = [];
        const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);

        for(let i = 1; i <= paddingDays + daysInMonth; i++){
            const dayString = `${(`0${i - paddingDays}`).slice(-2)}/${(`0${month + 1}`).slice(-2)}/${year}`;
            if(i > paddingDays){
                daysArr.push({
                    value: i - paddingDays,
                    event: eventDay(dayString),
                    isCurrentDay: i - paddingDays === day && nav === 0,
                    date: dayString
                })
            } else {
                daysArr.push({
                value: "padding",
                event: [],
                isCurrentDay: false,
                date: ""
            })}
        }

        setDays(daysArr);
        
    },[nav, eventElements]);

    return [dateDisplay, setDateDisplay];
}