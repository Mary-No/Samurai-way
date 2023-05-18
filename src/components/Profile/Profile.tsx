import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {actionType, profilePageType} from '../../redux/state';


type ProfilePropsType = {
    profilePageState: profilePageType,
    dispatch: (action: actionType) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postData={props.profilePageState.posts}
                     newPostText={props.profilePageState.newPostText}
                     dispatch={props.dispatch}/>

        </div>

    )
}
export default Profile;