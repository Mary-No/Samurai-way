import React from 'react';
import s from './Message.module.css'


type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (<div className={`${s.my_message}  ${s.message}`}>{props.message}</div>)

}
export default Message;