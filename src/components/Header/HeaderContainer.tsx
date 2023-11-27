import React, {FC} from "react";
import Header from "./Header";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";
import axios from "axios";
import {setAuthPhoto, setAuthUserData} from "../../redux/auth-reducer";

type MapStateType = {
    login: string,
    isAuth: boolean,
    authPhoto: string
}
type MapDispatchType = {
    setAuthUserData: (id: number, email: string, login: string) => void,
    setAuthPhoto: (authPhoto: string) => void
}
export type PropsHeaderType = MapStateType & MapDispatchType

let mapStateToProps = (state: AppStateType) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        authPhoto: state.auth.authPhoto
    }
}

class HeaderContainer extends React.Component<PropsHeaderType> {

    async componentDidMount() {
        let authId;

         await axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                this.props.setAuthUserData(id, email, login)
                authId = response.data.data.id
            }

        })

        if (this.props.isAuth) {
            await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${authId}`, {withCredentials: true}).then(response => {
                this.props.setAuthPhoto(response.data.lookingForAJobDescription)
            })
        }

    }

    render() {

        return <Header {...this.props}/>
    }
}

export default compose<FC>(connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {setAuthUserData, setAuthPhoto}), withRouter)(HeaderContainer);