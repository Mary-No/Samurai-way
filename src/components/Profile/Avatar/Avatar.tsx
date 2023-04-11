import React from 'react';
import s from './Avatar.module.css';

type AvatarType = {
    round?: boolean
}
const Avatar = (props: AvatarType) => {
    const avatarClassName = `${s.avatar} ${props.round ? s.round : s.square}`
    return (

        <img className={avatarClassName} alt="avatar"
             src="https://kor.ill.in.ua/m/610x385/2722809.jpg"
        />
    )
}
export default Avatar;
