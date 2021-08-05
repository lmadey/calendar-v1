import React, { useState } from "react";

export const SideBar = () => {

    const [hamburgerActive, setHAmburgerActive] = useState(false)

    return(
        <>
            <div className={hamburgerActive ? "side-bar side-bar--active" : "side-bar"}>
                <button className={hamburgerActive ? "hamburger hamburger--active" : "hamburger"}
                onClick={() => setHAmburgerActive(!hamburgerActive)}>
                    <div className="hamburger__box">
                        <div className={"hamburger__line"}></div>
                    </div>
                </button>
            </div>
        </>
    )
}