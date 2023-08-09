import React from 'react';
import {actionType, profilePageType} from './store';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', date: '30.08.2020', likeCount: 5},
        {id: 2, message: 'It\'s my first post', date: '12.06.2018', likeCount: 20}
    ],
    newPostText: ''
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
            let copyState = {...state};
            copyState.posts = [...state.posts]
            copyState.posts.push(newPost)
            copyState.newPostText = '';
            return copyState;
        }
        case UPDATE_NEW_POST_TEXT: {
            let copyState = {...state};
            if (action.newText) {
                copyState.newPostText = action.newText;
            }
            return copyState;
        }
        default:             //если ни одно условие не проходит
            return state;
    }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export default profileReducer;