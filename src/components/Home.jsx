import React, {useEffect, useState} from "react";
import { Calendar } from "./Calendar/Calendar";
import { EventModule } from "./eventModule/EventModule";
import { EventCards } from "./eventCards/EventCards";
import { Header } from "./Header";
import { BarChart } from "./BarChart";
import { PieChart } from "./PieChart";
import { useSelector } from "react-redux";
import { useLastDays } from "../hooks/UseLastDays"

export const Home = () => {
    
    const isEvent = useSelector(state => state.isEvent);
    const isEventCards = useSelector(state => state.setEventCards);
    const [clickDate, setClickDate] = useState();
    const [lastDays, setLastDays] = useState([]);
    const [days, setDays] = useState([]);
    const [eventsArr, setEventsArr] = useState([]);
    const [lastDaysQuantity, setLastDaysQuantity] = useState(7)
    console.log(lastDaysQuantity);
 
    useLastDays( setLastDays, lastDaysQuantity );

    const [eventsTypes, setEventsTypes] = useState(
        [
            {name: "HTML", color: "#FF5733"}, 
            {name: "CSS", color: "#2874A6"}, 
            {name: "JS", color: "#f1ed0f"}, 
            {name: "Java", color: "#E74C3C"}, 
            {name: "PHP", color: "#A569BD"}, 
            {name: "Phyton", color: "#F1C40F"}, 
            {name: "Ruby", color: "#A93226"}, 
            {name: "C#", color: "#6C3483"}, 
            {name: "C++", color: "#3498DB"}, 
            {name: "Kotlin", color: "#F39C12"}, 
            {name: "React", color: "#5DADE2"}
        ]);

    const eventElements = useSelector(store => store.setEvent);

    useEffect(() => {
      localStorage.setItem("events", JSON.stringify(eventElements))
    }, [eventElements])
    return(
        <>  
            <Header />
            <div className="home">
                {
                isEvent && <EventModule
                    days={days}
                    clickDate={clickDate}
                    eventsTypes={eventsTypes} 
                    eventsArr={eventsArr}
                    setEventsArr={setEventsArr}
                    setEventsTypes={setEventsTypes}/>
                }

                {
                isEventCards && <EventCards
                clickDate={clickDate}/>
                }

                <Calendar 
                setClickDate={setClickDate} 
                days={days} 
                setDays={setDays}/>
                
                <BarChart 
                lastDays={lastDays} 
                eventsTypes={eventsTypes}
                lastDaysQuantity={lastDaysQuantity}
                setLastDaysQuantity={setLastDaysQuantity}/>

                {eventElements.length > 0 && <PieChart/>}
            </div>
        </>
    )
}