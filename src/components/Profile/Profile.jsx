import React from "react";
import s from './Profile.module.css'
import MyPostsContiner from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    debugger
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPostsContiner/>
    </div>
}

export default Profile;
