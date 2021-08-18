import React from "react";

import { SideBar } from "./SideBar";

export const Header = () => {
    return(
        <div className="header">
            <SideBar />
            <div className="profile-photo profile-photo--mid"></div>
            <h2>Franciszek Dolas</h2>
        </div>
    )
}