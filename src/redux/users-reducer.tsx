import {actionType, usersPageType, userType} from './store';


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT ='SET_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    items: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}


const usersReducer = (state: usersPageType = initialState, action: actionType): usersPageType => {
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
                return {...state, items: action.items}
            }
            return state;
        }
        case SET_CURRENT_PAGE: {
            if (action.currentPage) {
                return {...state, currentPage: action.currentPage}
            }
            return state;
        }
        case SET_USERS_COUNT: {

            return {...state, totalUsersCount: action?.totalUsersCount ?? state.totalUsersCount }
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action?.isFetching ?? state.isFetching}
        }

        default:
            return state;
    }

}
export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (items: userType[]) => ({type: SET_USERS, items})
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: SET_USERS_COUNT, totalUsersCount})
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})



export default usersReducer;