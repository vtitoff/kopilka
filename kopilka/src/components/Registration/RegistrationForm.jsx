import React, {useEffect, useState} from "react";
import classes from './RegistrationForm.module.css'

const RegistrationForm = (props) => {
    const [typeForm, setTypeForm] = useState('login')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [res, setRes] = useState(false)

    function changeTypeForm() {
        if (typeForm === "registration") {
            setTypeForm("login")
        } else {
            setTypeForm("registration")
        }
    }

    function changeLogin(e) {
        e.preventDefault()
        setLogin(e.target.value);
    }

    function changePassword(e) {
        e.preventDefault()
        setPassword(e.target.value);
    }

    function loginAuth() {
        // TODO ходить в ручку /users/user/:id и при получении данных записывать в хранилище инфо о логине
        localStorage.setItem('username', login);
        setRes(!res)
    }

    function registration() {
        return undefined
    }

    useEffect(()=>{
        fetch('http://localhost:5000/items')
            .then(response => {
                let result = response.json()
                console.log(result)
            })
    }, [res])

    if (typeForm === "login") {
        return (
            <form className={classes.registrationForm}>
                <input className={classes.login + ' ' + classes.input} type="text" placeholder="Логин"
                       onChange={changeLogin}/>
                <input className={classes.password + ' ' + classes.input} type="password" placeholder="Пароль"
                       onChange={changePassword}/>
                <a href="#" onClick={changeTypeForm}>Зарегистрироваться</a>
                <button className={classes.formButton} onClick={loginAuth}>Вход</button>
            </form>
        )
    } else {
        return (
            <form className={classes.registrationForm}>
                <input className={classes.login + ' ' + classes.input} type="text" placeholder="Логин"/>
                <input className={classes.password + ' ' + classes.input} type="password" placeholder="Пароль"/>
                <input className={classes.repeatPassword + ' ' + classes.input} type="password"
                       placeholder="Повторный Пароль"/>
                <a href="#" onClick={changeTypeForm}>Есть аккаунт? Войти</a>
                <button className={classes.formButton + ' ' + classes.formButtonRegistration}>Регистрация</button>
            </form>
        )
    }
}

export default RegistrationForm;