import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import { Size } from "../Size";
import { Colors } from "../Colors";
 
const Wrapper = styled.div`
    align-items: center;
    background-image: url("https://pixabay.com/get/g06a5819edf05e358eac39a79e10640f1ad8ce2336561478b499006464152ee8ff68206ffb8ceed1ddd57b60f69df8d3b81c6cabae9b5fbdd4131d7f654fd9d30_1920.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    height: 100vh;
    flex-direction: column;
    width: 100%;
    @media (min-width: ${Size.tablet}){
        align-items: flex-end;
    }
`;

const LoginContainer = styled.div`
    width: 100%;
    background-color: #0000005c;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: ${Size.mobileL}) {
        width: 65%;
        box-shadow: 20px 0 0 200px #0000005c;
    }
    @media (min-width: ${Size.tablet}) {
        width: 45%;
        box-shadow: none;
    }
    @media (min-width: ${Size.laptop}) {
        width: 30%;
    }
`;

const Header = styled.div`
    height: 10vh;
    width: 100%;
    background-color: ${Colors.dark};
    z-index: 1;
    h2{
        font-weight: 300;
        line-height: 10vh;
        padding-left: 10px;
        color: ${Colors.white}
    }
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    border-radius: 5px;
    width: 90%;
    height: 35px;
    outline: none;
    border: none;
    color: ${Colors.dark};
    background-color: ${Colors.outline};
    padding-left: 10px;
    margin-top: 20px;
`;

const GoogleBtn = styled.button`
    border-radius: 5px;
    width: 90%;
    height: 35px;
    outline: none;
    border: none;
    color: ${Colors.dark};
    background-color: ${Colors.outline};
    padding-left: 10px;
    margin-top: 20px;
    line-height: 35px;
    cursor: pointer;
    transition: background-color .5s;
    i{
        color: ${Colors.google};
        font-size: 16px;
        padding-right: 10px;
    }
    :hover{
        background-color: ${Colors.white};
    }
`;

const CreateAccountBtn = styled.button`
    margin-top: 40px;
    height: 25px;
    width: 120px;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: ${Colors.primary};
    color: ${Colors.dark};
    cursor: pointer;
`;

const CancelBtn = styled.button`
    background-color: transparent;
    color: ${Colors.primary};
    font-size: 20px;
    padding: 8px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    position: absolute;
    bottom: 100px;
    background-color: ${Colors.dark};
`;

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

