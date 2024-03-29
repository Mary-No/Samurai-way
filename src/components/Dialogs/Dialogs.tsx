import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {dialogsPageType} from '../../redux/store';


type DialogsPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialogsPage: dialogsPageType


}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    let dialogNameElement = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messageElement = state.messages.map(m => <Message key={m.id} message={m.message}/>);
    let newMessageText = state.newMessageText;

    let onNewMessageChange = (body: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = body.target.value;
        props.updateNewMessageBody(newText)
    }
    let onSendMessageClick = () => {
        props.sendMessage();
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