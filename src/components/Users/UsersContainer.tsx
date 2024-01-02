import {userType} from "../../redux/store";
import {
    follow,
    getUsersThunkCreator,
    setCurrentPage,
    unfollow
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React, {Component, FC} from "react";
import Users from "./Users";
import Preloader from "./Preloader";
import {compose} from "redux";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


type MapStateType = {
    items: userType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

type MapDispatchType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setCurrentPage: (currentPage: number) => void,
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}

export type PropsUserType = MapStateType & MapDispatchType

let mapStateToProps = (state: AppStateType) => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

class UsersContainer extends Component<PropsUserType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
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
                followingInProgress = {this.props.followingInProgress}
            />
        </>
    }


}


export default compose<FC>(connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsersThunkCreator
}), WithAuthRedirect) (UsersContainer);