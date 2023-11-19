import React, {FC} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";
import {UserProfileType} from "../../redux/store";
import {setUserProfile} from "../../redux/profile-reducer";



type MapStateType = {
    profile: UserProfileType
}
type MapDispatchType = {
    setUserProfile: (profile: UserProfileType) => void,
}
export type PropsProfileUserType = MapStateType & MapDispatchType



class ProfileContainer extends React.Component<PropsProfileUserType>{

        componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }
    render(){
        return (
            <Profile {...this.props} profile={this.props.profile}/>

        )
    }

}

let mapStateToProps = (state: AppStateType) => {
    return{
        profile: state.profilePage.profile
    }
}

export default compose<FC>(connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {setUserProfile}))(ProfileContainer);
// export default connect(mapStateToProps, {setUserProfile}) ProfileContainer;