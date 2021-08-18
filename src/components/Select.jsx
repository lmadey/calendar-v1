import React from "react";
import { useState } from "react";

const selectOptions = [7, 30, 60, 90];

export const Select = ({ lastDaysQuantity, setLastDaysQuantity }) => {

    const [isSelectActive, setIsSelectActive] = useState(false)

    return(
        <div className="select__container">
            <p>Last {lastDaysQuantity} days</p>
            <div className={isSelectActive ? "select select--active" : "select"}>
                
                <div 
                onClick={() => {setIsSelectActive(!isSelectActive)}} 
                className="select__option select__option--title">
                    <p>--set last days-- {lastDaysQuantity}</p><i className="fas fa-chevron-down"></i>
                </div>

                {selectOptions.map(option => (
                <div 
                onClick={() => {
                    setLastDaysQuantity(option);
                    setIsSelectActive(!isSelectActive)
                }} 
                className="select__option">
                    <p>last {option} days</p>
                </div>
                ))}
            </div>
        </div>
    )
}