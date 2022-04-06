import React, {useState} from "react";
import classes from './RegistrationForm.module.css'

const RegistrationForm = (props) => {
    const [typeForm, setTypeForm] = useState('login')

    function changeTypeForm() {
        if(typeForm === "registration"){
            setTypeForm("login")
        }else{
            setTypeForm("registration")
        }
        console.log()
    }

    if (typeForm === "login") {
         return (
            <form className={classes.registrationForm}>
                <input className={classes.login + ' ' + classes.input} type="text" placeholder="Логин"/>
                <input className={classes.password + ' ' + classes.input} type="text" placeholder="Пароль"/>
                <a href="#" onClick={changeTypeForm}>Зарегистрироваться</a>
                <button className={classes.formButton}>Вход</button>
            </form>
        )
    } else {
        return (
            <form className={classes.registrationForm}>
                <input className={classes.login + ' ' + classes.input} type="text" placeholder="Логин"/>
                <input className={classes.password + ' ' + classes.input} type="text" placeholder="Пароль"/>
                <input className={classes.repeatPassword + ' ' + classes.input} type="text"
                       placeholder="Повторный Пароль"/>
                <a href="#" onClick={changeTypeForm}>Есть аккаунт? Войти</a>
                <button className={classes.formButton + ' ' + classes.formButtonRegistration}>Регистрация</button>
            </form>
        )
    }
}

export default RegistrationForm;