import React, {Component} from 'react';
import s from "./Users.module.css";
import no_avatar from "../../assets/images/no-avatar.jpg";
import axios from "axios";
import {PropsUserType} from "./UsersContainer";


class Users extends Component<PropsUserType> {

    getUsers = () => {
        if (this.props.items.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }

    render() {
        return <div className={s.users}>
            <button onClick={this.getUsers}>Get Users</button>
            <form className={s.searchForm}>
                <input className={s.entryField} type="text" id="name" placeholder="Search"></input>
                <input className={s.submitBtn} type="submit" value="Find"></input>
            </form>
            {
                this.props.items.map(u =>
                    <div className={s.user} key={u.id}>
                        <div className={s.user_info}>
                            <div className={s.avatar}><img src={u.photos.large !== null ? u.photos.large : no_avatar}
                                                           alt="avatar"/></div>
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