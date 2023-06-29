import React, {ChangeEvent} from 'react';
import Dialogs from "../Dialogs";
import StoreContext from "../../../StoreContext";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../redux/dialogs-reducer";


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {store => {

            if (!store) return

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }

            let onNewMessageChange = (newText: string) => {
                store.dispatch(updateNewMessageTextCreator(newText))
            }
            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={store.getState().dialogsPage}/>

        }
        }
    </StoreContext.Consumer>
}
export default DialogsContainer