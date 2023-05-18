import React from 'react';
import {actionType, dialogsPageType} from './state';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const dialogsReducer = (state: dialogsPageType, action: actionType) => {
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