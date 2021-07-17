import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
    return(
        <div className="login-wrapper">
            <div className="login-header"><h2>Log in to your account</h2></div>
            <div className="login-container">
                <form className="login-form"> 
                    <input className="login-input" placeholder="e-mail" type="text"/>
                    <input className="login-input" placeholder="password" type="password"/>
                    <button className="google-btn"><i className="fab fa-google"></i>Continue with Google</button>
                    <button className="main-btn login"><Link to="./home">Log in</Link></button>
                </form>
                <button  className="forgotten-password-btn">Forgot password?</button>
                <button className="create-account-btn"><Link to="./create-account">Create new account</Link></button>
            </div>
        </div>
    )
} 