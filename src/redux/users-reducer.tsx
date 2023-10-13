import {actionType, usersPageType, userType} from './store';


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    items: []
}


const usersReducer = (state: usersPageType = initialState, action: actionType) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, items: state.items.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state, items: state.items.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            if (action.items) {
                return {...state, items: [...state.items, ...action.items]}
            }
            return state;
        }

        default:
            return state;
    }

}
export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (items: userType[]) => ({type: SET_USERS, items})
export default usersReducer;