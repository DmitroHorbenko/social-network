import React from "react";
// import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add</button>
            </div>
            <div className='posts'>
                {props.posts.map((p) => <Post message = {p.message} liksCount = {p.liksCount}/>)}
            </div>
        </div>
    );

}

export default MyPosts;