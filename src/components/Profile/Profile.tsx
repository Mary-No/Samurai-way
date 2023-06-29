import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {storeType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {StoreAppType} from "../../redux/redux-store";


type ProfilePropsType = {
    store: StoreAppType
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>

        </div>

    )
}
export default Profile;