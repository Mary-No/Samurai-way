import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemType = {
    name: string
    id: string
}
type MessageType = {
    message: string
}
const DialogItem = (props: DialogItemType) => {
    return (
        <div className={`${s.item}  ${s.active_item}`}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: MessageType) => {
    return (<div className={`${s.my_message}  ${s.message}`}>{props.message}</div>)


}

const Dialogs = () => {
    let dialogsData = [
        {name: 'Dima', id: '1'},
        {name: 'Alex', id: '2'},
        {name: 'Svetlana', id: '3'},
        {name: 'Kate', id: '4'}
    ]
    let messagesData = [
        {message: 'Hi', id: '1'},
        {message: 'how are you?', id: '2'},
        {message: 'what do you do?', id: '3'},
        {message: 'what\'s new?', id: '4'}
    ]
    let dialogNameElement = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElement = messagesData.map(m => <Message message={m.message}/>);
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
                    <textarea className={s.write_message_area} rows={1} cols={12}
                              placeholder="write a message"></textarea>

                    <input className={s.send} type="submit" value="Send"></input>
                </form>

            </div>
        </div>

    )
}
export default Dialogs;