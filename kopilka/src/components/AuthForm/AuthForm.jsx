import React from 'react'
import classes from './AuthForm.module.css'

const AuthForm = (props) => {
    return (
        <form className="header__auth">
            <input type="text" className="login"/>
            <input type="text" className="password"/>
            <button>Вход</button>
        </form>
    )
}

export default AuthForm;