import {actionType, usersPageType, userType} from './store';
import {usersAPI} from "../api/api";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    items: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [1, 2]
}


const usersReducer = (state: usersPageType = initialState, action: actionType): usersPageType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, items: state.items.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state, items: state.items.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
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

            return {...state, totalUsersCount: action?.totalUsersCount ?? state.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action?.isFetching ?? state.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }

}
export const followSuccess = (userId: number) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsers = (items: userType[]) => ({type: SET_USERS, items})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
}) as const

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setCurrentPage(currentPage))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
}
export const follow = (userId: number) => (dispatch: any) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    usersAPI.followUser(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        })
}
export const unfollow = (userId: number) => (dispatch: any) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    usersAPI.unfollowUser(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        })
}


export default usersReducer;