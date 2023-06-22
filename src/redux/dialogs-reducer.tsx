// import React from 'react';
import {actionType, dialogsPageType} from './store';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
    dialogs: [
        {name: 'Dima', id: 1},
        {name: 'Alex', id: 2},
        {name: 'Svetlana', id: 3},
        {name: 'Kate', id: 4}
    ],
    messages: [
        {message: 'Hi', id: 1},
        {message: 'how are you?', id: 2},
        {message: 'what do you do?', id: 3},
        {message: 'what\'s new?', id: 4}
    ],
    newMessageText: ''

}
const dialogsReducer = (state: dialogsPageType = initialState, action: actionType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            if (action.newTextMessage) {
                state.newMessageText = action.newTextMessage;
            }
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                message: state.newMessageText,
                id: 123
            }
            state.messages = [...state.messages, newMessage];
            state.newMessageText = '';
            return state;
        default:             //если ни одно условие не проходит
            return state;
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newTextMessage: text
})
export default dialogsReducer;