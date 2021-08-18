import { useEffect } from "react";
import { useSelector } from "react-redux";

export const  useLastDays = ( setLastDays, lastDaysQuantity ) => {

    const eventElements = useSelector(store => store.setEvent)

    const lastDaysArr =[];
    const eventLastDays = (date) => eventElements.filter(event => event.date === date);

    useEffect(() => {
        for(let i = 1; i <= lastDaysQuantity; i++){
            const date = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
            const dateD = date.getDate();
            const dateM = date.getMonth();
            const dateY = date.getFullYear();
            const dateShort = `${dateD} ${date.toLocaleString("en-GB", {month: "short"})}`;
            const dateString = `${(`0${dateD}`).slice(-2)}/${(`0${dateM + 1}`).slice(-2)}/${dateY}`;
            lastDaysArr.unshift({
                date: dateString,
                text: dateShort,
                event: eventLastDays(dateString),
                
            })
        }
        setLastDays(lastDaysArr);
    },[eventElements, lastDaysQuantity])
}