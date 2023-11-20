import s from './ProfileInfo.module.css';
import React from 'react';
import Avatar from '../Avatar/Avatar';
import {UserProfileType} from "../../../redux/store";
import Preloader from "../../Users/Preloader";

type ProfileInfoPropsType = {
    profile: UserProfileType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (

        <div className={s.info}>
            <img className={s.contentImg} alt="content_img"
                 src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"
            />
            <div className={s.personal_info}>
                <Avatar img={props.profile.photos.small}/>
                <div className={s.descript}>
                    <p className={s.descriptName}>Bars</p>
                    <p>Date of Birth: 2 january</p>
                    <p>City: Minsk</p>
                    <p>Education: BSU</p>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;
