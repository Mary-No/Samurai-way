import React from "react";
import s from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <nav className={s.sidebar}>
            <div className={s.section_active}>
                <NavLink to="/profile" className={s.link}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={s.link}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/#" className={s.link}>News</NavLink>
            </div>
            <div>
                <NavLink to="/#" className={s.link}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/#" className={s.link}>Settings</NavLink>
            </div>
        </nav>
    )
}
export default Sidebar;