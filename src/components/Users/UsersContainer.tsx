import {connect} from "react-redux";
import {userType} from "../../redux/store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import React, {Component, FC} from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "./Preloader";
import {getUsers} from "../../api/api";


type MapStateType = {
    items: userType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

type MapDispatchType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (items: userType[]) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type PropsUserType = MapStateType & MapDispatchType

let mapStateToProps = (state: AppStateType) => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

class UsersContainer extends Component<PropsUserType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                items={this.props.items}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
            />
        </>
    }


}

export default compose<FC>(connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching}))(UsersContainer);