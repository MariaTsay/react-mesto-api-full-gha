import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "../images/header__logo.svg"

function Header(props) {
  const {userEmail, onSignOut} = props;
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="лого Место"
      />
      <Routes>
        <Route path="sign-in" element={<Link to="/sign-up" className="header__nav">Регистрация</Link>} />
        <Route path="sign-up" element={<Link to="/sign-in" className="header__nav">Войти</Link>} />
        <Route path="/" element={
        <><p className="header__email">{userEmail}</p><Link to="sign-in" className="header__nav" onClick={onSignOut}>Выйти</Link></>} />
      </Routes>

    </header>
  )
}

export default Header;