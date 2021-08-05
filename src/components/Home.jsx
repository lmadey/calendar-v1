import React, {useEffect, useState} from "react";
import { Calendar } from "./Calendar/Calendar";
import { EventModule } from "./eventModule/EventModule";
import { EventCards } from "./eventCards/EventCards";
import { Statistics } from "./Statistics";
import { Header } from "./Header";
import { useSelector } from "react-redux";

export const Home = () => {
    
    const isEvent = useSelector(state => state.isEvent);
    const isEventCards = useSelector(state => state.setEventCards);
    const [clickDate, setClickDate] = useState();
    const [lastDays, setLastDays] = useState([]);
    const [days, setDays] = useState([]);
    
    const EventElements = useSelector(store => store.setEvent);

    useEffect(() => {
      localStorage.setItem("events", JSON.stringify(EventElements))
    }, [EventElements])
    return(
        <>  
            <Header />
            <div className="home">
                {isEvent && <EventModule days={days} clickDate={clickDate}/>}
                {isEventCards && <EventCards clickDate={clickDate}/>}
                <Calendar setClickDate={setClickDate} setLastDays={setLastDays} lastDays={lastDays} days={days} setDays={setDays}/>
                <Statistics lastDays={lastDays}/>
            </div>
        </>
    )
}