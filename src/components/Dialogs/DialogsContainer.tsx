import React, {ChangeEvent} from 'react';
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {actionType, stateDataType} from "../../redux/store";
import {StoreAppType} from "../../redux/redux-store";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

//
// let mapStateToProps = (state: stateDataType) => {
//     return {
//         dialogsPage: state.dialogsPage
//
//     }
// }
// let mapDispatchToProps = (dispatch:(action?: actionType) => void) => {
//     return {
//         updateNewMessageBody: (newText:string) => {
//             dispatch(updateNewMessageTextCreator(newText))
//         },
//         sendMessage: () => {
//             dispatch(sendMessageCreator())
//         },
//     }
// }
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
// export default DialogsContainer;


type DialogsContainerType = {
    store: StoreAppType

}
const DialogsContainer = (props:DialogsContainerType) =>{
    let state = props.store.getState().dialogsPage


    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageTextCreator(body))
    }
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    return (<Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>)

}
export default DialogsContainer