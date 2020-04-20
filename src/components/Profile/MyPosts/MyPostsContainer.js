import React from "react";
// import s from './MyPosts.module.css'
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

const MyPostsContiner = () => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let onPostChange = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text))
                    }
                    return <MyPosts addPost={addPost} updateNewPostText={onPostChange}
                                    posts={state.profilePage.posts}
                                    newPostText={state.profilePage.newPostText} />
                }
            }
        </StoreContext.Consumer>
    );

}

export default MyPostsContiner;
