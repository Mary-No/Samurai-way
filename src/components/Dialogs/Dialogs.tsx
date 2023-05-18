import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {actionType, dialogsPageType} from '../../redux/state';
import {sendMessageCreator, updateNewMessageTextCreator} from '../../redux/dialogs-reducer';


type DialogsPropsType = {
    dialogsPageState: dialogsPageType,
    dispatch: (action: actionType) => void

}

const Dialogs = (props: DialogsPropsType) => {

    let dialogNameElement = props.dialogsPageState.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElement = props.dialogsPageState.messages.map(m => <Message message={m.message}/>);
    let newMessageText = props.dialogsPageState.newMessageText;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.target.value;
        props.dispatch(updateNewMessageTextCreator(newText))
    }

    return (

        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogNameElement}
            </div>
            <div className={s.messages}>
                <div className={s.message_display}>
                    {messageElement}
                    <div className={`${s.other_message}  ${s.message}`}>hi! i'm fine</div>
                </div>
                <form className={s.write_message}>
                    <textarea className={s.write_message_area}
                              onChange={onNewMessageChange}
                              value={newMessageText}
                              rows={1} cols={12}
                              placeholder="Write your message"></textarea>

                    <input className={s.send} type="button" onClick={onSendMessageClick} value="Send"></input>
                </form>

            </div>
        </div>

    )
}
export default Dialogs;