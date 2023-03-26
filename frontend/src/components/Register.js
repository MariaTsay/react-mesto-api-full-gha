import React, {useCallback, useState} from "react";
import { Link } from "react-router-dom";

const Register = (props) => {
    const {onSubmit} = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const authForm = {
            email,
            password
        }

        onSubmit(authForm);
    }, [email, password, onSubmit])
    
    return(
        <form className="authorization__form" onSubmit={handleSubmit} >
            <h2 className="authorization__title">Регистрация</h2>
            <input 
            className="authorization__input" 
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            >
            </input>
            <input 
            className="authorization__input" 
            type="password"
            name="password"
            id="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            >
            </input>
            <button 
            className="authorization__submit" 
            type="submit"
            >Зарегистрироваться</button>
            <p className="authorization_login">Уже зарегистрированы?<Link to="/sign-in" className="authorization_login-link"> Войти</Link></p>
        </form>
    )
}

export default Register;