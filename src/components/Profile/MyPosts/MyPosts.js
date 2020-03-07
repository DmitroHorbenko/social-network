import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add</button>
            </div>
            <div className='posts'>
                <Post messages = 'Hi, how are you?' liksCounter = '5'/>
                <Post messages = "It's my first post" liksCounter = '44'/>
            </div>
        </div>
    );

}

export default MyPosts;