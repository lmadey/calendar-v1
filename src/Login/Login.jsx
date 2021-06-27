import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../Colors";
import { Size } from "../Size"

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("https://pixabay.com/get/g06a5819edf05e358eac39a79e10640f1ad8ce2336561478b499006464152ee8ff68206ffb8ceed1ddd57b60f69df8d3b81c6cabae9b5fbdd4131d7f654fd9d30_1920.jpg");
    /* background-size: auto; */
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
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

const LogInBtn = styled.button`
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

const ForgottenPasswordBtn = styled.button`
    padding: 5px;
    color: ${Colors.primary};
    font-weight: 500;
    margin-top: 20px;
    font-size: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const CreateNewAccountBtn = styled.button`
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


export const Login = () => {
    const [isCreateNewAccount, setIsCreateNewAccount] = useState(false);

    const handleCreateNewAccount = () => setIsCreateNewAccount(true);
    const handleCancelBtn = () => setIsCreateNewAccount(false);
    return(
        <Wrapper>
            <Header><h2>{isCreateNewAccount ? "Create new account" : "Log in  to your account"}</h2></Header>
            {!isCreateNewAccount && <LoginContainer>
            <Form>
                <Input placeholder="e-mail" type="text"/>
                <Input placeholder="password" type="password"/>
                <GoogleBtn><i className="fab fa-google"></i>Continue with Google</GoogleBtn>
                <LogInBtn>Log in</LogInBtn>
            </Form>
            <ForgottenPasswordBtn>Forgot password?</ForgottenPasswordBtn>
            <CreateNewAccountBtn onClick={handleCreateNewAccount}>Create new account</CreateNewAccountBtn>
            </LoginContainer>}
            {isCreateNewAccount && <LoginContainer>
            <Form>
                <Input placeholder="user name" type="text"/>
                <Input placeholder="e-mail" type="text"/>
                <Input placeholder="password" type="password"/>
                <GoogleBtn><i className="fab fa-google"></i>Create account with Google</GoogleBtn>
                <LogInBtn>Create account</LogInBtn>
            </Form>
                <CreateNewAccountBtn onClick={handleCancelBtn}>cancel</CreateNewAccountBtn>
            </LoginContainer>}
        </Wrapper>
    )
} 