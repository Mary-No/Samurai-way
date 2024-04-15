import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import loginPerson from './../../assets/images/login-person.svg'
import logo from './../../assets/images/Android_Oreo_logo.png'

type HeaderPropsType = {
    login: string
    isAuth: boolean
}
const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <div className={s.header_logo}>
                <img
                    className={s.logo}
                    alt="logo"
                    src={logo}
                />
                <h1>DAROV</h1>
            </div>
            <div className={s.header_login}>
                {props.isAuth ?
                    <div className={s.header_login_auth}>
                        <p>{props.login}</p>
                    </div>
                    :
                    <NavLink className={s.header_login_unauth} to={'/login'}>
                        <p>Login</p>
                        <img className={s.login_unauth_img} src={loginPerson} alt="loginPerson"/>
                    </NavLink>
                }

            </div>
        </header>
    )
}
export default Header;