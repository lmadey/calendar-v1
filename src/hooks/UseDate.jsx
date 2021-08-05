import React, { useEffect } from "react";
import { useSelector } from "react-redux"

export const UseDate = ( nav, setDays, weekdays, setDateDisplay, setLastDays ) => {

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
        const lastDaysArr =[];
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
                event: null,
                isCurrentDay: false,
                date: ""
            })}
        }
        for(let i = 1; i <= 7; i++){
            const date = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
            const dateD = date.getDate();
            const dateM = date.getMonth();
            const dateY = date.getFullYear();
            const dateShort = `${dateD} ${date.toLocaleString("en-GB", {month: "short"})}`;
            const dateString = `${(`0${dateD}`).slice(-2)}/${(`0${dateM + 1}`).slice(-2)}/${dateY}`;
            lastDaysArr.unshift({
                date: dateString,
                text: dateShort,
                event: eventDay(dateString)
            })
        }
        
        setDays(daysArr);
        setLastDays(lastDaysArr);

    },[nav, eventElements]);
}