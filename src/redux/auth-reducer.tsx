import {actionType, authType} from "./store";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_PHOTO = 'SET_AUTH_PHOTO'

let initialState = {
    id: 0,
    email: "",
    login: "",
    isAuth: false,
    authPhoto: ''
}
const authReducer = (state: authType = initialState, action: actionType) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case SET_AUTH_PHOTO: {
            return {
                ...state,
                authPhoto: action.authPhoto
            }
        }
        default:
            return state;
    }
}
export const setAuthUserData = (userId: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {userId, email, login}
})
export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login))
        }
    })
}

export default authReducer