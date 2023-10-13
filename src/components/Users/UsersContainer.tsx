import Users from "./Users";
import {connect} from "react-redux";
import {userType} from "../../redux/store";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {FC} from "react";


type MapStateType = {
    items: userType[]
}

type MapDispatchType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (items: userType[]) => void
}

export type PropsUserType = MapStateType & MapDispatchType

let mapStateToProps = (state: AppStateType) => {
    return {
        items: state.usersPage.items
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (items: userType[]) => {
            dispatch(setUsersAC(items))
        }
    }


}

export default compose<FC>(connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, mapDispatchToProps))(Users);