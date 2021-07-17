import React, {useEffect, useState} from "react";
import { Calendar } from "./Calendar";
import { EventModule } from "./EventModule";
import { Statistics } from "./Statistics"
import { useSelector } from "react-redux";

export const Home = () => {
    
    const isEvent = useSelector(state => state.isEvent);
    const [clickDate, setClickDate] = useState();
    const [lastDays, setLastDays] = useState([]);
    const [days, setDays] = useState([]);
    
    const EventElements = useSelector(store => store.setEvent);

    useEffect(() => {
      localStorage.setItem("events", JSON.stringify(EventElements))
    }, [EventElements])
    return(
        <>
            <div className="login-header"><h2>Welcome Nobody</h2></div>
            <div className="main-container">
                {isEvent && <EventModule days={days} clickDate={clickDate}/>}
                <Calendar setClickDate={setClickDate} setLastDays={setLastDays} lastDays={lastDays} days={days} setDays={setDays}/>
                <Statistics lastDays={lastDays}/>
            </div>
        </>
    )
}