import React, {FC} from 'react';
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";
import {UserProfileType} from "../../redux/store";
import {getUserProfile, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


type MapStateType = {
    profile: UserProfileType

}
type MapDispatchType = {
    setUserProfile: (profile: UserProfileType) => void,
}
export type PropsProfileUserType = MapStateType & MapDispatchType
type ParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<ParamsType> & PropsProfileUserType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        getUserProfile(userId)
    }

    render() {

        return (
            <Profile profile={this.props.profile}/>
        )
    }

}


let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose<any, any,any,any>(connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {setUserProfile}), withRouter, WithAuthRedirect)(ProfileContainer);