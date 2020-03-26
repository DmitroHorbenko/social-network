import React from "react";
// import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePost(text)
    }
    
    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <button onClick={ addPost } >Add</button>
            </div>
            <div className='posts'>
                {props.posts.map((p) => <Post message = {p.message} liksCount = {p.liksCount}/>)}
            </div>
        </div>
    );

}

export default MyPosts;