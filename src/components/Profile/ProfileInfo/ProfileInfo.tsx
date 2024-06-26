import s from './ProfileInfo.module.css';
import React from 'react';
import Avatar from '../Avatar/Avatar';
import {UserProfileType} from "../../../redux/store";
import Preloader from "../../Users/Preloader";
import github from "../../../assets/images/contacts/gh.png"
import facebook from "../../../assets/images/contacts/fb.png"
import vk from "../../../assets/images/contacts/vk.png"
import ProfileStatus from "../ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (

        <div className={s.info}>

            <div className={s.personal_info}>
                <Avatar img={props.profile.photos.large}/>
                <div className={s.descript}>
                    <p className={s.descriptName}>{props.profile.fullName}</p>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
            <div className={s.contacts}>
                <p className={s.contacts_item}>
                    <a className={s.contacts_item_link} href={`https://${props.profile.contacts.github}`}>
                        <img className={s.contacts_item_img} src={github} alt="github"/></a>
                </p>
                <p className={s.contacts_item}>
                    <a className={s.contacts_item_link} href={`https://${props.profile.contacts.facebook}`}>
                        <img className={s.contacts_item_img} src={facebook} alt="facebook"/></a></p>
                <p className={s.contacts_item}>
                    <a className={s.contacts_item_link} href={`https://${props.profile.contacts.vk}`}>
                        <img className={s.contacts_item_img} src={vk} alt="vk"/></a></p>
            </div>
        </div>
    )
}
export default ProfileInfo;
