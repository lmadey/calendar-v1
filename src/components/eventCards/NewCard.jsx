import React from "react";
import { useDispatch } from "react-redux";
import { setIsEvent } from "../../actions/isEventAction"

export const NewCard = () => {

    const dispatch = useDispatch();
    
    return(
        <div onClick={() => dispatch(setIsEvent())} className="card-element">
            <div className="new-card">
                <div className="new-card__cross"></div>
                <div className="new-card__cross new-card__cross--horizontal"></div>
            </div>
        </div>
    )
}