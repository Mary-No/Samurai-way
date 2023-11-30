import React, {FC} from "react";
import Header from "./Header";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";
import {getAuthUserData} from "../../redux/auth-reducer";

type MapStateType = {
    login: string,
    isAuth: boolean
}
type MapDispatchType = {
    getAuthUserData: () => void,
}
export type PropsHeaderType = MapStateType & MapDispatchType

let mapStateToProps = (state: AppStateType) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

class HeaderContainer extends React.Component<PropsHeaderType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

export default compose<FC>(connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {getAuthUserData}), withRouter)(HeaderContainer);