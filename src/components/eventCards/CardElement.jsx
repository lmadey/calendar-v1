import React from "react";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../../actions/EventElementsAction"

export const CardElement = ({ event }) => {

    const dispatch = useDispatch()

    return(
        <div className="card-element">

            <div className="card-element__stats">
                <i className="far fa-calendar-check"></i>
                <p>{event.name}</p>
            </div>

            <div className="card-element__stats">
                <i className="fas fa-hourglass-half"></i>
                <p>{Math.floor(event.time)} h</p><p>{(`0${Math.floor((event.time) * 60) % 60}`).slice(-2)} min</p>
            </div>

            <button className="card-element__btn">Edit</button>
            <button onClick={() => dispatch(deleteEvent(event.id))} className="card-element__btn">Delete</button>

        </div>
    )
}