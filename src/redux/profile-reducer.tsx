import {actionType, profilePageType, UserProfileType} from './store';
import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', date: '30.08.2020', likeCount: 5},
        {id: 2, message: 'It\'s my first post', date: '12.06.2018', likeCount: 20}
    ],
    newPostText: '',
    profile: {
        aboutMe: "я круто чувак 1001%",
        contacts: {
            facebook: "facebook.com",
            website: "jh",
            vk: "vk.com/dimych",
            twitter: "https://twitter.com/@sdf",
            instagram: "instagra.com/sds",
            youtube: "kjh",
            github: "github.com",
            mainLink: "kgi"
        },
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        fullName: "samurai dimych",
        userId: 2,
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    }
}
const profileReducer = (state: profilePageType = initialState, action: actionType) => {

    switch (action.type) {
        case ADD_POST: {
            let date = new Date();
            let newPost = {
                id: 5,
                message: state.newPostText,
                date: date.toLocaleDateString(),
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        }
        case UPDATE_NEW_POST_TEXT: {
            if (action.newText) {
                return {
                    ...state,
                    newPostText: action.newText
                }
            }
            return state
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const setUserProfile = (profile: UserProfileType) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId:string) => (dispatch:any) =>{
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export default profileReducer;