import React from "react";
import { Link } from "react-router-dom"
 
export const CreateAccount = () => {
    return(
        <div className="login-wrapper">
            <div className="login-header"><h2>Create new account</h2></div>
            <div className="login-container">
                <form className="login-form"> 
                    <input className="login-input" placeholder="user name" type="text"/>
                    <input className="login-input" placeholder="e-mail" type="text"/>
                    <input className="login-input" placeholder="password" type="password"/>
                    <button className="google-btn"><i className="fab fa-google"></i>Create account with Google</button>
                    <button className="login-btn">Create account</button>
                </form>
                <button className="create-account-btn"><Link to="./login">cancel</Link></button>
            </div>
        </div>
    )
}

