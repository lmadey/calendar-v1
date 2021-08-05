import React from "react";

export const ProfileContainer = ({clickDate}) => {
    return(
        <div className="profile-container__header">
            <div className="profile-container__name">
                <div className="profile-photo"></div>
                <p>Ksenia Kras</p>
            </div>
            <div className="day-events__time">
                <i className="far fa-clock"></i>
                <p>{clickDate}</p>
            </div>
        </div>
    )
}