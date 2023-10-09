import React from 'react';
import s from './Users.module.css';
import {usersPageType, userType} from "../../redux/store";


type UsersPropsType = {
    users: usersPageType,
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    setUsers: (users: usersPageType) => void
}

const Users = (props: UsersPropsType) => {


    return <div className={s.users}>
        <form className={s.searchForm}>
            <input className={s.entryField} type="text" id="name" placeholder="Search"></input>
            <input className={s.submitBtn} type="submit" value="Find"></input>
        </form>
        {
            props.users.users.map(u =>

                <div className={s.user} key={u.id}>
                    <div className={s.user_info}>
                        <div className={s.avatar}><img src={u.avatar} alt="avatar"/></div>
                        <div className={s.text}>
                            <div className={s.fullname}>{u.name} {u.lastname}</div>
                            <div className={s.age}>
                                {new Date().getFullYear() - Number(u.date.slice(-4))} years
                            </div>
                            <div className={s.location}>{u.location.city}, {u.location.country}</div>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            u.followed ? props.unfollow(u.id) : props.follow(u.id)
                        }}
                        className={`${s.btnFollow}  ${u.followed ? s.followed : s.unfollowed}`}>
                        {u.followed ? "Follow" : "Unfollow"}
                    </button>
                </div>
            )
        }
    </div>
}
export default Users;