import React from 'react'
import classes from './AuthForm.module.css'

const AuthForm = (props) => {
    return (
        <form className={classes.header__auth}>
            <div>Логин</div>
            <button>Выход</button>
        </form>
    )
}

export default AuthForm;