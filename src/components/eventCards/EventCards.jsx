import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEventCards } from "../../actions/setEventCards"
import { CardElement } from "./CardElement";
import { NewCard } from "./NewCard";
import { ProfileContainer } from "./ProfileContainer";

export const EventCards = ({clickDate}) => {

    const dispatch = useDispatch();
    const eventElements = useSelector(store => store.setEvent);
    
    return(
        <div className="event-cards__wrapper">
            <div className="event-cards">

                <button 
                onClick={() => dispatch(setEventCards())} 
                className="exit-btn">
                    <i class="fas fa-times"></i>
                </button>

                <div className="module-header">
                    <p>Your all events this day</p>
                </div>

                <ProfileContainer 
                clickDate={clickDate}/>

                <div className="event-cards__container">
                    {eventElements.filter((event) => event.date === clickDate).map((event, index) => (
                        <CardElement 
                        key={index}
                        event={event}/>
                    ))}
                    
                    <NewCard />
                </div>
            </div>
        </div>
    )
}