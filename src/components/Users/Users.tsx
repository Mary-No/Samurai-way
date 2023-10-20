import React, {Component} from 'react';
import s from "./Users.module.css";
import no_avatar from "../../assets/images/no-avatar.jpg";
import axios from "axios";
import {PropsUserType} from "./UsersContainer";


class Users extends Component<PropsUserType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
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
                    return <button key={p} onClick={() => this.onPageChanged(p)}
                                   className={`${s.btnPagination}  ${this.props.currentPage === p ? s.paginationSelected : ""}`}>{p}</button>
                })}
            </div>
            {
                this.props.items.map(u =>
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
                                u.followed ? this.props.unfollow(u.id) : this.props.follow(u.id)
                            }}
                            className={`${s.btnFollow}  ${u.followed ? s.followed : s.unfollowed}`}>
                            {u.followed ? "Follow" : "Unfollow"}
                        </button>
                    </div>
                )
            }
        </div>
    }


}

export default Users;