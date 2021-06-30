import React, {useEffect} from "react";

export const UseDate = ( nav, setDays, weekdays, setDateDisplay ) => {

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
        console.log(paddingDays);

        for(let i = 1; i <= paddingDays + daysInMonth; i++){
        const dayString = `${month + 1}/${i - paddingDays}/${year}`;
        if(i > paddingDays){
            daysArr.push({
            value: i - paddingDays,
            event: null,
            isCurrentDay: i - paddingDays === day && nav === 0,
            date: dayString
            })
        } else {
            daysArr.push({
            value: "padding",
            event: null,
            isCurrentDay: false,
            date: ""
            })
        }
        }

        setDays(daysArr);

    },[nav]);

}