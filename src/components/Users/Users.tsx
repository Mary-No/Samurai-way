import React from 'react';
import s from "./Users.module.css";
import no_avatar from "../../assets/images/no-avatar.jpg";
import {userType} from "../../redux/store";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersFuncPropsType = {
    items: userType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    onPageChanged: (pageNumber: number) => void
}
let Users = (props: UsersFuncPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={s.users}>
        <form className={s.searchForm}>
            <input className={s.entryField} type="text" id="name" placeholder="Search"></input>
            <input className={s.submitBtn} type="submit" value="Find"></input>
        </form>
        <div className={s.pagination}>
            {pages.map(p => {
                return <button key={p} onClick={() => props.onPageChanged(p)}
                               className={`${s.btnPagination}  ${props.currentPage === p ? s.paginationSelected : ""}`}>{p}</button>
            })}
        </div>
        {
            props.items.map(u =>
                <div className={s.user} key={u.id}>
                    <NavLink to={`/profile/${u.id}`}>
                        <div className={s.user_info}>
                            <div className={s.avatar}>
                                <img src={u.photos.large !== null ? u.photos.large : no_avatar} alt="avatar"/>
                            </div>
                            <div className={s.text}>
                                <div className={s.name}>{u.name}</div>
                                <div className={s.status}>{u.status}</div>
                            </div>
                        </div>
                    </NavLink>
                    {
                        u.followed ?
                            <button className={`${s.btnFollow}  ${s.unfollowed}`} onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': "234c9bba-18f8-4dd2-860f-665d9f96e11c"
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                });

                            }}>Unfollow</button> :
                            <button className={`${s.btnFollow}  ${s.followed}`} onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': "234c9bba-18f8-4dd2-860f-665d9f96e11c"
                                    }

                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                });

                            }}>Follow</button>


                    }
                </div>
            )
        }
    </div>
}

export default Users;