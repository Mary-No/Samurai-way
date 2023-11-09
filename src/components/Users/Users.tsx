import React from 'react';
import s from "./Users.module.css";
import no_avatar from "../../assets/images/no-avatar.jpg";
import {userType} from "../../redux/store";

type UsersFuncPropsType = {
    items: userType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    onPageChanged: (pageNumber:number) => void
}
let Users = (props: UsersFuncPropsType) =>{
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
                        <div className={s.user_info}>
                            <div className={s.avatar}>
                                <img src={u.photos.large !== null ? u.photos.large : no_avatar} alt="avatar"/>
                            </div>
                            <div className={s.text}>
                                <div className={s.name}>{u.name}</div>
                                <div className={s.status}>{u.status}</div>
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