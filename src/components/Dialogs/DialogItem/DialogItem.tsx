import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemType = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemType) => {
    return (
        <div className={`${s.item}  ${s.active_item}`}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;