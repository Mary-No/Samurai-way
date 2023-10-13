import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img
                className={s.logo}
                alt="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
            />
            <h1>DAROV</h1>
        </header>
    )
}
export default Header;