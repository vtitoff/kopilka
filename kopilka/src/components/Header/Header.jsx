import React from 'react'
import classes from './Header.module.css'
import AuthForm from "../AuthForm/AuthForm";
import header__logo from "../../images/logo.png";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.header_container}>
                <img className={classes.header__logo} src={header__logo} alt="logo"/>
                <AuthForm/>
            </div>
        </header>
    )
}

export default Header;