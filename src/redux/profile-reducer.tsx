import React from 'react';
import {actionType, profilePageType} from './state';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const profileReducer = (state: profilePageType, action: actionType) => {

    switch (action.type) {
        case ADD_POST:
            let date = new Date();
            let newPost = {
                id: 5,
                message: state.newPostText,
                date: date.toLocaleDateString(),
                likeCount: 0
            }
            state.posts = [newPost, ...state.posts];
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            if (action.newText) {
                state.newPostText = action.newText;
            }
            return state;
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