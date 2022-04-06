import React from 'react'
import classes from './AuthForm.module.css'

const AuthForm = (props) => {
    return (
        <form className={classes.header__auth}>
            <div className={classes.login}>Логин</div>
            <button className={classes.exit__btn}>Выход</button>
        </form>
    )
}

export default AuthForm;