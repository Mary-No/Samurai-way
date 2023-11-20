import React, {FC, ReactElement, ReactNode} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";
import {UserProfileType} from "../../redux/store";
import {setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


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
        if(!userId){
            userId='2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

export default compose<FC>(connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {setUserProfile}), withRouter)(ProfileContainer);
// export default connect(mapStateToProps, {setUserProfile}) ProfileContainer;