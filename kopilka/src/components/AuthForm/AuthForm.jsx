import React from 'react'
import classes from './AuthForm.module.css'

const AuthForm = (props) => {
    return (
        <form className={classes.header__auth}>
            <input type="text" className="login" placeholder="логин"/>
            <input type="text" className="password" placeholder="пароль"/>
            <button>Вход</button>
        </form>
    )
}

export default AuthForm;