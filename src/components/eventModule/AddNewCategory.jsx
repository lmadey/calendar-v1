import React from "react";
import { useState } from "react";

export const AddNewCategory = ({ eventsTypes, setEventsTypes }) => {

    const [isAddCategory, setIsAddCategory] = useState(false);
    const [inputText, setInputText] = useState("");
    const [inputColor, setInputColor] = useState("#58c6b9");
    const [newEventInputError, setNewEventInputError] = useState(false);

    const handleIsCategory = () => {
        setIsAddCategory(!isAddCategory)
    }
    console.log(inputText.length);
    
    const newEvenType = () => {
        if(inputText.length > 2){
            setEventsTypes([...eventsTypes, {name: inputText, color: inputColor}]);
            setIsAddCategory(!isAddCategory)
        }
        else{
            setNewEventInputError(true)
        }
    }

    return(
        <div className="add-category">

            <i className="fas fa-folder-plus"></i>
            <p>Add new category</p>
            {!isAddCategory && <button onClick={handleIsCategory} className="event-module__button">Add</button>}
            
            {isAddCategory && <div className="add-category__form">
                <input 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="add-category__input" 
                    placeholder="name" 
                    type="text" />

                <input 
                    value={inputColor} 
                    onChange={(e) => setInputColor(e.target.value)} 
                    className="add-category__input add-category__input--input-color" 
                    type="color" />
                {newEventInputError && <p className="error">New event must be at least 3 letters long</p>}

                <div className="add-category__buttons">
                    <button onClick={newEvenType} className="event-module__button">Add</button>
                    <button onClick={handleIsCategory} className="event-module__button">Cancel</button>
                </div>

            </div>}
        </div>
    )
}