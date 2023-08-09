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
        case UPDATE_NEW_MESSAGE_TEXT: {
            let copyState = {...state}
            if (action.newTextMessage) {
                copyState.newMessageText = action.newTextMessage;
            }
            return copyState;
        }
        case SEND_MESSAGE: {
            let copyState = {...state}
            let newMessage = {
                message: copyState.newMessageText,
                id: 123
            }
            copyState.messages = [...copyState.messages, newMessage];
            copyState.newMessageText = '';
            return copyState;
        }
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