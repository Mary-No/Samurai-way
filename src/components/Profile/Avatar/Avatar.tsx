import React from 'react';
import s from './Avatar.module.css';
import photo from '../../../style/photo.jpg'

type AvatarType = {
    round?: boolean
}
const Avatar = (props: AvatarType) => {
    const avatarClassName = `${s.avatar} ${props.round ? s.round : s.square}`
    return (

        <img className={avatarClassName} alt="avatar"
             src={photo}
        />
    )
}
export default Avatar;
