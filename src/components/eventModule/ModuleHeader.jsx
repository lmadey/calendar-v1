import React from "react";

export const ModuleHeader = ({ clickDate }) => {
    return(
        <>
            <div className="module-header"><p>Add Event</p></div>
            <div className="module-header__profile">
                <div className="profile-photo"></div>
                <p>Franciszek Dolas</p>
            </div>
            <div className="event-form__clock"><i className="far fa-clock"></i>{clickDate}</div>
        </>
    )
}