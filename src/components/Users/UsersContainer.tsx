import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {stateDataType, usersPageType, userType} from "../../redux/store";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state: stateDataType) => {
    return {
        users: state.usersPage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: usersPageType) => {
            dispatch(setUsersAC(users))
        }
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(Users);