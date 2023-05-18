import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className={s.sidebar}>
            <div className={s.section}>
                <NavLink to="/profile" className={s.link} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.section}>
                <NavLink to="/dialogs" className={s.link} activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.section}>
                <NavLink to="/#" className={s.link}>News</NavLink>
            </div>
            <div className={s.section}>
                <NavLink to="/#" className={s.link}>Music</NavLink>
            </div>
            <div className={s.section}>
                <NavLink to="/#" className={s.link}>Settings</NavLink>
            </div>
        </nav>
    )
}
export default Sidebar;