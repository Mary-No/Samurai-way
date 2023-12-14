import React from 'react';
import s from './Avatar.module.css';

type AvatarType = {
    round?: boolean,
    img: string
}
const Avatar = (props: AvatarType) => {
    const avatarClassName = `${s.avatar} ${props.round ? s.round : s.square}`
    return (
        <img className={avatarClassName} alt="avatar"
             src={props.img}
        />
    )
}
export default Avatar;
